/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_KEY: process.env.API_KEY,
        DB_CONNECTION_PASSWORD: process.env.DB_CONNECTION_PASSWORD,
        DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING
    },
    webpack: (config) => {
        config.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
        return config;
    }
};

export default nextConfig;
