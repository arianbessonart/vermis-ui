import React from 'react'
import { connect } from 'react-redux'
import {TextField, Checkbox, Toggle, DatePicker} from 'material-ui'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import { Grid, Row, Col} from 'react-bootstrap';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSave from 'material-ui/svg-icons/content/save';

import ClientSelector from '../client/ClientSelector'
import InvoiceItemTable from './components/InvoiceItemTable'

import {getAllClients, getSelectedClient} from '../selectors/client'
import {getSelected} from '../selectors/invoice'
import {fetchClientsAction, selectClientAction} from '../actions/client'
import {addItemInvoiceAction, changeNameInvoiceAction, changeNumberInvoiceAction,
  createInvoiceAction, changeDateInvoiceAction, updateInvoiceAction, changeRetentionInvoiceAction} from '../actions/invoice'

const style = {
  float: "right"
};


class InvoiceForm extends React.Component {

  componentDidMount() {
  }

  render() {
    let {isEditing, clients, invoice, clientSelected, addItem, handleName, handleNumber, handleDate, save, handleRetention} = this.props;
    return (
      <div>
        <Grid style={{margin: "10px"}}>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <Card>
                <CardTitle>
                  <h4>Client</h4>
                </CardTitle>
                <CardText>
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
                </CardText>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card>
                <CardTitle>
                  <h4>Invoice</h4>
                </CardTitle>
                <CardText>
                  <TextField hintText="Name Name"
                             floatingLabelText="Name Name"
                             name="nameName"
                             value={invoice.name}
                             onChange={(e, val) => handleName(val)}
                  />
                  <TextField hintText="Invoice N⁰"
                             floatingLabelText="Invoice N⁰"
                             name="invoiceNumber"
                             value={invoice.number}
                             onChange={(e, val) => handleNumber(val)}
                  />
                  <DatePicker hintText="Date" mode="landscape" value={invoice.date} onChange={(e, val) => handleDate(val)}/>
                  <Toggle
                    label="Retention"
                    toggled={invoice.retention}
                    labelPosition="right"
                    onToggle={handleRetention}
                  />
                </CardText>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card>
                <CardTitle>
                  <h4>Total</h4>
                </CardTitle>
                <CardText>
                  <TextField
                    disabled={true}
                    floatingLabelText="Sub Total"
                    value={invoice.subTotal}
                  />
                  <TextField
                    disabled={true}
                    floatingLabelText="Iva"
                    value={invoice.iva}
                  />
                  <TextField
                    disabled={true}
                    floatingLabelText="Total"
                    value={invoice.total}
                  />
                </CardText>
              </Card>
            </Col>
          </Row>
          <hr/>
          <Row style={{padding: "10px"}}>
            <div style={{clear: "both"}}>
              <FloatingActionButton onClick={addItem}>
                <ContentAdd />
              </FloatingActionButton>
              <FloatingActionButton style={style} onClick={() => save(isEditing, invoice, clientSelected)}>
                <ContentSave />
              </FloatingActionButton>
            </div>
            <InvoiceItemTable />
          </Row>
        </Grid>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => {
      dispatch(addItemInvoiceAction({detail: "", amount: 0}));
    },
    save: (isEditing, invoice, client) => {
      if (isEditing) {
        dispatch(updateInvoiceAction(invoice, client));
      } else {
        dispatch(createInvoiceAction(invoice, client));
      }
    },
    fetchClients: () => {
      dispatch(fetchClientsAction())
    },
    handleName: (val) => {
      dispatch(changeNameInvoiceAction(val))
    },
    handleNumber: (val) => {
      dispatch(changeNumberInvoiceAction(val))
    },
    handleDate: (val) => {
      dispatch(changeDateInvoiceAction(val))
    },
    selectClient: (id) => {
      dispatch(selectClientAction(id))
    },
    handleRetention: () => {
      dispatch(changeRetentionInvoiceAction())
    }
  }
};

const mapStateToProps = (state) => {
  return {
    clients: getAllClients(state),
    clientSelected: getSelectedClient(state),
    invoice: getSelected(state)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceForm);
