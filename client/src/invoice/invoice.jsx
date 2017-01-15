import React from 'react'
import { connect } from 'react-redux'

import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import ClientSelector  from '../shared/components/ClientSelector'

import { fetchClientsAction } from '../actions/client'
import { getAllClients } from '../selectors/client'

import InvoiceForm from './form'

class InvoicePage extends React.Component {

  state = {referenceInputError: null, invoiceNumberInputError: null};

  componentDidMount() {
    this.props.fetchClients();
  }

  render() {
    let {invoice} = this.props;
    return (
      <div>
        <InvoiceForm invoice={invoice} onCreate={handleCreate} onEdit={handleEdit} />
      </div>
    );
  }
};

const handleEdit = () => {

};

const handleCreate = () => {

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
    clients: getAllClients(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoicePage);
