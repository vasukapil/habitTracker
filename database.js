const mongoose = require("mongoose");
const db_link =
  "mongodb+srv://vasukapil:vafpVstYQSvZa7PM@cluster0.dju8jjv.mongodb.net/?retryWrites=true&w=majority";

const databaseConnect = (function () {
  mongoose
    .connect(db_link)
    .then(() => {
      console.log("database connection established");
    })
    .catch(function (err) {
      console.log(err);
    });
})();

module.exports = databaseConnect;

//vafpVstYQSvZa7PM