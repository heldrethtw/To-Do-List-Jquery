$(document).ready(function() {
  // Function to add a new item
  function addItem() {
      let inputValue = $('#input').val().trim();
      if (inputValue === '') {
          // Handle empty input without an alert if desired
          return; // Exit the function early if no input
      }
      // Create a list item with the input text and a delete button
      let li = $('<li></li>');
      li.append(document.createTextNode(inputValue));
      let deleteButton = $('<span class="delete">X</span>');
      li.append(deleteButton);

      // Append the new list item to the list
      $('#list').append(li);

      // Clear the input field
      $('#input').val('');

      // Click event for the delete button
      deleteButton.click(function() {
          $(this).parent().remove();
      });

      // Double-click event to toggle the strike-through
      li.dblclick(function() {
          $(this).toggleClass('strike');
      });
  }

  // Event listener for the 'Add' button
  $('#button').click(addItem);

  // Event listener for pressing the 'Enter' key in the input field
  $('#input').on('keypress', function(e) {
      if (e.which === 13) {
          e.preventDefault();
          addItem();
      }
  });

  // Make the list sortable
  $('#list').sortable();
});
