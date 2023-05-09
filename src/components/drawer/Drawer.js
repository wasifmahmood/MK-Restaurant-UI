// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import { CartSection } from '../cart/Cart'
// import { FaShoppingCart } from "react-icons/fa";

// export default function Drawer() {
//     const [state, setState] = React.useState({
//         right: false,
//     });
//     const toggleDrawer = (anchor, open) => (event) => {
//         if (
//             event &&
//             event.type === 'keydown' &&
//             (event.key === 'Tab' || event.key === 'Shift')

//         ) {
//             return;
//         }
//         setState({ ...state, [anchor]: open });
//     };
//     const list = (anchor) => (
//         <Box
//             sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//             role="presentation"
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//         >
//             <Divider
//             />
//         </Box>
//     );

//     return (
//         <div >
//             {[''].map((anchor) => (
//                 <React.Fragment key={anchor}>
//                     <Button class="btn btn-danger" onClick={toggleDrawer(anchor, true)}>{anchor}<FaShoppingCart /></Button>
//                     <SwipeableDrawer
//                         anchor={anchor}
//                         open={state[anchor]}
//                         onClose={toggleDrawer(anchor, false)}
//                         onOpen={toggleDrawer(anchor, true)}
//                     >
//                         {list(anchor)}
//                         <button
//                             type="button"
//                             className="modalClose btn-close "
//                             aria-label="Close"
//                             // onClick={onClose}
//                         ></button>
//                         {/* <CartSection /> */}
//                     </SwipeableDrawer>
//                 </React.Fragment>
//             ))}
//         </div>
//     );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { CartSection } from '../cart/Cart'
import { FaShoppingCart } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

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
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button class="btn btn-danger" onClick={toggleDrawer(anchor, true)}><FaShoppingCart /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            
          >
            {list(anchor)}
            <div className='close'>
                <button  onClick={toggleDrawer}><CgClose/></button>
            </div>
            <div><CartSection /> 
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}