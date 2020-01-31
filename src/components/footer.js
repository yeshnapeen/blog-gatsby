import React from 'react'
import {graphql,useStaticQuery} from 'gatsby'
import {List} from 'semantic-ui-react'
import {Link} from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)

    return(

    <footer className={footerStyles.sticky}>
        <List link animated verticalAlign='middle' floated='right'  size='massive'>
                <List.Item as='a'> <Link to='/'>Home</Link></List.Item> 
                <List.Item as='a'><Link to='/Blog'>Blog</Link></List.Item>
                <List.Item as='a'><Link to='/About'>About</Link></List.Item>
                <List.Item as='a'><Link to='/Contact'>Contact</Link></List.Item>
        </List>
    </footer>
    )
}

export default Footer;