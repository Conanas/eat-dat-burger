// waits for the document to load before reading the javascript
$(function() {

    // event listener for submit button in the form to submit a new burger
    // creates a new burger object with the given user input in the textarea
    // makes a call to the api to post a new burger to be added to the sql database
    // reloads the page to update with the new burger
    $(".add-burger-form").on("submit", function(event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#add-burger-textarea").val().trim()
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        })
    })

    // event listener for the devour buttons next to the burgers
    // when clicked it creates a new object with the devoured state as 1 or true
    // makes put call to the api to update a burger as eaten in the sql database
    // reloads the page to update the burger lists
    $(".devour-button").on("click", function(event) {
        let id = $(this).data("id");
        let newDevourState = {
            devoured: 1
        };
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newDevourState
        }).then(function() {
            location.reload();
        })
    })
})