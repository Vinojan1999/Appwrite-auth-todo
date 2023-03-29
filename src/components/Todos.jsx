import React,  { useState, useEffect, useSyncExternalStore } from 'react';
import { databases } from '../appwrite/appwriteConfig';

function Todos() {
  const [todos, setTodos] = useState()
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    const getTodos = databases.listDocuments("641938ea5d2a327aa369", "64193904184fbcf86594")
  
    getTodos.then(
      function(response) {
        console.log(response);
        setTodos(response.documents)
      },
      function(error) {
        console.log(error);
      }
    )

    setLoader(false);
  }, [])

  const deleteTodo = (id) => {
    console.log(id);
    const deleteTodos = databases.deleteDocument("641938ea5d2a327aa369", "64193904184fbcf86594", id)

    deleteTodos.then(
      function(response) {
        console.log(response);
        console.log("Deleted");
      },
      function(error) {
        console.log(error);
      }
    );

  }
  

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          
            {todos && todos.map(item => (
              <div key={item.$id}>
                <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                  <div>
                    <p>{item.todo}</p>
                  </div>
                  <div>
                    <span
                      className="text-red-400 cursor-pointer"
                      onClick={() => {
                        deleteTodo(item.$id)
                      }}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            ))
            }
            
        </div>
      )}
    </div>
  )
}

export default Todos