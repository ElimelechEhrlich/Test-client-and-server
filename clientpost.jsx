import { useState } from 'react';

function AddDataForm() {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData) // המרת האובייקט לטקסט
            });

            if (response.ok) {
                alert("נוסף בהצלחה!");
                setFormData({ name: '', email: '' }); // איפוס הטופס
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                placeholder="שם" 
            />
            <input 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                placeholder="אימייל" 
            />
            <button type="submit">הוסף</button>
        </form>
    );
}


function AddDataForm({ onDataAdded }) {
    // ... ה-handleSubmit הקודם שלך ...
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('...', { /* הגדרות ה-POST */ });
        
        if (response.ok) {
            onDataAdded(); // פקודה לאבא: "תמשוך נתונים חדשים!"
            setFormData({ name: '', email: '' });
        }
    };
}


const navigate = useNavigate();
// אחרי ה-POST המוצלח:
navigate('/table');



if (response.ok) {
    // הוספת האובייקט החדש ישירות ל-State הקיים
    setData(prevData => [...prevData, formData]);
    setFormData({ name: '', email: '' });
}


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddDataPage({ onDataAdded }) {
  const [form, setForm] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      await onDataAdded(); // מחכים שהאבא ימשוך את הנתונים החדשים
      navigate('/'); // חוזרים לדף הבית (הטבלה)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>הוספת נתון</h2>
      <input 
        placeholder="שם" 
        onChange={e => setForm({...form, name: e.target.value})} 
      />
      <input 
        placeholder="אימייל" 
        onChange={e => setForm({...form, email: e.target.value})} 
      />
      <button type="submit">שמור וחזור לטבלה</button>
    </form>
  );
}

export default AddDataPage;

