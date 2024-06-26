import { useCallback, useEffect, useState } from 'react'
import { IPost } from '../Blog'
import { PostHeader } from './components/PostHeader'
import { DetailsPostContainer } from './styles'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostContent } from '../PostContent'
const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function DetailsPost() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()
  const getDetailsPost = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [postData])
  useEffect(() => {
    getDetailsPost()
  }, [getDetailsPost])
  return (
    <DetailsPostContainer>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </DetailsPostContainer>
  )
}
