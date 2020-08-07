
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    //
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено слишком мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30){
            console.log("Вы киноман")
        } else {
            console.log("Ошибка");
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleDB: function() {
        if (this.privat == false) {
            console.log("Переключаю на true");
            this.privat = true;
        } else {
            console.log("Переключаю на false");
            this.privat = false;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            
            // while(genre === "" || genre === null) {
            //     genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            // }
            // personalMovieDB.genres[i - 1] = genre;    
            
            let genres = prompt("Введите ваши любимые жанры через запятую").toLowerCase();

            while(genres === "" || genres === null) {
                console.log("Некорректные данные");
                genres = prompt("Введите ваши любимые жанры через запятую");
            }
            personalMovieDB.genres = genres.split(", ");
            personalMovieDB.genres.sort();
        }
        //после того как все жанры введены
        this.genres.forEach((val, i) => {
            console.log(`Любимый жанр #${++i} - это ${val}`);
        });
    }   
};

personalMovieDB.toggleVisibleDB();
personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.toggleVisibleDB();
personalMovieDB.showMyDB(personalMovieDB.privat);

//
personalMovieDB.writeYourGenres();
