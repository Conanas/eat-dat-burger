const orm = require("../config/orm");

// burger object with functions to select, create ad update burgers in the sql database
var burger = {

    // selects and retrieves all teh burgers from the sql database
    selectAll: function(cb) {
        orm.selectAll("burgers", function(data) {
            cb(data);
        })
    },

    // inserts one new burger into the sql database
    insertOne: function(columns, values, cb) {
        orm.insertOne("burgers", columns, values, function(data) {
            cb(data);
        })
    },

    // updates one burger in the sql database
    updateOne: function(columnsValues, condition, cb) {
        orm.updateOne("burgers", columnsValues, condition, function(data) {
            cb(data);
        })
    }

};

// exports the burgers object and a related functions
module.exports = burger;