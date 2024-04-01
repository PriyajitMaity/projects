import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './userSlice';

const Home = () => {
const users =useSelector(state => state.users)
const dispatch =useDispatch();

const handleDelete =(id) =>{
    dispatch(deleteUser({id: id}))
}
return (
    <div>
    <h1>React Crud with Redux <hr /></h1>
        <Link to='/create' ><button className='create-btn'>+ create</button></Link>
        {
            users.length ===0 ? (
                <h1 style={{color: 'red'}}> Empty Data</h1>
            ) : (
                <div className='table-data'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            users.map((user) =>{
                return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/edit/${user.id}`}> <button className='create-edit'>Edit</button></Link>
                        <button className='create-delete' onClick={() =>handleDelete(user.id)}>Delete</button>
                    </td>
                </tr>  
                ) 
            })
           }
          </tbody>
        </table>
      </div>
            )
        }
        
    </div>
  )
}

export default Home