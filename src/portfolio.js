import React, { PureComponent } from 'react';

class Portfolio extends PureComponent {
   state = {
      portfolio: [
         { img: "0px", content: "쇼핑몰 리뉴얼", intro: "Cheecle Photo라는 사진인화 사이트를 리뉴얼한 프로젝트", language: "html, css, javascript, jquery", time: "1달", siteUrl: "http://whi1022.dothome.co.kr/shoppingMall/shop/index.html", url: "https://github.com/yuchaehwi/shop_web" },
         { img: "-210px", content: "Chrome Momentum", intro: "크롬 확장프로그램인 Momentum을 바탕으로 만든 프로젝트", language: "html, css, javascript, jquery", time: "1달", siteUrl: "https://yuchaehwi.github.io/chrome_momentum.github.io/", url: "https://github.com/yuchaehwi/chrome_momentum.github.io" },
         { img: "-415px", content: "인덕대학교 어플", intro: "인덕대학교 학교소개 위주의 어플(팀프로젝트)", language: "html, css, javascript, jquery", time: "6달", siteUrl: "http://whi1022.dothome.co.kr/idu_app/main.html", url: "https://github.com/yuchaehwi/idu_App" }
      ]
   }

   clickHandle = (i) => () => {
      window.open(i);
   }

   render() {
      const { portfolio } = this.state;
      return (
         <React.Fragment>
            <div className="portfolio-show">
               <ul>
                  {
                     portfolio.map((v, i) => {
                        return (
                           <li key={v.img + 'portfolioImg'}>
                              <div style={{backgroundPosition: `0 ${v.img} `}}></div>
                              <span>
                                 <ol className="portfolio-intro">
                                    <li><b>{v.content}</b></li>
                                    <li>설명 : {v.intro}</li>
                                    <li>사용 언어 : {v.language}</li>
                                    <li>기간 : {v.time}</li>
                                    <li>
                                       <button onClick={this.clickHandle(v.siteUrl)}>사이트</button>
                                       <button onClick={this.clickHandle(v.url)}>소스코드</button>
                                    </li>
                                 </ol>
                              </span>
                           </li>
                        )
                     })
                  }
               </ul>
            </div>
         </React.Fragment >
      )
   }
}

export default Portfolio;