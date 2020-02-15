const { Router } = require('express')

module.exports = function createApi({ db }) {
  return new Router()
    .get('/health-check', async (req, res) => {
      try {
        await db.query(`select 1`)
        res.json({
          message: 'Connection successful!'
        })
      } catch (err) {
        console.error(err)
        res.status(500).json({
          message: 'Connection failed!'
        })
      }
    })
    .get('/todos', (req, res) => {
      const todos = [
        {
          id: 1,
          task: 'Learn Docker',
          isCompleted: true
        },
        {
          id: 2,
          task: 'Learn Amazon ECS',
          isCompleted: false
        },
        {
          id: 3,
          task: 'Learn Elastic Beanstalk',
          isCompleted: false
        }
      ]
      res.json(todos)
    })
}
