import './App.css';
import logo from './search.svg';
import { useEffect, useState } from "react";
import MovieCard from './myComponents/MovieCard'
import Footer from './myComponents/Footer';
// import Header from './myComponents/Header';


// Sample default movies
const defaultMovies = [
    {
        Title: "Inception",
        Year: "2010",
        imdbID: "tt1375666",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
        Title: "Interstellar",
        Year: "2014",
        imdbID: "tt0816692",
        Poster: "https://m.media-amazon.com/images/M/MV5BZDU5NTJkMjQtNGYyZC00NjYwLWJlNWMtODk5NDI5MDE3NDJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
        Title: "The Dark Knight",
        Year: "2008",
        imdbID: "tt0468569",
        Poster: "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    },
    {
        Title: "Iron Man",
        Year: "2008",
        imdbID: "tt0468562323",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
        Title: "Parasite",
        Year: "2008",
        imdbID: "tt0468569121",
        Poster: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
    },
    {
        Title: "The Conjuring",
        Year: "2008",
        imdbID: "tt0468569455",
        Poster: "https://m.media-amazon.com/images/M/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
        Title: "End-Game",
        Year: "2019",
        imdbID: "tt04685695666",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
        Title: "KGF",
        Year: "2021",
        imdbID: "tt04685696777",
        Poster: "https://m.media-amazon.com/images/M/MV5BM2M0YmIxNzItOWI4My00MmQzLWE0NGYtZTM3NjllNjIwZjc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
        Title: "Three idiots",
        Year: "2021",
        imdbID: "tt046856909876",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
];


const App = () => {
    const [movies, setMovies] = useState(defaultMovies);
    const [searchTerm, setSearchTerm] = useState("");
    const API_URL = "https://www.omdbapi.com/?apikey=5baa7886";

    useEffect(() => {
        if (searchTerm) {
            searchMovies(searchTerm);
        } else {
            // Reset to default movies if no search term is provided
            setMovies(defaultMovies);
        }
    }, [searchTerm]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        if (data.Search) {
            setMovies(data.Search);
        }
        else {
            setMovies([]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            searchMovies(searchTerm);
        }
    }

    return (
        <>
            <div className='MainContainer'>
                <h>Jio HotStar</h>
                <div className='Search'>
                    <input type='text' id='searchtext' placeholder='Search Movie Name'
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value) }}
                        onKeyDown={handleKeyDown}></input>
                    <img src={logo} className='Search-logo' alt='logo' onClick={() => searchMovies(searchTerm)} />
                </div>
                <div className='Banner'>
                    <iframe
                        src="https://www.youtube.com/embed/wELTVUjFbGY?autoplay=1&mute=1"
                        title="Interview Videos"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='movie-container'>
                    <h1>Movies</h1>
                    {
                        movies.length > 0 ? (
                            <div className='movie'>
                                {movies.map((movie) => (
                                    <MovieCard movie={movie} key={movie.imdbID} />
                                ))}
                            </div>
                        ) : (
                            <div><h2>No movies found</h2></div>
                        )
                    }
                    <h1>Anime</h1>
                    {
                        movies.length > 0 ? (
                            <div className='movie'>
                                {movies.map((movie) => (
                                    <MovieCard movie={movie} key={movie.imdbID} />
                                ))}
                            </div>
                        ) : (
                            <div><h2>No movies found</h2></div>
                        )
                    }

                </div>
                <Footer />
            </div >

        </>
    );
};

export default App;
