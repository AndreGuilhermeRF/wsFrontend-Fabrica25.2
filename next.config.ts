import type { NextConfig } from "next";

const nextConfig: NextConfig = {
eslint: {
    // ⚠️ Atenção: isso permite buildar mesmo com erros!
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
module.exports = {
  images: {
    remotePatterns: [new URL('https://breedersguide.home.blog/wp-content/uploads/2019/04/bulbasaur.png')],
  },
}
/** @type {import('next').NextConfig} */

