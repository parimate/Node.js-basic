const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
  res.render("products",{
    products: [
        {productTitle: 'car1',productDescription: 'HONDA',productPrice : '30000'},
        {productTitle: 'car2',productDescription: 'YAMAHA',productPrice : '35000'},
        {productTitle: 'car3',productDescription: 'BMW',productPrice : '42000'}, 
        {productTitle: 'car4',productDescription: 'SUSUKI',productPrice : '10000'}
    ],
    });
});

productRouter.route("/1").get((req, res) => {
  res.send("Product 2");
});

app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "First_Parimate",
    customers: ["one", "two", "thee"],
  });
});

app.listen(PORT, () => {
  debug("Listening on port", PORT);
});
