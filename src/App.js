import React, { PureComponent } from 'react';
import Header from './header';
import Contents from './contents';
import './App.css';

class Intro extends PureComponent {

   state = {
      choiceMenu : ''
   }

   handleCreate = (data) => {
      this.setState({
         choiceMenu : data
      })
    }

   render() {
      const { choiceMenu } = this.state;
      return (
         <React.Fragment>
            <Header onCreate={this.handleCreate}/>
            <div className="choice-menu">
               <Contents data={choiceMenu} />
            </div>
         </React.Fragment>
      )
   }
}

export default Intro;