import React from 'react';
import { Link} from 'gatsby';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Container,Grid,Label, List,Header,Responsive} from 'semantic-ui-react'

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
    <Responsive>
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
    </Responsive>
    </div>
    
  )
}

export default BlogPage
