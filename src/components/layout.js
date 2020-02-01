import React  from 'react'
import {Link} from 'gatsby'
import {graphql,useStaticQuery} from 'gatsby'

import '../styles/index.scss'
import {Header, Segment,List,Responsive} from 'semantic-ui-react'

import footer from '../components/footer.module.css'

const Layout =(props) => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
        
    return (
    <div>
        <Responsive>
            <Segment  inverted > 
                <Header textAlign='left' size='huge' >Middle of the Code. 
                <List link  horizontal  size='massive' floated='right' >
                <List.Item active> <Link to='/'> <Header color='grey' size='tiny' > Home</Header></Link></List.Item> 
                <List.Item as='a' ><Link to='/Blog'><Header color='grey' size='tiny'>Blog </Header></Link></List.Item>
                <List.Item as='a'><Link to='/About'> <Header color='grey' size='tiny'>About</Header></Link></List.Item>
                <List.Item as='a'><Link to='/Contact'><Header color='grey' size='tiny'>Contact</Header></Link></List.Item>
                 
        </List>
        </Header> 
            </Segment>
           
            <p>{props.children}</p>
            <div className={footer.Footer}> 
                <Segment  inverted > 
                    <Header textAlign='right' size='tiny' >Created by {data.site.siteMetadata.author}, © 2020 </Header>   
                </Segment>
            </div >
            
            <div>
            

            
            </div>
        
            </Responsive>
    </div>   
    )
}

export default Layout
