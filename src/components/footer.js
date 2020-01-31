import React from 'react'
import {List} from 'semantic-ui-react'
import {Link} from 'gatsby'



import footerStyles from './footer.module.css'

const Footer = () => {
    
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