var urls = [
    "http://www.yahoo.co.jp"
    ,"http://zozo.jp"
    ,"http://google.com"
];

var casper = require('casper').create();
casper.start().each(urls, function(self, link) {
    self.thenOpen(link, function() {
        title = this.getTitle();
        console.log(title);
    })
    .thenEvaluate(function() {
        document.body.bgColor = 'white';
    }, 'setBackGround')
   .then(function() {
        this.capture(title + '.png');
   });
});
casper.run();
