class Movie 
{
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
     this.rating = rating;
    }
  
}

function getPG(movies)
{
return movies.filter(movies => movies.rating == "PG");
}




  const myMovie1 = new Movie("Movie1", "studio1", "PG14");
  const myMovie2 = new Movie("Movie2", "studio2", "");
  const myMovie3 = new Movie("Casino Royale", "Eon Productions", "PG­13");

  const pgMovies = [new Movie("Movie1","studio1","PG14"),
  new Movie("Movie2","studio2","PG14"),
  new Movie("Movie3","studio3","PG"),
  new Movie("Movie4","studio4","PG14"),
  new Movie("Movie5","studio5","PG"),
  new Movie("Movie6","studio6","PG14"),
  new Movie("Movie7","studio7","PG"),
  ];
  

  console.log(myMovie1.title + " " + myMovie1.studio  + " " + myMovie1.rating);
  console.log(myMovie1.title + " " + myMovie2.studio + " " + myMovie2.rating);
  console.log(myMovie3.title + " " + myMovie3.studio + " " + myMovie3.rating);

  console.log(" Movies with rating PG are");
  console.log(getPG(pgMovies))



