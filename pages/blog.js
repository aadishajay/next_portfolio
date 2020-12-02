import Layout from '../components/Layout';
import Link from 'next/link'

const PostLink = ({ slug , title })=>(
<li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
        <a>{title}</a>
    </Link>
</li>
)
export default () => (
    <Layout title = "My Blog">
        <ul>
            <PostLink slug="react-post" title="React Post"/>
            <PostLink slug = "angular-post" title="Angular Post"/>
            <PostLink slug="view-post" title="vue"/>
        </ul>
    </Layout>
)