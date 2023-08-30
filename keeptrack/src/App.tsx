//import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hello from './hello/Hello';
import ProjectsPage from './projects/ProjectsPage';


const App: React.FC = () => {
//function App() {
   // return (
   //   <blockquote cite="Benjamin Franklin">
   //     Tell me and I forget, teach me and I may remember, involve me and I learn.
   //   </blockquote>
   // );
   return (
      <div className="container">
         <ProjectsPage title='Bla bla'/>
         <Hello name='Sergey' enthusiasmLevel={5} />
      </div>
   );
}

export default App;
