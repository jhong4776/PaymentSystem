import { BrowserRouter as Router, Route } from 'react-router-dom'
import Admin from './Admin'
import Answerer from './Answerer'
import Questioner from './Questioner'

//程序入口
const App = () => {
  return (
    <Router>
      <Route path="/admin" component={Admin}>
      </Route>
      <Route path="/answerer" component={Answerer}>
      </Route>
      <Route path="/*" component={Questioner}>
      </Route>
    </Router>
  )
}

export default App