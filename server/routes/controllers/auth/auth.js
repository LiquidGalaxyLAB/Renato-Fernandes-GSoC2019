const router = require('express').Router()
const GSoC = require('liquidsensors')
const bodyParser = require('body-parser')
const uuid = require('uuid/v4')
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto')
const maxAge = 24 * 60 * 60 * 1000
const response = require('../../../lib/response')
const cookieParser = require('cookie-parser')
const keys = require('../../../keys')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(cookieParser())

//"Private" methods
const authMiddleware = (req, res, next) => {

    if (!req.isAuthenticated()) {
        res.status(401).send('You are not authenticated')
    } else {
        return next()
    }
}

const setCookies = (res, exp) => {
    return new Promise((resolve, reject) => {
        res.cookie('valid', 'true', {
            maxAge: exp,
            httpOnly: false
        })

        resolve(res)
    })

}

const user = (name) => {
    return new Promise((resolve, reject) => {
        GSoC.getUser(name).then(result => {
            resolve(result)
        })
    })
}


GSoC.createConnection(keys)






passport.use(new LocalStrategy({
        usernameField: 'name'
    },
    (name, password, done) => {
        user(name)
            .then(res => {
                const user = res
                var hash = password



                if (!user) {
                    return done(null, false, {
                        message: 'Invalid credentials.\n'
                    });
                }
                for (i = 0; i < 100; i++) {
                    hash = crypto.createHash('sha512').update(hash).digest('hex')
                }
                if (hash != user.userpass) {
                    return done(null, false, {
                        message: 'Invalid credentials.\n'
                    });
                }

                return done(null, user);
            })
            .catch(error => done(error));
    }
));

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
    done(null, user.userid);
});

passport.deserializeUser((id, done) => {

    user(id)
        .then(res => {
            done(null, res)
        })
        .catch(error => done(error, false))
});


router.use(session({
    genid: (req) => {
        return uuid() // use UUIDs for session IDs
    },
    store: new FileStore(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: maxAge,
    }
}))
router.use(passport.initialize());
router.use(passport.session());


router.get('/auth/logout', (req, res) => {
    req.logout();
    res.clearCookie("valid");
    return res.send();
})

router.post('/auth/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {


        if (info) {

            return res.status(418).send(info.message)
        }
        if (err) {

            return res.status(500).send(err)
        }
        if (!user) {

            return res.status(401).send("User not found");
        }
        req.login(user, (err) => {
            if (err) {

                return res.status(401).send(err);
            }

            setCookies(res, maxAge - 4).then(res => {
                res.status(200).send("ok");
            })
            return
        })
    })(req, res, next);
})

router.post('/auth/register', (req, res) => {
    console.log(req);
    
    GSoC.registerUser({
        userName: req.body.name,
        userMail: req.body.email,
        userPass: req.body.password
    }).then(result => {
        response.send(res, {
            code: 200,
            result: result
        })

    })
})

router.get('/auth/check', (req, res) => {

    if (!req.isAuthenticated()) {
        res.clearCookie("valid");
        res.status(400).send('You are not authenticated')
    } else {
        res.status(200).send(req.user.username)
    }
})


router.post('/data/registersensor', authMiddleware, (req, res) => {
    var bd = req.body

    GSoC.registerSensor(req.user.username, {
            name: bd.name,
            description: bd.desc,
            imgId: bd.img,
            lat: bd.lat,
            lon: bd.lng,
            unit: bd.unit,
            unitdesc:bd.unitdesc,
            ismock:bd.ismock
        })
        .then(result => {
            response.send(res, {
                code: 200
            })
        }).catch(err => {

            response.send(res, {
                code: 500,
                error: err
            })
        })
})
router.get('/getusersensors', authMiddleware, (req, res) => {
    GSoC.readUserSensors(req.user.username).then(result => {

        response.send(res, {
            result: result,
            code: 200
        })
    })
})

router.delete('/data/deletesensor', authMiddleware, (req, res) => {

    GSoC.deleteSensor(req.body.name).then(result => {
        response.send(res, {
                code: 200,
                result: result
            })
            .catch(err => {
                response.send(res, {
                    code: 500,
                    error: err
                })
            })
    })

})

router.post('/data/editsensor', authMiddleware, (req, res) => {
    var bd = req.body

    GSoC.editSensor(bd.oldname, {
            name: bd.name,
            description: bd.desc,
            img: bd.img,
            lat: bd.lat,
            lon: bd.lng,
            unit: bd.unit,
            unitdesc:bd.unitdesc,
            ismock:bd.ismock
        })
        .then(result => {
            response.send(res, {
                code: 200
            })
        }).catch(err => {
            

            response.send(res, {
                code: 500,
                error: err
            })
        })
})




module.exports = router