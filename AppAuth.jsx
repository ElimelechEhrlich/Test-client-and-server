import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  // מצב המשתמש - null אומר שלא מחובר
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <nav>
        {user ? <button onClick={logout}>התנתק ({user.name})</button> : "נא להתחבר"}
      </nav>

      <Routes>
        {/* דף כניסה */}
        <Route path="/login" element={<LoginPage onLogin={login} />} />

        {/* הגנה על נתיבים - אם אין משתמש, העבר לדף לוגין */}
        <Route 
          path="/" 
          element={user ? <TablePage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/add" 
          element={user ? <AddDataPage /> : <Navigate to="/login" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}


/// עדכון האימות בheader
const response = await fetch('http://localhost:3001/api/data', {
  headers: {
    'user-auth': user.name // שליחת שם המשתמש מה-State
  }
});

