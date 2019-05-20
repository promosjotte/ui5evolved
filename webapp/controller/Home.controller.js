sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("opensap.movies.controller.App", {

		formatter: formatter,

		onInit: function () {

		}
	});
});