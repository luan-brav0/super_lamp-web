import { Elysia } from 'elysia'
import { html, Html } from '@elysiajs/html'

new Elysia()
    .use(html())
    .get('/', () => (
        <html lang="en">
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    ))
    .listen(3000)
