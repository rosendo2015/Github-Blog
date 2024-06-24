import { IPost } from '../../pages/Blog'
import { PostContainer } from './styles'
interface PostProps {
  post: IPost
}
export function Post({ post }: PostProps) {
  return (
    <PostContainer to={`/postDetails/${post.number}`}>
      <header>
        <h1>{post.title}</h1>
        <span>{post.created_at}</span>
      </header>
      <p>{post.body}</p>
    </PostContainer>
  )
}
