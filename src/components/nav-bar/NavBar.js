import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FaceIcon from '@mui/icons-material/Face';



const NavBar = ({ user, handleLogOut }) => {
    const navigate = useNavigate();

    const handleLogOutClick = (e) => {
        e.preventDefault();
        handleLogOut();
        navigate('/');
    };
    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <AppBar sx={{ backgroundColor: "rgba(228, 225, 238, 0.541)", border: "1px solid black", color: "black", borderRadius: " 0px 0px 14px 14px" }} position='static'>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                        <Typography variant="h6" component={Link} to="/">
                            PHILOSOPHYMASTER
                        </Typography>
                        <Box>
                            {user ? (
                                <>
                                     <Button component={Link} to="/dashboard" color='inherit' >Dashboard</Button>
                                     <Button  color='inherit' onClick={handleLogOutClick} >Log Out</Button>
                                </>
                               ) : (
                                <>
                                    <Button component={Link} color='inherit' to="/sign-up" >Sign Up</Button>
                                    <Button component={Link} color='inherit' to="/log-in" >Login</Button>

                                </>
                            )}
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default NavBar
