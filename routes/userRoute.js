const app = require('express');
const router = app.Router();
const Types = require('../common/Types') // M/odel types
const routeConstant = require('../common/route-constant');

const multer = require("multer"); // Image uploader package
const DIR = "./images";


// Post controller
const UserController = require('../controllers/userController');

// CRUD Service
const CRUD = require('../common/CRUD');

// Create
//api/users:
router.post("/", (req, res) => CRUD.create(req.body, Types.USER, res));

//get all
//api/users: 
router.get('/', (req, res) => CRUD.getAll(Types.USER, res));

// Get by id
//api/users/user/:id:
router.get(routeConstant.USER.GET_USER, (req, res) => CRUD.getById(req.params.id, Types.USER, res));

// Delete by id
//api/users/user/:id:
router.delete(routeConstant.USER.DELETE_USER, (req, res) => CRUD.deleteById(req.params.id, Types.USER, res));

//get users count
//api/users/count:
router.get(routeConstant.USER.GET_USER_COUNT, (req, res) => UserController.getPostCount(req, res));

// Update by id
//api/users/:id:
router.put(routeConstant.USER.PUT_USER, (req, res) => {
    UserController.updateById(req, res);
});
//set the multer storage directory
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(" ").join("-");
        cb(null, req.params.id + "-" + fileName);
    },
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },
});

router.post(
    routeConstant.USER.PUT_USER_AVATAR,
    upload.single("image"),
    (req, res) => {
        UserController.updateAvatarById(req, res);
    }
);

module.exports = router;

