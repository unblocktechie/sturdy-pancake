const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
const Role = require('../utils/userRoles.utils');
class UserModel {

    findOne = async (params) => {
        const { columnSet, values } = multipleColumnSet(params)
        const result = await query([...values]);

        return result;
    }
}

module.exports = new UserModel;