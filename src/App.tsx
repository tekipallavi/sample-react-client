import './App.css'
import RoutesComponent from './components/routes'

function App() {  
  return (
    <>
      <div className="header ml-6">
        <a href="/">
          <span>Home</span>
        </a>
        <a href="/about">
          <span>About</span>
        </a>
      </div>

      <div className='content ml-6'>
        <RoutesComponent></RoutesComponent>
      </div>
    </>
  )
}

export default App
