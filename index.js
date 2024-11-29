import express from 'express'
import todoRoutes from './routes/todos.js'

const app = express ()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/todos', todoRoutes)

app.listen(3009, () => {
    console.log('server is connected at port 3009')
})