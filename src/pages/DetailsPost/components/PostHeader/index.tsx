import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink text="Voltar" href="#"></ExternalLink>
        <ExternalLink text="Ver no Github" href="#"></ExternalLink>
      </header>
      <h1></h1>
    </PostHeaderContainer>
  )
}
