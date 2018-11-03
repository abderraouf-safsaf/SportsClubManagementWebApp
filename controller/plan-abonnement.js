
var mongoose = require('mongoose'),
PlanAbonnement = mongoose.model('planabonnement');



exports.list = function(req, res){
PlanAbonnement.find((err, p) =>	{
    if (err) res.status(500).send(err);
    if (!p) {
        err = new Error('List: plan abonnements non trouvee');
        return res.status(404).send(err);
    }
    res.send(p);
});
}

exports.read = function(req, res){
var planAbonnementId = req.params.id;
PlanAbonnement.findById(planAbonnementId, (err, p) =>{
    if (err) return res.status(500).send(err);
    if (!p) {
        err = new Error('Read: plan abonnement non trouvee');
        return res.status(404).send(err);
    }
    res.send(p);
});
}
exports.listBetweenDates = (req, res) =>    {
    let dateDebutStr = req.params.debut,
        dateFinStr = req.params.fin;
    let dateDebut = new Date(dateDebutStr),
        dateFin = new Date(dateFinStr);

    PlanAbonnement.find({"createdAt": {
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

exports.create = (req, res) =>	{
var planAbonnement = req.body.planAbonnement;
PlanAbonnement.create(planAbonnement, (err, p) =>	{
    if (err) return res.status(500).send(err);
    if (!p) {
        err = new Error('Erreur creation plan abonnement');
        return res.status(404).send(err);
    }
    console.log('Nouveau plan abonnement ajouté: ' + p.libelle);
    res.send(p);
});
}

exports.update = (req, res) =>	{
var id = req.params.id;
var planAbonnement = req.body.planAbonnement;
PlanAbonnement.findByIdAndUpdate(id, planAbonnement, (err, p) =>	{
    if (err) return res.status(500).send(err);
    if (!p) {
        err = new Error('Update: plan abonnement non trouvée');
        return res.status(404).send(err);
    }
    console.log('Update plan abonnement: ' + p.libelle);
    res.send(planAbonnement);
});
}

exports.delete = (req, res) =>	{
var id = req.params.id;
PlanAbonnement.findByIdAndRemove(id, (err, p) =>	{
    if (err) return res.status(500).send(err);
    if (!p) {
        err = new Error("Supression: plan abonnement n'existe pas");
        return res.status(404).send(err);
    }
    console.log('Supression plan abonnement: ' + p.libelle);
    res.send(p);
});
}
