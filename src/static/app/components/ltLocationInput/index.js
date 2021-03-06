import template from './ltLocationInput.html';

class controller {
  constructor($scope) {
    this.$scope = $scope;
  }
  fireChanged(coordinates) {
    this.$scope.$emit('coordinatesChanged', coordinates);
  }
}
controller.$inject = ['$scope'];

export default {
  bindings: {
    latLng: '<',
    editLocation: '&'
  },
  controller,
  template
};
