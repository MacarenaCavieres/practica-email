import nodemailer from "nodemailer";

const sendEmail = async (req, res) => {
    try {
        const { mail, asunto, mensaje } = req.body;

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        await transport.sendMail({
            from: mail,
            to: "bar@example.com, baz@example.com",
            subject: asunto,
            // text: "Hello world?",
            html: mensaje,
        });

        return res.redirect("/");
    } catch (error) {
        console.error("Error===>", error);
    }
};

export const methodMail = {
    sendEmail,
};
