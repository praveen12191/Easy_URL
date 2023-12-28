import { BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from './components/home'
import Create from './components/create'
import Search from './components/search'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
