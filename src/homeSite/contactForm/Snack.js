import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

const Snack = ({open, vertical, horizontal, message}) => {

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
};
export default Snack;