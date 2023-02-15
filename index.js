

function addMovie(event){
    event.preventDefault();
    let input = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn);

    const list = document.querySelector('ul');
    list.appendChild(movie);

    inoutField.value = ''

}
function deleteMovie(event) {

    message.textContent = `Movie deleted!`


    event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
    }
}

    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
// }

