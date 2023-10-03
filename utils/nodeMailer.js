// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   secure: false,
//   auth: {
//       user: 'angelica.simonis92@ethereal.email',
//       pass: '36Ur6ckxRJgmBDvthm'
//   }
// })

// transporter.verify().then((res) => console.log(res));
  
// // console.log("Transporter ==== ", transporter);
// // main().catch(console.error);



// function sendMailToUser(user,email,activationToken) {
//   transporter.sendMail({
//       from: "angelica.simonis92@ethereal.email",
//       to: email,
//       subject: 'Email verification required for authenticating your Registration on SeasonalEmployment.com',
//       html: `Click on this link to activate your account http://localhost:3001/api/accountactivation/${activationToken}?user=${user}`,
//   }).then((response) => {
//       console.log('response ==== ', response, email);
//   }).catch((err) => console.log('Error while registering ==== ',err.message))
// }

// // function isAcceptedMailToProvider(emailProvider,title,postedOn,seekerName) {
// //   transporter.sendMail({
// //       from: process.env.GMAIL,
// //       to: emailProvider,
// //       subject: `Congratulations you have got a helping hand` ,
// //       html: `Your Posted Job - ${title} posted on ${postedOn}has been accepted by ${seekerName}. We believe you will get good service from ${seekerName} and also you will definitely pay your helper decently. Please visit your profile to view the additonal details of the JobSeeker.
// //       Stay-Connected & Get-helped`,
// //   }).then((response) => {
// //       console.log(response);
// //   }).catch((err) => console.log(err.message))
// // }

// // function isAcceptedMailToSeeker(emailSeeker,title,postedOn,providerName) {
// //   transporter.sendMail({
// //       from: process.env.GMAIL,
// //       to: emailSeeker,
// //       subject: `Congratulations you have got an Opportunity to utilize your precious leisure time and skill` ,
// //       html: `You Accepted Job - ${title} posted on ${postedOn} from Provider ${providerName}. We believe you will give your best and honest service to ${providerName} and for that you will get rightly paid. Please visit your profile to view the additonal details of the Job.
// //       Stay-Connected & Get-helped`,
// //   }).then((response) => {
// //       console.log(response);
// //   }).catch((err) => console.log(err.message))
// // }

// // function forgotPasswordMailing(email,password) {
// //   transporter.sendMail({
// //       from: process.env.GMAIL,
// //       to: email,
// //       subject: `System generated password for for logging In on SeasonalEmployment.com`,
// //       html: `<p>This password is system generated password to login into your account on <b>SeasonalEmployment.com</b>. Please Login and change your password in profile section.</p>
// //       <h3>Password: ${password}`
// //   }).then((response) => {
// //       console.log(response);
// //   }).catch((err) => console.log(err.message))
// // }

// module.exports={sendMailToUser};
// // module.exports={sendMailToUser, isAcceptedMailToProvider, isAcceptedMailToSeeker, forgotPasswordMailing};