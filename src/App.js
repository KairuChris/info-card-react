import './styles/style.css'
import Info from './components/info'
import About from './components/about'
import Interest from './components/interest'
import Footer from './components/footer'

const App = () => {
    return(
        <main className='container'>
        <Info/>
        <About/>
        <Interest/>
        <Footer/>
        </main>
    )
}
export default App