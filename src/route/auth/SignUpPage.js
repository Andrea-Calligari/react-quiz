import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const SignUpPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();

    const isValidatedEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        const trimmedEmail = email.trim();
        if (!isValidatedEmail(trimmedEmail)) {
            setErrors("l'email inserita non é in un formato valido");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, trimmedEmail, password);
            const user = userCredential.user;
            await updateProfile( user, {displayName: name });
            navigate('/dashboard');
            console.log("registrazione avenuta con successo!", user);

        } catch (error) {
            console.error('Errore di registrazione:', error);
            if (error.code === 'auth/email-already-in-use') {
                setErrors('L\'email è già in uso. Per favore, usa un\'altra email.');
            } else if (error.code === 'auth/invalid-email') {
                setErrors('L\'email inserita non è valida. Per favore, controlla il formato.');
            } else {
                setErrors('Errore di registrazione: ' + error.message);
            }
        }
    }




    return (
        <Box sx={{ maxWidth: "450px", height: "450px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", mx: 'auto', mt: 8, p: 5, border: "1px solid trasparent", boxShadow: 3, borderRadius: 2, backgroundColor: "rgba(228, 225, 238, 0.541)" }}>
            <AccountCircleIcon sx={{ width: "50%", mx: "auto", fontSize: "70px" }}/>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSignUp}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                >
                    SignUp
                </Button>
            </Box>
        </Box>
    )
}

export default SignUpPage
