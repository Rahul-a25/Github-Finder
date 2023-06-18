import React, { useContext } from 'react'
import { CardFooter,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { mycontext } from './context'
const GithubSite = () => {
    const {Search} =useContext(mycontext)
  return (
    <div>
      <CardFooter style={{marginRight:"800px"}}>
     <Link to={(`https://github.com/${Search}`)}>
      <Button  variant='solid' colorScheme='blue'>
        Go to Repository
      </Button>
      </Link>
    
    </CardFooter>
    </div>
  )
}

export default GithubSite
