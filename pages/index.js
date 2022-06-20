import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import LoadMore from './components/LoadMore'
import NewTweet from './components/NewTweet'
import Tweets from './components/Tweets'
import prisma from './../lib/prisma'
import { getTweets } from './../lib/data'

import { useState } from 'react'

//...

export default function Home({ initialTweets }) {
  const [tweets, setTweets] = useState(initialTweets)

  //...

  return (
    <>
      <NewTweet/>
      <Tweets tweets={tweets} />
      <LoadMore tweets={tweets} setTweets={setTweets} />
    </>
  )
}

export async function getServerSideProps() {
  let tweets = await getTweets(prisma, 2)
	tweets = JSON.parse(JSON.stringify(tweets))

  return {
    props: {
      initialTweets: tweets,
    },
  }
}