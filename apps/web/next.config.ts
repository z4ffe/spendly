import type {NextConfig} from 'next'
import path from 'node:path'

const nextConfig: NextConfig = {
	devIndicators: false,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
		prependData: `
      @import "_variables.scss";
      @import "_utils.scss";
      @import "_breakpoints.scss";`
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${process.env.API_URI}/:path*`
			}
		]
	}
}

export default nextConfig
