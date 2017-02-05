import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router'

let InvoiceList = ({invoices, onCharge}) => {

  const calculateRetention = (total) => {
    return Number(total - (total * 0.07)).format(2);
  };

  let invoiceList = invoices.map((val, index) => {
    let statusIcon;
    if (val.status === "pending") {
      statusIcon = <i className="material-icons">schedule</i>
    } else if (val.status === "charged") {
      statusIcon = <i className="material-icons">done</i>
    } else {
      statusIcon = <i className="material-icons">cancel</i>
    }
    let chargeInvoice = val.status === "pending" ? <RaisedButton label="Charge" primary={true} onClick={ () => onCharge(val._id)}></RaisedButton>: <RaisedButton label={val.status} disabled={true} primary={true}/>
    return (<TableRow key={index} id={val._id}>
        <TableRowColumn>{val.client.name}</TableRowColumn>
        <TableRowColumn><Link to={"/invoices/edit/"+ val._id}>{val.name}</Link></TableRowColumn>
        <TableRowColumn>{val.number}</TableRowColumn>
        <TableRowColumn>${val.total}</TableRowColumn>
        <TableRowColumn>${ val.retention ? calculateRetention(val.total) : val.total }</TableRowColumn>
        <TableRowColumn>{val.date}</TableRowColumn>
        <TableRowColumn>{statusIcon}</TableRowColumn>
        <TableRowColumn>{chargeInvoice}</TableRowColumn>
      </TableRow>
    );
  });
  return (
    <div>
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Client</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Invoice N⁰</TableHeaderColumn>
            <TableHeaderColumn>Total</TableHeaderColumn>
            <TableHeaderColumn>Total - Retention</TableHeaderColumn>
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
