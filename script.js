$(document).ready(function() {
  // Function to add a new item
  function newItem() {
      var inputValue = $('#input').val().trim();
      if (inputValue !== '') {
          // Create the list item with the delete button as a string
          var listItem = '<li>' + inputValue + ' <span class="delete" style="display: inline;">X</span></li>';
          
          // Append the new list item to the list
          $('#list').append(listItem);
          
          // Clear the input field
          $('#input').val("");
      }
  }

  // Event listener for adding an item with the Add button
  $('#button').click(newItem);

  // Event listener for adding an item with the Enter key
  $("#input").on('keypress', function(e) {
      if (e.which === 13) {
          e.preventDefault(); // Prevent the default action for Enter key
          newItem();
      }
  });

  // Event listener for marking an item as complete
  $('#list').on('dblclick', 'li', function() {
      $(this).toggleClass('strike');
  });

  // Event listener for deleting an item
  $('#list').on('click', '.delete', function() {
      $(this).parent().fadeOut('slow', function() {
          $(this).remove();
      });
  });

  // Make the list sortable with drag and drop
  $('#list').sortable();
});
