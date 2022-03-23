import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.colors.primary};
    height: 100vh;
    flex-direction: column;
    h1 {
        font-size: 40px;
    }
    ul {
        list-style: none;
        display: flex;
        li {
            padding: 5px;
        }
    }
`
export default Container
