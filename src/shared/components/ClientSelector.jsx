import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


class ClientSelector extends React.Component {

  constructor() {
    super();
    this.state = { itemSelected: null};
  }

  onSelectedItem = (event, value) => {
    let client = this.props.clients[value];
    this.setState({itemSelected: client.id})
    this.props.onSelect(client);
  };

  render() {
    let clientsOption = this.props.clients.map((val, index) => { return (<MenuItem key={index} value={val.id} primaryText={val.name}/>)});
    let { itemSelected } = this.state;



    return (
      <SelectField floatingLabelText="Select a Client" value={itemSelected} onChange={this.onSelectedItem}>
        {clientsOption}
      </SelectField>
    );
  }
};

export default ClientSelector;
