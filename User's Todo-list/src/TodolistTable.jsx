
import React from 'react';


import { useEffect,useState } from 'react';
import UserDetails from './UserDetails';

import { FaSortAmountDown , FaSortAmountDownAlt } from 'react-icons/fa'








function TodolistTable() {

    const [todos,setTodos] = useState([]);
    const [searchItem,setSearchItem] = useState('')

    const [clickedId,setClickedId] = useState(0)


    //fetching todos api
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=> res.json())
        .then(data => {setTodos(data);
        })

    },[]);


    //sorting
    const ascendSort = ()=> {
        const sortedData = [...todos].sort((a,b)=> a.id-b.id);  //creatin 3 dots before array to create copy not damaging original
        setTodos(sortedData);
    }

    const descendSort = () => {
        const sortData = [...todos].sort((a,b)=> b.id-a.id ); // if b.id-a.id gives -, a comes first & gives+,b comes first
        setTodos(sortData);
    }


    //searching

    const searching = event => {
        setSearchItem(event.target.value)
    }

    const filteredItems = todos.filter(todo=>{
        return (
        todo.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        todo.id.toString().includes(searchItem) ||
        ((todo.completed)?"Completed":"Incomplete").toLowerCase().includes(searchItem) 

        );
    });

    
    
    
    //viewuser-btn click

    const handleClick= (id) =>{
        setClickedId(id);
    }


  return (
    <div className='main-page'>
        <div className='todo-page'>

        <div className='user-enterarea'>
            
            <button className='btn btn-primary' id='sort-btn1' onClick={ascendSort}>  <FaSortAmountDownAlt /> </button>
            <button className='btn btn-primary' id='sort-btn2' onClick={descendSort}> <FaSortAmountDown /> </button>
            <input type="text" value={searchItem} onChange={searching} placeholder="Search here" />
        </div>
        <table className="table table-secondary table-hover" id='todo-table'>
       
            <thead>
                
            </thead>
            <tbody>
                <tr className="table-primary" id='todo-header'>
                    <th>TodoID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                
                {filteredItems.map(info => (
                    
                        <tr>
                            <td>{info.id} </td>
                            <td>{info.title} </td>
                            <td key={info.id}>{`${info.completed?'Complete':'Incomplete'}`} </td>
                            <td id='action-btn'>
                                
                                <button className="btn btn-secondary" onClick={()=>handleClick(info.id)}>Viewuser</button>
                            </td>
                          
                        </tr>


                ))}
            </tbody>
        </table>
        </div>
        <div className='userdetails-table'>
            <UserDetails id={clickedId} />
        </div>
    </div>

  )
}

export default TodolistTable