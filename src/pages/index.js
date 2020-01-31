import React from "react";
import {graphql,useStaticQuery} from 'gatsby'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import letterb from '../components/Letter-b.gif'
import letterw from '../components/Letter-w.gif'
import letterc from '../components/Letter-c.gif'
import L from '../components/index.module.scss'
import footer from '../components/footer.module.scss'


import { Label, Divider, Image, Grid, Header, GridColumn, Segment } from 'semantic-ui-react'
import { Link } from "gatsby";

const Index =(props) => {
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
  <div>
    
    <Segment  inverted > 
                <Header textAlign='center' size='huge' >Middle of the Code.</Header>   
            </Segment>
            
    
    <Header as='h3' textAlign='center'>
      <Label basic color='blue' pointing='below' text-align='middle'>Hover over me </Label>
    </Header>
    <Grid >
      <Divider color='black' />
      <Grid.Row centered columns={4}>
        <Grid.Column >
          <Link to="Blog">
            <Image src={letterb} />
            <div className={L.container}>
              <Image src={letterw} alt="Avatar" className={L.image}> </Image>
              <div className={L.overlay}>
                <div className={L.text}>Blog: Follow the journey of an IT developer</div>
              </div>
            </div>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="About">
            <Image src={letterw} />
            <div className={L.container}>
              <Image src={letterw} alt="Avatar" className={L.image}> </Image>
              <div className={L.overlay}>
                <div className={L.text}>Who: Dig deeper about me</div>
              </div>
            </div>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="Contact">
            <Image src={letterc} />
            <div className={L.container}>
              <Image src={letterw} alt="Contact" className={L.image}>  </Image>
              <div className={L.overlay}>
                <div className={L.text}>Contact: How to get in touch with me</div>
              </div>
            </div>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid>
      <GridColumn>
        <div className={L.container} />
      </GridColumn>
    </Grid>
    <div className={footer.Footer}> 
                <Segment  inverted > 
                    <Header textAlign='right' size='tiny' >Created by {data.site.siteMetadata.author}, © 2020 </Header>   
                </Segment>
            </div >
    
    </div>
    
        )
      }

export default Index
