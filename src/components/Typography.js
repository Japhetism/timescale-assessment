import styled from 'styled-components';

const Container = styled.div`
  max-width: 1240px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Text = styled.span`
width: 269px;
height: 22px;
left: 120px;
top: 114px;
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: -0.01em;
color: #000000;
`;

const Typography = () => (
    <Container>
  <Text>Most Recent Movies</Text>
    </Container>
)

export default Typography;