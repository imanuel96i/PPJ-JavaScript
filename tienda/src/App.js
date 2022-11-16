import './App.css';
import Mensaje from './Mensaje'

const Descripcion = () => {
  return <p>Se crearon componentes para react</p>
}

const App = () => {

  const notes = [
    {
      id: 13,
      content: "HTML is easy",
      date: "2022-11-16T09:15:10.098Z",
      important: true
    },
    {
      id: 15,
      content: "Browser can execute only JavaScript",
      date: "2022-11-16T09:15:10.098Z",
      important: false
    },
    {
      id: 23,
      content: "GET and POST are the most important method of HTTP protocol",
      date: "2022-11-16T09:15:10.098Z",
      important: true
    }
  ]

  const Note = ({ note }) => {
    return (
      <div key={note.id}>
            <p>{note.content}</p>
            <small>
              <time>{note.date}</time>
            </small>
      </div>
    )
  }

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='yellow' message='De React' />
      <Descripcion />
      { notes.map(note => <Note note={note}/>)}
    </div>
  );
}


export default App;
