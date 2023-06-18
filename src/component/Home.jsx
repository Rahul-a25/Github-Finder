import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Input } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { RiUserSearchFill} from "react-icons/ri";
import Github from './Github';
import { mycontext } from './context'
const Home = () => {
  
  // console.log(Search);
  const {GithubApi,SetGithubApi,Search,SetSearch} =useContext(mycontext)
  // useEffect(()=>{
  //   FindData();
  // },[GithubApi])
 const FindData=()=>{
  axios
      .get(`https://api.github.com/users/${Search}`)
      .then((res) => {
        console.log(res);
        SetGithubApi(res.data);
      })
      .catch(() => {
        alert("Failed to fetch User Details");
      });
 }
  return (
    <div  >

        <div className="main" >
          <h1 style={{textAlign:'center',fontSize:"40px",fontWeight:"600",color:"#3182ce",marginTop:"20px"}}>Github Finder</h1>
     <Flex style={{marginLeft:"500px"}} >
     < Input onChange={(e)=>{SetSearch(e.target.value)}} width='500px' style={{marginTop:"50px"}}  placeholder='extra small size' size='md'/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
     <Button  onClick={FindData} style={{marginTop:"50px"}} rightIcon={<RiUserSearchFill  style={{color:"blue",fontSize:"20px"}}/>} colorScheme='twitter' variant='outline'>
    Search
  </Button>
     </Flex>
       
        </div>

        <Github/>
          
    </div>
  )
}

export default Home
