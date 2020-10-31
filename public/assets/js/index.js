$(function() {
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