$(document).ready(function() {
  // Function to add a new item
  function addItem() {
      let inputValue = $('#input').val().trim();
      if (inputValue === '') {
          alert("You must write something!"); // Or handle this silently as you prefer
      } else {
          // Create the list item with text
          let li = $('<li></li>').text(inputValue);
          // Create the delete button
          let deleteButton = $('<span class="delete">X</span>');

          // Append the delete button to the list item
          li.append(deleteButton);
          // Append the list item to the list
          $('#list').append(li);
          // Clear the input field
          $('#input').val('');
      }
  }

  // Function to cross out a list item
  function crossOut() {
      $(this).toggleClass("strike");
  }

  // Function to delete a list item
  function deleteListItem() {
      $(this).parent().fadeOut('slow', function() {
          $(this).remove();
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

  // Event delegation for crossing out an item on double-click
  $('#list').on('dblclick', 'li', crossOut);

  // Event delegation for deleting an item on click of the delete button
  $('#list').on('click', '.delete', deleteListItem);

  // Make the list sortable
  $('#list').sortable();
});
