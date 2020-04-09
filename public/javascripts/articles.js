const deleteButtons = document.getElementsByClassName('delete');

const deleteHandler = (event) => {
    console.log("ID: ", event.target.id);
    fetch(`/api/articles/${event.target.id}`, {
        method: 'DELETE'
    }).then(() => window.location.replace('/articles'));
}

for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteHandler);
}

fetch('/api/articles')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })