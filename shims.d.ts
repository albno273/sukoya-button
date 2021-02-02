declare module 'webpack-hot-middleware' {
  const middleware: any;
  export interface Options {
    [proName: string]: any;
  }
  export default middleware;
}

declare module 'vue-youtube';
