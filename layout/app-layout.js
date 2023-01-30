const express = require('express');
const Layout = require('@podium/layout');
const utils = require('@podium/utils');

const app = express();

const domain = 'http://localhost';
const port = '7000';
const url = `${domain}:${port}/app`;

const layout = new Layout({
    name: 'appLayout',
    pathname: '/app',
});

layout.view((incoming, content) => {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            ${incoming.css.map(utils.buildLinkElement).join('\n')}
            <title>${incoming.view.title}</title>
        </head>
        <body>
            ${content}
            ${incoming.js.map(utils.buildScriptElement).join('\n')}
        </body>
    </html>`;
});

const vuePodlet = layout.client.register({
    name: 'vuePodlet',
    uri: 'http://localhost:7200/manifest.json',
});

const reactPodlet = layout.client.register({
    name: 'reactPodlet',
    uri: 'http://localhost:7300/manifest.json',
});

app.use(layout.middleware());

app.get('/app', async (req, res) => {
    const incoming = res.locals.podium;

    const [ react, vue] = await Promise.all([
        reactPodlet.fetch(incoming),
        vuePodlet.fetch(incoming)
    ]);
    
    incoming.podlets = [react, vue];
    incoming.view.title = 'App';

    res.podiumSend(`
        ${react}
        ${vue}
    `);
});

app.listen(port, () => {
    console.log(url);
});
