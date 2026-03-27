import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      ...config.server,
      allowedHosts: [
        'retirement-shield-strapi-production.up.railway.app',
      ],
    },
  });
};