function newItem() {
  // 1. Adding a new item to the list of items:
  var inputValue = $('#input').val();
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    // Create the list item with text and append it to the list
    var li = $('<li></li>').text(inputValue);
    $('#list').append(li);
    $('#input').val('');

    // 2. Crossing out an item from the list of items:
    li.dblclick(function() {
      $(this).toggleClass("strike");
    });

    // 3. Adding the delete button "X":
    var deleteButton = $('<button></button>').text('X').addClass('delete');
    li.append(deleteButton);

    // Event handler for the delete button
    deleteButton.click(function() {
      $(this).parent().remove();
    });
  }

  // 4. Reordering the items:
  $('#list').sortable();
}

// Event listener for the Add button
$('#button').click(newItem);

// Prevent form submission and trigger adding new item
$('form[name="toDoList"]').submit(function(e) {
  e.preventDefault();
  newItem();
});
