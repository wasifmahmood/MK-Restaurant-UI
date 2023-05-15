import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { CartSection } from '../cart/Cart'
import { FaShoppingCart } from "react-icons/fa";


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
    </Box>
  );

  return (
    <div className="d-flex ">
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className='btn-cart '>
            <Button class="btn btn-danger "  onClick={toggleDrawer(anchor, true)}><FaShoppingCart /></Button>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}

          >
            {list(anchor)}
            <div>
              <CartSection />
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}