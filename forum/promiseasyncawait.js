//promises
let p= new Promise((resolve, reject) => {
    let num=6;
    if(num%2==0){
        resolve("Success")
    }
    else{
        reject("Failure")
    }
})
p.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})

//async await
async function getData(){
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/posts")
        let data=await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
