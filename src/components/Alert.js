import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    background-color: #f44336;
    color: white;
    width: 70%;
`;

const Alert = (props) => {
    const { message } = props;

    return <Container>
        {message}
    </Container>
}

export default Alert;
