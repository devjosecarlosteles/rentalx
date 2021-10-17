import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { specificationsRoutes } from './routes/spefications.routes'

const app = express()

app.use(express.json())

app.use("/categories", categoriesRoutes)
app.use("/specifications", specificationsRoutes)

app.listen(3333, () => console.log('Sever is running!'))
