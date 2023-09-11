import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.codequizpro',
  appName: 'CodeQuizPro',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
