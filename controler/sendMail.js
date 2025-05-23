import transporter from "../config/nodemailerAuth.js";
// config\nodemailerAuth.js

export const sendMail = async (req, res) => {
  const {email} = req.body;
    const mailOptions = {
        to:email ,
        subject: 'Test Email',
        text: 'This is a test email sent from Node.js',
        html: `<p>Welcome to my project</p>`,
      };
  
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log(error)
          return res.status(500).json({ message: 'Failed to send email' });
        }
        console.log("Email sent")
        res.status(200).json({ message: 'Email sent' });
      });
    }