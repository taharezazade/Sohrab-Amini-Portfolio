/** @format */

import { PrismaClient } from "@prisma/client";
import { process } from "zod/v4/core";

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development" ?
      ["query", "warn", "error"]
    : ["error"],
});

export default prisma;
