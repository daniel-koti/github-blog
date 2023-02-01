import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { PostContext } from '../../contexts/PostsContext'
import { api } from '../../lib/axios'
import { ProfileInfo, SearchForm, CardsContainer, Card } from './styles'
import { formatDistanceToNow } from 'date-fns'
import pt from 'date-fns/locale/pt'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

interface ProfileProps {
  id: number
  avatar_url: string
  name: string
  login: string
  bio: string
  company: string
  followers: string
  html_url: string
}

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Blog() {
  const { posts, fetchPosts } = useContext(PostContext)
  const [profile, setProfile] = useState<ProfileProps>()

  const { handleSubmit, register } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    const response = await api.get('users/daniel-koti')
    setProfile(response.data)
  }

  async function filterPosts(data: SearchFormInput) {
    await fetchPosts(data.search)
  }

  return (
    <div>
      <ProfileInfo>
        <img src={profile?.avatar_url} alt="" />

        <div>
          <header>
            <strong>{profile?.name}</strong>
            <a href={profile?.html_url} target="_blank" rel="noreferrer">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>

          <p>{profile?.bio}</p>

          <footer>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {profile?.login}
            </span>

            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {profile?.company}
            </span>

            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {profile?.followers} seguidores
            </span>
          </footer>
        </div>
      </ProfileInfo>
      <SearchForm action="" onSubmit={handleSubmit(filterPosts)}>
        <header>
          <strong>Publicações</strong>
          <span>{posts.length} publicações</span>
        </header>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('search')}
        />
      </SearchForm>

      <CardsContainer>
        {posts.map((post) => {
          return (
            <Card to={`post/${post.number}`} key={post.id}>
              <header>
                <strong>{post.title}</strong>
                <time>
                  {formatDistanceToNow(new Date(post.created_at), {
                    addSuffix: true,
                    locale: pt,
                  })}
                </time>
              </header>
              <p>{post.body}</p>
            </Card>
          )
        })}
      </CardsContainer>
    </div>
  )
}
