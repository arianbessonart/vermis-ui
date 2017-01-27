import React from 'react'
import { connect } from 'react-redux'

import InvoiceForm from './InvoiceForm';

class InvoiceCreate extends React.Component {

  render() {
    return (
      <div>
        <InvoiceForm />
      </div>
    );
  }
}

export default InvoiceCreate;
