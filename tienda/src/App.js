import './App.css';
import Mensaje from './Mensaje'
import { Note } from './Note'
import { useState } from 'react';

const Descripcion = () => {
  return <p>Se crearon componentes para react</p>
}

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Crear nota')
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    console.log(noteToAddToState)
    setNotes(notes.concat(noteToAddToState))
    setNewNote("")
  }

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
      <Descripcion />
      {notes.map(note =>
        <Note key={note.id} {...note} />
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear nota</button>
      </form>
    </div>
  );
}


export default App;
