/*
 * @Author: Marshall
 * @Date: 2023-07-13 20:55:33
 * @LastEditors: Marshall
 * @LastEditTime: 2023-07-13 22:31:39
 * @Description: 
 * @FilePath: /icharts/src/renderer/shape.ts
 */
import { Context } from "./context"
import { applyAttributes, createSvgElement, mount } from "./utils"

export function shape(type: string, context: Context, attributes: Object) {
  const { group } = context
  const el = createSvgElement(type)
  applyAttributes(el, attributes)

  mount(group, el)
  return el
}

export function line(context: Context, attributes: Object) {
  return shape('line', context, attributes)
}

// rect 不支持 width 和 height 是负数
export function rect(context: Context, attributes: Object) {
  const {width, height, x, y} = attributes as any
  
  return shape('rect', context, {
    ...applyAttributes,
    width: Math.abs(width),
    height: Math.abs(width),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height,
  })
}

export function circle(context: Context, attributes: Object) {
  return shape('circle', context, attributes)
}

export function text(context: Context, attributes: Object) {
  const { text, ...rest } = attributes as any
  const textElement = shape('text', context, rest)
  textElement.textContent = text
  return textElement
}