import { Router } from "express"

// repositories
import { CategoriesRepository } from "../repositories/CategoriesRepository"

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body

  categoriesRepository.create({ name, description })

  res.status(201).send()
})

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list()

  return res.status(200).json({ all })
})

export { categoriesRoutes }