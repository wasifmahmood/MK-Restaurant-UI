import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import '../bannertop/BannerTop.css';
import { FaBars } from 'react-icons/fa';
import { TopOutletinformation } from '../../components/Outletinformation/Outletinformation';
import Login from "../Login/Login";
import { Link } from "react-scroll";
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { AiOutlineLogin } from 'react-icons/ai';


function BannerTop() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    }
    const [state, setState] = React.useState({
        right: false,
    });
    const topDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"
            onClick={topDrawer(anchor, false)}
            onKeyDown={topDrawer(anchor, false)}
        >
            <List>
                <div className="d-flex flex-row-reverse p-5 ">
                    <FaBars style={{ padding: 5, border: '1px solid', borderRadius: 5 }} size={30} />
                </div>
                <div className="d-flex flex-row-reverse px-5" onClick={handleClick}>
                    <button style={{ border: 'none', background: 'white', rotate: '90deg', color: '#CA2129' }}><AiOutlineLogin /></button>
                    <button style={{ border: 'none', background: 'white', marginRight: '10px', fontWeight: 'bold' }}>Login</button>
                </div>
            </List>
        </Box>
    );

    return (
        <div>
            <div className="banner-top-section p-4" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="outlet-information-desktop">
                    <TopOutletinformation />
                </div>
                <div>
                    <div className="login-menu-container" style={{ display: 'flex', alignItems: 'center', padding: "1rem" }}>
                        <div><Link className="login"
                            onClick={handleClick}
                        >
                            Login</Link></div>
                        <div>
                            <Button onClick={topDrawer('right', true)}>
                                <div className="menu-burger" >
                                    <FaBars />
                                </div>
                            </Button>
                            <Drawer
                                anchor="right"
                                open={state['right']}
                                onClose={topDrawer('right', false)}
                            >
                                {list('right')}
                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Login
                    open={open}
                    onClose={() => setOpen(false)}
                />
            </div>
        </div>
    );
}

export default BannerTop;