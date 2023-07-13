/*
 * @Author: Marshall
 * @Date: 2023-07-13 20:57:46
 * @LastEditors: Marshall
 * @LastEditTime: 2023-07-13 22:20:37
 * @Description: 
 * @FilePath: /icharts/src/renderer/utils.ts
 */
export function createSvgElement(type: string) {
  return document.createElementNS('http://www.w3.org/2000/svg', type)
}

export function mount(parent: HTMLElement | SVGElement, child: HTMLElement | SVGElement) {
  if(parent) {
    parent.appendChild(child)
  }
}

export function applyAttributes(element: HTMLElement | SVGElement, attributes: Object) {
  for(const [key, value] of Object.entries(applyAttributes)) {
    const kebabCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttribute(kebabCaseKey, value);
  }
}