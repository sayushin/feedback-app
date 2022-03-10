import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedBackList from "./components/FeedBackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import Post from './components/Post'
import {FeedbackProvider} from './Context/FeedbackContext'

function App() {
    return(
        <FeedbackProvider>
    <Router>
        <Header />
        <div className='container'>
        <Routes>
        <Route exact path='/' element={
        <>
        <FeedbackForm />
        <FeedbackStats />
        <FeedBackList />
        </>
        }>
        </Route>

        <Route path='/about' element={<AboutPage />} />
        <Route path='/post/*' element={<Post />} />
        </Routes>


        
        <AboutIconLink />
        </div>
    </Router>
    </FeedbackProvider>
    )
}

export default App