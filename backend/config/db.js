/*const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://madhukatipally:<db_password>@cluster0.y6p4m1w.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;*/




const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://madhukatipally:madhukatipally@cluster0.y6p4m1w.mongodb.net/',{

      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
).then(

    console.log(`MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`)
 ) .catch (
  err=>console.error(`Error: ${err.message}`)
)
  


module.exports = connectDB;