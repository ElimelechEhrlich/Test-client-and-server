import express from 'express';
import fs from 'fs'; // מייבאים את fs הרגיל
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/data', (req, res) => {
    // fs.readFile(נתיב, קידוד, פונקציית_קולבק)
    fs.readFile('./data.csv', 'utf-8', (err, data) => {
        // 1. טיפול בשגיאה (למשל קובץ לא נמצא)
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "נכשלה קריאת הקובץ" });
        }

        // 2. עיבוד הנתונים (קורה רק כשהקובץ מוכן)
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const headers = lines[0].split(',').map(h => h.trim());

        const jsonResult = lines.slice(1).map(line => {
            const values = line.split(',');
            const obj = {};
            headers.forEach((header, i) => {
                obj[header] = values[i]?.trim();
            });
            return obj;
        });

        // 3. שליחת התשובה
        res.json(jsonResult);
    });
    
    // שים לב: קוד שייכתב כאן ירוץ *לפני* שהקובץ סיים להיקרא!
});


import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json()); // חובה! מאפשר לשרת לקרוא את גוף הבקשה (req.body)

app.post('/api/data', (req, res) => {
    const { name, email } = req.body; // הנתונים שמגיעים מ-React

    // 1. הפיכת האובייקט לשורת CSV (חשוב לשים לב לסדר העמודות)
    // ה-\n מבטיח שהנתון הבא יתחיל בשורה חדשה
    const newRow = `\n${name},${email}`;

    // 2. הוספה לסוף הקובץ
    fs.appendFile('./data.csv', newRow, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "נכשלה כתיבת הנתונים" });
        }
        
        res.status(201).json({ message: "הנתונים נוספו בהצלחה!" });
    });
});





app.listen(3001, () => console.log('Server running on port 3001'));
