import { createContext, ReactNode, useState, useEffect } from 'react'
import { api } from '../lib/axios'

interface PostProps {
  id: number
  title: string
  number: number
  body: string
  created_at: Date
}

interface PostContextProps {
  posts: PostProps[]
  fetchPosts: (search?: string) => Promise<void>
}

interface PostContextProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextProps)

export function PostContextProvider({ children }: PostContextProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([])

  async function fetchPosts(search?: string) {
    const response = await api.get('search/issues', {
      params: {
        q: search
          ? `${search}repo:daniel-koti/github-blog`
          : `repo:daniel-koti/github-blog`,
      },
    })
    console.log(response.data.items)
    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  )
}
