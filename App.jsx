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
