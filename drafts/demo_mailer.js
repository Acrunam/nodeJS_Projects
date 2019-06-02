const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raymwauradev@gmail.com',
    pass: '6#F$7&J^J^%^y65Y^7&^UUYH',
  },
});

const mailOptions = {
  from: 'raymwauradev@gmail.com',
  to: 'raywachaga@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
