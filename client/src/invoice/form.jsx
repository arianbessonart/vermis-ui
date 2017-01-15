import React from 'react'
import { connect } from 'react-redux'

import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import ClientSelector  from '../shared/components/ClientSelector'

import { fetchClientsAction } from '../actions/client'
import { getAllClients } from '../selectors/client'

class InvoiceForm extends React.Component {

  state = {referenceInputError: null, invoiceNumberInputError: null};

  componentDidMount() {
    this.props.fetchClients();
  }

  handleReferenceInput = (e, value) => {
    if (value === "") {
      this.setState({referenceInputError: "Required"});
    }
  };


  handleInvoiceNumberInput = (e, value) => {
    if (value === "") {
      this.setState({invoiceNumberInputError: "Required"});
    }
  };

  render() {
    let {clients} = this.props;
    return (
      <div>
        <ClientSelector clients={clients} onSelect={clientSelected} />
        <DatePicker hintText="Select a date" container="inline" mode="landscape" autoOk={true} onChange={handleCreateDate} />
        <TextField hintText="Reference Name"
                   floatingLabelText="Reference Name"
                   name="referenceName"
                   errorText= {this.state.referenceInputError}
                   onChange={this.handleReferenceInput}
        />
        <TextField hintText="Invoice N⁰"
                   floatingLabelText="Invoice N⁰"
                   name="invoiceNumber"
                   errorText= {this.state.invoiceNumberInputError}
                   onChange={this.handleInvoiceNumberInput}
        />
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
