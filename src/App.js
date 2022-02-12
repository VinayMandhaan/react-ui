import { React, useState } from 'react'
import 'antd/dist/antd.css';
import UserTable from './components/table/userTable';
import UserCard from './components/card/userCard';
import UserForm from './components/form/userForm';



const App = () => {
  return (
    <div>
      <UserForm/>
    </div>
  )
}
export default App;
