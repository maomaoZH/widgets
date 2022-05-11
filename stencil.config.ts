import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'widget',
  globalStyle: 'src/global/scale.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'telekom/fonts/TeleNeoWeb',
          dest: 'build/fonts/TeleNeoWeb',
          warn: true,
        },
      ],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers,
      copy: [
        {
          src: 'telekom/fonts/TeleNeoWeb',
          dest: 'build/fonts/TeleNeoWeb',
          warn: true,
        },
      ],
    },
  ],
};
