$(document).ready(function() {
    let terms = [];
    const storedTerms = localStorage.getItem('terms');

    if (storedTerms) {
        try {
            terms = JSON.parse(storedTerms);
        } catch (error) {
            console.error("Error parsing JSON:", error);
            // Handle the error or reset terms array as needed
        }
    }

    function updateLocalStorage() {
        localStorage.setItem('terms', JSON.stringify(terms));
    }

    function displayTerms() {
        $('#termList').empty();

        if (terms && terms.length) {
            terms.forEach(function(term) {
                $('#termList').append(`<li>${term}</li>`);
            });
        }
    }

    displayTerms();

    $('#termForm').submit(function(event) {
        event.preventDefault();
        let newTerm = $('#termInput').val().trim();

        if (newTerm !== '') {
            terms.push(newTerm);
            updateLocalStorage();
            displayTerms();
            $('#termInput').val('');

            console.log(terms);
        }
    });
});
