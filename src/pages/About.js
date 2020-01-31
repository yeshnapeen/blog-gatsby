import React from 'react';
import Layout from '../components/layout'
import 'semantic-ui-css/semantic.min.css';
import {Container,Header,Segment, Image} from 'semantic-ui-react'

import avatar from '../components/img.png'
const aboutContent = () => {
    return (
        <Layout>
            <Container text textAlign='justified'>
            <Segment raised color='black' size='big'>
            <Header as='h2'>About</Header>
            
                <Image src={avatar} size='medium' circular  centered/>
            <p> My name is Yeshna and I create applications .</p>

            <p> Started to coding when i was 17. From there, I got more intrigued and willing to learn more.That's how I choose this field as a career </p>
               
               <p> I am a web application developer based in Melbourne.  Graduated in 2019 and eager to set foot into the IT world. I have previous experience in building applications. I've previous worked into research whereby my role was how I could improve applications functionality by making use of data collected.</p>
                   
                <p>With new technologies emerging everyday, this blog depicts my journey understanding and building applications. I post each month  creating an application using tech that I never encountered before. The blogs will be detailing how I constructed an application from scatch that you could replicate but also key learning to take away. </p>
                <br></br>
                <br></br>
      
      </Segment >
            </Container>
            
        </Layout>
        
    )
}

export default aboutContent;