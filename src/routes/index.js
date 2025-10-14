async function routes(fastify, options) {
  fastify.get("/health", async () => {
    return { status: "ok" };
  });

  fastify.register(require("./user.routes"), { prefix: "/users" });
}

module.exports = routes;
