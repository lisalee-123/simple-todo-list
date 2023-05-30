//1. Adding a new item to the list:

function newItem() {
  //function responsible to create the new item
  let li = $("<li></li>"); //assigns the variable li to the li attributes
  let inputValue = $("#input").val(); //takes the value of the entered input and assigns a variable
  li.append(inputValue); //appends the value to the list item

  if (inputValue === "") {
    //if empty, error message
    alert("You must write something!");
  } else {
    $("#list").append(li); //if not empty, append li to the ordered list
  }

  //2. Crossing an item out:
  function crossOut() {
    //nested function within the newItem function
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike"); //toggle the strike class on and off
  });
  //3. Adding a delete button
  let crossOutButton = $("<crossOutButton></crossOutButton>"); //new button element created and assigned to a variable
  crossOutButton.append(document.createTextNode("X")); //creates the text "X"
  li.append(crossOutButton); //appends the button to the li element

  crossOutButton.on("click", deleteListItem); //eventListener, using another nested function
  function deleteListItem() {
    //nested function to delete the item by adding the delete class
    li.addClass("delete");
  }

  $("#list").sortable(); //adds the sorting functionality
}
