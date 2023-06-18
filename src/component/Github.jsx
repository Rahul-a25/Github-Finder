import React, { useContext } from 'react'
import { Stack,CardBody, CardFooter,Button ,Heading,Text,Card,Image,Flex } from '@chakra-ui/react'
import { mycontext } from './context'
import GithubSite from './GithubSite'

const Github = () => {
  const {GithubApi} =useContext(mycontext)
  return (   <>
<Card
  style={{width:"1000px",margin:"50px auto",border:"2px dotted #3182ce"}}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'>
  <Image
    // style={{maxWidth:"500px"}}
    objectFit='cover'
    maxW={{ base: '100%', sm: '250px' }}
    src={GithubApi.avatar_url || 'https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU'}
    alt='Caffe Latte'
  />

  <Stack style={{marginLeft:"0px", width:'100%'}}>
    <Flex  direction='column' align='center'>
    <CardBody style={{ marginRight:"250px",width:"750px"}} >
      <Heading style={{textAlign:"start"}} size='md'> <b style={{color:"#3182ce",fontSize:"20px"}}>Name</b>   : {GithubApi.name || 'No Name'}</Heading>

      <Text align='left' py='2'>
      <b style={{color:"#3182ce",fontSize:"20px"}}>Bio</b> : {GithubApi.bio || 'No Bio'}
      </Text>
      <Text align='left' py='2'>
        <b style={{color:"#3182ce",fontSize:"20px"}}>Location</b> : {GithubApi.location || 'No Location'}
      </Text>
      <Text align='left' py='2'>
      <b style={{color:"#3182ce",fontSize:"20px"}}>Id</b>: {GithubApi.id || 'No Id'}
      </Text>
    </CardBody>

   <GithubSite/>
   </Flex>
  </Stack>
</Card> <br />

{/* Second Card */}
<Card style={{width:"1000px",margin:"10px auto",border:"2px dotted #3182ce"}}>
  <CardBody>
    <Flex style={{marginLeft:'200px'}}>
    <Text><b style={{backgroundColor:"#3182ce",padding:"5px",color:'white',borderRadius:"10px"}}>Followers </b>:&nbsp;&nbsp; {GithubApi.followers || 'Nothing'} </Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Text><b style={{backgroundColor:"#3182ce",padding:"5px",color:'white',borderRadius:"10px"}}>Following </b>:&nbsp;&nbsp;{GithubApi.following || 'Nothing'}</Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Text><b style={{backgroundColor:"#3182ce",padding:"5px",color:'white',borderRadius:"10px"}}>Repository</b>:&nbsp;&nbsp;{GithubApi.public_repos || 'Nothing'} </Text>
    </Flex>
  </CardBody>
</Card>
    </>
  )
}

export default Github
