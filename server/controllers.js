// call model functions in controller functions
const models = require('./models')

module.exports = {
    // Josh's endpoint is user
  auth: {
    get: (req, res) => {
      console.log("withincontroller GET***", req.query)
      console.log("withincontroller GET", req.body)
            models.get(req.query)
            res.send(req.query)

    },
    post: (req, res) => {
      console.log("withincontroller post", req.body)
            models.post(req.body)
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
            /* can look something like this
                models.user.get() */
    },
    post: (req, res) => {
      models.hotspots.post(req.body)
      res.send(req.body)
    }
  }

}
