import React from 'react'

import DetailTable from './DetailTable'

class InvoiceDetailTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.filterText = "";
    this.state.products = [
      {
        id: "1",
        detail: 'Sporting Goods',
        amount: '49.99',
      }, {
        id: "2",
        detail: 'Sporting Goods',
        amount: '9.99',
      }, {
        id: "3",
        detail: 'Sporting Goods',
        amount: '29.99',
      }, {
        id: "4",
        detail: 'Electronics',
        amount: '99.99',
      }, {
        id: "5",
        detail: 'Electronics',
        amount: '399.99',
      }, {
        id: "6",
        detail: 'Electronics',
        amount: '199.99'
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      detail: "",
      amount: ""
    }
    this.state.products.push(product);
    this.setState(this.state.products);

  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var products = this.state.products.slice();
    var newProducts = products.map(function(product) {

      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;

        }
      }
      return product;
    });
    this.setState({products:newProducts});
  };
  render() {

    return (
      <div>
        {/*<SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>*/}
        <DetailTable onProductTableUpdate={this.handleProductTable.bind(this)}
                     onRowAdd={this.handleAddEvent.bind(this)}
                     onRowDel={this.handleRowDel.bind(this)}
                     products={this.state.products}
                     filterText={this.state.filterText}/>
      </div>
    );

  }

}
class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>

        <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>

      </div>

    );
  }

}

export default InvoiceDetailTable;
