import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prismaClient";
const JSONbig = require("json-bigint");

// TODO: 認証
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const list = await prisma.usd_jpy_1min_annotation.findMany({});
  return Response.json(JSONbig.parse(JSONbig.stringify(list)));
}
