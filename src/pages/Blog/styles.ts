import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;

  gap: 3.2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 3.2rem 4rem;
  margin-top: -8rem;

  img {
    width: 14.8rem;
    border-radius: 0.8rem;
  }

  > div > header {
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 2.4rem;
      line-height: 3.12rem;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 700;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > div > p {
    margin-top: 0.8rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 2.56rem;
  }

  > div > footer {
    margin-top: 2.4rem;
    display: flex;
    align-items: center;
    gap: 2.4rem;
    color: ${(props) => props.theme['base-subtitle']};

    span {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
export const SearchForm = styled.form`
  margin-top: 7.2rem;
  width: 100%;

  input {
    width: 100%;
    border: 0;
    background-color: ${(props) => props.theme['base-input']};
    padding: 1.2rem 1.6rem;
    outline: none;
    color: ${(props) => props.theme['base-text']};
    border-radius: 0.6rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.2rem;

    strong {
      font-size: 1.8rem;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 2.88rem;
    }

    span {
      font-size: 1.4rem;
      color: ${(props) => props.theme['base-span']};
      line-height: 2.24rem;
    }
  }
`
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  gap: 3.2rem;
  margin-top: 4.8rem;
`

export const Card = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-post']};
  border-radius: 1rem;
  padding: 3.2rem;

  header {
    display: flex;
    justify-content: space-between;

    gap: 1.6rem;

    margin-bottom: 2rem;

    strong {
      flex: 1;
      font-size: 2rem;
      line-height: 3.2rem;
      text-overflow: ellipsis;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    time {
      width: max-content;
      display: block;
      font-size: 1.4rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
