import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Signup } from './Signup';
import { MyProjects } from './MyProjects';
import { AddProject } from './AddProject';
import { SelectBoard } from './SelectBoard';
import { InviteUsers } from './InviteUsers';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/signup" component={Signup} />
              <Route path="/MyProjects" component={MyProjects} />
              <Route path="/AddProject" component={AddProject} />
              <Route path="/SelectBoard" component={SelectBoard} />
              <Route path="/InviteUsers" component={InviteUsers} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
