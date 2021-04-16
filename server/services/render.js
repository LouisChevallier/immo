exports.homeRoutes = (req, res) => {
    res.render('index');
}

exports.add_user = (req, res) =>{
    res.render('add_annonce');
}

exports.update_user = (req, res) =>{
    res.render("update_annonce")
}