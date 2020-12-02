import Layout from '../components/Layout';

export default ({statusCode}) =>(
    <Layout title = "Error!!!">
        {statusCode ?`Could not load your data :Status Code ${statusCode}`
        :`Couldn't get you that page. sorry!`}
    </Layout>
);