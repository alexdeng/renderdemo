var myApp = angular.module('myApp', ['ui.ace'])


myApp.controller('MainCtrl', function($scope, $http,$timeout){
 
   $scope.getText = function(url){
       $.ajax({
          url: url,
          type: 'GET',
          dataType: 'text',
          success: function(text) {
            $scope.code = text
            console.log(text)

          }
        });
    }
  $scope.code = $scope.getText("example/ggvis.rmd");
   
   $scope.domarkdown = function(){
        $("#output").attr('src', '')
        $("#loading").show()
        var req = ocpu.call("rendermd", {
        text: $scope.code   
     }, function(session){
       $("#loading").hide()
       $("#output").attr('src', session.getFileURL("output.html"));  
     }).fail(function(text){
      alert("Error: " + req.responseText);
     });  
   }
   $scope.dorcharts = function(){
        $("#output").attr('src', '')
        $("#loading").show()
        var req = ocpu.call("make_chart", {
        text: $scope.code   
     }, function(session){
       $("#loading").hide()
       $("#output").attr('src', session.getFileURL("output.html"));  
     }).fail(function(text){
      alert("Error: " + req.responseText);
     });  
   }
   $scope.doevaluate = function(){
        $("#output").attr('src', '')
        $("#loading").show()
        var req = ocpu.call("evaluateR", {
        text: $scope.code   
     }, function(session){
       $("#loading").hide()
       $("#output").attr('src', session.getFileURL("output.html"));  
     }).fail(function(text){
      alert("Error: " + req.responseText);
     });  
   }
   $scope.aceOptions = {
     theme: 'monokai',
     mode: 'r',
     useWrapMode : true
   }
})

