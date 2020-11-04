const { error } = require('console')
const http = require('http')
const port = 8080
const request = require('request')
let text = '<head><meta charset="utf-8" /></head><body><h1>Restaurants in Khon Kaen</h1><ol>'
request.get('https://krunapon.github.io/google/call-kk-restaurants.json', (error, response, body) =>{
    if (error) {
        return console.dir(error);
    }
    var result = JSON.parse(body);
    var ip = result.results;
    for (var place of ip) {
        text += `<li>${place.name}</li>`;
    }
})

const server = http.createServer((req, res) => {
    res.statusCode =  200
    res.setHeader('Content-Type', 'text/html')
    text += "</ol></body>";
    res.end(text)
})
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
