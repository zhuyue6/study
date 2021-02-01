import path = require('path')
import { StaticURL } from '../types'
const staticConfig: StaticURL[] = [{
  url: '/assets',
  map: path.join(__dirname, '../../dist/assets')
}, {
  url: '/depend',
  map: path.join(__dirname, '../../depend')
}]

export { staticConfig }