$(document).ready(function() {
  // Function to add a new item
  function addItem() {
      var inputValue = $('#input').val().trim();
      if (inputValue === '') {
          // Optionally handle empty input without an alert
      } else {
          // Create a new list item and append the input value
          var li = $('<li></li>');
          li.text(inputValue);

          // Create a delete button with inline styles to ensure visibility
          var deleteButton = $('<span class="delete">X</span>').css({
              'display': 'inline', // Override CSS to ensure it's visible
              'margin-left': '5px', // Add some space from the to-do item text
              'cursor': 'pointer' // Change cursor on hover
          });

          // Append the delete button to the list item
          li.append(deleteButton);

          // Append the list item to the list
          $('#list').append(li);

          // Clear the input field
          $('#input').val('');

          // Event handler for the delete button
          deleteButton.click(function() {
              $(this).parent().fadeOut('slow', function() {
                  $(this).remove(); // Remove the item from the DOM
              });
          });

          // Event handler for striking through the item on double click
          li.dblclick(function() {
              $(this).toggleClass('strike');
          });
      }
  }

  // Event listener for the 'Add' button
  $('#button').click(addItem);

  // Event listener for pressing the 'Enter' key in the input field
  $('#input').keypress(function(e) {
      if (e.which == 13) { // Enter key
          e.preventDefault();
          addItem();
      }
  });

  // Make the list sortable
  $('#list').sortable();
});
