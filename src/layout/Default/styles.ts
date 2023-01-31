import styled from 'styled-components'
import coverBackground from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 29.6rem;
  background: url(${coverBackground}) no-repeat top center/cover;
  text-align: center;

  img {
    padding: 6.4rem 0 13.4rem;
  }
`

export const MainContainer = styled.div`
  width: min(86.4rem, 100%);
  margin: 0 auto;
  padding: 0 1.6rem;
`
