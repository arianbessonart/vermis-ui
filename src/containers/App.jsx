import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Navbar from '../shared/components/Navbar';

injectTapEventPlugin();

let App = ({children}) => {
  return (
    <div>
      <MuiThemeProvider>
        <div>
          <Navbar />
          {children}
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
