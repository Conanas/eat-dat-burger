const connection = require("./connection");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
        let query = "SELECT * FROM ??";
        let queryArray = [table];
        console.log(queryArray);
        connection.query(query, queryArray, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },

    insertOne: function(table, columns, values, cb) {
        let query = `
        INSERT INTO ? (${columns.toString()})
        VALUES (${printQuestionMarks(vals.length)})`
        let queryArray = [table].concat(values);
        connection.query(query, queryArray, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },

    updateOne: function(table, columnsValues, id, cb) {
        let query = `
        UPDATE ?
        SET ${objToSql(columnsValues)}
        WHERE id=?`
        let queryArray = [table, id];
        connection.query(query, queryArray, function(err, data) {
            if (err) throw err;
            cb(data);
        })
    }
}

module.exports = orm;