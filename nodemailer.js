"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "outlook",
    port: 2525,
    sercure: false,
    auth: {
        user: "tim.statler@sievertelectric.com",
        pass: "Sherlock17761776"
    }
});

const options = {
    from: "Tim Statler <tim.statler@sievertelectric.com>",
    to: "timstats91@gmail.com",
    subject: "sending email with node.js!",
    text: "wow! that was simple"
};

transporter.sendMail(options, function (err, info) {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Sent: " + info.response);
})