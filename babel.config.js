module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            assets: "./assets",
            api: "./apis",
            config: "./config",
            component: "./src/components",
            module: "./src/modules",
            lib: "./src/lib",
            types: "./src/types",
            constants: "./src/constants",
            stack: "./src/stacks",
            screen: "./src/screens",
            hook: "./src/hooks",
            context: "./src/context",
            function: "./src/functions",
            layout: "./src/layouts",
            constants: "./src/constants",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
