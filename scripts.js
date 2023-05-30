let inputValue = $("#input").val();
let list = $("#list");
let li = $("<li>TEST</li>");
li.on("click", function () {
  li.addClass("strike");
});
list.append(li);

/* 
$("input").each(function (i) {
  // i index value during each iteration (starts at 0 and increases by one on each iteration)
  let inputValue = $(this).val(); // val() value of an input field
  let inputName = $(this).attr("name"); // equivalent to getAttribute
  if (inputValue().length < 1) {
    console.log("Please fill out the " + inputName + " field");
  }
});
*/
