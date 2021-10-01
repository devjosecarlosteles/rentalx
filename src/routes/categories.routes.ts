import { Router } from "express"
import { v4 as uuidv4 } from "uuid"

const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body

  const category = {
    name,
    description,
    id: uuidv4()
  }

  categories.push(category)

  res.status(201).send()
})

export { categoriesRoutes }