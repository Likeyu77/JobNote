import Wrapper from '../assets/wrappers/StatItem'

const StatItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <div>
        <span className="icon">{icon}</span>
        <div>
          <h5 className="title">{title}</h5>
          <header>
            <span className="count">{count}</span>
          </header>
        </div>
      </div>



    </Wrapper>
  )
}

export default StatItem