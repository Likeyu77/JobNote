import styled from 'styled-components'

const Wrapper = styled.article`

  div{
    background: ${props => props.color};
  border-radius: var(--borderRadius);
  color:var(--white);
  }
  

  @keyframes flip{

    from{transform:rotateY(0deg)}
    to{transform:rotateY(360deg)}  
  }

  div:hover{
    animation:flip 2.5s ease-in-out;
  }

  
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    margin-top: 0.5rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${props => props.$bcg};
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color:var(--white) ;
    }
  }
`

export default Wrapper
