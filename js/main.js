'use strict';

/* 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?' */
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


/* 2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false */

    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

/*     3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
    Ответы стоит поместить в отдельные переменные
    Записать ответы в объект movies в формате: 
        movies: {
            'logan': '8.1'
        } */

for (let i = 0; i < 2; i++) {
    let filmName = prompt('Один из последних просмотренных фильмов?', '');
    let filmRating = prompt('На сколько оцените его?', '');

    if (filmName != null && filmRating != null & filmName != '' && filmRating != '' && filmName.length < 50) {
        personalMovieDB.movies[filmName] = filmRating;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}