const nodemailer = require('nodemailer');

export default async (req, res) => {
    if (req.method === 'POST') {
        const userMessage = req.body.message;

        let reply = '';

        // Eenvoudige trefwoorden gebaseerde reacties
        if (userMessage.toLowerCase().includes("hallo")) {
            reply = "Hallo! Hoe kan ik je helpen?";
        } else if (userMessage.toLowerCase().includes("probleem")) {
            reply = "Kun je het probleem wat meer in detail beschrijven?";
        } else if (userMessage.toLowerCase().includes("dank")) {
            reply = "Graag gedaan!";
        } else if (userMessage.toLowerCase().includes("chromebook")) {
            reply = "Ga langs bij meneer Smet. Je vindt hier de beschikbare tijden: https://docs.google.com/document/d/1sCE0KYGVNyY5bunSDriJOCXYvMDk_ywwJ21wLPs1bVs/edit?usp=sharing";
        } else if (userMessage.toLowerCase().includes("smartschool")) {
            reply = "Bekijk via deze link de handleiding van Smartschool: https://ka-erasmus.smartschool.be/?module=Manual&file=manual&function=main";
        } else if (userMessage.toLowerCase().includes("google")) {
            reply = "Bekijk de Google handleiding via deze site: https://support.google.com/a/answer/1631886?hl=nl";
        } else {
            // Als de chatbot het antwoord niet weet, stuur een e-mail naar een echte persoon
            reply = "We verbinden je door naar een medewerker. Je ontvangt spoedig een antwoord.";

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'antwoorder-email@gmail.com', // Vervang dit met het daadwerkelijke e-mailadres
                subject: 'Nieuwe chatbericht van de ICT-Helpdesk',
                text: `Je hebt een nieuw bericht: ${userMessage}`
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email verstuurd: ' + info.response);
                }
            });
        }

        res.status(200).json({ reply });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
