//core modules
const fs = require("fs"); //file system module
const http = require("http");
const url = require("url");

//3rd party modules
const slugify = require("slugify");

//my modules
const replaceTemplate = require("./modules/replaceTemplate");

//Blocking synchronous - each line blocks next line until complete
// const textIn = fs.readFileSync("./starter/txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about the avacado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./starter/txt/output.txt", textOut);
// console.log("output.txt file written");

// //Non Blocking asynchronous - runs in background with callback function
// //fs.readFile(fpath, format, caallback)
// fs.readFile("./starter/txt/start.txt", "utf-8", (err, data) => {
//     console.log(data);
// });

// console.log("Reading file start.txt");

//server

//================
//read files once
//================
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
const templateOverview = fs.readFileSync(
    `${__dirname}/templates/template_overview.html`,
    "utf-8"
);
const templateProduct = fs.readFileSync(
    `${__dirname}/templates/template_product.html`,
    "utf-8"
);
const templateCard = fs.readFileSync(
    `${__dirname}/templates/template_card.html`,
    "utf-8"
);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));

// called for each request
//create server
const server = http.createServer((req, res) => {
    console.log(req.url);

    const { query, pathname } = url.parse(req.url, true);

    //overview page
    if (pathname === "/" || pathname === "/overview") {
        res.writeHead(200, {
            "Content-type": "text/html"
        });

        //iterate products object
        const cardsHTML = dataObj
            .map((el) =>
                //replace strings in template
                replaceTemplate(templateCard, el)
            )
            .join("");
        //replace template string
        const output = templateOverview.replace(/<%productCards%>/g, cardsHTML);
        res.end(output);

        //product page
    } else if (pathname === "/product") {
        const product = dataObj[query.id];
        res.writeHead(200, {
            "Content-type": "text/html"
        });
        output = replaceTemplate(templateProduct, product);
        res.end(output);

        //api page
    } else if (pathname === "/api") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);
    } else {
        //not found
        res.writeHead(404, {
            "Content-type": "text/html"
        });
        res.end("<h1>Page not found</h1>");
    }
});

server.listen(3010, "localhost", () => {
    console.log("Listening on port 3010");
});
