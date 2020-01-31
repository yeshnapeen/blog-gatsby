import React from 'react';
import { Link} from 'gatsby';

import { Card,Divider,Segment, Container,Grid,Label,Image, List,Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import {graphql,useStaticQuery} from 'gatsby'



const BlogPage = () => {
  
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
                description
              }
              internal {
                content
              }
              wordCount {
                words
              }
              fields{
                slug
              }
             
              
            }
          }
        }
      }
    `
    )

  return (
  <div>
    <Layout > 
      <Segment vertical>
        <Container text textAlign='justified'>
          <List className >
            {data.allMarkdownRemark.edges.map((edge) =>{
          return (
            <List.Item  >
              <Link to ={`/Blog/${edge.node.fields.slug}`}>   
              <Grid.Column>
                <Segment padded>
                  <Label attached='top left'><Header size='medium'>{edge.node.frontmatter.title}</Header></Label>
                  <Header size='small'> {edge.node.frontmatter.description} </Header>
                  <p></p>
                  <p>{edge.node.frontmatter.date}</p>
                </Segment>
              </Grid.Column> 
            </Link>
          </List.Item>
            )
          })}
        </List>
        </Container>
   </Segment>
    </Layout>
    </div>
    
  )
}

export default BlogPage