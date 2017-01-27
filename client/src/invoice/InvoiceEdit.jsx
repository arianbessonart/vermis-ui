import React from 'react'
import { connect } from 'react-redux'

import {getSelected} from '../selectors/invoice';
import {fetchInvoiceAction} from '../actions/invoice';

import InvoiceForm from './InvoiceForm';

class InvoiceCreate extends React.Component {


  componentDidMount() {
    this.props.fetchInvoice(this.props.params.id);
  }

  render() {
    let {invoice} = this.props;
    return (
      <div>
        <InvoiceForm invoice={invoice} isEditing={true} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInvoice: () => {
      dispatch(fetchInvoiceAction())
    }
  }
};

// Using selector
const mapStateToProps = (state) => {
  return {
    invoice: getSelected(state),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceCreate);
