import './Nav.css';

export const Nav = () => {
  return (
    <>
      <div className='div_for'>
        <ul>
          <li>
            <a href='/'>
              Home
            </a>
          </li>
          <li>
            <a href='/info'>
              Info
            </a>
          </li>
          <li>
            {/* <a href='#'> */}
              Contact
            {/* </a> */}
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav;