import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileCoontainer, ProfileDetails, ProfilePicture } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'

export function Profile() {
  return (
    <ProfileCoontainer>
      <ProfilePicture src={'https://github.com/SteveJones.png'} />

      <ProfileDetails>
        <header>
          <h1>Cameron Williamson</h1>
          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </li>
        </ul>
      </ProfileDetails>
    </ProfileCoontainer>
  )
}
