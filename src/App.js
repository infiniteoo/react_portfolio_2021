import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx'
import styles from "./App.module.css";

class App extends React.Component {

    render(){
        return (

            <div className={styles.container}>
               <NavBar/>
            </div>


        )
    }

}

export default App;