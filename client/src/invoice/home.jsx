import React from 'react'
import { connect } from 'react-redux'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router'

import {getAll} from '../selectors/invoice';
import {fetchInvoicesAction} from '../actions/invoice';

import InvoiceList from './components/invoiceList'

class InvoiceHome extends React.Component {

  componentDidMount() {
    this.props.fetchInvoices();
  }

  render() {

    const style = {
      marginRight: 20,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed'
    };

    let {invoices} = this.props;
    return (
      <div>
        <InvoiceList invoices={invoices} />
        <Link to={`/invoices/new`}>
          <FloatingActionButton style={style}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
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
