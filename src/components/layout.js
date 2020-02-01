import React  from 'react'
import {Link} from 'gatsby'
import {graphql,useStaticQuery} from 'gatsby'

import '../styles/index.scss'
import {Header, Segment,List,Icon} from 'semantic-ui-react'

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
    <body className={footer.body}>
        
            <Segment  inverted > 
                <List link  horizontal  size='massive' floated='right'>
                    <List.Item active> <Link to='/'> <Header color='grey' size='tiny' textAlign='right' > Home</Header></Link></List.Item> 
                    <List.Item as='a' ><Link to='/Blog'><Header color='grey' size='tiny' textAlign='right'>Blog </Header></Link></List.Item>
                    <List.Item as='a'><Link to='/About'> <Header color='grey' size='tiny'textAlign='right'>About</Header></Link></List.Item>
                    <List.Item as='a'><Link to='/Contact'><Header color='grey' size='tiny' textAlign='right'>Contact</Header></Link></List.Item>
                 </List>
                <Header textAlign='left' size='huge' >Middle of the Code.</Header>
                

            </Segment>
         
           
            <p>{props.children}</p>
            <div className={footer.Footer}> 
                <Segment  inverted > 
                    <Header textAlign='right' size='tiny' >
                    <Icon.Group >
                    
                    <a href="https://au.linkedin.com/in/yeshna-peenith">
                        <Icon name ='linkedin'
                        color='blue'
                        size='big'
                        />
                        </a>  Created by {data.site.siteMetadata.author}, © 2020  
                    
                    </Icon.Group>  
                    </Header>
                </Segment>

            </div >
            
            <div>
            

            
            </div>
      
    </body>   
    )
}

export default Layout

