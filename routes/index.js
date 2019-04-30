let proc = require('../app/proc.js')

let router = function (app) {
  app.get('/', async (req, res, next) => {
    try {
      const result = await proc('Hello world')
      res.status(200).send(result)
    } catch (e) {
      res.status(400).json(e)
      next(e)
    }
  })
}

module.exports = router