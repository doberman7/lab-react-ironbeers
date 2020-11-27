import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import Home from './pages/Home';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                {' '}
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/beers">beers</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/random-beer">random-beer</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/new-beer">new-beer</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Switch>
                <Route path="/beers">
                  <Beers />
                </Route>
                <Route path="/random-beer">
                  <RandomBeer />
                </Route>
                <Route path="/new-beer">
                  <NewBeer />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
