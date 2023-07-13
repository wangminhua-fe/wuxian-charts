import { createContext } from "./context"

/*
 * @Author: Marshall
 * @Date: 2023-07-13 20:49:43
 * @LastEditors: Marshall
 * @LastEditTime: 2023-07-13 22:06:24
 * @Description: 
 * @FilePath: /icharts/src/renderer/renderer.ts
 */
export function createRenderer(width: string, height: string) {
  const context = createContext(width, height)
  // return {
  //   line: (options) => line(context, options),
  //   circle: (options) => circle(context, options),
  //   text: (options) => text(context, options),
  //   rect: (options) => rect(context, options),
  //   path: (options) => path(context, options),
  //   ring: (options) => ring(context, options),
  //   restore: () => restore(context),
  //   save: () => save(context),
  //   scale: (...args) => scale(context, ...args),
  //   rotate: (...args) => rotate(context, ...args),
  //   translate: (...args) => translate(context, ...args),
  //   node: () => context.node,
  //   group: () => context.group,
  // }
}