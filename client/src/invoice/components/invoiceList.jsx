import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

let InvoiceList = ({invoices, onSelected}) => {

  let invoiceList = invoices.map((val, index) => {

    let statusIcon;
    if (val.status === "pending") {
      statusIcon = <i className="material-icons">schedule</i>
    } else if (val.status === "charged") {
      statusIcon = <i className="material-icons">done</i>
    } else {
      statusIcon = <i className="material-icons">cancel</i>
    }
    let chargeInvoice = val.status === "pending" ? <RaisedButton label="Charge" primary={true}/> : <RaisedButton label={val.status} disabled={true} primary={true}/>
    return (<TableRow key={index} id={val._id}>
        <TableRowColumn>{val.client.name}</TableRowColumn>
        <TableRowColumn>{val.name}</TableRowColumn>
        <TableRowColumn>{val.number}</TableRowColumn>
        <TableRowColumn>${val.total}</TableRowColumn>
        <TableRowColumn>{val.date}</TableRowColumn>
        <TableRowColumn>{statusIcon}</TableRowColumn>
        <TableRowColumn>{chargeInvoice}</TableRowColumn>
      </TableRow>
    );
  });
  return (
    <div>
      <Table onRowSelection={(index) => {
        var invoice = invoices[index[0]];
        onSelected(invoice._id);
      }}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Client</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Invoice N⁰</TableHeaderColumn>
            <TableHeaderColumn>Total</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Billing</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {invoiceList}
        </TableBody>
      </Table>
    </div>
  );
};


export default InvoiceList;
