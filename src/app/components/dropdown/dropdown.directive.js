export function DropdownDirective($log) {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
        items: '='
    },
    template: '<ul><li ng-repeat="item.name for item in items"></li></ul>',
    link: linkFunc
  };

  return directive;

  function linkFunc(scope, el) {
    $log.log('items',scope.items);
    el.addClass('drop-down');

    angular.forEach(scope.items, () => {

    });
  }

}
