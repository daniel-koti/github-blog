import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PostInfo, Content } from './styles'
import { formatDistanceToNow } from 'date-fns'
import pt from 'date-fns/locale/pt'
import ReactMarkdown from 'react-markdown'
import { api } from '../../lib/axios'

interface PostProps {
  id: number
  title: string
  number: number
  body: string
  created_at: Date
  comments: number
  html_url: string
  user: {
    login: string
  }
}

export function Post() {
  const { id } = useParams()
  const [post, setPost] = useState<PostProps>({} as PostProps)

  async function fetchPostByNumber() {
    try {
      const response = await api.get(
        `repos/daniel-koti/github-blog/issues/${id}`,
      )
      setPost(response.data)
    } catch (err) {
      console.log('Erro', err)
    }
  }

  const formattedDate = formatDistanceToNow(new Date(post.created_at), {
    addSuffix: true,
    locale: pt,
  })

  useEffect(() => {
    fetchPostByNumber()
  }, [])

  return (
    <div>
      <PostInfo>
        <header>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
          <Link to={String(post.html_url)} target="_blank">
            Ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </header>
        <h3>{post.title}</h3>
        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post.user?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formattedDate}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} comentários
          </span>
        </footer>
      </PostInfo>
      <Content>
        <ReactMarkdown className="line-break">{post.body}</ReactMarkdown>
      </Content>
    </div>
  )
}
