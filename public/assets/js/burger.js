// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(document).on("click", ".eat-burger", function (event) {
        event.preventDefault();

        var id = $(this).attr("data-id");
        console.log("id: ",id);
        
        // Send the eat request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function () {
                console.log("devoured burger", id);
               
                location.reload();
            }
        );
    });

    $(document).on("click", ".del-burger", function (event) {
        event.preventDefault();

        var id = $(this).attr("data-id");
        console.log("id: ",id);
        
        // Send the eat request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function () {
                console.log("devoured burger", id);
               
                location.reload();
            }
        );
    });

   
});