
var mongoose = require('mongoose'),
Seance = mongoose.model('seance');

exports.list = function(req, res){
Seance.find().populate('adherent').populate('abonnement').exec((err, s) => {
    if (err) return res.status(500).send(err);
    if (!s) {
        err = new Error('List: seance non trouvee');
        return res.status(404).send(err);
    }
    res.send(s);
});
}

exports.read = function(req, res){
var senace = req.params.id;
Seance.findById(senace).populate('adherent').populate('abonnement').exec((err, s) =>{
        if (err) return res.status(500).send(err);
        if (!s) {
            err = new Error('Read: seance non trouvee');
            return res.status(404).send(err);
        }
        res.send(s);
    }
);
}

exports.create = (req, res) =>	{
var seance = req.body.seance;
Seance.create(seance, (err, a) =>	{
    if (err) return res.status(500).send(err);
    if (!a) {
        err = new Error('Erreur creation seance');
        return res.status(404).send(err);
    }
    console.log('Nouvelle seance: ' + a.createdAt);
    res.send(a);
});
}

exports.update = (req, res) =>	{
var id = req.params.id;
var seance = req.body.seance;
Seance.findByIdAndUpdate(id, seance, (err, s) =>	{
    if (err) return res.status(500).send(err);
    if (!s) {
        err = new Error('Update: seance non trouvée');
        return res.status(404).send(err);
    }
    console.log('Update seance: ' + s.createdAt);
    res.send(s);
});
}

exports.delete = (req, res) =>	{
var id = req.params.id;
Seance.findByIdAndRemove(id, (err, s) =>	{
    if (err) return res.status(500).send(err);
    if (!s) {
        err = new Error("Supression: seance n'existe pas");
        return res.status(404).send(err);
    }
    console.log('Supression seance: ' + s.createdAt);
    res.send(s);
});
}

exports.listBetweenDates = (req, res) =>    {
    let dateDebutStr = req.params.debut,
        dateFinStr = req.params.fin;
    let dateDebut = new Date(dateDebutStr),
        dateFin = new Date(dateFinStr);

    Seance.find({"createdAt": {
        "$gte": dateDebut,
        "$lt": dateFin
    }}).exec((err, a) =>    {
        if (err) return res.status(500).send(err);
        if (!a) {
            err = new Error("Incomes: abonnement n'existe pas");
            return res.status(404).send(err);
        }
        res.send(a);
    });
}