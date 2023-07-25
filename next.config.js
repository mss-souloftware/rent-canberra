/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: "mongodb://localhost:27017/rent-canberra",
    NEXTAUTH_SECRET: "rentcanberrawebapp",
  },
};

module.exports = nextConfig;
