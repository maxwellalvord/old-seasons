$(document).ready(function() {
  $("form#list").submit(function(event) {
  event.preventDefault();
  const item1 = $("#input1").val();
  const item2 = $("#input2").val();
  const item3 = $("#input3").val();
  const item4 = $("#input4").val();
  
  let array = [];
  array.push(item1, item2, item3, item4);
  const upper = [];
  array.forEach(element => {
    upper.push(element.toUpperCase());
  });
  upper.sort();
  upper.forEach(function(item) {
    $("ul").append('<li>' + item + '</li>');
    console.log(upper);
  });
  $("#cart").slideToggle();
  $("#end").show();
  
  // const ul = document.getElementById('final');

  // for (i = 0; i <= upper.length; i++) {
  //   const li = document.createElement("li"); // create li element.

  //   li.innerHTML = upper[i]; // assigning text to li using array value.

  //   ul.appendChild(li); // append li to ul.
  // }
  });
});