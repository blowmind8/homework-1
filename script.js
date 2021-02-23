"use strict";

let numberOfFilms;

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотерли?');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }

}

detectPersonalLevel();

function remember() {
    let i = 0;

    while (i < 2) {
        let movieName = prompt('Один из последних просмотренных фильмов?');
        if (movieName == "" || movieName == null || movieName.length > 50) continue;

        let a = personalMovieDB.movies[movieName] = prompt('На сколько оцените его?');
        if (a == "" || a == null || a.length > 50) continue;

        i++;
    }
}

remember();

function showMyDB() {
    if (!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for(let i=0;i<3;i++){
        personalMovieDB.genres[i]=prompt("Ваш любимый жанр под номером "+ (i+1));
    }
}