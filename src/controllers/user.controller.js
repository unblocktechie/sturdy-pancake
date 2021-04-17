const UserModel = require('../models/user.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class UserController {
    getAllNfts = async (req, res, next) => {
        let userList = await UserModel.find();
        console.log(userList);
        if (!userList) {
            throw new HttpException(404, 'Users not found');
        }

        res.send(userList);
    };

    getNftById = async (req, res, next) => {
        const user = await UserModel.findOne({ art_id: req.params.id});
        if (!user) {
            throw new HttpException(404, 'User not found');
        }

        res.send(user);
    };
}


/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new UserController;