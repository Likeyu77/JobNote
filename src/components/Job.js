import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Job'
import { useDispatch } from 'react-redux'
import JobInfo from './JobInfo'
import moment from 'moment'
import { deleteJob, setEditJob } from '../features/job/jobSlice'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,

}) => {

  const dispatch = useDispatch()
  const date = moment(createdAt).format('MMM Do, YYYY')

  return (
    <Wrapper >
      <div className='job-card'>
        <header>
          {/* <div className="main-icon">{company.charAt(0)}</div> */}
          <div className='info'>
            <h5>{position}</h5>
            <p>{company}</p>
          </div>
        </header>

        <div className="content">
          <div className="content-center">
            <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
            <JobInfo icon={<FaCalendarAlt />} text={date} />
            <JobInfo icon={<FaBriefcase />} text={jobType} />
            <div className={`status ${status}`}>{status}</div>
          </div>

          <footer>
            <div className="actions">
              <Link
                to='/add-job'
                className='btn edit-btn'
                onClick={() => dispatch(setEditJob({
                  editJobId: _id,
                  position,
                  company,
                  jobLocation,
                  jobType,
                  status
                }))}>
                {/* <AiOutlineEdit className='edit-icon' /> */}
                Edit
              </Link>
              <button type='button'
                className='btn delete-btn'
                onClick={() => dispatch(deleteJob(_id))}>
                {/* <AiOutlineDelete className='delet-icon' /> */}
                Delet
              </button>
            </div>
          </footer>
        </div >
      </div>

    </Wrapper >
  )
}

export default Job