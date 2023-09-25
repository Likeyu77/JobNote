import React, { useState } from 'react'
import BarChart from './BarChart'
import AreaChart from './AreaChart'
import Wrapper from '../assets/wrappers/ChartsContainer'
import { useSelector } from 'react-redux'


const ChartsContainer = () => {
  const [buttonActive, setButtonActive] = useState('bar')
  const { monthlyApplications: data } = useSelector((store) => store.allJobs)

  const selectedButton = (btn) => {
    if (buttonActive === btn) {
      return { background: '#37d399', color: 'var(--grey-800)' }
    } else {
      return {}
    }
  }
  return (
    <Wrapper>
      <h3>Monthly Application</h3>

      <button type='button'
        onClick={() => setButtonActive('bar')}
        style={selectedButton('bar')}>
        Bar Chart
      </button>
      <button type='button' onClick={() => setButtonActive('area')}
        style={selectedButton('area')}>
        Area Chart
      </button>

      {buttonActive === 'bar' ? <BarChart data={data} /> : <AreaChart data={data} />}



    </Wrapper>
  )
}

export default ChartsContainer