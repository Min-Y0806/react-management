import React from 'react';
import './App.css';
import Customer from "./components/Customer"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import { Tab } from '@material-ui/core';

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map(c=>{
          return (
          <Customer id={c.id} name={c.name} image={c.image} birthday={c.birthday}  gender={c.gender} job={c.job} key={c.id}/>
        )
        })}
          </TableBody>
        </Table>
      
      </div>
    )
  }
}

export default App;
