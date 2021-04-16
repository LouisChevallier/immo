require('dotenv').config();
const mongoose = require('mongodb');
var dbo = '';

mongoose.connect('mongodb+srv://admin:admin@cluster0.quliw.mongodb.net/sample_airbnb?retryWrites=true&w=majority', (err,db) =>{
    if(err) throw err

    console.log('connection DB OK')
    dbo = db.db("immo")
})
/*const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB*/