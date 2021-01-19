import React,{useState} from 'react'
import './App.css';
import Enfant from './Enfant'

function App() {

  // Je créer une state message qui vaut un tableau de deux objets
  const [message,setMessage] = useState([{message:"salut"},{message:"bienvenue"}]);

  // Je créer une methode avec deux parametres
  const handleChanger = (msg,key) => {
    // Je créer une nouvelle variable qui contient le contenu de ma state message 
    let newMessage = [...message];
    // Je cible la bonne clé et je lui attribue le nouveau message
    newMessage[key].message = msg;

    // Je met a jours ma state message avec le nouvel etat que j'ai stocké dans newMessage
    setMessage(newMessage);
  }
  return (
    <div className="App">
      {/* Je boucle sur toutes les valeurs que jai dans message pour créer autant de composant "Enfant" que nécéssaire */}
      {message.map((elem,index)=>{
        return(
          // A chaque enfant je rajoute une props keys , msg , et la function handleChanger avec deux parametre vide qui seront rempli dans Enfant.js
          <Enfant keys={index} msg={elem.message} handleChange={(msg,key) => handleChanger(msg,key)}/>
          )
      })}
    </div>
  );
}

export default App;
