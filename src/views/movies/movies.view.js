import React from 'react';
import Card from '../../components/Card';
import DefaultLayout from '../../components/Default.Layout';
import Header from '../../components/Header';
import CardContainer from '../../components/Card.Container';
import Typography from '../../components/Typography';
import StyledModal from '../../components/Modal';
import Spinner from '../../components/Spinner';
import Alert from '../../components/Alert';

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
        <Typography title="Most Recent Movies" />
        <CardContainer>
            {props.errorMessage && <Alert message={props.errorMessage} />}
            {props.isLoading && <Spinner />}
            {!props.isLoading && props.movieList.map(movie => (
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