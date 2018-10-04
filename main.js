var app = angular.module("Main",[]);
app.controller("mainCtrl",["$http","$scope","$timeout",function($http,$scope,$timeout){
      $scope.header = [];
      $scope.data = [];
      var sa1 = [];
      var val = [];
      $scope.selected = {};
      $scope.dateVariable = new Date();

      $scope.IsVisible = false;
      $scope.ShowHide = function () {
          $scope.IsVisible = $scope.IsVisible ? false : true;
      }

      $scope.print = function(){
        $scope.printdata = [];
        // console.log($scope.data);
        angular.forEach($scope.data, function(value, key){
        if($scope.selected[key]){
          $scope.printdata.push(value);
        }
        });
        $timeout(function(){
          window.print();
        }, 1000);
      };
  
      $scope.checkAll = function() {
        angular.forEach($scope.data, function(value,key) {
          $scope.selected[key] = !$scope.selectAll;
        });

      };
      $scope.browse = function (){
          document.getElementById('uploadFile').click();
      };

      $scope.uploadGSTDataFile = function(output){
        output = output.replace(/"[^"]+"/g, function (v) {
          return v.replace(/,/g, '');
        });// check if any commas in the csv file if yes replace with empty eg "10,00" replace with "1000"
        output = output.replace(/['"]+/g, '');// replace "" with empty
        // console.log(output); 
        var lines = output.split("\n");
              var result = [];
              var headers = lines[0].split(",");
              $scope.header = headers;
              for (var i = 1; i < lines.length; i++) {
                  var obj = {};
                  var currentline = lines[i].split(",");
                  for (var j = 0; j < headers.length; j++) {
                      obj[headers[j]] = currentline[j];
                  }
                  result.push(obj);
              }
              $scope.data = result;
      };     

    //   $scope.setEditMode = function (value) {
    //     $scope.editMode = value;
    //   };  

    //   $scope.save = function (x) {
    //     var para = {
    //       SrNo : x.SrNo,
    //       EmployeeName: x.EmployeeName,
    //       Pday: x.PDay,
    //       basic: x.basic,
    //       da: x.da,
    //       ta: x.ta,
    //       incentive: x.incentive,
    //       gs: x.gs,
    //       pf: x.pf,
    //       pt: x.pt,
    //       esic: x.esic,
    //       advance: x.advance,
    //       busdeduct: x.busdeduct,
    //       deduct: x.deduct,
    //       isLP: x.isLP
    //     };
    //     //check if the file headers has same name as a column name in the table
    //     function columnMatching(){
    //         $scope.selectedColumn = {};
    //         angular.forEach($scope.table, function (head) {
    //         var index = $scope.header.indexOf(head);
    //         if (index != -1) {
    //             $scope.selectedColumn[head] = $scope.header[index];
    //             $scope.header.splice(index, 1);
    //         }
    //         });
    //         $scope.columnMatched = true;
    //     }

    //     $scope.selectColumn = function(selectedHead){
    //         if(selectedHead){
    //         var index = $scope.header.indexOf(selectedHead);
    //         $scope.header.splice(index, 1);
    //         }
    //     };    

    //     $scope.removeSelectedColumn = function(selectedHead){
    //         $scope.header.push($scope.selectedColumn[selectedHead]);
    //         $scope.selectedColumn[selectedHead] = undefined;
    //     };

    //     $scope.import = function(){
    //         // if ($scope.selectedColumn.empID) {
    //         if (Object.keys($scope.selectedColumn).length > 1){
    //             var uploadData = [];
    //             $scope.uploadError = "";
    //             //check if the each filed data
    //             angular.forEach($scope.data, function (value, key) {
    //             //each data
    //             angular.forEach(value, function (fValue, fKey) {
    //                 //find epid
    //                 if(fKey == $scope.selectedColumn.empID) {
    //                 //check the index of the from salaray data
    //                 var idx = $scope.data.findIndex(function (item) {
    //                     return item.empID == fValue;
    //                 });
    //                 if (idx != -1) {
    //                     uploadData.push($scope.data[idx]);
    //                 }else{
    //                     $scope.uploadError += "Unable to find EmpID:" + fValue + " \n";
    //                 }
    //                 }
    //             });
    //             });
    //             if (uploadData.length == $scope.data.length) {
    //             angular.forEach(uploadData, function (value, key) {
    //                 var idx = $scope.data.findIndex(function (item) {
    //                 return item[$scope.selectedColumn.empID] == value.empID;
    //                 });
    //                 angular.forEach($scope.table, function (head) {
    //                 if ($scope.selectedColumn[head]) {
    //                     value[head] = $scope.data[idx][$scope.selectedColumn[head]];
    //                 }
    //                 });
    //                 $scope.save(value); //save updated columns
    //             });
    //             $scope.hideModal();
    //             }
    //         }else{
    //             $scope.uploadError = "Atleast 2 or more field must be selected(one must be empID)";
    //         }
    //         }else{
    //         $scope.uploadError = "Atleast one field must match with EmpID";
    //         }
    //     };    
}]);
app.filter('convertToWord', function() {
  return function(amount) {
      var words = new Array();
      words[0] = '';
      words[1] = 'One';
      words[2] = 'Two';
      words[3] = 'Three';
      words[4] = 'Four';
      words[5] = 'Five';
      words[6] = 'Six';
      words[7] = 'Seven';
      words[8] = 'Eight';
      words[9] = 'Nine';
      words[10] = 'Ten';
      words[11] = 'Eleven';
      words[12] = 'Twelve';
      words[13] = 'Thirteen';
      words[14] = 'Fourteen';
      words[15] = 'Fifteen';
      words[16] = 'Sixteen';
      words[17] = 'Seventeen';
      words[18] = 'Eighteen';
      words[19] = 'Nineteen';
      words[20] = 'Twenty';
      words[30] = 'Thirty';
      words[40] = 'Forty';
      words[50] = 'Fifty';
      words[60] = 'Sixty';
      words[70] = 'Seventy';
      words[80] = 'Eighty';
      words[90] = 'Ninety';
      amount = amount.toString();
      var atemp = amount.split(".");
      var number = atemp[0].split(",").join("");
      var n_length = number.length;
      var words_string = "";
      if (n_length <= 9) {
          var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
          var received_n_array = new Array();
          for (var i = 0; i < n_length; i++) {
              received_n_array[i] = number.substr(i, 1);
          }
          for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
              n_array[i] = received_n_array[j];
          }
          for (var i = 0, j = 1; i < 9; i++, j++) {
              if (i == 0 || i == 2 || i == 4 || i == 7) {
                  if (n_array[i] == 1) {
                      n_array[j] = 10 + parseInt(n_array[j]);
                      n_array[i] = 0;
                  }
              }
          }
          value = "";
          for (var i = 0; i < 9; i++) {
              if (i == 0 || i == 2 || i == 4 || i == 7) {
                  value = n_array[i] * 10;
              } else {
                  value = n_array[i];
              }
              if (value != 0) {
                  words_string += words[value] + " ";
              }
              if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                  words_string += "Crores ";
              }
              if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                  words_string += "Lakhs ";
              }
              if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                  words_string += "Thousand ";
              }
              if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                  words_string += "Hundred and ";
              } else if (i == 6 && value != 0) {
                  words_string += "Hundred ";
              }
          }
          words_string = words_string.split("  ").join(" ");
      }
      return words_string;
  };
});
  

app.directive('uppercased', function() {
  return {
      require: 'ngModel',        
      link: function(scope, element, attrs, modelCtrl) {
          modelCtrl.$parsers.push(function(input) {
              return input ? input.toUpperCase() : "";
          });
          element.css("text-transform","uppercase");
      }
  };
});
app.directive('onReadFile', function ($parse) {
return {
  restrict: 'A',
  scope: false,
  link: function(scope, element, attrs) {
          var fn = $parse(attrs.onReadFile);

    element.on('change', function(onChangeEvent) {
      var reader = new FileReader();

      reader.onload = function(onLoadEvent) {
        scope.$apply(function() {
          fn(scope, {$fileContent:onLoadEvent.target.result});
        });
      };

      reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
    });
  }
};
});
