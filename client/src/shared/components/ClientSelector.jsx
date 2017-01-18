import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


class ClientSelector extends React.Component {

  state = { itemSelected: null};

  constructor() {
    super();
  }

  onSelectedItem = (event, index) => {
    let client = this.props.clients[index];
    this.setState({itemSelected: client._id});
    this.props.onSelect(client);
  };

  render() {
    let clientsOption = this.props.clients.map((val, index) => { return (<MenuItem key={index} value={val._id} primaryText={val.name}/>)});

    return (
      <SelectField floatingLabelText="Select a Client" value={this.state.itemSelected} onChange={this.onSelectedItem}>
        {clientsOption}
      </SelectField>
    );
  }
};

export default ClientSelector;
