// 全局式，不用在意文件路径, 扩展模式
import * as log from 'koa-logger'

declare module "koa-logger" {
  export const kuozhan: number

  export interface Foo {
    foo: string;
  }
}

