// import { Router } from 'express'
// import MenuController from '../controllers/menuController'

// const router = Router()
// router.get('/', MenuController.all)
// router.post('/', MenuController.add)
// router.get('/:id', MenuController.all)
// router.put('/:id', MenuController.all)
// router.delete('/:id', MenuController.all)
// export default router

import { Router } from 'express'
import MenuController from '../controllers/menuController'

const router = Router()
router.get('/', MenuController.getAllMenus)
router.post('/', MenuController.getAllMenus)
router.get('/:id', MenuController.getAllMenus)
router.put('/:id', MenuController.getAllMenus)
router.delete('/:id', MenuController.getAllMenus)
export default router