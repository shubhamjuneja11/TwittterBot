console.log('Bot Started');
var Twit = require('twit')

var T = new Twit({
  consumer_key:         'MP8Q2T8d62s8R6Knf58rh3mzI',
  consumer_secret:      'PE5Fl3x0DMycD2Z0mEKWJFajsyPwwiPKkFYGfRJkqmStuDCZs9',
  access_token:         '846114208911519744-OWzri3Q2Y5Kk0Zjo2RpvYvHipwvPYvS',
  access_token_secret:  'NQRRSnhk5EbEfGi3FzMgiFbpxgLVMuRhx2ziELXNYvwsE',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
