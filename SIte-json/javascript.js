const url = "https://randomuser.me/api/?results=10";

fetch(url).then(Response => {
        return Response.json()

}).then(data => {console.log(data.results);
}).catch(error=> {
    console.log(error);
})
