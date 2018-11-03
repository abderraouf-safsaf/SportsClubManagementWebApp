var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Abonnement = new Schema({
  adherent: {type: Schema.Types.ObjectId, ref: 'adherent'},
  plan: {type: Schema.Types.ObjectId, ref: 'planabonnement'},
  date_debut: { type: String, default: new Date().toJSON().slice(0,10) },
  montantEncaisse: {type: Number, default: 1},
  nbSeancesRestantes: {type: Number, default: 0},
}, {timestamps: true});

Abonnement.method({

})


Abonnement.static({

})

mongoose.model('abonnement', Abonnement)