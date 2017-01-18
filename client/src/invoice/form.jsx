import React from 'react'
import { connect } from 'react-redux'

import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { Flex, Box } from 'reflexbox'

import ClientSelector  from '../shared/components/ClientSelector'

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

const styleAddRow = {
  marginRight: 20,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'static'
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

  render() {
    let {clients} = this.props;
    let detailsRows = this.state.details.map((val, index) => {return (<TableRow key={index}><TableRowColumn>{val.detail}</TableRowColumn><TableRowColumn>{val.amount}</TableRowColumn></TableRow>)});
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
            <FloatingActionButton mini={true} style={styleAddRow}>
              <ContentAdd />
            </FloatingActionButton>
            <Table>
              <TableHeader displaySelectAll={false}>
                <TableRow>
                  <TableHeaderColumn>Detail</TableHeaderColumn>
                  <TableHeaderColumn>Amount</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {detailsRows}
              </TableBody>
            </Table>
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
