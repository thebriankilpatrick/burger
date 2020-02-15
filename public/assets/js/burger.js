$(function() {
    // Click event for devouring a burger
    $(".devourBtn").on("click", event => {
        const id = event.target.id; 

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
        let burgerName = $("#inputBurger").val().trim();

        // Validating if burger name's input field is empty
        if (burgerName === "") {
            alert("You actually have to input something to be considered a burger name.  Try again.");
            return;
        }
        else {
            let newBurger = {
                name: burgerName
            }
            $.ajax("/api/burger", {
                type: "POST",
                data: newBurger
            }).then(function() {
                console.log("You have created a new masterpiece.");
                location.reload();
            });
        }
    });
});