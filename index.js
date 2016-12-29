'use strict'

module.change_code = 1
var req = require('request')
var alexa = require( 'alexa-app' )
var app = new alexa.app('samsung-skill')

app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
}

var utterancesDict = {
	'volumeUp': ['increase the volume', 'increase volume', 'be louder', 'up the volume', 'volume up', 'up the volume', 'turn up the volume', 'turn up volume'],
	'volumeDown': ['decrease the volume', 'decrease volume', 'be quieter', 'be softer', 'volume down', 'turn down the volume', 'turn down volume'],
	'chineseSource': ['switch to chinese source', 'chinese source', 'switch chinese source'],
	'powerOff'; ['turn off', 'off', 'power off']
}

var samsungRequest = function(endpoint, success, error, cb) {
	req('https://4a5178e5.ngrok.io/' + endpoint, function (error, response, body) {
		if (!error && response.statusCode == 200 && response['error'] == null) {
			cb(success)
		 } else {
		 	cb(error)
		 }
	})
}

app.intent('volumeUp',
  {
    "slots":[],
	"utterances": utterancesDict['volumeUp']
  },
  function(request,response) {
  	samsungRequest('vol_up', 'Your volume was increased', 'Could not turn up the volume', function callback(response) {
  		response.say(response)

  	})
  }
)

app.intent('volumeDown',
  {
    "slots":[],
	"utterances": utterancesDict['volumeDown']
  },
  function(request,response) {
  	samsungRequest('vol_down', 'Your volume was increased', 'Could not turn down the volume', function callback(response) {
  		response.say(response)

  	})
  }
)

app.intent('chineseSource',
  {
    "slots":[],
	"utterances": utterancesDict['chineseSource']
  },
  function(request,response) {
  	samsungRequest('chinese', 'TV was switched to Chinese Source', 'Could not switch to Chinese Source', function callback(response) {
  		response.say(response)
  	})
  }
)

app.intent('powerOff',
  {
    "slots":[],
	"utterances": utterancesDict['powerOff']
  },
  function(request,response) {
  	samsungRequest('off', 'Turned TV Off', 'Could not turn TV off', function callback(response) {
  		response.say(response)
  	})
  }
)

module.exports = app