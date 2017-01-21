import React from 'react'
import { connect } from 'react-redux'

import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';

import { Flex, Box } from 'reflexbox'

import ClientSelector  from '../shared/components/ClientSelector'
import InvoiceDetailTable from './components/InvoiceDetailTable'

import { fetchClientsAction } from '../actions/client'
import { getAllClients } from '../selectors/client'

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class InvoiceForm extends React.Component {

  state = {
    referenceInputError: null,
    invoiceNumberInputError: null,
    clientRut: "",
    clientAddress: "",
    subTotal: 0,
    iva: 0,
    total: 0,
    details: [{detail: "Producto 1", amount: 21}]
  };


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

  handleCreateDate = (e, date) => {
    console.log(date);
  };

  clientSelected = (client) => {
    this.setState({clientRut: client.rut});
    this.setState({clientAddress: client.address});
  };

  handleProductTable(evt) {
    console.log(evt);
    // var item = {
    //   detail: evt.target.detail,
    //   amount: evt.target.amount
    // };
    // var products = this.state.products.slice();
    // var newProducts = products.map(function(product) {
    //
    //   for (var key in product) {
    //     if (key == item.name && product.id == item.id) {
    //       product[key] = item.value;
    //
    //     }
    //   }
    //   return product;
    // });
    // this.setState({details:newProducts});
    //  console.log(this.state.products);
  };

  render() {
    let {clients} = this.props;
    return (
      <div>
        <Flex column>
          <Box>
            <Flex p={2} align='center'>
              <Box col={4} p={2}>
                <Card>
                  <CardHeader
                    title="Client"
                  />
                  <CardText>
                    <ClientSelector clients={clients} onSelect={this.clientSelected} />
                    <TextField
                      disabled={true}
                      floatingLabelText="RUT"
                      value={this.state.clientRut}
                    />
                    <TextField
                      disabled={true}
                      floatingLabelText="Address"
                      value={this.state.clientAddress}
                    />
                  </CardText>
                </Card>
              </Box>
              <Box col={4} p={2}>
                <Card>
                  <CardHeader
                    title="Invoice"
                  />
                  <CardText>
                    <DatePicker floatingLabelText="Date" container="inline" autoOk={true} onChange={this.handleCreateDate} />
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
                    <Checkbox
                      label="Retention"
                      labelPosition="left"
                      style={styles.checkbox}
                    />
                  </CardText>
                </Card>
              </Box>
              <Box col={4} p={2}>
                <Card>
                  <CardHeader
                    title="Total"
                  />
                  <CardText>
                    <TextField
                      disabled={true}
                      floatingLabelText="SubTotal"
                      value={this.state.subTotal}
                    />
                    <TextField
                      disabled={true}
                      floatingLabelText="Iva"
                      value={this.state.iva}
                    />
                    <TextField
                      disabled={true}
                      floatingLabelText="Total"
                      value={this.state.total}
                    />
                  </CardText>
                </Card>
              </Box>
            </Flex>
          </Box>
          <Box>
            <InvoiceDetailTable />
          </Box>
        </Flex>
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

// Using selector
const mapStateToProps = (state) => {
  return {
    clients: getAllClients(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceForm);
