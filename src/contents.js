import React, { PureComponent } from 'react';
import AboutMe from './aboutMe';
import Technology from './technology';
import Portfolio from './portfolio';


class Contents extends PureComponent {
   state = {
      aboutMe: ['자기소개', '자격증', '교육이수', '활동'],
      technology: ['Web', '디자인', '운영체제', '서버', '컴퓨터'],
      portfolio: ['쇼핑몰', '크롬Momentum', 'idu어플', 'spa']
   }


   render() {
      const { data } = this.props;
      const { aboutMe, technology, portfolio } = this.state;
      let array = [];
      array = array.concat(aboutMe);
      if (data === 'About Me') {
         array = [];
         array = array.concat(aboutMe);
         return (
            <div className="content">
               {
                  array.map((v, i) => {
                     return (
                        <AboutMe choice={v} key={v + 'contents'} />
                     )
                  })
               }
            </div>
         )
      } else if (data === 'Technology') {
         array = [];
         array = array.concat(technology);
         return (
            <div className="content">
               <Technology />
            </div>
         )
      } else if (data === 'Portfolio') {
         array = [];
         array = array.concat(portfolio);
         return (
            <div className="content">
               <Portfolio />
            </div>
         )
      } else {
         return (
               <div className="title">
                  안녕하세요!<br />
                  프론트엔드 개발자 유채휘의 포트폴리오 웹사이트입니다.
               </div>
         )
      }
   }
}

export default Contents;