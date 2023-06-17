'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms) ) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
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

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let filmName = prompt('Один из последних просмотренных фильмов?', '');
        let filmRating = prompt('На сколько оцените его?', '');

        if (filmName != null && filmRating != null & filmName != '' && filmRating != '' && filmName.length < 50) {
            personalMovieDB.movies[filmName] = filmRating;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    } 
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, ``);
    }
}

writeYourGenres();