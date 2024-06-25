import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileCoontainer, ProfileDetails, ProfilePicture } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { Spinner } from '../../../../components/Spinner'
const username = import.meta.env.VITE_GITHUB_USERNAME
interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)
  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)
      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [profileData])
  useEffect(() => {
    getProfileData()
  }, [getProfileData])
  return (
    <ProfileCoontainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProfilePicture src={profileData.avatar_url} />

          <ProfileDetails>
            <header>
              <h1>{profileData.name}</h1>
              <ExternalLink
                text="Github"
                href={profileData.html_url}
                target="_blank"
              />
            </header>
            <p>{profileData.bio}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                <span>{profileData.login}</span>
              </li>
              {profileData?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  <span>{profileData.company}</span>
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{profileData.followers} seguidores</span>
              </li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileCoontainer>
  )
}
