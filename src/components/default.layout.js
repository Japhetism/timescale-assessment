import styled from 'styled-components';

const Container = styled.div``;

const DefaultLayout = (props) => {

    const { children } = props;

	return <Container>
        {children}    
    </Container>
}

export default DefaultLayout;
