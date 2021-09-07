import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../../components/card';
import DefaultLayout from '../../components/default.layout';
import Header from '../../components/header';
import CardContainer from '../../components/card.container';
import Typography from '../../components/Typography';
import StyledModal from '../../components/modal';

const CardWrapper = styled.button`
    width: 282px;
    height: 348px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    border: 1px solid #E1E3E6;
    box-sizing: border-box;
    box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const CardImage = styled.div`
    width: 280px;
    height: 302px;
    left: 1px;
    top: 1px;
    background: url(MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg), #FFFFFF;
    border-radius: 7px 7px 0px 0px;
    background: url(${props => props.background}) no-repeat top center;
`;

const CardText = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.01em;
    color: #000000;
`;

const MoviesView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const toggleState = e => {
        setIsModalOpen(!isModalOpen)
    }
    const handleCardClick = () => {
        console.log("got to handleCardClick")
        //setModalContent(movie);
        setIsModalOpen(true)
    }
    return <DefaultLayout>
        <Header />
        {isModalOpen && <StyledModal
            id="modal"
            isOpen={isModalOpen}
            onClose={toggleState}
          >
            <div className="box-body">I am the content of the modal</div>
          </StyledModal>}
        <Typography />
        <CardContainer>
            <Card onClick={handleCardClick}/>
            <Card onClick={handleCardClick}/>
            <Card onClick={handleCardClick}/>
            <Card onClick={handleCardClick}/>
        </CardContainer>
    </DefaultLayout>
}

export default MoviesView;