import express = require('express')
import { staticConfig } from './config'
import { advance, todo, after } from '../views'
import { StaticURL } from '../types'

let App:express.Application = null
let ispai = null
let staticWebServer = null

class ISAPI {
  statusCode: number
  contextType: string
  url: RegExp
  date: Date
  constructor() {
    this.url = /^\/ISAPI.*/
    this.init()
  }
  init() {
    App.all(this.url, (req, res, next)=>{
      next()
    })
    App.use(this.url, this.middleWareRequest)
    App.use(this.url, todo)
    App.use(this.url, this.middleWareResponse)
  }
  middleWareRequest(req:express.Request, res:express.Response, next:express.NextFunction) {
    advance(req, res, next)
  }
  middleWareResponse(req:express.Request, res:express.Response, next:express.NextFunction) {
    after(req, res, next)
  }
}

class StaticWebServer {
  urlConfigs: Array<StaticURL>
  constructor() {
    this.urlConfigs = staticConfig
    this.init()
  }
  init() {
    for (let config of this.urlConfigs) {
      App.use(config.url, express.static(config.map))
    }
  }
}

export function create (app: express.Application) {
  App = app
  ispai = new ISAPI()
  staticWebServer = new StaticWebServer()
}