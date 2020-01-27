import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Tabs, TabItem} from './comp/tab/TabItem';
import "./App.scss";
import {Login, Register} from './comp/login/index';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogginActive: true
        }; 

    }

    componentDidMount() {
        this.rightSide.classList.add("right");
    }

    changeState() {
        const {isLogginActive} = this.state;

        // show right side transition
        if (isLogginActive) {
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        } else {
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
        }

        // toggle betwen states
        this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive}));   

    }

    render() {
        const {isLogginActive} = this.state;
        const current = isLogginActive ? "Register" : "Login";
        const currentActive = isLogginActive ? "login" : "register";

                                            //  we set up a container ref to the div element 
        return (                            // this will verify current element for transition effects
            <div className = "App">
                <div className = "login">  
                    <div className = "container" ref = {ref => (this.container = ref)}>
                        {isLogginActive && 
                            (<Login containerRef = {(ref) => this.current = ref} />)}
                        {!isLogginActive && 
                            (<Register containerRef = {(ref) => this.current = ref} />)}               
                    </div> 

                <Side
                    current = {current}
                    currentActive = {currentActive}
                    containerRef = {ref => (this.rightSide = ref)}
                    onClick = {this.changeState.bind(this)}                
                />
               </div>
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
    );
};

export default App;
