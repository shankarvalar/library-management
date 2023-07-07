import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Navbar(authuser) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Books
                    </Typography>
                    {authuser ? <Typography>
                        <Button color="inherit" href='/library-management'>signOut</Button>
                    </Typography> : <Typography>
                        <Button color="inherit" href='/library-management'>login</Button>
                    </Typography>}
                    {authuser ? <Typography>
                        <Button color="inherit" href=''>Search</Button>
                    </Typography> : <Typography>
                        <Button color="inherit" href='/library-management/signup'>Sign UP</Button>
                    </Typography>}


                </Toolbar>
            </AppBar>
        </Box>
    );
}