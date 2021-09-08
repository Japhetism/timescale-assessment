import styled from 'styled-components';

const DefaultLayout = (props) => {

    const { children } = props;

	return <Container>
        {children}    
    </Container>
}

export default DefaultLayout;

const Container = styled.div``;
