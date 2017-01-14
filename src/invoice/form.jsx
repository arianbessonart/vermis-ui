import React from 'react'
import { connect } from 'react-redux'

import DatePicker from 'material-ui/DatePicker'
import ClientSelector  from '../shared/components/ClientSelector'

import { fetchClientsAction } from '../actions/client'
import { getAllClients } from '../selectors/client'

class InvoiceForm extends React.Component {

  componentDidMount() {
    this.props.fetchClients();
  }

  render() {
    let {clients} = this.props;
    return (
      <div>
        <ClientSelector clients={clients} onSelect={clientSelected} />
        <DatePicker hintText="Select a date" container="inline" mode="landscape" autoOk={true} onChange={handleCreateDate} />
      </div>
    );
  }
};

const handleCreateDate = (e, date) => {
  console.log(date);
};

const clientSelected = (client) => {
  console.log(client);
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClients: () => {
      dispatch(fetchClientsAction())
    }
  }
};

// Using selector
const mapStateToProps = (state) => {
  return {
    clients: getAllClients(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceForm);
