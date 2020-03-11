import React from 'react';
import './App.css';
import Customer from "./components/Customer"

const customers=[
  {
  id:1,
  image:"http://placeimg.com/64/64/1",
  name:'Yang',
  birthday:'970806',
  gender:'Male',
  job:"Student"
},
  {
  id:2,
  image:"http://placeimg.com/64/64/2",
  name:'Kim',
  birthday:'960302',
  gender:'Male',
  job:"Desinger"
},
  {
  id:3,
  image:"http://placeimg.com/64/64/3",
  name:'Lee',
  birthday:'970322',
  gender:'Female',
  job:"Programmer"
}

]

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <h1>Hello universe</h1>
        {customers.map(c=>{
          return (
          <Customer 
            id={c.id}
            name={c.name}
            image={c.image} 
            birthday={c.birthday} 
            gender={c.gender} 
            job={c.job}
            key={c.id}/>
        )
        })}
      </div>
    )
  }
}

export default App;
