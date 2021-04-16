var Annoncedb = require('../model/model');

// create and save new annonce
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Attention : contenu vide!"});
        return;
    }

    // new annonce
    const annonce = new Annoncedb({
        title : req.body.title,
        description : req.body.description,
        adresse: req.body.adresse,
        ville : req.body.ville,
        codepostal : req.body.codepostal,
        prix : req.body.prix
    })

    // save annonce in the database
    annonce
        .save(annonce)
        .then(data => {
            //res.send(data)
            res.redirect('/add-annonce');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Une erreur est apparue lors de la mise en ligne."
            });
        });

}

// retrieve and return all annonces/ retrive and return a single annonce
exports.find = (req, res)=>{

}

// Update a new idetified user by user id
exports.update = (req, res)=>{

}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{

}