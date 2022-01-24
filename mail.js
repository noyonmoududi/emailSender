var nodemailer = require('nodemailer');

const output = `
<p>You have a new contact request</p>
<h3>Contact Details</h3>
<ul>  
  <li>Name: Nure ala</li>
  <li>Company: NoyonIT</li>
  <li>Email: noyon@gmail.com</li>
  <li>Phone: 079878876877</li>
</ul> 
<h3>Message</h3>
<p>This is test generated mail for node js project.</p>
`;


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourgmail@gmail.com',
    pass: 'appPassword'// passwaord should be gmail app password.
  }
});

var mailOptions = {
  from: 'yourgmail@gmail.com',
  to: 'togmail@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'node js test mail app',
  html: output // html body
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});