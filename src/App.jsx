import AppRouter from "./router/index.jsx"
import Navbar from '~/components/Navbar/Navbar.jsx';
import Footer from '~/components/Footer/Footer.jsx';
import './App.scss'

function App() {

  return (
    <>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
