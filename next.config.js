/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  exportPathMap: async function (_defaultPathMap, { _dev, _dir, _outDir, _distDir, _buildId }) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/projects': { page: '/projects' },
      '/tech-stack': { page: '/tech-stack' },
      '/resume': { page: '/resume' }
    };
  }
};

module.exports = nextConfig
