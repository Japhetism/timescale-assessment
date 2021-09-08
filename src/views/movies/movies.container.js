import React, { useState, useEffect } from 'react';
import MoviesView from './movies.view';
import MovieService from '../../services/movies';

export const MoviesContainer = () => {
    const defaultErrorMessage = "An error occurred, please try again."
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const toggleState = e => {
        setIsModalOpen(!isModalOpen)
    }
    const handleCardClick = movie => {
        setModalContent(movie);
        setIsModalOpen(true)
    }

    useEffect(() => {
        getRecentMovies();
    }, []);

    const getRecentMovies = async () => {
        setIsLoading(true);
        const responseObj = await MovieService.getRecentMovies();
        const { results, status_message } = responseObj
        if (results) {
            setMovieList(results);
            setErrorMessage(null);
        } else {
            setErrorMessage(status_message ? status_message : defaultErrorMessage);
            setMovieList([]);
        }
        setIsLoading(false)
    }

    const searchMovies = async (query) => {
        setIsLoading(true)
        let responseObj;
        if (query) {
            responseObj = await MovieService.searchMovies(query);
        } else {
            responseObj = await MovieService.getRecentMovies();
        }
        const { results, status_message } = responseObj
        if (results) {
            setMovieList(results);
            setErrorMessage(null);
        } else {
            setErrorMessage(status_message ? status_message : defaultErrorMessage);
            setMovieList([]);
        }
        setIsLoading(false);
    }
    
    return <MoviesView 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        toggleState={toggleState}
        handleCardClick={handleCardClick}
        movieList={movieList}
        modalContent={modalContent}
        searchMovies={searchMovies}
        isLoading={isLoading}
        errorMessage={errorMessage}
    />
}