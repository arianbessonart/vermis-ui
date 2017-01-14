import React from 'react'
import {Link} from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'

let Navbar = () => {
  return (
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <FlatButton
          containerElement={<Link to="/invoices" />}
          label="Invoices"/>
        <FlatButton
          containerElement={<Link to="/clients" />}
          label="Clients"/>
      </ToolbarGroup>
    </Toolbar>
  );
};

export default Navbar;
