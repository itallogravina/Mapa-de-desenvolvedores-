import React,{useEffect,useState} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './componets/DevItem/index';
import DevForm from './componets/DevForm/index';

//componente: bloco isoladao de Html, css e js o qual nao interfere no resto (nada mais que uma "função")
// Propriedade: informaçoes que um componente PAi passa para compnente Filho
//estado: informaçoes mantidas pelo componente (lembre: imutabilidade)

function App() {
  const [devs, setDevs]= useState([]);


  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handAddDev(data){
   
    const response = await api.post('/devs',data)

    setDevs([...devs,response.data]);
  }
  
  return (
   <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <DevForm onSubmit={handAddDev}/>
      </aside>

    <main>
      <ul>
        {devs.map( dev => (
          <DevItem key={dev._id} dev={dev} />
        ))}
      </ul>
    </main>
   </div>
   );
}

export default App;
