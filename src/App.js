import { Routes, Route, Link } from 'react-router-dom'
import Bio from './components/Bio'
import Picture from './components/Picture'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="App">
      <p><Link to="page-one">Page One</Link></p>
      <p><Link to="page-two">Page Two</Link></p>
      <p><Link to="page-three">Page Three</Link></p>
      <Routes>
        <Route path="/page-one" element={<Bio/>} />
        <Route path="/page-two" element={<PageTwo/>} />
        <Route path="/page-three" element={<PageThree/>} />
      </Routes>
    </div>
  );
}

const PageOne = () => <h1><Bio /></h1>
const PageTwo = () => <h1><Picture /></h1>
const PageThree = () => <h1><Gallery /></h1>

export default App;
