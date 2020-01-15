import React,{useEffect,useState} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


//componente: bloco isoladao de Html, css e js o qual nao interfere no resto (nada mais que uma "função")
// Propriedade: informaçoes que um componente PAi passa para compnente Filho
//estado: informaçoes mantidas pelo componente (lembre: imutabilidade)

function App() {
  const [github_username,setGithubUsername] = useState('')
  const [techs,setTechs] = useState('')
  const [latitude,setLatitude] = useState('')
  const [longitude,setLongitude] = useState('')


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const {latitude,longitude}= position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err)=>{
        console.log(err);
      },
      {
        timeout: 30000,     }

    )
  }, []);

  async function handAddDev(e){
    e.preventDefault();

    const response = await api.post('/devs',{
      github_username,
      techs,
      latitude,
      longitude,
    })

    console.log(response.data);
  }
  
  return (
   <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit = {handAddDev}>
        <div className= "input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input 
        name= "github_username" 
        id="github_username" 
        required
        value={github_username}
        onChange={e=> setGithubUsername(e.target.value)}
        />
        </div>

        <div className= "input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input 
        name= "techs" 
        id="techs" 
        required 
        value={techs}
        onChange={e=> setTechs(e.target.value)}
        
        />
        </div>

        <div className="input-group">
          <div className= "input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
            type= "number" 
            name= "latitude" 
            id="latitude" 
            required value={latitude}
            onChange={e => setLatitude(e.target.value)}
            />
          </div>

          <div className= "input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
            type= "number" 
            name= "longitude" 
            id="longitude" 
            required value={longitude}
            onChange={e => setLongitude(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </aside>

    <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/51856522?s=400&u=bd12d67d8b0aa591b8cd4987e7a4e7b70149841e&v=4" alt="itallo gravina"/>
            <div className="user-info">
              <strong>Itallo Gravina</strong>
              <span>React, c++, python </span>
            </div>
          </header>
          <p>software engineering student - UNB</p>
          <a href="https://github.com/itallogravina">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/51856522?s=400&u=bd12d67d8b0aa591b8cd4987e7a4e7b70149841e&v=4" alt="itallo gravina"/>
            <div className="user-info">
              <strong>Itallo Gravina</strong>
              <span>React, c++, python </span>
            </div>
          </header>
          <p>software engineering student - UNB</p>
          <a href="https://github.com/itallogravina">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/51856522?s=400&u=bd12d67d8b0aa591b8cd4987e7a4e7b70149841e&v=4" alt="itallo gravina"/>
            <div className="user-info">
              <strong>Itallo Gravina</strong>
              <span>React, c++, python </span>
            </div>
          </header>
          <p>software engineering student - UNB</p>
          <a href="https://github.com/itallogravina">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/51856522?s=400&u=bd12d67d8b0aa591b8cd4987e7a4e7b70149841e&v=4" alt="itallo gravina"/>
            <div className="user-info">
              <strong>Itallo Gravina</strong>
              <span>React, c++, python </span>
            </div>
          </header>
          <p>software engineering student - UNB</p>
          <a href="https://github.com/itallogravina">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/51856522?s=400&u=bd12d67d8b0aa591b8cd4987e7a4e7b70149841e&v=4" alt="itallo gravina"/>
            <div className="user-info">
              <strong>Itallo Gravina</strong>
              <span>React, c++, python </span>
            </div>
          </header>
          <p>software engineering student - UNB</p>
          <a href="https://github.com/itallogravina">Acessar perfil no Github</a>
        </li>
      </ul>
    </main>
   </div>
   );
}

export default App;
