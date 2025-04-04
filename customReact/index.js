import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        message: "Type in your URL : ",
        name: "URL",
    },
    {
        message: "Enter the name for the QR code image (without extension): ",
        name: "filename",
    }
])
    .then((answers) => {
        console.log(answers);
        const url = answers.URL;
        const filename = answers.filename || "qr_img"; // Default name if user leaves it empty

        let qr_svg = qr.image(url);
        let qr_name = `${filename}.png`;
        qr_svg.pipe(fs.createWriteStream(qr_name));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });

        console.log(`QR code saved as ${qr_name}`);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment.");
        } else {
            console.log("Something went wrong: ", error);
        }
    });
