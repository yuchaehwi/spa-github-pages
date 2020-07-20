import React, { PureComponent } from 'react';

class aboutMe extends PureComponent {
   state = {
      content: [
         { "subTitle": "자기소개", "contents1": "Name : 유채휘", "contents2": "Birth : 96.10.22(만 23세)", "contents3": "Mobile : 010-2422-4374", "contents4" : "E-mail : nancy1022@naver.com", "contents5" : "Addr : 서울특별시 관악구 신림로3가길 19" },
         { "subTitle": "자격증", "contents1": "웹디자인기능사(2020.07.10)", "contents2": "네트워크관리사 2급(2015.12)", "contents3": "2종보통운전면허(2015.01)" },
         { "subTitle": "교육이수", "contents1": "웹퍼블리셔 디지털디자인(그린컴퓨터아트학원)", "contents2": "삼성 SCSC-C과정(SAMSUNG)" },
         { "subTitle": "활동", "contents1": "인턴 - 빅데이터, 클라우드(Iaas, Saas, Paas) 학습", "contents2": "프로젝트 - 인덕대학교 어플 제작 프로젝트", "contents3": "자원봉사 - 한국과학창의재단 쏙쏙캠프", "contents4" : "창업대전 - 무선,모바일 조종 로봇", "contents5" : "창업대전 - 현재 습도, 기온 등 체크하여 자동으로 조절해주는 아두이노 물품" }
      ],
   }

   render() {
      const { choice } = this.props;
      const { content } = this.state;
      for (var i = 0; i < content.length; i++) {
         if (choice === content[i].subTitle) {
            return (
               <div className="contents flex">
                  <h3 className="display-4 mb-0">{choice}</h3>
                  <div className="text-muted mb-0 content-detail font">
                     <ul>
                        <li>{content[i].contents1}</li>
                        <li>{content[i].contents2}</li>
                        <li>{content[i].contents3}</li>
                        <li>{content[i].contents4}</li>
                        <li>{content[i].contents5}</li>
                     </ul>
                  </div>
               </div>
            );
         }
      }

   }
}

export default aboutMe;