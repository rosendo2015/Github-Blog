import { Post } from '../../components/Post'
import { SearchInput } from '../../components/SearchInput'
import { Profile } from './components/Profile'
import { PostsListContainer } from './styles'

export function Blog() {
  return (
    <>
      <Profile />
      <SearchInput />
      <PostsListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsListContainer>
    </>
  )
}
