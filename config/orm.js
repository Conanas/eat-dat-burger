const connection = require("./connection");

// creates an array of question marks from a given array length
// to be used for createing sql queries for inserting multiple arguments
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// converts the key value pairs of objects into strings
// to be used for creating sql queries from given objects
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// object relational model
var orm = {
    //selects all columns from a given table
    selectAll: function(table, cb) {
        let query = "SELECT * FROM ??";
        let queryArray = [table];
        connection.query(query, queryArray, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },

    // inserts one new row into a given table name
    // columns are inputted as an array and converted to a sting to be read by mysql
    // values are the new values of the given row
    insertOne: function(table, columns, values, cb) {
        let query = `
        INSERT INTO ?? (${columns.toString()})
        VALUES (${printQuestionMarks(values.length)})`
        let queryArray = [table].concat(values);
        connection.query(query, queryArray, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },

    // updates one row in a given table
    // columnsValues is an object that gets converted into a string using objToSql function
    updateOne: function(table, columnsValues, condition, cb) {
        let query = `
        UPDATE ??
        SET ${objToSql(columnsValues)}
        WHERE ${condition}`
        let queryArray = [table];
        connection.query(query, queryArray, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    }
}

// export the orm
module.exports = orm;