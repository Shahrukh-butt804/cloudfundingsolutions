require("dotenv").config()
const express = require("express");
const path = require("path");
const cors = require("cors")
const multer = require('multer');
const sendMail = require("./sendMail.controller")

const app = express();
const port = process.env.PORT || 5000;

const storage = multer.memoryStorage(); // or diskStorage() for saving to disk
const upload = multer({ storage });

// Cors Options
var corsOptions = {
  origin: 'http://localhost:3000',    //production Domain Here
  methods: ['POST', "PUT", "GET", "DELETE"],
}

app.use(cors(corsOptions))
app.use(express.json())


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Serving the main HTML file directly
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'index.html');
  console.log('Serving file from:', filePath);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(err.status).end();
    }
  });
});


// FInal Route Will be   http://cloudfundingsolutions.com/api/sendEmail
app.post("/api/sendEmail", upload.single('attachment'), async (req, res) => {

  // console.log(req.body); // Other fields
  // console.log(req.file); // The uploaded file image/pdf
  try {
    await sendMail(req.body, req.file ? req.file : null); // Send mail
    res.status(200).json({ message: 'Form data received successfully', data: req.body });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email.' });
  }
})


app.listen(port, () => {
  console.log("Server is running on port", port);
});
