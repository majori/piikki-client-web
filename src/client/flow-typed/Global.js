// @flow
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void;
  };
};

declare module SCSSModule {
  declare var exports: { [key: string]: string };
}
