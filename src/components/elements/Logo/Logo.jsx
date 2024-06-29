import logo from '../../../assets/img/logo.svg'

const Logo = () => {
  return (
    <a className='logo' href="/">
        <img className='logo__img' src={logo} alt="toxin hotel logo" />
    </a>
  )
}

export default Logo