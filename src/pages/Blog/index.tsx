import { useCallback, useEffect, useState } from 'react'
import { Post } from '../../components/Post'
import { SearchInput } from '../../components/SearchInput'
import { Profile } from './components/Profile'
import { PostsListContainer } from './styles'
import { api } from '../../lib/axios'
const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}
export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`,
        )
        console.log(response.data)
        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [setPosts],
  )
  useEffect(() => {
    getPosts()
  }, [getPosts])
  return (
    <>
      <Profile />
      <SearchInput />
      <PostsListContainer>
        {posts.map((post) => (
          <Post key={post.number} post={post} />
        ))}
      </PostsListContainer>
    </>
  )
}
