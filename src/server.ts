import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'

const app = express()

app.get('/', (req, res) => {
  res.json({ message: "Hello World" })
})

app.use(categoriesRoutes)

app.listen(3333, () => console.log('Sever is running!'))
