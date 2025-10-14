const userController = require("../controllers/user.controller");
const userSchemas = require('../schemas/user.schema');

async function userRoutes(fastify, options) {
  fastify.post('/signup', {
    schema: userSchemas.signupSchema,
    handler: userController.signup
  });
}

module.exports = userRoutes;