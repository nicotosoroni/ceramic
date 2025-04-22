/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA).
  images: {
    unoptimized: true,
  },
  distDir: './dist', // Changes the build output directory to `./dist/`.
}
 
export default nextConfig