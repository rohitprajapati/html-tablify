/* jslint node: true */
'use strict';

function tablify(options) {
    if (!options) {
        return new Error('Please provide details as the first parameter. For e.g. - jsonToTable({ data: <<your json data>> })');
    }
    var tableData = options.data;
    var header = options.header;
    var css = options.css;
    var border = options.border || 1;
    var cellspacing = options.cellspacing || 0;
    var cellpadding = options.cellpadding || 0;
    var tableClass = options.tableClass;
    if (!tableData) {
        return new Error('Please provide data as: jsonToTable({ data: <<your json data>> })');
    }
    if (typeof tableData === 'object') {
        if (!Array.isArray(tableData)) {
            tableData = [tableData];
        }
    }

    // If header exists in options use that else create it.
    if (!header || !Array.isArray(header)) {
        var headerObj = {};
        tableData.forEach(function (json) {
            var keys = Object.keys(json);
            keys.forEach(function (key) {
                headerObj[key] = true;
            });
        });
        header = Object.keys(headerObj);
    }
    // Generate table

    // 1. Generate header
    var htmlTable = '';
    if (css) {
        htmlTable += '<style>' + css + '</style>';
    }
    htmlTable += '<table';
    htmlTable += ' border=' + border;
    htmlTable += ' cellspacing=' + cellspacing;
    htmlTable += ' cellpadding=' + cellpadding;
    if (tableClass !== undefined) {
        htmlTable += ' class=' + tableClass;
    }
    htmlTable += '>';
    htmlTable += '<thead>';
    htmlTable += '<tr>';
    header.forEach(function (key) {
        htmlTable += '<th>' + key + '</th>';
    });
    htmlTable += '</tr>';
    htmlTable += '</thead>';

    // 2. Generate body
    htmlTable += '</tbody>';
    tableData.forEach(function (json) {
        htmlTable += '<tr>';
        header.forEach(function (key) {
            var value = json[key];
            if (value === undefined) {
                value = '';
            }
            htmlTable += '<td>' + value + '</td>';
        });
        htmlTable += '</tr>';
    });
    htmlTable += '</tbody>';
    htmlTable += '</table>';
    return htmlTable;
}

var tablify = {

    tablify: tablify
};

module.exports = tablify;
