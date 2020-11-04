const status = response => {
    if (response.status >= 200 && response.status< 300) {  
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText)) 
}
const json = response => response.json()
const fetch = require("node-fetch") // เสมือนpromise


async function checkUser() {
     fetch(`https://api.github.com/users`)
    .then(status) 
    .then(json)
    .then(async (data) => {
         for (user of data) {
            await getName(user.login); 
        }
    })
    .catch(error => {
        console.log('Request failed', error); 
    })
 
}
function getName(login) {
    fetch('https://api.github.com/users/' + login)
    .then(status) 
    .then(json)
    .then(data  => {
         console.log(`{login:'${login}', name: ${data.name}}`);
    })
    .catch(error => {
        console.log('Request failed', error); 
    })
}


checkUser();