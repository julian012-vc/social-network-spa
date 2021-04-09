import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Feed from "./modules/pages/feed/Feed";
import Post from "./modules/pages/post/Post";
import './App.css';
import Header from "./shared/components/header/Header";
import Footer from "./shared/components/footer/Footer";

function App() {
    return (
        <>
            <div className="App">
                <div className="content-wrap">
                    <Router>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Feed}/>
                            <Route exact path="/post/:post_id" component={Post}/>
                        </Switch>
                    </Router>
                </div>
                <div className="feed__container--footer">
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default App;
