import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    width: 282px;
    height: 368px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    border: 1px solid #E1E3E6;
    box-sizing: border-box;
    box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    cursor; pointer;
`;

const CardImage = styled.div`
    width: 280px;
    height: 302px;
    left: 1px;
    top: 1px;
    background: url(MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg), #FFFFFF;
    border-radius: 7px 7px 0px 0px;
    background: url(${props => props.background}) no-repeat top center;
    background-size: cover;
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
    width: 280px;
    height: 66px;
    display: flex;
    width: 90%;
    margin: auto;
    justify-content:center;
`;

const Card = (props) => {
    
    const { movie, onClick } = props;

    return <CardWrapper onClick={()=> onClick(movie)}>
        <CardImage background={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${movie.poster_path}`} />
        <CardText>{movie.title}</CardText>
    </CardWrapper>
}

export default Card;
