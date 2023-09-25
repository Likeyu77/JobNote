import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaCaretDown } from 'react-icons/fa'
import Logo from './Logo'
import { toggleSidebar, clearStore } from '../features/user/userSlice'
import { useState } from 'react'
import userImage from '../assets/images/user.jpg'

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <div className="nav-center">
        <button type='button'
          className='toggle-btn'
          onClick={toggle}><FaAlignLeft /></button>

        <div>
          <Logo />
          {/* <h3 className="logo-text">dashboard</h3> */}
        </div>
        <div className="btn-container">
          <button type='button' className='btn btn-user' onClick={() => setShowLogout(!showLogout)}>
            <img src={userImage} alt="" />

            {`Hi! ${user?.name}`}
            <FaCaretDown />
          </button>
          <div className={showLogout ? `dropdown show-dropdown` : `dropdown`}>
            <button type='button' className='dropdown-btn' onClick={() => dispatch(clearStore('logging out...'))}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar