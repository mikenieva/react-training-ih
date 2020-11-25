import React from 'react';
import './App.css';

import Greetings from './components/Greetings'
import IdCard from './components/IdCard'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import LikeButton from './components/LikeButton'

function App() {
  return (
    <div className="App">
        <IdCard 
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14").toString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11").toString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        
        <Greetings lang="de">
            Ludwig
        </Greetings>

        <Greetings lang="fr">
            Francois
        </Greetings>

        <Random 
          min={1}
          max={6}
        />

        <Random 
          min={1}
          max={100}
        />

        <BoxColor 
          r={255}
          g={0}
          b={0}
        />

        <BoxColor   
          r={128}
          g={255}
          b={0}
        />

        <BoxColor   
          r={138}
          g={205}
          b={44}
        />

        <hr/>


        {/* ITERACIÓN 8 */}

        <LikeButton />



    </div>
  );
}

export default App;
