// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-eat").on("click", function (event) {
    var id = $(this).data("id");
    var newEat = $(this).data("neweat");

    var newEatState = {
      eaten: newEat
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
        console.log("changed eat to", newEat);
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#Burger-Name").val().trim(),
      eaten: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");
    console.log(id);
    
    // Send the POST request.
    $.ajax("/api/burgers/" +id, {
      type: "DELETE",
    }).then(
      function () {
        console.log("del new burger"+ id);
        // Reload the page to get the updated list
        location.reload();
      }
    );

  });


});