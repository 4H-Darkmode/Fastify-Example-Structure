const fp = require('fastify-plugin');
const postgres = require('@fastify/postgres');
const dbConfig = require('../config/database');

async function dbConnector(fastify, options) {
    // Register the PostgreSQL plugin with the connection string from config
}