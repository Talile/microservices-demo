const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("http://backend:3000/api");
        res.send(response.data.message);
    } catch (err) {
        res.send("Error calling backend");
    }
});

app.listen(3001, () => {
    console.log("Frontend running on port 3001");
});
