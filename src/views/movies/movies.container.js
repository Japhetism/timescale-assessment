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
        const getRecentMovies = async () => {
            setIsLoading(true);
            const responseObj = await MovieService.getRecentMovies();
            handleResponse(responseObj)
            setIsLoading(false)
        };
        getRecentMovies();
    }, []);

    const searchMovies = async (query) => {
        setIsLoading(true)
        let responseObj;
        if (query) {
            responseObj = await MovieService.searchMovies(query);
        } else {
            responseObj = await MovieService.getRecentMovies();
        }
        handleResponse(responseObj);
        setIsLoading(false);
    }

    const handleResponse = (responseObj) => {
        const { results, status_message } = responseObj
        if (results && results.length > 0) {
            setMovieList(results);
            setErrorMessage(null);
        } else if (results && results.length === 0) {
            setMovieList(results);
            setErrorMessage("No movie found");
        } else {
            setErrorMessage(status_message ? status_message : defaultErrorMessage);
            setMovieList([]);
        }
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