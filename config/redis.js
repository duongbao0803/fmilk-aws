const { promisify } = require("util");
const redis = require("redis");
const dotenv = require("dotenv");

dotenv.config();

const redisClient = redis.createClient({
  url: "rediss://red-cr5jo03tq21c73b4prqg:EVaBxEHoMkv9VcZigq3NvGuKf4MVjrJS@oregon-redis.render.com:6379",
});

const getAsync = promisify(redisClient.get).bind(redisClient);
const setexAsync = promisify(redisClient.setex).bind(redisClient);
const delAsync = promisify(redisClient.del).bind(redisClient);
const keysAsync = promisify(redisClient.keys).bind(redisClient);

redisClient.on("connect", () => {
  console.log("Connected to redis");
});

redisClient.on("error", (err) => {
  console.error("Err", err);
});

module.exports = { redisClient, getAsync, setexAsync, delAsync, keysAsync };
