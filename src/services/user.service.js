const bcrypt = require('bcrypt');

class UserService {
    constructor(db) {
        this.db = db;
    }
}

module.exports = UserService;