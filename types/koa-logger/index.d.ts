// module 导出方式，需要建立相应的文件路径，并且配上 tsconfig.json paths 配置对应路径才行
declare const koa:string
declare function dev(opts: object): Promise<void>;

declare global {
  interface String {
    test():number
  }
}

export default class A {
  constructor(name: string)
}

export {
  koa,
  dev
}

// 这种方法，声明的是一个对象 koaLogger.dev
// export namespace koaLogger {
//   const koa:string
//   function dev(opts: object): Promise<void>;
// }
