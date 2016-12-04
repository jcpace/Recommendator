// call model functions in controller functions
const models = require('./models')

module.exports = {
  users: {
    get: (req, res) => {
      console.log('withincontroller GET***', req.query)
      console.log('withincontroller GET', req.body)
      models.users.get(req.query)
      res.send(req.query)
    },
    post: (req, res) => {
      console.log('withincontroller post', req.body)
      models.users.post(req.body)
      res.send(req.body)
    }
  },
  favorites: {
    get: (req, res) => {
            /* can look something like this
                models.user.get() */
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  },
  comments: {
    get: (req, res) => {
            /* can look something like this
                models.user.get() */
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  },
  hotspots: {
    get: (req, res) => {
      models.hotspots.get(req.body)
      res.send()
    },
    post: (req, res) => {
      models.hotspots.post(req.body)
      res.send(req.body)
    }
  }

}
