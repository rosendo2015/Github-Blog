import styled from 'styled-components'
import backgroundImg from '../../assets/backgroundImg.svg'
export const HeaderContainer = styled.div`
  width: 100%;
  height: 18.5rem;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 5rem;
  }
`
