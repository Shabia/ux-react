import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { FeatureRequest } from './port/FeatureRequest';
import { TopologyBuilder } from './port/TopologyBuilder';
import { Scheduling } from './port/Scheduling';
import { IconLibrary } from './port/IconLibrary';
import { dCloudAssistant } from './port/dCloudAssistant';
import { Documentation } from './port/Documentation';
import { CryptoAutoInvest } from './port/CryptoAutoInvest';


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
              <Route path="/port/FeatureRequest" component={FeatureRequest} />
              <Route path="/port/TopologyBuilder" component={TopologyBuilder} />
              <Route path="/port/Scheduling" component={Scheduling} />
              <Route path="/port/IconLibrary" component={IconLibrary} />
              <Route path="/port/dCloudAssistant" component={dCloudAssistant} />
              <Route path="/port/Documentation" component={Documentation} />
              <Route path="/port/CryptoAutoInvest" component={CryptoAutoInvest} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
