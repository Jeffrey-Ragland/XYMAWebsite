require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

//nodemailer with outlook
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.WEBSITE_EMAIL,
    pass: process.env.WEBSITE_EMAIL_PASS,
  }
});

app.post('/contacts', (req,res) => {
    const {name, email, job, company, solution, details} = req.body;

    const mailOptions = {
      from: process.env.WEBSITE_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `${name} contacted you through XYMA Website`,
      text: `Name: ${name}\nEmail: ${email}\nJob: ${job}\nCompany: ${company}\nSolution: ${solution}\nDetails: ${details}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent:' + info.response);
    });
});

const PORT = 3001;
app.listen(PORT, () => 
{
    console.log(`Server is running on port ${PORT}`);
})