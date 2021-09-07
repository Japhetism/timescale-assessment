import logo from '../images/logo.svg';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
gap: 3.25rem;
padding: 0.25rem;
align-items: center;
justify-content: center;
margin-top: 40px;
margin-bottom: 40px;
flex-wrap: wrap;
@media (max-width: 550px) {
    flex-direction: column;
}
`;

const CardContainer = (props) => {

    const { children } = props;

	return <Container>
        {children}    
    </Container>
}

export default CardContainer;
