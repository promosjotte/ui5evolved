sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"opensap/movies/model/formatter",
	"sap/base/Log"
], function(Controller, formatter, Log) {
	"use strict";

	return Controller.extend("opensap.movies.controller.App", {

		formatter: formatter,

		onInit: function () {
			Log.info('controller has been initialized');
		},

		onExit: function () {
			Log.info('controller will shortly be destroyed');
		},

		onBeforeRendering: function () {
			Log.info('The view will shortly be rendered');
		},

		onAfterRendering: function () {
			Log.info('controller has been initialized');
		},

		onPress : function(sValue) {
			sap.ui.require([
				'sap/m/MessageToast'
			], function(MessageToast) {
				MessageToast.show('searching... ' + sValue);
			});
		}
	});
});