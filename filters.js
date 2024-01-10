bookApp.filter('formatFilter', function() {
    return function(text) {
      if (text !== null) {
        for (var i in text) {
          var authors = text[i];
        }
        return authors;
      }
    };
  });
  
  
  bookApp.filter('dateFilter', function() {
    return function(text) {
      if (text !== null) {
        var d = new Date(text);
        var day = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        return (month + "/" + day + "/" + year);
      }
    };
  })
  .filter('startFrom', function() {
    return function(input, start) {
       start = +start; //parse to int
         if (isArray(input))
        return input.slice(start);
   }
}); 

function isArray(array) {
   if (array=== undefined)
   return false; 
   if ( toString.call(array) === "[object Array]") {
       return true;
   } else if ( typeof array.length === "number" ) {
       return true;
   }
   return false;
}