import React from "react";
import PlanVisit from './PlanVisit';
import About from "./About";
import NewContactForm from "./NewContactForm";
// import Header from "./Header";

class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleView: 0
    };
  }
  // 0 = page with header only
  // 1 = plan visit
  // 2 = about
  // 3 = contact

  planClick = () => {
    this.setState({
      visibleView: 1
    });
  }

  aboutClick = () => {
    this.setState({
      visibleView: 2
    });
  }

  contactClick = () => {
    this.setState({
      visibleView: 3
    });
  }



  render(){
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.visibleView === 0) {
        currentlyVisibleState = null // this might have to be something like "null" ;; Header's visibility shouldn't be toggled on and off
      } else if(this.state.visibleView === 1) {
        currentlyVisibleState = <PlanVisit />
      } else if(this.state.visibleView === 2) {
        currentlyVisibleState = <About />
      } else if(this.state.visibleView === 3) {
        currentlyVisibleState = <NewContactForm />
      }
      return (
        <>
        <h1>view control placeholder heading (make sure it renders) </h1>
          <button onClick={this.planClick}> Plan Your Visit </button>
          <button onClick={this.aboutClick}> About </button>
          <button onClick={this.contactClick}> Contact </button>
          {currentlyVisibleState}
        </>
    );
  }
}

export default ViewControl;