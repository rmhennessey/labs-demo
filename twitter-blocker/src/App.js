import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

// import MuiButton from '@material-ui/core/Button';
// import { BUTTON } from '../../theme/core';

// const Button = ({ className, large, inverted, danger, ...props }) => (
//   <MuiButton
//     className={cx(
//       BUTTON.root,
//       className,
//       inverted && BUTTON.inverted,
//       danger && BUTTON.danger,
//       large && BUTTON.large,
//     )}
//     {...props}
//   />
// );

// export default Button;

function App() {
  return (
    <div className="App">
      <Button a href="/auth/twitter">Sign in with Twitter</Button>
    </div>
  );
}

export default App;
