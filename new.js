const http = require("http");

let items = ["Apple", "Banana"];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET") {
        res.end(JSON.stringify(items));
    } else if (req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const newItem = JSON.parse(body);
                items.push(newItem);
                res.statusCode = 201;
                res.end(JSON.stringify({ message: "Item added", item: newItem }));
            } catch (err) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });
    } else {
        res.statusCode = 405;
        res.end(JSON.stringify({ error: "Method not allowed" }));
    }
});

server.listen(4000, () => {
    console.log("Server running on port http://localhost:4000/");
});