const express = require('express');
const app = express();
const router = require('./routing.js');
const PORT = 5000;

app.use(express.json());
app.use('/api', router);


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
