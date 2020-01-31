const { Router } = require('express');
const DevController = require ('./controllers/DevControllers');
const SearchController= require('./controllers/SearchController');
const routes = Router();
// metodos http: get, post, put, delete
//Tipos de parametros:

//Query Params: request.query(filtros, oredenação, paginação)
//ROute Params: request.params(idenfica um recurso para se modificado ou excluido ) 
//Body: reques.body (dados para criação ou para alterar do registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store );

routes.get ('/search',SearchController.index);

module.exports = routes;