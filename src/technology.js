import React, { PureComponent } from 'react';

class Technology extends PureComponent {
   state = {
      subject1: [
         {subject:"Html",style:"30",percent:"80%"}, 
         {subject:"Css",style:"30",percent:"80%"}, 
         {subject:"Javascript",style:"40",percent:"80%"},
         {subject:"Jquery",style:"50",percent:"75%"}, 
         {subject:"Ajax",style:"60",percent:"70%"}, 
         {subject:"React",style:"70",percent:"65%"},
         {subject:"API",style:"60",percent:"65%"}, 
         {subject:"Photoshop",style:"50",percent:"75%"}, 
         {subject:"illustrator",style:"70",percent:"65%"}
      ]
   }

   render() {
      const { subject1 } = this.state;
      return (
         <React.Fragment>
            <div className="tech-box">
            {
                  subject1.map((v) => {
                     let style = {
                        marginTop:`${v.style}px`
                     }
                     return (
                        <div className='box' key={v.subject+"technology"}>
                           <div className='wave -one' style={style}></div>
                           <div className='wave -two' style={style}></div>
                           <div className='wave -three' style={style}></div>
                           <div className='title1'>{v.subject}</div>
                           <div className="title2">({v.percent})</div>
                        </div>
                     )
                  })
               }
            </div>
         </React.Fragment>
      )
   }
}

export default Technology;

