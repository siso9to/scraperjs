var urls = [
    "http://www.yahoo.co.jp",
    "http://google.com",
    "http://www.facebook.net"
];

var casper = require('casper').create();
casper.start().each(urls, function(self, link) {
    self.thenOpen(link, function() {
        title = this.getTitle();
    })
    .thenEvaluate(function() {
        document.body.bgColor = 'white';
    }, 'setBackGround')
   .then(function() {
      this.capture(title + '.png');
   });
});
casper.run();
