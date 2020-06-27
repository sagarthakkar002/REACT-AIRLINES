import React, { Component } from "react";
import "./App.scss";
import HomePage from './pages/HomePage'
import Layout from './components/Layout'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <HomePage />
                </Layout>

            </div>
        );
    }
}

export default App;