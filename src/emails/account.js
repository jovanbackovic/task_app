const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name = "") => {
  sgMail.send({
    to: email,
    from: "backo@nep.com",
    subject: "Welcome to the app",
    text: `Hello ${name}, I hope this reaches you in good health`
  });
};

const sendDepartureEmail = (email, name = "") => {
  sgMail.send({
    to: email,
    from: "backo@nep.com",
    subject: "Sorry to see you go",
    text: `Hello ${name}, I hope you can share your reasons for leaving us.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendDepartureEmail
};
