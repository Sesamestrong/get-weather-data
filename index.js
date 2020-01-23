const app = require("express")();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post("/", (req, res) => {
    const {
        year,
        month,
        day
    } = req.body;
    const date = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");
    const src = date.format("YYYYMMDD");
    date.subtract(1, "day");
    const previous = date.format("YYYYMMDD");
    date.add(2, "day");
    const next = date.format("YYYYMMDD");
    res.json({
        src,
        previous,
        next
    });
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () =>console.log("Listening on port " + PORT));
