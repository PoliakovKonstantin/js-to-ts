//import "./node_modules/@types/express-form-data/index.d.ts"
import "express-form-data"
import express from 'express'
//import { BooksRepository } from "./routs/repository";
const app=express()
//app.use(FormData.parse())
var ejs=require('ejs')
import {storage} from './routs/multer-test'
import fs from 'fs'
let router=require('./routs/api.js')
import bodyParser from 'body-parser'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api',router)//app.use(formData.parse());
//app.set('view engine', 'ejs')
const PORT=process.env.PORT || 3001
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})