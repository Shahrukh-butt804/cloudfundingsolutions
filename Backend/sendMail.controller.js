require("dotenv").config()
const nodeMailer = require("nodemailer")

//Transporter For Email
const transporter = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SENDER_EMAIL_ADDRESS,  // Sender Gmail Address
        pass: process.env.APP_PASS            //App password
    }
})


const sendMail = async (body, file) => {

    // Destructuring data from Body
    const { merchantFullName,
        businessLegalName,
        amountRequested,
        email,
        businessStartDate,
        industry,
        businessAddress,
        EIN,
        socialSec,
        dateOfBirth,
        purposeOfFunds,
        homeAddress,
        ownerShip,
        contactNo,
        altContactNo, } = body

    // html pattern to display Email in gmail
    const html = `
        <h3>Merchant Details</h3>
        <p><strong>Merchant FullName:</strong> ${merchantFullName}</p>
        <p><strong>Business Legal Name:</strong> ${businessLegalName}</p>
        <p><strong>Amount Requested:</strong> ${amountRequested}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Start Date:</strong> ${businessStartDate}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Business Address:</strong> ${businessAddress}</p>
        <p><strong>EIN:</strong> ${EIN}</p>
        <p><strong>Social Security:</strong> ${socialSec}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Purpose of Funds:</strong> ${purposeOfFunds}</p>
        <p><strong>Home Address:</strong> ${homeAddress}</p>
        <p><strong>Ownership:</strong> ${ownerShip}</p>
        <p><strong>Contact No:</strong> ${contactNo}</p>
        <p><strong>Alternate Contact No:</strong> ${altContactNo}</p>
    `;

    // Mail Ootions to configure Email
    const mailOptions = {

        from: {
            name: 'CLOUDFUNDINGSOLUTIONS',
            address: process.env.SENDER_EMAIL_ADDRESS, // Sender Gmail Address
        },                                             //Sender Name And Email Address as an object,
        to: process.env.SENDER_EMAIL_ADDRESS,         // reciever email can be multiple coma seprated and  array
        subject: `${merchantFullName}`,               // Subject Line
        text: "REST OF DETAILS",                       // text
        html,
        attachments: file ? [
            {
                filename: file.originalname, // Original filename
                content: file.buffer, // The actual file buffer
                contentType: file.mimetype, // Use the MIME type
            },
        ] : [],
    }

    // Sending Email
    try {
        await transporter.sendMail(mailOptions)
        console.log("email has been sent Successfully!")
    } catch (error) {
        console.log("Error While sending Email", error)
    }
}

module.exports = sendMail