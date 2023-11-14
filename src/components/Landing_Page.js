import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

export default function Landing_Page() {
    return (
        <>
            This is the Landing Page
            <AppBar>
                <Toolbar>
                    <Link to='/'>
                        <Button variant='text' sx={{color:'white',fontSize:20}}>Home</Button>
                    </Link>
                    {/* This should be visible in Mobile view */}
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}<pre>   </pre>
                    <Link to='/hotel_booking'>
                    <Button variant='text' sx={{color:'white'}}>
                            <img src={require("../static/hotel3.png")}></img><p style={{fontSize:20 ,margin:0,}}>Hotel Booking</p>
                    </Button>
                    </Link>
                    {/* <Link to='/'>Landing Page</Link>
        <Link to='/hotel_booking'>Hotel Booking Page</Link> */}

                </Toolbar>
            </AppBar>
        </>
    )
}
