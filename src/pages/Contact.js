import React from 'react';
import Layout from '../components/layout'
import {  Divider, Grid, Button, Header, Icon,List, TextArea, Container,Form,Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const contact =() => {

        return (
    <div>
            <Layout>
             
    <Grid columns={2} stackable >
        

      <Grid.Row>
        
        <Grid.Column >
        

           
        
            <Header padded='very' textAlign='center'>
            <Container text textAlign='center'>
                
            <br/><br></br> <br></br><br></br> <br></br> <br></br> <br></br>
                    <List floated right verticalAlign='middle'>
                    <List.Item>
                    <Header size='tiny' color='black' padded ='very'>
                    <Icon.Group >
                        <Icon name ='location arrow'
                        color='black'/>
                                Melbourne, Australia 
                                <Divider></Divider>
                    </Icon.Group>
                    </Header>
                    <Header size='tiny' color='blue' padded ='very'>
                    <Icon.Group >
                        <Icon name='mail'
                        color='black'/>
                        <a href="mailto:someone@yoursite.com" color='black'>  peenith@hotmail.com </a>
                        
                    </Icon.Group>
                    </Header>
                    </List.Item>
                    <List.Item>
                    
                    </List.Item>
                    <List.Item>
                    
                    <Icon.Group >
                    
                    <a href="https://au.linkedin.com/in/yeshna-peenith">
                        <Icon name ='linkedin'
                        color='blue'
                        size='big'
                        />
                        </a>
                    
                    </Icon.Group>
                    </List.Item>
                    
           
                </List>     
            </Container> 
            </Header>
        </Grid.Column>
        <Divider vertical>Or</Divider>  
        <Divider vertical></Divider>
        <Grid.Column>
            <br></br>
            <Header as='h2' textAlign='left'>Have some Questions?</Header>
            
          <Container text>
              
                <Header textAlign='left'>
                <Form action="https://getform.io/f/ab2ea6db-8b9c-43d2-86c9-284a36817d88" method='POST' >
                
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='First Name'
                        placeholder='First name'
                        width='10'
                        name='name'
                         />
                
                    <Form.Field
                     id='form-textarea-control-opinion'
                     control={TextArea}
                    label='Enquires'
                    name='message'
                    width='10'
                    />
                    
                    
                    <Form.Field
                     id='form-input-control-error-email'
                     control={Input}
                     label='Email'
                     placeholder='janedoe@live.com'
                     width='10'
                     name='email'
                      />
                    
                    <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Confirm'
                    
                    />

                </Form>
                </Header>
                </Container>
                
          
          
       
        </Grid.Column>
       
      </Grid.Row>
      
    </Grid>
    
            
                
            
        </Layout>
        </div>
        )
    
  }

    
        
        
        


export default contact