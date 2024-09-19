import { tailwind } from "@gtramontina.com/elysia-tailwind";
import { Elysia } from 'elysia'
import { html, Html } from '@elysiajs/html'

const app = new Elysia();
app.use(tailwind({
  path: "/public/stylesheet.css",
  source: "./src/styles.css",
  config: "./tailwind.config.js",
  options: {
      minify: true,
      map: true,
      autoprefixer: false
  },
}));
app.use(html());

app.get('/', () => (
    <html lang="en">
        <head>
            <title>Hello World</title>
            <link href="public/stylesheet.css" type="text/css" rel="stylesheet"/>
        </head>
        <body>
            <h1 class="flex justify-center content-center bg-purple-600 text-green-300">Hello World</h1>
        </body>
    </html>
));
app.listen(3000);

console.log("Elysia @ localhost/3000");
