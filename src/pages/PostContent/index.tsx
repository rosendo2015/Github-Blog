import { PostContentContainer } from './styles'
import ReactMarkdown from 'react-markdown'
interface PostContentProps {
  content: string
}
export function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown children={content} />
    </PostContentContainer>
  )
}
