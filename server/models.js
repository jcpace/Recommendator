// Interact with database on the models functions here
const Hotspot = require('../database/db').Hotspot
const User = require('../database/db').User
module.exports = {
  auth: {
    get: (data) => {
      console.log("within model GET", data)
      User.findOne({
        username: data.username
      },(err, user) => {
        if (err) {
          console.log("ERROR in GET MODEL", err)
        }
        console.log("line 21", user)
        return user
      })
    },
    post: (req, res) => {
      console.log(req, '*****')
      console.log("within model POST", req.body)
      User.create({
        username: req.username,
        password: req.password
        }, (err, user) => {
        if (err) {
                console.log("Server-side POST error: ", err)
            }
            
      })
            /*
             Interact with database
             */
    }
  },
  favorites: {
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
    get: () => {

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
