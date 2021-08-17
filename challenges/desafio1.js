db.getCollection("produtos").updateMany(
  {},
  { $set: { criadoPor: "Ronald McDonald" } },
  { upsert: false },
);
