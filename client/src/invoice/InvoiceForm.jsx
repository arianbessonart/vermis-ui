import React from 'react'
import { connect } from 'react-redux'
import {TextField, FlatButton} from 'material-ui'

import ClientSelector from '../client/ClientSelector'
import InvoiceItemTable from './components/InvoiceItemTable'

import {getAllClients, getSelectedClient} from '../selectors/client'
import {getNewInvoice} from '../selectors/invoice'
import {fetchClientsAction} from '../actions/client'

class InvoiceForm extends React.Component {

  state = {referenceInputError: null, invoiceNumberInputError: null};

  componentDidMount() {
    this.props.fetchClients();
  }

  render() {
    let {clients, invoice, clientSelected } = this.props;
    return (
      <div>
        <ClientSelector selected={invoice ? invoice.client : null} clients={clients} />
        <TextField
          disabled={true}
          floatingLabelText="RUT"
          value={clientSelected.rut}
        />
        <TextField
          disabled={true}
          floatingLabelText="Address"
          value={clientSelected.address}
        />
        <TextField
          disabled={true}
          floatingLabelText="Total"
          value={invoice.total}
        />
        <InvoiceItemTable />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClients: () => {
      dispatch(fetchClientsAction())
    }
  }
};

const mapStateToProps = (state) => {
  return {
    clients: getAllClients(state),
    clientSelected: getSelectedClient(state),
    invoice: getNewInvoice(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceForm);
