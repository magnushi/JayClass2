import Client from '../src/client'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Allposts = (props) => {
  const { posts = [] } = props

  return (
  <div className = 'widget'>
      <h1> mhillestad.com </h1>
      <h3> bio to come here </h3>
      <h3> Reflections:</h3>

    {posts.map(
      ({ _id, title = '', slug = '', _updatedAt = '' }) =>
      slug && (
        <li key={_id}>
          <Link href="/post/[slug]" as={`/post/${slug.current}`}>
            <a>{title}</a>
          </Link>{' '}
          ({new Date(_updatedAt).toDateString()})
        </li>
      ))}

{/*
      {allPostData && allPostData.map((post, index) => (
          <div>
          <p className = 'blogTitle'>
          <Link to={"/" + post.slug.current} key={post.slug.current}>
              {post.title}
          </Link>
          </p>
          </div>
      ))}
      */}

      <h3> Books section to come here </h3>

  </div>
)
};

Allposts.getInitialProps = async () => ({
posts: await Client.fetch(
  `
  *[_type =='post']{
      title,
      "name": author->name,
      slug,
      _updatedAt,
      }
  `
)})

export default Allposts;