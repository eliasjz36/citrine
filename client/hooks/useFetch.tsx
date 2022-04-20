import { useEffect, useState } from 'react'

const APIKEY = process.env.NEXT_PUBLIC_GIPHY_API

const useFetch = (keyword: string) => {
  const [gifUrl, setGifUrl] = useState('')

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword
          .split(' ')
          .join('')}&limit=1`
      )
      const { data } = await response.json()

      if (!data[0].images.original.webp) {
        setGifUrl(
          'https://media3.giphy.com/media/L95W4wv8nnb9K/giphy.webp?cid=6c09b9527d4512cad384e2e8b65ce4e0dd5e27bcea9caf0f&rid=giphy.webp&ct=g'
        )
      }

      setGifUrl(data[0]?.images?.original.webp)
    } catch (error) {
      setGifUrl(
        'https://media3.giphy.com/media/L95W4wv8nnb9K/giphy.webp?cid=6c09b9527d4512cad384e2e8b65ce4e0dd5e27bcea9caf0f&rid=giphy.webp&ct=g'
      )
    }
  }

  useEffect(() => {
    if (keyword) fetchGifs()
  }, [keyword])

  return gifUrl
}

export default useFetch
