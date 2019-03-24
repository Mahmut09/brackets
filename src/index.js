module.exports = function check(str, bracketsConfig) {
  let result = false;
  var wasFound = false;
  let i = 0;
  let keys = Array(0);
  bracketsConfig.forEach(function(item, i, arr){
    keys.push(item[0]+item[1]);
  });
  function findRemove (str, substr){
    let local = str;
    let pos = 0;
    while (true) {
      var foundPos = local.indexOf(substr, pos);
      if (foundPos == -1) {
        wasFound= false;
        break 
      };
      wasFound = true;
      local = local.substring(0, foundPos)+local.substring(foundPos+2);
      pos = foundPos + 1; 
    }
      return local;
  }
    while (str.length > 1){
       keys.forEach(function(item, i, arr){
         str = findRemove(str,item);
         } 
         )
         i++;   
        if (!wasFound && (i > 30)) break;   
        }


if (str.length == 0) result = true;


return result;
}