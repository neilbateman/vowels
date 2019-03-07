var firstSpec = function(cell) {

  var first = cell.slice(0,1);

  if ((first === "a") || (first === "e") || (first === "i") || (first === "o") || (first === "u")) {
    var result = cell.concat("way");
    return result
  } else {
    return "PLACEHOLDER"
  }
}

$(document).ready(function() {



  $("form#input-number").submit(function(event) {
    event.preventDefault();
    var textInput = $("input#sentence").val();
    /*var result = inputNumber(number);*/
    var textLower = textInput.toLowerCase(); //output comes from concatanating textInput and "way"

    var words = textLower.split(" ");

    for (i=0; i<= words.length; i++) {
      var result = firstSpec(words[i]);
      $("#result").append(result + "<br>") ;
    }


  /*words.forEach(firstSpec(textLower, textInput) {
    $("#result").append(firstChar + "<br>") ;
  });*/

  /*var result = words.map(firstSpec(textLower, textInput) {
    $("#result").append(firstChar + "<br>") ;
  });*/

    /*$("#result").text(textInput);*/
  });
});

/*$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});*/

/*$(".my-class").show();
$(".my-class").hide();
$(".my-class").toggle();*/

/*Add a CSS class to an element:
$("body").addClass("my-class");*/

/*var add = function(number1, number2) {
  return number1 + number2;
};*/

/*var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(add(number1, number2));*/

/*$('.element-to-select').click(function() {
  alert('hi');
});*/

/*Test that you've selected the correct DOM element:
$('.element-to-select').css('background-color', 'green');*/

/*.clickable {
  cursor: pointer;
  color: #0088cc;
.clickable:hover {
  text-decoration: underline;
}*/
