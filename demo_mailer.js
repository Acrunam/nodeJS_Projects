const nodemailer = require('nodemailer');

const credentials = {
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'raymwauradev@gmail.com',
    clientId: '71927165500-k33a8g9cib8kvidpncus1goe0fgu7ma0.apps.googleusercontent.com',
    clientSecret: 'eQm11PMTFLV3qi_r3YROe0oQ',
    refreshToken: '1/e-uoaxfgOBlEAa9jL6UT3cUCcT_VUhKhdXSVAZFZR0E',
    accessToken: 'ya29.GlscB95M3Eh_ErzJSFkU9HpnsbFByMTaDIGqZ_tfT1IkH-KskRVPYam4-O9N1xz91g6zpLDgF_-xmpAtrhJEzCXCUIebINvDmqpGZ5EDnv5X-E2fd6davuYmhNy6',
  },
};
const transporter = nodemailer.createTransport(credentials);

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
