'use strict';

var $ = require('jquery');
var BaseFilter = require('../basefilter');
var SimpleRenderer = require('../renderer/simple');
var Filters = require('../filters');

var InputFilter = $.extend({}, BaseFilter, SimpleRenderer, {

    init: function () {
        this.$dom = $('<input type="text" class="filtre"/>');
        this.$dom.val(this.getInitialQuery());
        this.$dom.on('input', this.notifyChange.bind(this));

        return this;
    },

    populate: function () {
        return this;
    },

    update: function () {
        return this;
    },

    noSelectionQuery: function () {
        return '';
    },

    isRegexMatch: function () {
        return true;
    },

    hasValue: function () {
        return this.$dom.val() != '';
    },

    selectedQuery: function () {
        return this.$dom.val();
    },

    getInitialQuery: function () {
        return '';
    },

    /**
      * Reset the filter's input,
      * so the filter will keep every rows
      * @returns {InputFilter} The Filter object
      */
    reset: function () {
        this.$dom.val('');

        return this;
    }

});

Filters.prototype.builders.input = function (settings) {
    return $.extend({}, InputFilter, settings);
};

module.exports = InputFilter;
