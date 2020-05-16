"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Tweet",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Like",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  },
  {
    name: "Retweet",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
