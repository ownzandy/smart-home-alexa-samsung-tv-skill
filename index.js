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
  'chineseAutomation': ['automate chinese'],
  'chinesePower': ['chinese power'],
  'chineseLeft': ['left'],
  'chineseRight': ['right'],
  'chineseUp': ['up'],
  'chineseDown': ['down'],
  'chineseOk': ['ok', 'enter', 'play', 'pause'],
  'chineseHome': ['return'],
  'chineseBack': ['back'],
  'auxToggle': ['connect speaker'],
  'volumeUp': ['up'],
  'volumeDown': ['down'],
  'hdmiOne': ['hdmi one'],
  'hdmiTwo': ['hdmi two'],
  'powerOff': ['off'],
  'powerOn': ['on'],
  'mute': ['mute', 'unmute']
}

var samsungRequest = function(endpoint, cb) {
  req(process.env.SAMSUNG_URL + '/samsung/' + endpoint, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      return cb(body)
     } else {
      return cb(err)
     }
  })
}

app.intent('chineseAutomation',
  {
    "slots":{},
    "utterances": utterancesDict['chineseAutomation']
  },
  function(request,response) {
    samsungRequest('/chinese_automation', function callback(resp) {
      response.say(resp)
      response.send();
    })
  return false
  }
)

app.intent('chinesePower',
  {
    "slots":{},
    "utterances": utterancesDict['chinesePower']
  },
  function(request,response) {
    samsungRequest('/chinese_power', function callback(resp) {
      response.say(resp)
      response.send();
    })
  return false
  }
)

app.intent('chineseLeft',
  {
    "slots":{},
    "utterances": utterancesDict['chineseLeft']
  },
  function(request,response) {
    samsungRequest('/chinese_left', function callback(resp) {
      response.say(resp)
      response.send();
    })
  return false
  }
)

app.intent('chineseRight',
  {
    "slots":{},
    "utterances": utterancesDict['chineseRight']
  },
  function(request,response) {
    samsungRequest('/chinese_right', function callback(resp) {
      response.say(resp)
      response.send();
    })
  return false
  }
)

app.intent('chineseUp',
  {
    "slots":{},
    "utterances": utterancesDict['chineseUp']
  },
  function(request,response) {
    samsungRequest('/chinese_up', function callback(resp) {
      response.say(resp)
      response.send();
    })
  return false
  }
)

app.intent('chineseDown',
  {
    "slots":{},
    "utterances": utterancesDict['chineseDown']
  },
  function(request,response) {
    samsungRequest('/chinese_down', function callback(resp) {
      response.say(resp)
      response.send();
    })
  return false
  }
)

app.intent('chineseOk',
  {
    "slots":{},
    "utterances": utterancesDict['chineseOk']
  },
  function(request,response) {
    samsungRequest('/chinese_ok', function callback(resp) {
      response.say(resp)
      response.send();
    })
  return false
  }
)

app.intent('chineseHome',
  {
    "slots":{},
    "utterances": utterancesDict['chineseHome']
  },
  function(request,response) {
    samsungRequest('/chinese_home', function callback(resp) {
      response.say(resp)
      response.send();
    })
  return false
  }
)

app.intent('chineseBack',
  {
    "slots":{},
    "utterances": utterancesDict['chineseBack']
  },
  function(request,response) {
    samsungRequest('/chinese_back', function callback(resp) {
      response.say(resp)
      response.send();
    })
  return false
  }
)

app.intent('auxToggle',
  {
    "slots":{},
    "utterances": utterancesDict['auxToggle']
  },
  function(request,response) {
    samsungRequest('/aux_toggle', function callback(resp) {
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

app.intent('powerOn',
  {
    "slots":{},
    "utterances": utterancesDict['powerOn']
  },
  function(request,response) {
    samsungRequest('/on', function callback(resp) {
        response.say(resp)
        response.send()
      })
    return false
  }
)

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


module.exports = app