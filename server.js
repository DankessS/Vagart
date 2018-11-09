/**
 * Created by Daniel Palonek on 2018-09-18.
 */
const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path');
// var nodemailer = require('nodemailer');
app.use(compression());

app.use("/", express.static(path.join(__dirname, 'dist/vagart')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/vagart/index.html'));
});

// start email handle

// var mailOptions = {
//   from: "xxx@hotmail.com",
//   to: "kontakt@vagart.pl",
//   subject: "[VAGART.PL] - Formularz kontaktowy",
//   text: "this is the email's body text..."
// };
//
// app.post("/sendemail", (req, res) => {
//   mailOptions.from = req.body.params.
//   var transporter = nodemailer.createTransport({
//     host: "smtp-mail.outlook.com",
//     secureConnection: false,
//     port: 587,
//     tls: {
//       chipers: "SSLv3"
//     },
//     auth: {
//       user:  "xxx@hotmail.com",
//       pass: "xxx"
//     }
//     });
//
// transporter.sendMail(mailOptions, function(error, info) {
//   if (error) console.log(error);
//   else console.log("Message sent successfully: " + info.response);
// });
// end email handle


app.listen(process.env.PORT || 4200);

console.log("Up");
