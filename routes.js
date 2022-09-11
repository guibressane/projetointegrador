const registrationController = require( './controllers/registrationController');
const donationsController = require( './controllers/donationsController');


const router = (app) => {
  app.get('/', (req, res) => {return res.send("Hello Senac")});
  // app.get('/registrations/all', registrationController.index);
  app.get('/registrations', registrationController.read);
  app.post('/registrations', registrationController.create);
  app.delete('/registrations', registrationController.remove);
  app.post('/donations', donationsController.create);
  app.get('/donations/:id', donationsController.read);
  app.delete('/donations/:id', donationsController.remove);
  return app;
};

module.exports =  { router };
