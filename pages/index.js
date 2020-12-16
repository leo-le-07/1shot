import Container from '../components/container'
import HeroPost from '../components/hero-post'
import NormalPost from '../components/normal-post'
import AnnouncementPost from '../components/announcement-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {getAllPosts} from '../lib/api'
import Head from 'next/head'
import {CMS_NAME} from '../lib/constants'
import markdownToHtml from "../lib/markdownToHtml";

export default function Index({allPosts}) {
  const heroPost = allPosts[0]
  const announcementPost = allPosts[1]
  const morePosts = allPosts.slice(2)
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME} - The Best Long-Term Provider Strategy</title>
        </Head>
        <Container>
          <Intro/>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.updatedAt}
              content={heroPost.content}
            />
          )}
          <div>
            <AnnouncementPost
              title={announcementPost.title}
              date={announcementPost.updatedAt}
              content={announcementPost.content}
            />
            {morePosts.map((post) => (
              <NormalPost
                title={post.title}
                date={post.updatedAt}
                content={post.content}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'updatedAt',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'content'
  ])

  for (let i = 0; i < allPosts.length; i++) {
    allPosts[i].content = await markdownToHtml(allPosts[i].content || '')
  }

  return {
    props: {allPosts},
  }
}
