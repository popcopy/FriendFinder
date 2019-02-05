$(document).ready(function() {
    // Questions listed in an array so they can be procedurally generated.
    const questions = [
        'Your mind is always buzzing with unexplored ideas and plans.',
        'Generally speaking, you rely more on your experience than your imagination.',
        'You find it easy to stay relaxed and focused even when there is some pressure.',
        'You rarely do something just out of sheer curiosity.',
        'People can rarely upset you.',
        'It is often difficult for you to relate to other people’s feelings.',
        'In a discussion, truth should be more important than people’s sensitivities.',
        'You rarely get carried away by fantasies and ideas.',
        'You think that everyone’s views should be respected regardless of whether they are supported by facts or not.',
        'You feel more energetic after spending time with a group of people.'
    ];

    // Choices for personality questions.
    var choices = [
        '1 (Strongly Disagree)',
        '2 ',
        '3 ',
        '4 ',
        '5 (Strongly Agree)'
    ];

    // Identify div where questions will be inserted and initialize counter to 0.
    var questionDiv = $('#questions');
    i = 0;

    // For each question, create a div.
    questions.forEach(function (question) {
        i++;
        // Fill that div with a header, the question, and the choices selector.
        var item = $('<div class="question">');
        var headline = $('<h4>').text('Question ' + i);
        var questionText = $('<p>').text(question);
        var dropDown = $('<div class="form-group">');
        var select = $('<select class="form-control selector">');
        // Create an option for each choice.
        choices.forEach(function(choice) {
            var option = $('<option>').text(choice);
            select.append(option);
        });
        select.attr('id', 'select' + i);
        // Add the dropdown to the item, then add the item to the questions div.
        dropDown.append(select);
        item.append(headline, questionText, dropDown);
        var br = $('<br>');
        questionDiv.append(item, br);
    });

    // Event handler for when the form is submitted.
    $('#submit').on('click', function(event) {

        // // Prevent reload.
        event.preventDefault();

    });
});