import BuzzTimer from './components/BuzzTimer'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🐝 Buzz Timer v2 🍯</h1>
        <p className="app-subtitle">Work like a busy bee, rest like honey</p>
      </header>
      <main className="app-main">
        <BuzzTimer />
      </main>
    </div>
  )
}

export default App
