import './App.css' ; 
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './components/AddUser';





function App() {
  
return(
   <div className="APP">
    <AddUser/>
  <UserList/>

</div>
);

}

export default App; 