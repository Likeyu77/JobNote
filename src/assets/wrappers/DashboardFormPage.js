import styled from 'styled-components'
import bg from '../images/profile-bg.jpg'
import user from '../images/user.jpg'
import addJobBg from '../images/addJob.jpg'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .title-bg{
    width: 100%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: end;
    font-size: 2rem;
    color:var(--white);
    background-size: cover;
  }
  .profile-bg{
    background-image:url(${bg}); 
  }
  .add-job-bg{
    background-image:url(${addJobBg}); 
  }
  h1{
    margin-bottom: 1rem;
  }
  .user{
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }
  .user-image{
    width: 10rem;
    height: 10rem;
    background-image: url(${user});
    background-size: cover;
    border-radius: 5rem;

  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 2rem 2rem 4rem;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .btn-profile{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
  .btn-profile button{
    width: 50%;
  }
  .clear-btn {
    background: #d07a82;
  }
  .clear-btn:hover {
    background: #ff4455;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center button {
      margin-top: 0;
    }
  }
`

export default Wrapper
