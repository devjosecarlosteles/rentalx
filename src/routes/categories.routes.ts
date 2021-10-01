import { Router } from "express"

// types
import { Category } from "../models/Category"

const categoriesRoutes = Router()

const categories: Category[] = []

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body

  const category = new Category()

  Object.assign(category, {
    name,
    description,
    created_at: new Date()
  })

  categories.push(category)

  res.status(201).json({ categories })
})

export { categoriesRoutes }