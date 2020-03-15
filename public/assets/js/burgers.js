$(function() {
    $(".devour-it").on("click", function(event) {
        //console.log(event);
      var id = $(this).data("id");

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("change took place");
          location.reload();
        }
      );
    });


    $("#sub").on("click", function(event) {
        event.preventDefault();
        console.log("Hiiiii")
        console.log($("#bur").val().trim());
        var newBurger = {
          burger_name: $("#bur").val().trim(),
          devoured: 0
        };
        

        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function(res) {
            console.log("Added a new Burger");
            console.log("Response received",res)
            location.reload();
          }
        )
      });


})