import Fastify from "fastify";
import dotenv from "dotenv";
import fastifyPostgres from "@fastify/postgres";
import cors from "@fastify/cors";
import { drizzle } from "drizzle-orm/node-postgres";
import { db } from "../src/db";

dotenv.config();

const fastify = Fastify({ logger: true });

fastify.register(cors, {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
});
fastify.register(fastifyPostgres, {
  connectionString: process.env.DATABASE_URL,
});

fastify.get("/", async (request, reply) => {
  const result = await db.select().from("game_information");
  reply.send(result);
});

fastify.get("/game-information", function (req, reply) {
  fastify.pg.query(
    "SELECT game_id FROM game_information",
    function onResult(err, result) {
      reply.send(err || result.rows);
    }
  );
});

fastify.post("/saveGameInfo", async (req, reply) => {
  try {
    const { cookies, grandma, ovent } = req.body;
    fastify.log.info({ cookies, grandma, ovent });
    const query =
      "INSERT INTO game_information (cookies, grandma, oven) VALUES ($1, $2, $3) RETURNING *;";

    const result = await fastify.pg.query(query, [cookies, grandma, ovent]);
    reply.send(result.rows);
  } catch (err) {
    return reply.code(500).send({ message: "An error occured", err });
  }
});

try {
  await fastify.listen({ port: 3001 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
