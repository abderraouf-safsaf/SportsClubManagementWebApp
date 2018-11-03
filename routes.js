
var adherentController = require('./controller/adherent.js'),
	planAbonnementController = require('./controller/plan-abonnement.js'),
	abonnementController = require('./controller/abonnement.js'),
	seanceController = require('./controller/seance.js');

module.exports = function(app){

	app.get('/adherents', adherentController.list);
	app.post('/adherents', adherentController.create);
	app.get('/adherents/:id', adherentController.read);
	app.put('/adherents/:id', adherentController.update);
	app.delete('/adherents/:id', adherentController.delete);
	app.get('/adherents/:debut/:fin', adherentController.listBetweenDates);

	app.get('/planAbonnements', planAbonnementController.list);
	app.post('/planAbonnements', planAbonnementController.create);
	app.get('/planAbonnements/:id', planAbonnementController.read);
	app.put('/planAbonnements/:id', planAbonnementController.update);
	app.delete('/planAbonnements/:id', planAbonnementController.delete);
	app.get('/planAbonnements/:debut/:fin', planAbonnementController.listBetweenDates);

	app.get('/abonnements', abonnementController.list);
	app.post('/abonnements', abonnementController.create);
	app.get('/abonnements/:id', abonnementController.read);
	app.put('/abonnements/:id', abonnementController.update);
	app.delete('/abonnements/:id', abonnementController.delete);
	app.get('/abonnements/:debut/:fin', abonnementController.listBetweenDates);

	app.get('/seances', seanceController.list);
	app.post('/seances', seanceController.create);
	app.get('/seances/:id', seanceController.read);
	app.put('/seances/:id', seanceController.update);
	app.delete('/seances/:id', seanceController.delete);
	app.get('/seances/:debut/:fin', seanceController.listBetweenDates);

}