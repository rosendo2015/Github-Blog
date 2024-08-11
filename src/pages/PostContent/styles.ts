import styled from 'styled-components'

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }
  img {
    width: 100%;
    border-radius: 10px;
  }
  pre {
    background: ${({ theme }) => theme.colors['base-post']};
    padding: 1rem;
    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }
  }
`
