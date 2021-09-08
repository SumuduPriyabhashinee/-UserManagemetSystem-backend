const ResponseService = require('../common/ResponseService'); // Response service
const User = require('../models/user'); // User model

// Read count of post
exports.getPostCount = function (req, res) {
    User.findAll()
        .then(users => {
            ResponseService.generalPayloadResponse(null, users.length, res);
        })
        .catch(err => ResponseService.generalPayloadResponse(err, null, res));

}


//update the avatar
exports.updateAvatarById = (req, res) => {
    const url = req.protocol + "://" + req.get("host");
    const id = req.params.id;
    User.update(
        {
            image: url + "/images/" + req.file.filename,
        },
        { where: { u_id: id } }
    )
        .then((user) => ResponseService.generalPayloadResponse(err, user, res))
        .catch((err) => ResponseService.generalPayloadResponse(err, null, res));
};

// Update the user details
exports.updateById = (req, res) => {
    const id = req.params.id;
    User.update(
        {
            name: req.body.name,
            d_o_b: req.body.d_o_b,
            gender:  req.body.gender,
            tp_no:  req.body.tp_no,
            address:  req.body.address,
            image: req.body.imagePreviewUrl,
            update_date:  req.body.update_date
        },
        { where: { u_id: id } }
    )
    .then(rowsUpdated => {
        ResponseService.generalPayloadResponse(null, rowsUpdated, res);
    })
    .catch(err => ResponseService.generalPayloadResponse(err, null, res));
};
