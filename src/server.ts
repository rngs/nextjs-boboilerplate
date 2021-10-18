const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.all('*', (request, response) => {
        console.log(request);
        return handle(request, response);
    });

    server.listen(port, (error) => {
        if (error){ 
            throw error;
        }
        console.log(`> Ready on http://localhost:${port}`);
    });
});
