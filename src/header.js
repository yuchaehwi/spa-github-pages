import React, { PureComponent } from 'react';

class Header extends PureComponent {
   state = {
      menuName: ['About Me', 'Technology', 'Portfolio']
   }

   handleClick = () => (no) => {
      this.props.onCreate(no.target.text);
   }

   handleMove = () => {
      window.location.href = "https://github.com/yuchaehwi?tab=repositories"
   }

   render() {
      return (
         <header className="navbar-dark bg-primary navbar">
            <label>해당 페이지는 React를 이용하여 만든 페이지입니다.</label>
            <ul className="ml-lg-auto navbar-nav">
               {
                  this.state.menuName.map((no) => {
                     return (
                        <li className="nav-item" key={no+'header'} onClick={this.handleClick(no)}>
                           <a href={`#${no.toLowerCase()}`} className="nav-link">{no}</a>
                        </li>
                     );
                  })
               }
               <button className="btn-1 ml-1 btn btn-warning" type="button" onClick={this.handleMove}>Github</button>
            </ul>
         </header>
      )
   }
}

export default Header;