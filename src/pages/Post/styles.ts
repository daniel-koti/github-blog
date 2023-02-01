import styled from 'styled-components'

export const PostInfo = styled.div`
  margin-top: -7rem;
  padding: 3.2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 1rem;

  header {
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme.blue};
      font-size: 1.2rem;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  h3 {
    font-size: 2.4rem;
    line-height: 3.12rem;

    margin-bottom: 0.8rem;
  }

  footer {
    display: flex;
    gap: 3.2rem;

    span {
      color: ${(props) => props.theme['base-span']};
      display: flex;
      align-items: center;

      gap: 0.8rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const Content = styled.div`
  padding: 4rem 3.2rem;
  color: ${(props) => props.theme['base-text']};

  .line-break {
    white-space: pre-wrap;
  }
`
