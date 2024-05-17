import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'E_Shop',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44329/',
    redirectUri: baseUrl,
    clientId: 'E_Shop_App',
    responseType: 'code',
    scope: 'offline_access E_Shop',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44329',
      rootNamespace: 'E_Shop',
    },
  },
} as Environment;
