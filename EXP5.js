const express = require("express");

const app = express();

app.use(express.json());

// GET
app.get("/users", (req, res) => {
    res.send("All users");
});

// POST
app.post("/users", (req, res) => {
    res.send("User created");
});

// PUT
app.put("/users/:id", (req, res) => {
    res.send(`User ${req.params.id} updated`);
});

// DELETE
app.delete("/users/:id", (req, res) => {
    res.send(`User ${req.params.id} deleted`);
});

app.listen(4000, () => {
    console.log("Server running on port http://localhost:4000/");
});