import React, { Component } from 'react';
import axios from 'axios';
import Card from './Components/Card';
import Search from './Containers/Search';
const url = 'https://api.github.com/users';
class App extends Component {
  state={
    name: "",
    location: "",
    followers: 0,
    public_repos: 0,
    following:0, 
    avatar:"",
    bio:"",
    username:"",
    login: "",
    repo_url:"",
    gists:0,
    gists_url:"",
    followers_url:"",
    url:"",
    error:""
  }

  setUser = username => {
    this.setState({username})
    axios.get(`${url}/${username}`)
      .then(json=>{
        const {html_url,public_gists,public_repos,name,login,location,following,followers,bio,avatar_url} = json.data;
        this.setState({public_repos,name,login,location,following,followers,bio,avatar:avatar_url, gists:public_gists, 
          url:  `${html_url}`,  
          repo_url:`${html_url}/?tab=repositories`,
          followers_url:`${html_url}/followers`,
          gists_url: `https://gist.github.com/${login}`,
          error:``
        });
      })
      .catch(err=>{
        console.log(`ERROR! ${err}`);
        this.setState({  
         error:'No user found', 
          name: "",
        location: "",
        followers: 0,
        public_repos: 0,
        following:0, 
        avatar:"",
        bio:"",
        login: "",
        repo_url:"",
        gists:0,
        gists_url:"",
        followers_url:"",
        url:""})
        }
        )
  }

  render() {
    const styles = {
        width: '305px',
        height: '380px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#fffff9',
        boxShadow: '4px 4px 14px rgba(0, 0, 0, 0.4)',
        textAlign: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      
    };
    return (
      <div style={styles}>
      <Search setUser={this.setUser} />
      <Card {...this.state} />
      </div>
    );
  }
}

export default App;
