/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: "mongodb+srv://sufyansouloftware:KpSrizhAVJ4Wt8Rt@cluster0.tc0vxbw.mongodb.net/?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "rentcanberrawebapp",
  },
};

module.exports = nextConfig;
