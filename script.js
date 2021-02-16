"use strict";
let numberOfFilms = prompt('Сколько фильмов вы уже посмотерли?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count<10) {alert("Просмотрено довольно мало фильмов");}
    else if (personalMovieDB.count>=10 && personalMovieDB.count<=30) {alert("Вы классический зритель");}
    else if(personalMovieDB.count>30) {alert("Вы киноман");}
    else {alert("Произошла ошибка");}

let i = 0;

while (i<2) {
    let movieName = prompt('Один из последних просмотренных фильмов?');
    if(movieName=="" || movieName==null || movieName.length>50) continue;

    let a = personalMovieDB.movies[movieName] = prompt('На сколько оцените его?'); 
    if(a=="" || a==null || a.length>50) continue;
    
    i++;
}

console.log(personalMovieDB);

