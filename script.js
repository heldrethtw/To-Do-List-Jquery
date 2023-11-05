$(document).ready(function() {
  // Function to add a new item
  function addItem() {
      let inputValue = $('#input').val().trim();
      if (inputValue === '') {
          alert("You must write something!");
      } else {
          // Create the list item
          let li = $('<li></li>');
          // Wrap the item text in a span and append to the list item
          let itemText = $('<span class="item-text"></span>').text(inputValue);
          li.append(itemText);
          // Create the delete button with a margin-left inline style
          let deleteButton = $('<span class="delete">X</span>').css('margin-left', '10px');
          li.append(deleteButton);

          // Append the list item to the list
          $('#list').append(li);
          // Clear the input field
          $('#input').val('');
      }
  }

  // Event listener for crossing out an item
  $('#list').on('dblclick', 'li', function() {
      // Toggle the .strike class on the item text only
      $(this).children('.item-text').toggleClass('strike');
  });

  // Event listener for deleting an item
  $('#list').on('click', '.delete', function() {
      $(this).parent().fadeOut('slow', function() {
          $(this).remove();
      });
  });

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
