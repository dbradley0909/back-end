const express = require('express');
const cors = require('cors');


const app = express();
console.log(app);
app.use(express.json());
app.use(cors());

app.get("/api/users/", (req, res) => {
    let friends = ["Nick", "Erica", "Lisa", "Wiiliam", "Ray"];
    res.status(200).send(friends);
  });

  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });


app.listen(4000, () => console.log('server is listening 4000'));

