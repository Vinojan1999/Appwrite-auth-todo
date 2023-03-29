import { Permission, Role } from 'appwrite';
import React,  { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import { databases } from '../appwrite/appwriteConfig';

function TodoForm() {
  const [todo, setTodo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const promise = databases.createDocument("641938ea5d2a327aa369", "64193904184fbcf86594", uuidv4(), {    // Collection ID, document ID
      todo
    }, [Permission.read(Role.users())])
    promise.then(
      function(response) {
        console.log(response);
      },
      function(error) {
        console.log(error);
      }
    )
    // To clean-up the state and refresh the page
    // window.location.reload()
    e.target.reset();
  }

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange={(e) => {
            setTodo(e.target.value)
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm