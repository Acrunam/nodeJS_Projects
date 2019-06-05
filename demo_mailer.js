const nodemailer = require('nodemailer');

const credentials = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: 'raymwauradev@gmail.com',
    clientId: '71927165500-k33a8g9cib8kvidpncus1goe0fgu7ma0.apps.googleusercontent.com',
    clientSecret: 'eQm11PMTFLV3qi_r3YROe0oQ',
    refreshToken: '1/gxAHtb2di5ASkmL0SqqlHAVUmOpONVbI0aIbuo-UnMk',
    accessToken: 'ya29.GlsfB8OAcGimRxbkLjcvDQLmTHU4JeCloH31xOVz-ZWJGKjk-dh2swuGPWtyN57mFCIJqv4lfuPhuvr-KMFMfRtVOu0Z3M0sLIS7GuhpOVSsrdxHMvY2OBGDV4HB',
    expires: 1484314697598,
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
