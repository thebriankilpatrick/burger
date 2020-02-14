$(function() {
    // Click event for devouring a burger
    $(".devourBtn").on("click", event => {
        let id = $(this).data("id"); // "this" is referring to the window object...
        console.log(id);

        $.ajax("/api/burger/" + id, {
            type: "PUT"

        }).then(function() {
            console.log("You have devoured a burger.");
            location.reload();
        });
    });

    // Click event for adding a burger
    $(".newBurger").on("click", event => {
        event.preventDefault();

        let newBurger = {
            name: $("#inputBurger").val().trim()
        }

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("You have created a new masterpiece.");
            location.reload();
        });
    });
});