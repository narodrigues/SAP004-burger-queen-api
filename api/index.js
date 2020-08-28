import express from 'express'
import bodyParser from 'body-parser'
import MenuRoutes from './server/src/routes/menuRoutes'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.use('/menu', MenuRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Hello World'
}))

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`)
})

export default app