import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'

import {graphql,useStaticQuery} from 'gatsby'
import blogStyles from '../components/Blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
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
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) =>{
                    return (
                        <li className={blogStyles.post}>
                            <Link to ={`/Blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>

    )
}

export default BlogPage