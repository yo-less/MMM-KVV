/* Magic Mirror
 * Module: MMM-KVV
 *
 * By yo-less
 * MIT Licensed.
 */

const request = require('request');
const NodeHelper = require("node_helper");



module.exports = NodeHelper.create({

    start: function() {
        console.log("Starting node helper for: " + this.name);
    },

	
	/* getParams
	 * Generates an url with api parameters based on the config.
	 *
	 * return String - URL params.
	 */
	
	getParams: function() {
			var params = this.config.stopID;
			params += "?";
			if (this.config.maxConn !== '') {
			params += "maxInfos=" + this.config.maxConn + "&";
			}
			params +="key=" + this.config.apiKey;
			return params;
	},
	
    socketNotificationReceived: function(notification, payload) {
        if(notification === 'CONFIG'){
            this.config = payload;
			var kvv_url = this.config.apiBase + this.getParams();
			this.getData(kvv_url, this.config.stopID);
        }
    },

    getData: function(options, stopID) {
		request(options, (error, response, body) => {
	        if (response.statusCode === 200) {
				this.sendSocketNotification("TRAMS" + stopID, JSON.parse(body));
				} else {
                console.log("Error getting tram connections " + response.statusCode);
            }
        });
    }
});