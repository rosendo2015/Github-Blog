import { IPost } from '../../pages/Blog'
import { relativeDateFormatter } from '../../utils/formater'
import { PostContainer } from './styles'
interface PostProps {
  post: IPost
}
export function Post({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)
  return (
    <PostContainer to={`/detailsPost/${post.number}`}>
      <header>
        <h1>{post.title}</h1>
        <span>{formattedDate}</span>
      </header>
      <p>{post.body}</p>
    </PostContainer>
  )
}
