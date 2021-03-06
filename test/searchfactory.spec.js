describe('factory: Search', function() {

  var search;

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(Search) {
    search = Search;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
    .when("GET", "https://api.github.com/search/users?access_token="+token+"&q=hello")
    .respond(
      { items: items}
    );
  }));

  it('returns search results', function() {
    search.query('hello')
    .then(function(response) {
      expect(response.data.items).toEqual(items);
    });
    httpBackend.flush();
  });

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });
});
