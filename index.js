'use strict'

module.change_code = 1
var req = require('request')
var alexa = require('alexa-app')
var app = new alexa.app('samsung-skill')

app.error = function( exception, request, response ) {
  console.log(exception)
  console.log(request)
  console.log(response)
  response.say('Sorry an error occured ' + error.message)
}

var utterancesDict = {
  'volumeUp': ['up'],
  'volumeDown': ['down'],
  'hdmiOne': ['hdmi one'],
  'hdmiTwo': ['hdmi two'],
  'powerOff': ['off'],
  'mute': ['mute', 'unmute']
}

var samsungRequest = function(endpoint, cb) {
  req(process.env.SAMSUNG_URL + endpoint, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      return cb(body)
     } else {
      return cb(err)
     }
  })
}

app.intent('mute',
  {
    "slots":{},
    "utterances": utterancesDict['mute']
  },
  function(request,response) {
    samsungRequest('/mute', function callback(resp) {
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
    samsungRequest('/vol_up', function callback(resp) {
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
    samsungRequest('/vol_down', function callback(resp) {
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
    samsungRequest('/hdmiOne', function callback(resp) {
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
    samsungRequest('/hdmiTwo', function callback(resp) {
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
    samsungRequest('/off', function callback(resp) {
        response.say(resp)
        response.send()
      })
    return false
  }
)

module.exports = app