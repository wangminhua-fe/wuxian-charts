import { createSvgElement, mount } from "./utils"

export interface Context {
  node: any;
  group: any;
}

export function createContext(width: string, height: string): Context {
  const svg = createSvgElement('svg')
  svg.setAttribute('width', width)
  svg.setAttribute('height', height)
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`)

  const g = createSvgElement('g')
  mount(svg, g)

  return {
    node: svg,
    group: g
  }
}