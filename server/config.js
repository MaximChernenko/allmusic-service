const dbUser = "Maxim";
const dbPassword = "maxonline111";

const config = {
  port: 8080,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@allmusiccluster-0kcca.mongodb.net/allmusic-service`
};

module.exports = config;
