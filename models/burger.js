const orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(data) {
            cb(data);
        })
    },

    insertOne: function(columns, values, cb) {
        orm.insertOne("burgers", columns, values, function(data) {
            cb(data);
        })
    },

    updateOne: function(columnsValues, id, cb) {
        orm.updateOne("burgers", columnsValues, id, function(data) {
            cb(data);
        })
    }

};

module.exports = burger;