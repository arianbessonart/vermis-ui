import React from 'react'

import TextField from 'material-ui/TextField'

import {TableRowColumn} from 'material-ui/Table';

class EditableCell extends React.Component {

  render() {
    return (
      <TableRowColumn style={{width: this.props.rowSize}}>
        <TextField type='text'
               name={this.props.cellData.type}
               id={this.props.cellData.id}
               value={this.props.cellData.value}
               onChange={this.props.onProductTableUpdate}
               fullWidth={true}/>
      </TableRowColumn>
    );
  }
}

export default EditableCell;
