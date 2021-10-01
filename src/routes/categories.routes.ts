import { Router } from "express"

const categoriesRoutes = Router()

categoriesRoutes.post("/categories", (req, res) => {
  const { name, description } = req.body
})

export { categoriesRoutes }