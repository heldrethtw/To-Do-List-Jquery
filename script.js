$(document).ready(function() {
  // Function to add a new item
  function newItem() {
      var inputValue = $('#input').val();
      if (inputValue === '') {
          alert("You must write something!");
      } else {
          $('#list').append("<li>" + inputValue + " <span class='delete'>X</span></li>");
          $('#input').val("");
      }
  }

  // Event listener for adding an item with the Add button
  $('#button').click(newItem);

  // Event listener for adding an item with the Enter key
  $("#input").on('keypress', function(e) {
      if (e.which === 13) {
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
