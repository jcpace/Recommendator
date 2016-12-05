// call model functions in controller functions
const yelp = require('../config').yelp
const models = require('./models')

let placeholder

module.exports = {
    // Josh's endpoint is user
  users: {
    get: (req, res) => {
      models.users.get(req.query, res)
    },
    post: (req, res) => {
      models.users.post(req.body, res)
      res.send(req.body)
    }
  },
  favorites: {
    get: (req, res) => {
      models.favorites.get(req.body, res)
    },
    post: (req, res) => {
      models.favorites.post(req.body)
      res.send(req.body)
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
      models.hotspots.get(req.body, res)

      console.log('These are the res: ', res.data)
    },
    post: (req, res) => {
      console.log('req.body in the server controller: ', req.body)
      models.hotspots.post(req.body)
      res.send(req.body)
    }
  },
  yelp: {
    getPhoneSearch: (req, res) => {
      yelp.phoneSearch({ phone: '' })
        .then(resp => { res.send(resp) })
        .catch((err) => { console.log(`getPhoneSearch error: `, err) })
    },
    postPhoneSearch: (req, res) => {
      yelp.phoneSearch({ phone: req.body.phoneNumber })
        .then(console.log)
        .catch((err) => { console.log(`postPhoneSearch error: `, err) })
    },
    postSearch: (req, res) => {
      placeholder = {
        term: req.body.term,
        location: req.body.location
      }
      res.json({
        location: req.body.location,
        term: req.body.term
      })
    },
    getSearch: (req, res) => {
      yelp.search({
        location: placeholder.location,
        term: placeholder.term
      })
      .then(resp => {
        res.send(resp)
      }).catch(err => { console.log(`getSearch Yelp error: `, err) })
    },
    getBusiness: (req, res) => {
      yelp.business('', (err, data) => {
        if (err) { console.log(`getBusiness error: `, err) }
      })
    },
    postBusiness: (req, res) => {
      yelp.business(req.body.id, (err, data) => {
        if (err) { console.log(`postBusiness error: `, err) }
      })
    }
  },
  maps: {
    get: (req, res) => {
            /* can look something like this
                models.user.post() */
    },
    post: (req, res) => {
            /* can look something like this
                models.user.post() */
    }
  }

}
