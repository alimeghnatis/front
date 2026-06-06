// @ts-ignore
import type { StorybookConfig } from "@storybook/react";
import { configureSharedConfig, getAbsolutePath } from "@aztlan/storybook-config";

const {
  addons,
  core,
  docs,
  framework,
  pushScss,
  pushTsconfigPathsPlugin,
  staticDirs,
  typescript,
  stories,
} = configureSharedConfig({
  location:__dirname,
  assets:[
    //`${getAbsolutePath('@aztlan/assets')}/fonts`,
    `${getAbsolutePath('@fwrlines/assets-k')}/fonts`,
    `${getAbsolutePath('@aztlan/assets')}/favicons`,
  ]
  //alias:['react', 'react-dom', 'react-relay']
})

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config: StorybookConfig = {
  stories,
  staticDirs,
  addons:[
    ...addons,
    getAbsolutePath("@aztlan/storybook-addon-relay")
  ],
  framework,
  docs,
  core,
  typescript,
  logLevel: 'debug',
  webpackFinal: async (config, { configType }) => {
    pushScss(config)
    pushTsconfigPathsPlugin(config)
    return config;
  },
};

export default config;
