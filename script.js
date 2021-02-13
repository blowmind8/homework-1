"use strict";
let numberOfFilms = prompt('Сколько фильмов вы уже посмотерли?');

let personalMovieDB = {
count:numberOfFilms,
movies:{},
actors:{},
genres:[],
privat:false
};

//alert(numberOfFilms);
//alert(personalMovieDB.count);

let movieName = prompt('Один из последних просмотренных фильмов?');
personalMovieDB.movies.movieName = prompt('На сколько оцените его?');

alert(personalMovieDB.movies.movieName);