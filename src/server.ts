import Fastify from "fastify";
import dotenv from "dotenv";
import fastifyPostgres from "@fastify/postgres";
import cors from "@fastify/cors";
import { db } from "./db";
import { gameInformation } from "./db/schema";

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
  const result = await db.select().from(gameInformation);
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

interface GameInfo {
  cookies: number;
  grandma: number;
  ovent: number;
}

fastify.post<{ Body: GameInfo }>("/saveGameInfo", async (req, reply) => {
  try {
    const { cookies, grandma, ovent } = req.body;
    fastify.log.info({ cookies, grandma, ovent });
    const result = await db
      .insert(gameInformation)
      .values({ cookies, grandma, oven: ovent })
      .returning();
    reply.send(result);
  } catch (err) {
    return reply.code(500).send({ message: "An error occured", err });
  }
});

try {
  fastify.listen({ port: 3001 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
