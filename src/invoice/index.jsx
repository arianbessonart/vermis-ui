import React from 'react'
import { connect } from 'react-redux'

import {getAll} from '../selectors/invoice';
import {fetchInvoicesAction} from '../actions/invoice';

import InvoiceList from './components/invoiceList'

class InvoiceHome extends React.Component {

  componentDidMount() {
    this.props.fetchInvoices();
  }

  render() {

    let {invoices} = this.props;

    return (
      <div>
        <InvoiceList invoices={invoices} />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoices: () => {
      dispatch(fetchInvoicesAction())
    }
  }
};

// Using selector
const mapStateToProps = (state) => {
  return {
    invoices: getAll(state),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceHome);
