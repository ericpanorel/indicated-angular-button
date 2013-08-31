indicated-angular-button
========================

Implementation of a directive for a button with a busy indicator using <a href='http://fgnass.github.io/spin.js/' target='_blank'>spin.js</a>

<h2>Depends On</h2>
1. spin.js (doesn't depend on jQuery)
2. angular.js

<h2>Usage</h2>

    <button type="submit" class="btn btn-success btn-lg" data-indi-click="vm.getComments()">Get Comments</button>

<h2>Example</h2>
<h3>HTML</h3>
    
    ....
    <div class="row" data-ng-controller="qtestController as vm" ng-cloak>
        <h1>Q Experiments</h1>
        <form class="form-inline" role="form">
    
            <button type="submit" class="btn btn-success btn-lg" data-indi-click="vm.getComments()">Get Comments</button>
    
        </form>
       
    </div>
    <script src="/Scripts/spin.js"></script>
    <script src="/Scripts/angular.min.js"></script>
    ....

<h3>Controller</h3>
    
    (function () {
      'use strict';
      var controllerId = 'qtestController';
      angular.module('app').controller(controllerId,
  		['$scope', 'qtestDataService', qtestController]);
  
      function qtestController($scope, qtestDataService) {
          var vm = this;
          vm.comments = [];
          vm.getComments = getComments;
  
          //#region Internal Methods        
          function getComments() {
              vm.comments = qtestDataService.getDataQ(); // returns a promise
              return vm.comments;
          }
  
          //#endregion
      }
    })();
    
<h1>License</h1>
MIT license - http://www.opensource.org/licenses/mit-license.php
