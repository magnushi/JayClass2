import Client from '../../src/client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import groq from 'groq'

function urlFor (source) {
    return imageUrlBuilder(Client).image(source)
  }

const Post = (props) => {

    const {
        title = 'Missing title',
        name = 'Missing name',
        contributor = '',
        body = []
    } = props
    return(
        <article>
            <h2> {title} </h2>
            <div>
                <h3> By {name} {contributor && "and "+contributor} </h3>
            </div>
            <div>
            <BlockContent
                blocks={body}
                imageOptions={{ w: 320, h: 240, fit: 'max' }}
                {...Client.config()}
                />
            </div>
            <div style = {{marginTop: "50px"}}>
                <a href="/">...back to main page</a>
            </div>
        </article>
    )
}

const query = groq`
*[_type == "post" && slug.current == $slug][0]{title, "name": author->name, body, mainImage, "contributor": contributor->name
}`

Post.getInitialProps = async function(context) {
    const { slug = "" } = context.query
    return await Client.fetch(query, { slug })
}

export default Post