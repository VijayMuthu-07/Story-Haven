document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('#input');
    input.addEventListener('keyup', function(event) {
        let story = document.querySelector('p');
        if(input.value) {
            story.innerHTML = `${input.value}`;
        }
        else {
            story.innerHTML = '';
        }
        event.preventDefault();
    });
});
