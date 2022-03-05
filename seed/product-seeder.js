var Product = require("../models/product");

var mongoose = require("mongoose");

mongoose.connect("localhost:27017/shopping");

var products = [
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/51k5NgL+B+L._SX398_BO1,204,203,200_.jpg",
    title: "Java - The Complete Reference",
    description:
      "This book is a comprehensive guide to the Java language, describing its syntax, keywords and fundamental programming principles.",
    price: 710,
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/51VE58GLDdL._SX338_BO1,204,203,200_.jpg",
    title: "Let Us Python ",
    description:
      "Most programmers learning Python are usually comfortable with some or the other programming language and are not interested in going through the typical learning curve of learning the first programming language.",
    price: 320,
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/51Uqe5PHbML._SX381_BO1,204,203,200_.jpg",
    title: "C++: The Complete Reference",
    description:
      "Best-selling genius Herb Schildt covers everything from keywords, syntax, and libraries, to advanced features such as overloading, inheritance, virtual functions, namespaces, templates, and RTTI―plus, a complete description of the Standard Template Library (STL).",
    price: 500,
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/41vXBnhzmXL._SX327_BO1,204,203,200_.jpg",
    title: "Data Structures & Algorithms",
    description:
      "An ideal book for first course on data structures and algorithms, its text ensures a style and content relevant to present-day programming. ",
    price: 715,
  }),
  new Product({
    imagePath: "https://images-na.ssl-images-amazon.com/images/I/51qwOfw5s4L._SX382_BO1,204,203,200_.jpg",
    title: "Machine Learning",
    description:
      "This book offers the readers The basics of machine learning in a very simple, user-friendly language. While browsing the table of Contents, you will realize that you are given an introduction to every concept that comes under the umbrella of machine learning. ",
    price: 400,
  }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
