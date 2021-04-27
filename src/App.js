import './App.css';
import Topbar from './components/topbar';
import Home from './components/home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Give from './components/givefeedback';
import View from './components/viewfeedback';
import Thanks from './components/thanks';
import UpdateMentors from './components/updatementors';
function App() {
  return <>
  <Router>
    <Topbar/>
    <Switch>
      <Route path="/givefeedback" component={Give}/>
      <Route path="/viewfeedback" component={View}/>
      <Route path="/thanks" component={Thanks}/>
      <Route path="/home" component={Home}/>
      <Route path="/update" component={UpdateMentors}/>
      <Route path="/" component={Home}/>
    </Switch>
  </Router>
  </>
}

export default App;
