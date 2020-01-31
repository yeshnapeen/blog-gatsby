import React, { Component, createRef } from 'react'

import {graphql,useStaticQuery} from 'gatsby'
import Footer from '../components/footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import {List, Header, Segment,Divider,Image, Sticky} from 'semantic-ui-react'
import L from '../components/index.module.scss'
import { Link } from 'gatsby'
import '../components/index.module.scss'
import headerStyles from '../components/header.module.scss'
import footer from '../components/footer.module.scss'

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
        
            <Segment  inverted > 
                <Header textAlign='center' size='huge' >Middle of the Code.</Header>   
            </Segment>
            <Footer></Footer>
            <p>{props.children}</p>
            <div className={footer.Footer}> 
                <Segment  inverted > 
                    <Header textAlign='right' size='tiny' >Created by {data.site.siteMetadata.author}, © 2020 </Header>   
                </Segment>
            </div >
            
            <div>
            

            
            </div>
        
        
    </div>   
    )
}

export default Layout