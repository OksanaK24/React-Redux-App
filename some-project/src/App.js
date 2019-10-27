import React, {useEffect} from 'react';
import './App.css';
import {connect} from "react-redux";
import {fetchQuote} from "./actions/quote";

function App(props) {
  
  useEffect(() => {
    props.fetchQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to my project "React-Redux"!</h2> 
        {props.error && <p>Something didn't work!</p>}

        {props.isLoading ? (
          <p>Be patient!</p>
        ) : (
          <div>
            {/* <p>{props.qoute.content}</p> */}
            {/* <p>{props.qoute.author}</p> */}
          </div>
        )}
      </header>
    </div>
  );
}

function mapStateToProps(state){
  return {
    quote: state.quote,
    isLoading: state.isLoading,
    error: state.error
  }
}

const mapDispatchToProps = {
  fetchQuote
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
