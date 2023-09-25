import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  background: var(--white);
  padding: 3rem;
  border-radius: 0.5rem;
  button {
    background: transparent;
    border: 1px solid var(--primary-500);
    padding:0.6rem;
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1rem;
    cursor: pointer;
  }
  button:hover{
    background:#37d399;
    color:var(--grey-800)
  }

  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`

export default Wrapper
