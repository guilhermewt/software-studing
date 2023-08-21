import React,{useState} from 'react';
import logo from './logo.svg';
import githubImage from './github-image.png';
import './App.css';

//hooks,ciclo de vida de component

function App() {

  //controlar estado do input
  const [search, setSearch] = useState('');
  const [userData,setUserData] = useState();
  
  //ao clicar em submit estou chamando esta funcao
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
    .then(response => response.json())
    .then(userResponse => setUserData(userResponse));
  }
console.log(userData)
  
  //toda vez que digitar algo sera invocado esta funcao
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="container text-center">
      <h1 className="py-5 text-ippercase">Github profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input 
              type="text" 
              className="form-control" 
              required
              value={search}
              onChange={handleChange}
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-success" >search</button>
              </span>
            </div>
          </div>
        </form>
     
        <div className="py-5">
          {!userData && (
            <img src={githubImage} className="responsive rounded-circle " height="200px"/>
          )}

        {userData && (
          <div>
          <img src={userData.avatar_url} className="responsive rounded-circle " height="200px"/>
            
            <h1 className='pt-5'>
              <a href='#'>{userData.name}</a>
              
            </h1>
            <h3>{userData.location}</h3>
            <p>
              <a href={userData.blog} className='text-info'>
                {userData.blog}
              </a>
            </p>
          </div>
          
        )}
        
        </div>
    </div>
  );
}

export default App;
