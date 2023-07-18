import React from 'react'

import { Helmet } from 'react-helmet'

import './webreview.css'

const Webreview = (props) => {
  return (
    <div className="webreview-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="webreview-webreview">
        <div className="webreview-frame">
          <div>
            <img
              alt="SVG9103"
              src="/external/svg9103-5wda.svg"
              className="webreview-svg"
            />
            <span className="webreview-text">
              <span>계약서 조항 입력하기</span>
            </span>
            <span className="webreview-text02">
              <span className="webreview-text03">
                <span>텍스트 박스. 입력하는 부분.</span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  이렇게 계약 조항 텍스트로 입력하다보면, 만약에 문제있는 부분이
                  있을 시에 적당히 표시를 해줘서 오른쪽에 권고 문항이라고
                  표시해주는 그런 UI를 만들었으면 좋겠는데 (약간 Grammarly처럼)
                  이런 거 구현할 수 있으려나?
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  수상작들 살펴보니까 생각보다 디자인이랑 UI가 중요한거 같아서
                  잘모르겠네... 아무튼 이런식으로 표시하는 거 어떻게들
                  생각하시나요?
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  {' '}
                  (1) ‘이가명’은 A기업과의 커뮤니케이션 및 협업을 원활하게
                  유지하며, 업무 진행 상황
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  {' '}
                  을 주기적으로 보고해야 합니다.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="webreview-text19">
                <span>미행으로 인한 손해 발생시 모든 책임은 ‘이가명’</span>
                <br></br>
                <span> 이 부담합니다.</span>
                <br></br>
                <span></span>
              </span>
              <span>
                <span> (2) 디자인적으로 괜찮은지</span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  해외 타 서비스들 보니까 거의 이런 형식을 사용하는 것 같기는
                  합니다.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span></span>
              </span>
            </span>
          </div>
          <img
            alt="SVG9120"
            src="/external/svg9120-n9i9.svg"
            className="webreview-svg1"
          />
          <div className="webreview-frame2">
            <span className="webreview-text35">
              <span>검토 권고 문항</span>
            </span>
            <img
              alt="Rectangle99124"
              src="/external/rectangle99124-1gya.svg"
              className="webreview-rectangle9"
            />
            <span className="webreview-text37">
              <span>
                미행으로 인한 손해 발생시 모든 책임은 ‘이가명’이 부담합니다.
              </span>
            </span>
            <span className="webreview-text39">
              <span>
                미행으로 인한 손해 발생시 A기업과 ‘이가명’이 협의하여 책임을
                부담합니다.
              </span>
            </span>
            <span className="webreview-text41">
              <span>
                ‘이가명’은 A기업의 요구에 따라 메인 홈페이지 구축 소프트웨어
                개발 및 관련 작업을 수행해야 하는데, A기업이 제대로 협조하지
                않으면 손해를 입을 수 있습니다. 따라서 이 조항은 50%
                불공정하다고 판단합니다.
              </span>
            </span>
            <span className="webreview-text43">
              <span>
                ※ 해당 내용은 추천 사항일 뿐이니 참고용으로만 사용해주세요.
              </span>
            </span>
            <span className="webreview-text45">
              <span>이러한 수정을 추천드려요</span>
            </span>
            <span className="webreview-text47">
              <span>불공정할 가능성이 높은 문항이에요</span>
            </span>
          </div>
        </div>
        <div className="webreview-frame3">
          <div className="webreview-frame1 webreview-frame1">
            <span className="webreview-text49">
              <span>빠른 메뉴</span>
            </span>
            <img
              alt="Line21316"
              src="/external/line21316-ept.svg"
              className="webreview-line2"
            />
            <span className="webreview-text51">
              <span>Web에서 검토</span>
            </span>
            <span className="webreview-text53">
              <span>문서 업로드</span>
            </span>
            <span className="webreview-text55">
              <span>계약서 작성</span>
            </span>
            <span className="webreview-text57">
              <span>사용가이드</span>
            </span>
          </div>
        </div>
        <div className="webreview-frame4">
          <span className="webreview-text59">
            <span>NotUchul</span>
          </span>
          <div className="webreview-frame5">
            <span className="webreview-text61">
              <span>메인페이지</span>
            </span>
            <span className="webreview-text63">
              <span>계약서 검토</span>
            </span>
            <span className="webreview-text65">
              <span>계약서 작성</span>
            </span>
            <span className="webreview-text67">
              <span>About us</span>
            </span>
          </div>
          <div className="webreview-frame6">
            <span className="webreview-text69">
              <span>로그인</span>
            </span>
            <span className="webreview-text71">
              <span>회원가입</span>
            </span>
          </div>
          <img
            alt="Line1Stroke7534"
            src="/external/line1stroke7534-8qbs.svg"
            className="webreview-line-stroke"
          />
        </div>
      </div>
    </div>
  )
}

export default Webreview
