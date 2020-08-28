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
import OrdersController from '../controllers/ordersController'

const router = Router()
router.get('/', OrdersController.getAllOrders)
router.post('/', OrdersController.getAllOrders)
router.get('/:id', OrdersController.getAllOrders)
router.put('/:id', OrdersController.getAllOrders)
router.delete('/:id', OrdersController.getAllOrders)
export default router