//import Link from 'next/link'
import Layout from '../components/Layout'
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Error from './_error'

export default class About extends Component{
    //state 
    //state = {
    //    user :null
    //};
    //get initial props
    static async getInitialProps(){
        const res = await fetch ('https://api.github.com/users/reedbarger');
        const statusCode = res.status > 200 ?res.status :false;
        const data = await res.json();
        return {user:data , statusCode}
        //fetch('https://api.github.com/users/reedbarger')
        // .then(res => res.json())
        // .then(data=>{
        //     console.log(data)
        // })
        // return { user:"user"}
    }

   // //lifecylce hook
   // componentDidMount(){
   //      fetch('https://api.github.com/users/reedbarger')
   //      .then(res => res.json())
   //      .then(data=>{
   //          this.setState({
   //              user:data
   //          })
//
   //      })
//
   // }

    render (){
        const { user , statusCode } = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode}/>
        }
        return (
       <Layout title="About">
           <p>{user.name}</p>
           {/*{JSON.stringify(this.props.user)}*/}
            {/*<Link href="/">
                <a>Go to home</a>
            </Link>*/}
            <p>A JavaScript programmer</p>
            <img src={user.avatar_url} 
            alt="Me" height="200px"/>
        </Layout>
        );

    }
}
//
//export default () => (
//    <Layout title="About">
//        <Link href="/">
//            <a>Go to home</a>
//        </Link>
//        <p>A JavaScript programmer</p>
//        <img src="/static/javascript-logo.png" alt="Javascript" height="200px"/>
//    </Layout>
//)
//
//export default About;