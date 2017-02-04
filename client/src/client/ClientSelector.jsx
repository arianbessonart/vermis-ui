import React from 'react'
import { connect } from 'react-redux'

import {SelectField, MenuItem} from 'material-ui';

import {getAllClients, getSelectedClient} from '../selectors/client'
import {fetchClientsAction, selectClientAction} from '../actions/client'

class ClientSelector extends React.Component {

  componentDidMount() {
    this.props.fetchClients();
  }

  onSelectedItem = (event, index) => {
    let client = this.props.clients[index];
    this.props.selectClient(client._id);
    if (this.props.onSelected) {
      this.props.onSelected(client._id);
    }
  };

  render() {
    let {clients, selected} = this.props;
    let clientsOption = clients.map((val, index) => { return (<MenuItem key={val._id} value={val._id} primaryText={val.name}/>)});
    return (
      <SelectField floatingLabelText="Select a Client" value={selected._id} onChange={this.onSelectedItem}>
        {clientsOption}
      </SelectField>
    );
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchClients: () => {
      dispatch(fetchClientsAction())
    },
    selectClient: (id) => {
      dispatch(selectClientAction(id))
    }
  }
};

const mapStateToProps = (state) => {
  return {
    clients: getAllClients(state),
    selected: getSelectedClient(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientSelector);
