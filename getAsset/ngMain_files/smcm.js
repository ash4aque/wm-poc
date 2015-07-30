var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
    $scope.myData = [{smid: 1, sm: "Standard", cmid: 2, cm: "UPS Ground", cmrank: 2, cmtnt: 4, smtnt: 99, update: "System at 09-03-2013;10:23"},
                     {smid: 1, sm: "Standard", cmid: 9, cm: "UPS Second day Air", cmrank: 2, cmtnt: 4, smtnt: 99, update: "System at 09-03-2013;10:23"},
                     {smid: 1, sm: "Standard", cmid: 2, cm: "USPS First Class", cmrank: 2, cmtnt: 4, smtnt: 99, update: "System at 09-03-2013;10:23"},   
                     {smid: 2, sm: "Expedited", cmid: 19, cm: "FedEx Express Saver (3 Day Service)", cmrank: 2, cmtnt: 4, smtnt: 99, update: "System at 09-03-2013;10:23"},
                     {smid: 2, sm: "Expedited", cmid: 22, cm: "FedEx 2Day", cmrank: 2, cmtnt: 4, smtnt: 99, update: "System at 09-03-2013;10:23"},
                     {smid: 2, sm: "Expedited", cmid: 29, cm: "UPS 3 Day Select", cmrank: 2, cmtnt: 4, smtnt: 99, update: "System at 09-03-2013;10:23"},
                     {smid: 3, sm: "Rush", cmid: 23, cm: "UPS Next Day Air", cmrank: 2, cmtnt: 4, smtnt: 99, update: "System at 09-03-2013;10:23"},
                     {smid: 3, sm: "Rush", cmid: 24, cm: "FedEx Standard Overnight (PM Delivery)", cmrank: 2, cmtnt: 4, smtnt: 99, update: "System at 09-03-2013;10:23"},
                     {smid: 3, sm: "Rush", cmid: 26, cm: "UPS Next Day Air Saver", cmrank: 2, cmtnt: 4, smtnt: 99, update: "System at 09-03-2013;10:23"}];
    $scope.gridOptions = { 
        data: 'myData',
        showGroupPanel: true,
        jqueryUIDraggable: true,
        enableCellSelection: true,
        enableCellEditOnFocus: true,
        enableColumnResize: true,
        maintainColumnRatios: false,
        enableRowSelection: false,
        enableCellEdit: true,
        columnDefs: [{field: 'smid', displayName: 'SM Id', enableCellEdit: false, width:70}, 
                     {field:'sm', displayName:'Shipping Method', enableCellEdit: false, width:200},  
                     {field:'cmid', displayName:'CM Id', enableCellEdit: false},
                     {field:'cm', displayName:'Carrier method', enableCellEdit: false, width: 300},
                     {field:'cmrank', displayName:'CM Ranking', enableCellEdit: true},
                     {field:'cmtnt', displayName:'CM TNT', enableCellEdit: true},
                     {field:'smtnt', displayName:'SM TNT', enableCellEdit: true},
                     {field:'update', displayName:'Last updated by', enableCellEdit: false, width: 220}]
                     
    };
});