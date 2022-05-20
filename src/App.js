import React,{useState} from 'react';
import './App.css';
import Sidebar from './component/sidebar/sidebar';
import Contents from './component/content/content';
import OnePage from './component/onepage/page';
import {Container} from './styled';
import {Switch,Route} from 'react-router-dom';
import music from './David_Guetta_&_Shahlo_Ahmedova_Get_Together_TBRG_Open_Mix.mp3';
function App() {
    const [bgColor,setColor] = useState([
        {name:'David Guetta',musicName:'target', img:'https://upload.wikimedia.org/wikipedia/ru/d/dc/Nectar.png' , src:music},

    ]);
    const [one,setOne] = useState('')

  return (
      <Container bg={bgColor}>
          <Sidebar/>
          <Switch>
              <Route path={'/page'}> <OnePage one={one}/></Route>
              <Route> <Contents setOne={setOne} array={bgColor}/></Route>
          </Switch>

      </Container>
  );
}

export default App;
