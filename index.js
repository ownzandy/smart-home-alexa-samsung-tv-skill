'use strict'

module.change_code = 1
var req = require('request')
var alexa = require('alexa-app')
var app = new alexa.app('samsung-skill')

app.error = function( exception, request, response ) {
  console.log(exception)
  console.log(request)
  console.log(response)
  response.say( 'Sorry an error occured ' + error.message)
}

var utterancesDict = {
  'volumeUp': ['up'],
  'volumeDown': ['down'],
  'hdmiOne': ['hdmi one'],
  'hdmiTwo': ['hdmi two'],
  'powerOff': ['off'],
  'mute': ['mute', 'unmute']
}

var samsungRequest = function(endpoint, success, error, cb) {
  req('https://4a5178e5.ngrok.io/' + endpoint, function (err, response, body) {
    if (!err && response.statusCode == 200 && JSON.parse(body)['error'] == null) {
      return cb(success)
     } else {
      return cb(error)
     }
  })
}

app.intent('mute',
  {
    "slots":{},
    "utterances": utterancesDict['mute']
  },
  function(request,response) {
    samsungRequest('mute', 'Your TV was muted or un-muted', 'Could not mute your TV', function callback(resp) {
      response.say(resp)
      response.send();
    })
  return false
  }
)

app.intent('volumeUp',
  {
    "slots":{},
    "utterances": utterancesDict['volumeUp']
  },
  function(request,response) {
    samsungRequest('vol_up', 'Your volume was increased', 'Could not turn up the volume', function callback(resp) {
      response.say(resp)
      response.send();
    })
    return false
  }
)

app.intent('volumeDown',
  {
    "slots":{},
    "utterances": utterancesDict['volumeDown']
  },
  function(request,response) {
    samsungRequest('vol_down', 'Your volume was decreased', 'Could not turn down the volume', function callback(resp) {
        response.say(resp)
        response.send();
    })
    return false
  }
)

app.intent('hdmiOne',
  {
    "slots":{},
    "utterances": utterancesDict['hdmiOne']
  },
  function(request,response) {
    samsungRequest('hdmiOne', 'TV was switched to HDMI one', 'Could not switch to HDMI one', function callback(resp) {
      response.say(resp)
      response.send()
    })
    return false
  }
)

app.intent('hdmiTwo',
  {
    "slots":{},
    "utterances": utterancesDict['hdmiTwo']
  },
  function(request,response) {
    samsungRequest('hdmiTwo', 'TV was switched to HDMI two', 'Could not switch to HDMI two', function callback(resp) {
      response.say(resp)
      response.send()
    })
    return false
  }
)

app.intent('powerOff',
  {
    "slots":{},
    "utterances": utterancesDict['powerOff']
  },
  function(request,response) {
    samsungRequest('off', 'Turned TV Off', 'Could not turn TV off', function callback(resp) {
        response.say(resp)
        response.send()
      })
    return false
  }
)

module.exports = app