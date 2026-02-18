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
