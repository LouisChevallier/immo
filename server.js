let express = require('express')
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongodb');
var ObjectId = require('mongodb').ObjectID;

/*const connectDB = require('./server/database/connection')*/

let app = express()

dotenv.config( { path : 'config.env'} )

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))

// mongodb connection
//connectDB();

mongoose.connect('mongodb+srv://admin:admin@cluster0.quliw.mongodb.net/immo?retryWrites=true&w=majority', (err,db) =>{
    if(err) throw err

    console.log('MongoDB connected')
    
    dbo = db.db("immo")

    
    /*dbo.collection("annonces").insertOne({
        titre: "Appartement 5 pièces ...",
        description: "blablabla",
        adresse: "1 avenue des champs élysées",
        code_postal: 75000,
        ville: "Paris",
        prix: 1000000
    })*/
})

app.get('/',(request,response) =>{
    dbo.collection("annonces").find({}).toArray(function(err, annonces) {
        if (err) throw err
        response.render('pages/index', {ann:annonces})
    })
} )

app.get('/annonces',(request,response) =>{
    response.render('pages/annonces')
} )
app.get('/contact',(request,response) =>{
    response.render('pages/contact')
} )
app.get('/ajouter',(request,response) =>{
    response.render('pages/add_annonce')
} )
app.get('/update',(request,response) =>{
    id = request.query.id
    response.render('pages/update_annonce', {id:id})
} )

app.get('/annonce',(request,response) =>{
    console.log(request.query.id)
    dbo.collection("annonces").find({ _id: ObjectId(request.query.id) }).toArray(function(err, annonces) {
        if (err) throw err
        response.render('pages/annonce', {ann:annonces})
    })
} )

app.get('/delete',(request,response) =>{
    console.log(request.query.id)
    dbo.collection("annonces").remove({ _id: ObjectId(request.query.id) }, function(err, val){
        if (err) throw err
        response.redirect('/')
    })
} )

app.post('/update',(request,response) =>{
    id = request.query.id
    dbo.collection("annonces").updateOne(
        { _id: ObjectId(id) },
        { $set: { titre: request.body.titre,
        description: request.body.description,
        adresse: request.body.adresse,
        ville: request.body.ville,
        code_postal: request.body.code_postal,
        prix: request.body.prix
        }}
    )
    //response.redirect('annonce/?id=' + id)
    response.redirect('/')
} )

app.post('/ajouter',(request,response) =>{
    console.log(request.body)
    dbo.collection("annonces").insertOne({
        titre: request.body.titre,
        description: request.body.description,
        adresse: request.body.adresse,
        ville: request.body.ville,
        code_postal: request.body.code_postal,
        prix: request.body.prix
    })
    response.redirect('/')
} )

//app.use('/', require('./server/routes/router'))

app.listen(8080)