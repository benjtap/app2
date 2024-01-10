bookApp.controller('BookListCtrl', function ($scope,$window,ngDialog, BookService) {
    $scope.searchTerm = "";
	
	$scope.searchTerm = "";
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.data = [];
    $scope.datafavorites = [];
    
    $scope.totalrecords =0;
    $scope.numberOfPages=0;

   

    $scope.objvalue = {};
     
    $scope.username =$window.sessionStorage.getItem("username");
    $scope.dic_favorites=$window.sessionStorage.getItem("dic_favorites");
   // 

    $scope.Add_to_favorites = function (item) {

        
        var id = item.id;
        var pitem=item;  

       
         if ($scope.dic_favorites ==null)
          $scope.dic_favorites = []
    
      
          if (exist_keys_dic($scope.dic_favorites,id)==false)
             insert_into_dic(id,pitem)

        
        
          

    };

    $scope.isfavorites =function (item) {
        
        var  dic_favorites =$scope.dic_favorites
        
        if (dic_favorites==null)
         return false;
     
        for (var p in dic_favorites)
             {
                var pitem=dic_favorites[p];
                if (pitem.id==item.id)
                return true;
             }
             return false;
          

    };

    
  
   function insert_into_dic(id,pitem){
    var  elem = {}
  

      elem.id=id 
  
      elem.item=pitem;

      $scope.dic_favorites.push(elem)

    $window.sessionStorage.setItem("dic_favorites",$scope.dic_favorites);;
           
   }

  

  


    function exist_keys_dic(dic,val){
      if (dic==null)
         return false;
     
        for (var p in dic)
             {
                var pitem=dic[p];
                if (pitem.id==val)
                return true;
             }
             return false;
    }

    $scope.showModalfavorites= function () {
       
        $scope.datafavorites.length = 0;
            
        
        for (var p in $scope.dic_favorites) {
            var elem = $scope.dic_favorites[p]
            $scope.datafavorites.push(elem.item);
        }


         ngDialog.open({
             template: 'externaltemplatefavorites.html',
             className: 'ngdialog-theme-plain',
             scope: $scope
         });
         
     };


    $scope.showModaldetails = function (item) {

       debugger;
       $scope.objvalue=item
        ngDialog.open({
            template: 'externalTemplatedetails.html',
            className: 'ngdialog-theme-plain',
            scope: $scope
        });
        
    };

    $scope.doSearch = function () {
        BookService.get({ q: $scope.searchTerm }, function (response) {
    
            $scope.totalrecords =0;
            $scope.data.length =0;
            $scope.currentPage = 0;
            
            $scope.orderProp = 'volumeInfo.title';
            $scope.bookResults = response.items;
            $scope.numberOfPages=0;
             if (response.items ==null)
             return;

             
             $scope.totalrecords=response.items.length;

            $scope.numberOfPages=Math.ceil( $scope.totalrecords/$scope.pageSize); 
            for (var i=0; i<$scope.totalrecords -1; i++) {
                    $scope.data.push("Item "+i);
             }

            
            });
        }
    });
    






bookApp.controller('LoginCtrl', function($scope, $location, $window) {
    
    $scope.user = {};
   
    $scope.loginUser=function()
    {
        var username=$scope.username;
        var password=$scope.password;
        

        $window.sessionStorage.setItem("username",username);
          
        
        $location.path( "/booklist" );
      
    }
});