const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/ashwinpreet.github.io/' : '',
	eslint: {
		ignoreDuringBuilds: true
	}
}
