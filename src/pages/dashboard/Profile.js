import { useState } from 'react'
import { FormRow } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUser } from '../../features/user/userSlice'


const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState(
    {
      name: user?.name || '',
      email: user?.email || '',
      lastName: user?.lastName || '',
      location: user?.location || '',
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, lastName, location } = userData
    if (!name || !email || !lastName || !location) {
      toast.error('Please fill out all fields')
      return
    }
    dispatch(updateUser(userData))
  }


  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }

  return (
    <Wrapper>
      {/* 这里的Form可以改正最新版吗的 */}
      <div className='title-bg profile-bg'>
        <h1>Profile</h1>
      </div>
      <div className='user'>
        <div className='user-image'></div>
      </div>
      <form className='form' onSubmit={handleSubmit}>

        <div className="form-center">
          <FormRow
            type='text'
            name='name'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='last name'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
        </div>
        <div className='btn-profile'>
          <button type='submit' className='btn btn-block ' disabled={isLoading}>
            {isLoading ? 'loading ...' : 'Save change'}
          </button>
        </div>

      </form>
    </Wrapper>

  )
}

export default Profile