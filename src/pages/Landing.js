import { Logo } from '../components'
import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>JobNote is a user-friendly application designed to assist job
            seekers in tracking and organizing their job applications. It offers features
            such as recording application details, tracking application status, and providing analytics
            for optimizing the job search process. Job seekers can categorize applications, gain real-time
            insights, and maintain organization and focus in their job search, making it an essential tool for
            anyone navigating the competitive job market.</p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}



export default Landing