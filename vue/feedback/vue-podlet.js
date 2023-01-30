const express = require("express");
const dotenv = require("dotenv");
const result = dotenv.config();
const Podlet = require("@podium/podlet");
const utils = require('@podium/utils');
const fs = require("fs");

const app = express();

const podlet = new Podlet({
  name: "vuePodlet", // required
  version: "0.1.0", // required
  pathname: "/", // required
  development: true, // optional, defaults to false
});

podlet.view((incoming, content) => {
  return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            ${incoming.css.map(utils.buildLinkElement).join("\n")}
            <title>${incoming.view.title}</title>
        </head>
        <body>
            ${content}
            ${incoming.js.map(utils.buildScriptElement).join("\n")}
        </body>
    </html>`;
});

let vueCSS = fs.readdirSync("dist/css");
vueCSS.forEach((element) => {
  if (element.indexOf(".css") !== -1 && element.indexOf(".css.map") === -1) {
    podlet.css({
      value:
        process.env.PUBLIC_URL + ":" + process.env.PORT + "/css/" + element,
    });
  }
});

let vueJS = fs.readdirSync("dist/js");
vueJS.forEach((element) => {
  if (element.indexOf(".js") !== -1 && element.indexOf(".js.map") === -1) {
    podlet.js({
      value: process.env.PUBLIC_URL + ":" + process.env.PORT + "/js/" + element,
      defer: "",
    });
  }
});

app.use(podlet.middleware());

app.get(podlet.content(), (req, res) => {
  res.status(200).podiumSend('<div id="vuepod-content"></div>');
});

app.get(podlet.manifest(), (req, res) => {
  res.status(200).send(podlet);
});

app.use("/css", express.static("dist/css"));
app.use("/js", express.static("dist/js"));

app.listen(process.env.PORT, () => {
    console.log(`Vue Podlet listening at http://localhost:${process.env.PORT}`)
});