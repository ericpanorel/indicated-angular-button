(function (Spinner) {
    'use strict';
    var directiveId = 'indiClick';
    app.directive(directiveId, ['$parse', function ($parse) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;
        function link(scope, element, attr) {
            var fn = $parse(attr[directiveId]),
            target = element[0],
            height = element.height(),
            oldWidth = element.width(),
            opts = {
                length: Math.round(height / 3),
                radius: Math.round(height / 5),
                width: Math.round(height / 10),
                color: element.css("color"),
                left: -5
            }; // customize this "resizing and coloring" algorithm

            element.on('click', function (event) {
                scope.$apply(function () {
                    attr.$set('disabled', true);
                    element.width(oldWidth + oldWidth / 2); // make room for spinner

                    var spinner = new Spinner(opts).spin(target);
                    // expects a promise
                    // http://docs.angularjs.org/api/ng.$q
                    fn(scope, { $event: event })
                    .then(function (res) {
                        element.width(oldWidth); // restore size
                        attr.$set('disabled', false);
                        spinner.stop();
                        return res;
                    }, function (res) {
                        element.width(oldWidth); // restore size
                        attr.$set('disabled', false);
                        spinner.stop();
                    });
                });
            });
        }
    }]);
})(Spinner);
