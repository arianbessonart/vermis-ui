import React from 'react'

import {TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';

import EditableCell from './EditableCell';


class DetailRow extends React.Component {

  onDelEvent() {
    this.props.onDelEvent(this.props.product);
  }

  render() {

    return (
      <TableRow>
        <EditableCell rowSize="75%" onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "detail",
          value: this.props.product.detail,
          id: this.props.product.id
        }}/>
        <EditableCell rowSize="15%" onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "amount",
          value: this.props.product.amount,
          id: this.props.product.id
        }}/>
        <TableRowColumn>
          <IconButton iconClassName="material-icons" onClick={this.onDelEvent.bind(this)}>delete</IconButton>
        </TableRowColumn>
      </TableRow>
    );

  }
}

export default DetailRow;

