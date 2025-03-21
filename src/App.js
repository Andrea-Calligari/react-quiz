import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AppRouter from './AppRouter';
import NavBar from './components/nav-bar/NavBar';
import DashBoard from './route/auth/DashBoard';
import { AuthProvider } from './AuthContext';
import './App.css';
import './input.css';

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || null;
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogIn = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    alert(`Hai effettuato l'accesso come ${user.displayName}`);
  };

  const handleLogOut = () => {
    auth.signOut();
    setUser(null);
    alert("Logout avvenuto con successo!");
  };

  return (
    <AuthProvider>
      <div className="App">
        <header>
          <NavBar user={user} handleLogOut={handleLogOut} />
        </header>
        <main >
          <AppRouter handleLogIn={handleLogIn} user={user} />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;