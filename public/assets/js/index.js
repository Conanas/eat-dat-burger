$(function() {
    $(".add-burger-form").on("submit", function(event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#add-burger-textarea").val().trim()
        }
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added burger to database")
            location.reload();
        })
    })
})