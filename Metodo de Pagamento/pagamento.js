function selectOption(event, option) {
    event.preventDefault();

    // Remove 'selected' class from all options
    document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));

    // Add 'selected' class to the clicked option
    event.currentTarget.classList.add('selected');

    // Change the color of the finalize button
    document.getElementById('finalize-button').classList.add('selected');
}

