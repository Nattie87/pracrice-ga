angular
.module('criminals-homework')
.factory('Criminal', Criminal);

Criminal.$inject = ['API', '$resource'];

function Criminal(API, $resource) {
  return $resource(`${API}/criminals/:id`,
    { id: '@_id'},
     { 'update': { method: 'PUT' } }
  );
}
