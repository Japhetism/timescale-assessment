import React, { useState, useEffect } from 'react';
import MoviesView from './movies.view';
import MovieService from '../../services/movies';

export const MoviesContainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const toggleState = e => {
        setIsModalOpen(!isModalOpen)
    }
    const handleCardClick = movie => {
        console.log("got to handleCardClick", movie)
        setModalContent(movie);
        setIsModalOpen(true)
    }

    useEffect(() => {
        getRecentMovies();
    }, []);

    const getRecentMovies = async () => {
        const responseObj = await MovieService.getRecentMovies();
        console.log("from get recent movies ", responseObj.results)
        setMovieList(responseObj.results);
    }
    
    return <MoviesView 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        toggleState={toggleState}
        handleCardClick={handleCardClick}
        movieList={movieList}
        modalContent={modalContent}
    />
}