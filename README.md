# Test-client-and-server

1. התקנות - הקמת שרת ויצירת קובץ server. js וקובץ דאטה 

2. לקוח - הקמות והתקנות ריאקט

3. 2 טרמינלים פתוחים והרצה

4. שרת - קריאת קבצים וניהול fs

5. שרת - יצירת routh get להביא את הדאטה

6. שרת - בדיקה שרואים את הנתונים

7. לקוח - הגדרת App.jsx useState ו fetch לנתונים בתוך useEfect

8. לקוח - קומפוננטות מיפוי והצגת נתונים - טבלאות

9. שרת - אם צריך - הקמת post - הכנסת הנתונים כשורת טקסט בדאטה fs.appendFile

10. לקוח - הגדרת Routes לפי Pages

11. ליצור hendleSubmit פונקציה לfetch מסוג post

12. בהצלחת הpost אם response.ok - קריאה לפונקציית קריאת הקובץ - שגם הuseEfect משתמש בו בהתחלה, הפעלתו שוב.. 

13. שימוש בuseNavigates למעבר בחזרה לדף הנתונים אחרי העידכון


תיקיות:

my-project/
├── client/ (React - נבנה עם Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddDataForm.jsx
│   │   │   └── DataTable.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   └── TablePage.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── ...
│
├── server/ (Node.js)
│   ├── data.csv         <-- בסיס הנתונים שלך
│   ├── server.js        <-- נקודת הכניסה (Express)
│   ├── package.json     <-- ודא שכתוב כאן "type": "module"
│   └── .gitignore
