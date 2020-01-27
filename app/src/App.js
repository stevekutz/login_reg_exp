import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Tabs, TabItem} from './comp/tab/TabItem';
import {Login, Register} from './comp/login/index';

 // node-sass -v    // 4.13.1



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true
        }; 

    }

    // componentDidMount() {
    //     this.rightSide.classList.add("right");
    // }

    // changeState() {
    //     const {isLogginActive} = this.state;



    // }

    render() {
        const {isLogginActive} = this.state;
        const current = isLogginActive ? "Register" : "Login";
        const currentActive = isLogginActive ? "login" : "register";

                                            //  we set up a container ref to the div element 
        return (                            // this will verify current element for transition effects
            <div className = "App">
                <div className = "login">  
                    <div className = "container"></div>
                        {isLogginActive && <Login containerRef = {(ref) => this.current = ref} />}
                        {!isLogginActive && <Register containerRef = {(ref) => this.current = ref} />}
                

                
                </div>

                <Side
                    current = {current}
                    currentActive = {currentActive}
                    containerRef = {ref => (this.Side = ref)}
                    // onClick = {this.changeState.bind(this)}                
                />

            </div>
        )
    }
}

const Side = props => {
    return (
        <div
            className = "right-side"
            ref = {props.containerRef}
            onClick = {props.onClick}
        >
            <div className = 'inner-container'>
                <div className = 'text'>{props.current}</div>
            </div>
        </div>
    )
}


export default App;



/* 
function App() {
    

  return (
    <div className="App">
        <Login/>
    </div>
  );
}

export default App;

*/