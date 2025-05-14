import type {NextConfig} from 'next'
import path from 'node:path'

const nextConfig: NextConfig = {
	devIndicators: false,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
		prependData: `
      @import "_variables.scss";
      @import "_utils.scss";
      @import "_breakpoints.scss";`,
	},
};

export default nextConfig;
