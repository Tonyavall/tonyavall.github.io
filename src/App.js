import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Main'
import Home from './pages/index'
import Works from './pages/works'
import SingleWork from './pages/works/SingleWork'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Resume from './pages/Resume';
import ResumePDF from './pages/Resume/ResumePDF'

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/works/:work" element={<SingleWork/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/contact/resume" element={<Resume />}/>
          <Route path="/contact/resume.pdf" element={<ResumePDF />}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
