import express from 'express'
import bodyParser from 'body-parser'
import OrderRoutes from './server/src/routes/ordersRoutes'
import ProductsRoutes from './server/src/routes/productsRoutes'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.use('/order', OrderRoutes);

app.use('/products', ProductsRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Hello World'
}))

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`)
})

export default app