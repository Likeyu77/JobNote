import styled from 'styled-components'
import search from '../images/search.jpg'

const Wrapper = styled.section`
  .form {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  h5 {
    font-weight: 700;
  }
  p{
    margin-bottom: 0.25rem;
    padding-left: 3rem;
  }
  .btn-block {
    align-self: end;
    margin-top: 1rem;
  }
  h1{
    font-size: 4rem;
    margin: 0;
  }
  .search-input{
    display: flex;
    flex-direction: column;
    background-image: url(${search});
    align-items: center;
    padding: 4rem;
    padding-bottom: 2rem;
    color:var(--white)
  }
  button{
    width: 10rem;
  }

  .btn-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .btn-block {
      margin-top: 1rem;
    }
  }
`

export default Wrapper
