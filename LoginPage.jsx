import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // בדיקה פשוטה למבחן
    if (username === 'admin' && password === '1234') {
      onLogin(username);
      navigate('/'); // מעבר לדף הטבלה
    } else {
      alert("פרטים שגויים!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>התחברות</h2>
      <input placeholder="משתמש" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="סיסמה" onChange={e => setPassword(e.target.value)} />
      <button type="submit">כניסה</button>
    </form>
  );
}
