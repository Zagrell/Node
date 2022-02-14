const express = require("express");
const app = express()

app.use(express.json());


//DATA
const movies = [
{ 
    id: 2,
    title: "Movie 1"
},
{   
    id: 1,
    title: "Movie 2"
},
{ 
    id: 0,
    title: "Movie 3"
}
];

let idCounter = 3


//GET
app.get("/movies",(req, res) => {
    res.send(movies);
});

app.get("/movies/:id",(req, res) => {
    const index = movies.findIndex(movie => movie.id === Number(req.params.id));
    if(index !== -1){
    res.send(movies[index]);
    }else {
        res.send({})
    }
});

//POST
app.post("/movies", (req, res) => {
    const newMovie = {
        id: idCounter++,
        title: req.body.title
    };
    movies.push(newMovie);
    res.send(newMovie);
});

//PUT
app.put("/movies/:id", (req, res) => {
    const index = movies.findIndex(movie => movie.id === Number(req.params.id));
    if(index !== -1){

        const movieToPut = {
            id: Number(req.params.id),
            title: req.body.title
        }

        movies.splice(index,1,movieToPut);
        res.send(movies[index]);

    }else {
        res.send({})
    }
});

//PATCH
app.patch("/movies/:id", (req, res) => {
    const index = movies.findIndex(movie => movie.id === Number(req.params.id));
    if(index !== -1){
        movies[index].title = req.body.title;
        res.send(movies[index]);
    }else {
        res.send({})
    }

});

//DELETE
app.delete("/movies/:id", (req, res) => {
    const index = movies.findIndex(movie => movie.id === Number(req.params.id));
    if(index !== -1){
        res.send(movies[index]);
        movies.splice(index,1);
    }else {
        res.send({})
    }
});

app.listen(8080);