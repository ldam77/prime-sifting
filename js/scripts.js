$(document).ready(function(){

  $("#prime-form").submit(function(event){
    event.preventDefault();

    var userInput = $("input#input").val();
    var arrayNumbers = new Array(userInput-1);

    for(var i = 2; i <= userInput; i += 1){
      arrayNumbers[i-2] = i;
    }

    for(var i = 2; i <= arrayNumbers[arrayNumbers.length -1]; i += 1){
      for(var j = (i-1); j <= arrayNumbers.length; j += 1){
        if((arrayNumbers[j]%arrayNumbers[i-2]) === 0){
          arrayNumbers.splice(j, 1);
          j -= 1;
        }
      };
    };

console.log(arrayNumbers);
    $("#output").text(arrayNumbers.toString());

  });

});
