import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Box, TextField, Button, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';


const LogInPage = ({ onLogIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');


    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: user.username });
            onLogIn(user);
            console.log("Log-in avventuto con successo !", user);
            navigate('/dashboard');

        } catch (error) {
            if (error.code === 'auth/invalid-credential' || error.code === 'auth/invalid-email') {
                setErrors("Credenziali non valide , riprova");
                console.log(error.message);
            } else if (error.code === 'auth/missing-password') {
                setErrors("Password mancante!");
            }
        }
    }



    return (
        <Box sx={{ maxWidth: "450px", height: "450px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", mx: 'auto', mt: 8, p: 5, border: "1px solid trasparent", boxShadow: 3, borderRadius: 2, backgroundColor: "rgba(228, 225, 238, 0.541)" }}>
            <LockIcon sx={{ width: "20%", p:1, mx: "auto", fontSize: "70px",}} />
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Log In
            </Typography>
            <Box component="form" onSubmit={handleLogIn}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors && (
                    <Typography color="error" variant="body2" align="center">
                        {errors}
                    </Typography>
                )}
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ mt: 2 }}
                    onClick={handleLogIn}
                >
                    Login
                </Button>
            </Box>
        </Box>

    )
}

export default LogInPage
