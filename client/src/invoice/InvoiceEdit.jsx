import React from 'react'
import { connect } from 'react-redux'

import {getSelected} from '../selectors/invoice';
import {fetchInvoiceAction} from '../actions/invoice';

import InvoiceForm from './InvoiceForm';

class InvoiceCreate extends React.Component {


  componentDidMount() {
    this.props.fetchInvoice(this.props.params.invoiceId);
  }

  render() {
    return (
      <div>
        <InvoiceForm isEditing={true} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoice: (id) => {
      dispatch(fetchInvoiceAction(id))
    }
  }
};

const mapStateToProps = (state) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceCreate);
