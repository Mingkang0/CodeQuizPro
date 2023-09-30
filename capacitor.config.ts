import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.codequizpro',
  appName: 'CodeQuizPro',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  "plugins": {
    "HuaweiAuthServicePlugin": {
      "appId": "com.codequizpro"
    }
  }
};

export default config;
