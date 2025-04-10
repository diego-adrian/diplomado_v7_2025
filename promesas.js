// fetch('https://jsonplaceholder.typicode.com/todos/9')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(err => console.log(err));

async function getData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/9');
    const json = await data.json();
    console.log(json);
};

getData();