import styled from 'styled-components'

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  
  @keyframes shaking {
    0%   {transform: rotate(0deg);}
    20%  {transform: rotate(-2deg);}
    40%  {transform: rotate(0deg);}
    60% {transform: rotate(2deg);}
    80% {transform: rotate(0deg);}
    100% {transform: rotate(0deg);}
  }
  .btn-hero{
    animation-name:shaking;
    animation-duration:1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
  }
  .btn-hero:hover{
    animation-name: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`
export default Wrapper
