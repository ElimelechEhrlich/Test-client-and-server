// Middleware פשוט לבדיקת אימות בשרת
const authMiddleware = (req, res, next) => {
    const userHeader = req.headers['user-auth']; // React ישלח את זה ב-headers
    if (userHeader === 'admin') {
        next(); // המשתמש מאושר, המשך ל-Route
    } else {
        res.status(401).json({ error: "Unauthorized - נא להתחבר" });
    }
};

// שימוש ב-Middleware ב-Route של הטבלה
app.get('/api/data', authMiddleware, (req, res) => {
    // ... הקוד של קריאת ה-CSV ...
});



