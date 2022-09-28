const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://ManojSunar:manoj123@cluster0.vbfu7ue.mongodb.net/DynamicData?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database is Created and Connect successfully");
  })
  .catch((err) => {
    console.log(err);
  });
