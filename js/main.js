/* Define the functions we'll use */

/* this function is called when the checkbox in a list item is clicked. "this" always refers to the “owner” of the function we're executing- to the object that a function is a method of. */
/* it changes the text of the list item to strikethrough and grey */ 
function completeItem() {
  this.nextSibling.className = "completed";
}

/* This function reads the form and returns an object with the form values */
function getFormValues(){
  var form = document.getElementById ("the_form");
  var todo = form.elements.task.value;
  return {task: todo}; 
}

/* This function adds a new list item to the list using the given parameters */
/* Why do we separate this function from the one above? Where else do these values come from? */

function addListItem( formValues){

  /* make the list item element */
  var item = document.createElement("li");
  
  /* put a checkbox at the start of the list item and make it clickable*/
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", completeItem);
  item.appendChild(checkbox)

  /* add the text from the parameter and make it stylable using a span element */
  var the_span = document.createElement("span");
 
  /* make the text node and attach it to the span element */
  var node = document.createTextNode( formValues.task);
  the_span.appendChild(node);
  item.appendChild(the_span);

  /* make the image for the delete button and attach it to the list element */
  deleteButtonImage = document.createElement("img");
  deleteButtonImage.setAttribute("src", "http://www2.psd100.com/icon/2013/09/1001/minus-icon-0910125918.png");
  deleteButtonImage.setAttribute("alt", "[X]");
  deleteButtonImage.setAttribute("class", "deleteListItem");
  
  /* make it clickable */
  deleteButtonImage.addEventListener("click", removeListItem);
  
  /* attach the button to the list item */
  item.appendChild(deleteButtonImage);
  
  /* attach the list item to the list */
  var list = document.getElementById("todoList");
  list.appendChild(item);
}

/* This function uses two other functions to 1) get the values from the form, and 2) put them in the list */
function addListItemFromForm() {
  addListItem( getFormValues());
}

/* This function will be called when the delete button image in the list item is clicked. */
function removeListItem() {
  var listItem = this.parentNode;
  listItem.parentNode.removeChild(listItem);
}

/* this function sets up things to catch clicks on the form submit button */
function setUpForm() {
  var button = document.getElementById("submitButton");
  button.addEventListener("click", addListItemFromForm);
  }

/* this function adds some example values to the list */
function makeStartingList(){
    for(var i = 0; i<1; i++){
    addListItem( {task: "Make the list"});
    addListItem( {task: "Test the list"});
    addListItem( {task: "Pretend to do the list"});
  }
}

/* This runs the functions previously defined and gets the page ready for the user */
setUpForm();
makeStartingList();
attachDeleteButtonListeners();


