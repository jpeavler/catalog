const deleteButtons = document.getElementsByClassName('delete');
const titleInput = document.getElementById('title');
const arthorInput = document.getElementById('author');
const linkInput = document.getElementById('link');
const descInput = document.getElementById('desc');

const submitHandler = () => {
    console.log("Attempt to submit");
    let subData = [{
        'title': titleInput.value,
        'author': arthorInput.value,
        'link' : linkInput.value,
        'desc' : descInput.value
    }]
    fetch(`/api/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(subData)
    }).then(() => window.location.replace('/articles'));
}
submit.addEventListener('click', submitHandler);

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