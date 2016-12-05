// Interact with database on the models functions here
const Hotspot = require('../database/db').Hotspot
const User = require('../database/db').User
const Favorites = require('../database/db').Favorites

module.exports = {
  users: {
    get: (req, res) => {
      User
        .findOne({
          username: req.username
        })
        .exec((err, user) => {
          if (err) {
            console.log('ERROR in MODEL GET: ', err)
          } else {
            res.json(user)
          }
        })
    },
    post: (req, res) => {
      User
        .create({
          username: req.username,
          password: req.password
        }, (err, user) => {
          if (err) {
            console.log('ERROR in MODEL POST: ', err)
          } else {
            res.json(user)
          }
        })
    }
  },
  favorites: {
    get: (req, res) => {
      Favorites.find().exec((err, data) => {
        res.send(data)
      })
    },
    post: (data) => {
      Favorites.create(data, (err) => {
        if (err) return err
      })
    }
  },
  comments: {
    get: () => {
            /*
             Interact with database
             */
    },
    post: () => {
            /*
             Interact with database
             */
    }
  },
  hotspots: {
    get: (req, res) => {
      Hotspot.find().exec((err, data) => {
        console.log('ah ha...data: ', data)
        return data
      })
    },
    post: (req, res) => {
      console.log('this is working: ', req)
      Hotspot.create(req, (err) => {
        if (err) {
          return err
        }
      })
    }
  }

}
