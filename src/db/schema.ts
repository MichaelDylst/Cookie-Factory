import { pgTable, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const gameInformation = pgTable("game_information", {
  gameId: serial("game_id").primaryKey().notNull(),
  cookies: integer(),
  grandma: integer(),
  oven: integer(),
  gameDate: timestamp("game_date", { mode: "string" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});
