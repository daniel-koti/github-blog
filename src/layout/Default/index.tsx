import { Outlet } from 'react-router-dom'
import { HeaderContainer, MainContainer } from './styles'

import logo from '../../assets/logo.svg'

export function DefaultLayout() {
  return (
    <div>
      <HeaderContainer>
        <img src={logo} alt="" />
      </HeaderContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  )
}
