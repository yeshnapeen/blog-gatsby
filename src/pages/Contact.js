import React from 'react';
import Layout from '../components/layout'
import footer from '../components/footer.module.css'
import {  Divider, Grid, Button, Header, Icon,List, TextArea, Container,Form,Input,Responsive, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


const contact =() => {

        return (
    <body className={footer.body}>
      
            <Layout>
           
 
            
            
            
          <Container text>
          <Header as='h2'>Have some Questions?</Header>
          
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
                
          
          
       

    
            
   

        </Layout>
        
        </body>
        )
    
  }

    
        
        
        


export default contact
