const titleInput = document.getElementById('title');
const arthorInput = document.getElementById('author');
const linkInput = document.getElementById('link');
const descInput = document.getElementById('desc');
const topic1Input = document.getElementById('topic1');
const topic2Input = document.getElementById('topic2');
const topic3Input = document.getElementById('topic3');
const addButton = document.getElementById('submit');
const idUpdateInput = document.getElementById('idUpdate');
const keyUpdateInput = document.getElementById('keyUpdate');
const valueUpdateInput = document.getElementById('valueUpdate');
const updateButton = document.getElementById('updateBtn')
const deleteButtons = document.getElementsByClassName('delete');


const submitHandler = () => {
    console.log("Attempt to submit");
    let subData = [{
        'title': titleInput.value,
        'author': arthorInput.value,
        'link' : linkInput.value,
        'desc' : descInput.value,
        'topics' : [
            topic1Input.value,
            topic2Input.value,
            topic3Input.value
        ]
    }]
    fetch(`/api/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(subData)
    }).then(() => window.location.replace('/articles'));
}
addButton.addEventListener('click', submitHandler);

const updateHandler = () => {
    console.log("Attempt to update");
    let key = keyUpdateInput.value;
    console.log("This is the key given: ", key);
    let updateData = {
        [key] : valueUpdateInput.value
    };
    console.log("This is what we tried to give: ",updateData);
    fetch(`/api/articles/${idUpdateInput.value}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    }).then(() => window.location.replace('/articles'));
}
updateButton.addEventListener('click', updateHandler);

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