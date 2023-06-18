import { createContext, useState } from "react";
 export const mycontext =createContext();

function MyContext({children}){
  const [Search,SetSearch] =useState('');
    const [GithubApi,SetGithubApi] =useState({})
    const [GihtubSite,SetGithubSite]=useState({})
    return (
        <mycontext.Provider value={{GithubApi,SetGithubApi,Search,SetSearch}}>
        {children}
      </mycontext.Provider>
    )
  
  
}
export default MyContext