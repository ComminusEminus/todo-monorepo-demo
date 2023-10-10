import type { StorybookConfig } from "@storybook/react-webpack5";
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import { join, dirname, resolve } from "path";
import {Configuration} from 'webpack'
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    /*{
      directory: "../packages/design_system",
      files: "**__stories__(!!add directory seperators)*.stories.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "design_system",
    },
    {
      directory: "../packages/ui",
      files: "**(!!add directory seperators)__stories__*.stories.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "user_interface",
    }*/
    {
      directory: "../packages/ui/todo_list",
      files: "**/__stories__/*.stories.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: "user_interface",
    }
    
  ],
  /*refs: {
    'design_system': {
      title: 'Storybook Design System',
      url: 'https://localhost:4000',
    },
  },*/
  addons: [
    getAbsolutePath('@storybook/addon-docs'),

    
    
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false,
    reactDocgenTypescriptOptions: {
      compilerOptions: {
          allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: () => true,
    },
  },
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {
      builder:{
        useSWC: true,
      }
    },
  },
  docs: {
    autodocs: "tag",
    defaultName: 'Documentation',
  },
  core: {
    builder: {
      name: getAbsolutePath('@storybook/builder-webpack5'),
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
};
export default config;


/*
getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),

getAbsolutePath("@storybook/react-webpack5"),
"@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-package-shopping-cart"
    '@storybook/addon-docs',
   
    webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      resolve(__dirname, ".."),
      "node_modules",
    ]

    return config;
  }

   webpackFinal: async (config: Configuration, { configType }) => {
    if(!config.resolve){
      throw new Error('config is not defined')
    }
    config.resolve.plugins = [new TsconfigPathsPlugin({
      configFile: '../tsconfig.paths.json',
      baseUrl: '../'
    })]
    return config;
}


typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false,
    reactDocgenTypescriptOptions: {
      compilerOptions: {
          allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: () => true,
    },
  },
*/