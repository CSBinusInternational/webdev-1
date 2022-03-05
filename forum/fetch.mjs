//The fetch() method is used to request to the server and load the information in the webpages.;
import fetch from "node-fetch" 
let url = "https://jsonplaceholder.typicode.com/posts"
let userids=[]
//get userids from the url
fetch(url)
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        userids.push(element.userId)
    });
    console.log(userids)
})
.catch(error => console.log(error))