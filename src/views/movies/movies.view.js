import React from 'react';
import Card from '../../components/card';
import DefaultLayout from '../../components/default.layout';
import Header from '../../components/header';
import CardContainer from '../../components/card.container';
import Typography from '../../components/Typography';
import StyledModal from '../../components/modal';

const MoviesView = (props) => {
    return <DefaultLayout>
        <Header searchMovies={props.searchMovies} />
        {props.isModalOpen && <StyledModal
            id="modal"
            isOpen={props.isModalOpen}
            onClose={props.toggleState}
            modalSize="lg"
            data={props.modalContent}
        />}
        <Typography />
        <CardContainer>
            {props.movieList.map(movie => (
                <Card 
                    onClick={props.handleCardClick} 
                    movie={movie} 
                    key={Math.random()} 
                />
            ))}
        </CardContainer>
    </DefaultLayout>
}

export default MoviesView;