var testHtml = require('./helperMethods');

// TODO: the tests below should be automated so that all the files with a 
// .html extension inside a folder are tested

describe('common html files validation', function() {
  it('index.html should have no html errors', function(done) {
    testHtml('index.html');
  });

  it('forgot-password.html should have no html errors', function(done) {
    testHtml('forgot-password.html');
  });

  it('registers-dashboard.html should have no html errors', function(done) {
    testHtml('registers-dashboard.html');
  });

  it('sign-in-error.html should have no html errors', function(done) {
    testHtml('sign-in-error.html');
  });
});

describe('ai html files validation', function() {
  var path = './ai';

  it('address-page.html should have no html errors', function(done) {
    testHtml(`${path}/address-page.html`);
  });

  it('home.html should have no html errors', function(done) {
    testHtml(`${path}/home.html`);
  });

  it('index.html should have no html errors', function(done) {
    testHtml(`${path}/index.html`);
  });

  it('search-results.html should have no html errors', function(done) {
    testHtml(`${path}/search-results.html`);
  });
});

describe('bi html files validation', function() {
  var path = './bi';

  it('capped-results.html should have no html errors', function(done) {
    testHtml(`${path}/capped-results.html`);
  });

  it('home.html should have no html errors', function(done) {
    testHtml(`${path}/home.html`);
  });

  it('index.html should have no html errors', function(done) {
    testHtml(`${path}/index.html`);
  });

  it('search-results.html should have no html errors', function(done) {
    testHtml(`${path}/search-results.html`);
  });
});

describe('sbr html files validation', function() {
  var path = './sbr';

  it('admin-unit.html should have no html errors', function(done) {
    testHtml(`${path}/admin-unit.html`);
  });

  it('enterprise.html should have no html errors', function(done) {
    testHtml(`${path}/enterprise.html`);
  });

  it('legal-unit.html should have no html errors', function(done) {
    testHtml(`${path}/legal-unit.html`);
  });

  it('home.html should have no html errors', function(done) {
    testHtml(`${path}/home.html`);
  });

  it('index.html should have no html errors', function(done) {
    testHtml(`${path}/index.html`);
  });

  it('search-results.html should have no html errors', function(done) {
    testHtml(`${path}/search-results.html`);
  });
});

