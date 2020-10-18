!function(){
    "use strict";   
    var appointment_details= [ 
        { dept:"General Healthcare", doctor:"Dr.Daniel", name:"Mr.Rakshan" , date:"19.10.2020",  time:18},
        { dept:"Orthopaedics", doctor:"Dr.Sanjay", name:"Mrs.Keerthana" , date:"19.10.2020", time:8},
        { dept:"Dental", doctor:"Dr.Kathir", name:"Ms.Anushka" , date:"20.10.2020", time:12}
    ];
    
    var app =angular.module('bookApp', []);
    app.controller('bookController', bookController);
    
    

    
    // custom factory
    app.factory('myFactory', function () {
        return {
        gettime: function (input) {
                return ((input+1)%12);}      
        };});
        

    // custom service
    app.service('myService', function () {
        var chkEmail = function (mail) {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(mail) == false) 
            { return false; }
                return true;
            }
            this.validateEmail = function (email) {
            return chkEmail(email);
            }
    });

    //custom directives
    app.directive("mydir", function() {
        return {
            restrict : "A",
            template : "<p>info@ssdgoh.com<br>contact@ssdgoh.com</p>"
        };
    });

    app.directive("number", function() {
        return {
            restrict : "A",
            template : "<p>9442672613</p>"
        };
    });

    var time = 8;
    bookController.$inject = ['$scope','myFactory','myService'];
    function bookController($scope,myFactory,myService) {
        $scope.appointment_details = appointment_details;
        $scope.addToTable = function(){
            var pass = myService.validateEmail($scope.newemail);
            time=myFactory.gettime(time);
            $scope.time=time;
            var newItem = {
                dept: $scope.newdept,
                doctor:$scope.newdoctor,
                name: $scope.newname,
                date:$scope.newdate,
                time:$scope.time
            };
        
        if(pass){
            $scope.appointment_details.push(newItem);
        }
        };
        $scope.pasted= function(){
            $scope.pastect= "It is pasted 1 time";
        };
        

    }
    
    app.controller('mouse', function($scope) {
    $scope.showMe = false;
    $scope.myFunc = function() {
    $scope.showMe = !$scope.showMe;
    }

    });
}();