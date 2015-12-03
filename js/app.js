function GitUserSearchController(Search) {
  var self = this;

  self.performSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      });
  };
}

function Search($http) {
  var queryUrl = 'https://api.github.com/search/users';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': token
        }
      });
    }
  };
}


angular
  .module('GitUserSearch', ['ngResource'])
  .controller('GitUserSearchController', ['Search', GitUserSearchController] )
  .factory('Search', ['$http', Search]);
