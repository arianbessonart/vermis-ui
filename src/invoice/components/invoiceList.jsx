import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router'

const style = {
  marginRight: 20,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

let InvoiceList = ({invoices}) => {
  console.log(invoices);
  let invoiceList = invoices.map((val, index) => {
    return (<TableRow key={index} id={val.id}>
        <TableRowColumn>{val.client.name}</TableRowColumn>
        <TableRowColumn>{val.name}</TableRowColumn>
        <TableRowColumn>{val.reference}</TableRowColumn>
        <TableRowColumn>{val.dateCreated}</TableRowColumn>
        <TableRowColumn>{val.isBilled ? <i className="material-icons">done</i> : <i className="material-icons">clear</i>}</TableRowColumn>
        <TableRowColumn>{val.dateBilled}</TableRowColumn>
      </TableRow>
    );
  });
  return (
    <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Client</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Invoice N⁰</TableHeaderColumn>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Billed</TableHeaderColumn>
          <TableHeaderColumn>Billed Date</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoiceList}
      </TableBody>
    </Table>
      <Link to={`/invoices/new`}>
        <FloatingActionButton style={style}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  );
};


export default InvoiceList;
