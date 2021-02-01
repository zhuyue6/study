// import * as getViews from './get'
import express = require('express')

export function advance(req:express.Request, res:express.Response, next:express.NextFunction) {
  console.log('advance')
  next()
}

export function after(req:express.Request, res:express.Response, next:express.NextFunction) {
  console.log(1111)
  res.send('error')
}

export function todo (req:express.Request, res:express.Response, next:express.NextFunction) {
  console.log('doing')
  next()
}