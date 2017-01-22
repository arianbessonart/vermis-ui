import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import DetailRow from './DetailRow'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styleAddRow = {
  marginRight: 20,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'static',
  float: 'right'
};

class DetailTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {
      if (product.detail.indexOf(filterText) === -1) {
        return;
      }
      return (<DetailRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });
    return (
      <div>
          <FloatingActionButton mini={true} style={styleAddRow} onClick={this.props.onRowAdd}>
            <ContentAdd />
          </FloatingActionButton>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={{width:"75%"}}>Detail</TableHeaderColumn>
              <TableHeaderColumn style={{width:"15%"}}>Amount</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {product}
          </TableBody>
        </Table>
      </div>
    );

  }

}

export default DetailTable;
