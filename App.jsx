import { useState, useEffect } from 'react';
import DataTable from './DataTable';
import AddDataForm from './AddDataForm';

function MainPage() {
    const [data, setData] = useState([]);

    // פונקציה למשיכת נתונים מהשרת
    const fetchAllData = async () => {
        const response = await fetch('http://localhost:3001/api/data');
        const json = await response.json();
        setData(json);
    };

    useEffect(() => {
        fetchAllData(); // טעינה ראשונית
    }, []);

    return (
        <div>
            {/* מעבירים את הפונקציה לטופס כדי שיוכל לקרוא לה כשמסיים */}
            <AddDataForm onDataAdded={fetchAllData} />
            <hr />
            <DataTable data={data} />
        </div>
    );
}



import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import TablePage from './pages/TablePage';
import AddDataPage from './pages/AddDataPage';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // פונקציה למשיכת נתונים (תשמש אותנו גם בטעינה וגם אחרי עדכון)
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/data');
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("שגיאה במשיכת נתונים:", err);
    } finally {
      setLoading(false);
    }
  };

  // טעינה ראשונית של המידע
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/">הצגת טבלה</Link> | 
        <Link to="/add"> הוספת נתון חדש</Link>
      </nav>

      <Routes>
        {/* דף הטבלה - מקבל את המידע כפרופ */}
        <Route path="/" element={<TablePage data={data} loading={loading} />} />
        
        {/* דף הטופס - מקבל את פונקציית הריענון כפרופ */}
        <Route path="/add" element={<AddDataPage onDataAdded={fetchData} />} />
      </Routes>
    </BrowserRouter>
  );
}

const navStyle = { padding: '20px', background: '#f4f4f4', marginBottom: '20px' };

export default App;
