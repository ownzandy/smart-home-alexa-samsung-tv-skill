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
  'chineseAutomation': ['start'],
  'chinesePower': ['switch'],
  'chineseLeft': ['left'],
  'chineseLeftNumber': ['left {number} times', 'go left {number} times'],
  'chineseRight': ['right'],
  'chineseRightNumber': ['right {number} times', 'go right {number} times'],
  'chineseUp': ['up'],
  'chineseUpNumber': ['up {number} times', 'go up {number} times', 'off {number} times', 'go off {number} times'],
  'chineseDown': ['down'],
  'chineseDownNumber': ['down {number} times', 'go down {number} times'],
  'chineseOk': ['play'],
  'chineseHome': ['home'],
  'chineseBack': ['back'],
  'auxToggle': ['connect', 'disconnect'],
  'volumeUp': ['louder'],
  'volumeDown': ['quieter'],
  'hdmiOne': ['number one'],
  'hdmiTwo': ['number two'],
  'power': ['power'],
  'mute': ['mute', 'unmute']
}

var samsungRequest = function(endpoint, cb) {
  req('http://localhost:8081' + endpoint, {'auth': {'user': process.env.USER, 'password': process.env.PASSWORD} }, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      return cb(body)
     } else {
      return cb('Could not process your request')
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

app.intent('chineseLeftNumber',
  {
    "slots":{'number': 'NUMBER'},
    "utterances": utterancesDict['chineseLeftNumber'],
  },
  function(request, response) {
    var number = request.slot('number')
    samsungRequest('/chinese_multiple_left?number=' + number, function callback(resp) {
      response.say(resp)
      response.send() 
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

app.intent('chineseRightNumber',
  {
    "slots":{'number': 'NUMBER'},
    "utterances": utterancesDict['chineseRightNumber'],
  },
  function(request, response) {
    var number = request.slot('number')
    samsungRequest('/chinese_multiple_right?number=' + number, function callback(resp) {
      response.say(resp)
      response.send()
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

app.intent('chineseUpNumber',
  {
    "slots":{'number': 'NUMBER'},
    "utterances": utterancesDict['chineseUpNumber'],
  },
  function(request, response) {
    var number = request.slot('number')
    samsungRequest('/chinese_multiple_up?number=' + number, function callback(resp) {
      response.say(resp)
      response.send()
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

app.intent('chineseDownNumber',
  {
    "slots":{'number': 'NUMBER'},
    "utterances": utterancesDict['chineseDownNumber'],
  },
  function(request, response) {
    var number = request.slot('number')
    samsungRequest('/chinese_multiple_down?number=' + number, function callback(resp) {
      response.say(resp)
      response.send()
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

app.intent('power',
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
