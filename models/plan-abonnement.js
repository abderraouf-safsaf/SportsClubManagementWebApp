var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PlanAbonnement = new Schema({
  libelle: { type: String, default: '' },
  duree: { type: Number, default: '30' },
  nombreSeances: { type: Number, default: 0 },
	montant: { type: Number, default: 1 },
}, {timestamps: true});

PlanAbonnement.method({

})


PlanAbonnement.static({

})

mongoose.model('planabonnement', PlanAbonnement)