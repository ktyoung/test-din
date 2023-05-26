/* eslint-disable camelcase */
import { useState } from 'react';
import ExamineeInfoPopup from 'renderer/components/snb/examineePopup';
import main_logo from '../../../assets/images/main_logo.png';
import ico_home from '../../../assets/images/icons/icon_home.png';
import ico_settings from '../../../assets/images/icons/icon_settings.png';
import ico_user from '../../../assets/images/icons/icon_user.png';
import TestForm from 'renderer/components/test/testForm';

export default function MainPage() {
  const [isNoticeVisible, setNoticeVisible] = useState(true);
  const [isHistoryOpen, setHistoryOpen] = useState(false);
  const [isSettingOpen, setSettingOpen] = useState(false);
  const [isTestStarted, setTestStarted] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div>
      {/* Header 시작 */}
      <div id="gnb" className="gnb bg-green-200">
        <nav className="nav flex justify-items-center mx-auto relative ">
          <img
            width="150vh"
            src={main_logo}
            alt="main_logo"
            className="absolute left-10"
          />
          <ul className="flex items-end">
            <li className="flex flex-none justify-center mx-10">
              <a href="!#">
                <img width="30vh" src={ico_user} alt="icon_home" />
              </a>
            </li>
            <li className="flex flex-none justify-center">
              <a
                href="#!"
                onClick={() => {
                  setSettingOpen(true);
                  setNoticeVisible(false);
                  setHistoryOpen(false);
                  setTestStarted(false);
                }}
              >
                <img width="30vh" src={ico_settings} alt="icon_home" />
              </a>
            </li>
            <li className="flex flex-auto justify-center">
              <a href="!#">
                <img width="30vh" src={ico_home} alt="icon_home" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Header 끝 */}
      <div className="flex">
        <div className="w-3/12">
          {/* snb 시작 */}
          <div
            id="snb"
            className="snb flex flex-col justify-between h-full border-r-2 border-black box-border"
          >
            <ul className="snb-list flex shadow-md">
              <li className="flex items-center">
                <div className="text-examinee p-3 m-2.5">피검사자</div>
              </li>
              <li className="flex items-center ml-auto">
                <label htmlFor="backupData">
                  <div className="text-examinee p-3 cursor-pointer m-2.5">
                    백업하기
                  </div>
                </label>
                <input
                  type="file"
                  name="backupData"
                  id="backupData"
                  className="hidden"
                />
              </li>
              <li className="flex items-center">
                <label htmlFor="examineeDataFile">
                  <div className="text-examinee p-3 cursor-pointer m-2.5">
                    가져오기
                  </div>
                </label>
                <input
                  type="file"
                  name="examineeDataFile"
                  id="examineeDataFile"
                  className="hidden"
                />
              </li>
            </ul>
            <div className="import-success-screen overflow-y-auto">
              {/* examineeData 시작 */}
              <div className="examinee-data-wrapper">
                <div className="data-text text-cyan-900 p-5">
                  {isPopupOpen && (
                    <ExamineeInfoPopup onClose={() => setPopupOpen(false)} />
                  )}
                  <a
                    href="#!"
                    className="text-left"
                    onClick={() => {
                      setPopupOpen(!isPopupOpen);
                    }}
                  >
                    피검사자명
                  </a>
                </div>
                {/* ExamineeCard 시작 */}
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setHistoryOpen(true);
                    setTestStarted(false);
                    setNoticeVisible(false);
                    setSettingOpen(false);
                  }}
                >
                  <ExamineeCard />
                  <ExamineeCard />
                  <ExamineeCard />
                  <ExamineeCard />
                  <ExamineeCard />
                  <ExamineeCard />
                </div>
                {/* ExamineeCard 끝 */}
              </div>
              {/* examineeData 끝 */}
            </div>
            <div className="btn-wrapper flex items-center justify-center h-full">
              <button
                type="button"
                className="bg-lime-400 text-cyan-900 w-2/3"
                onClick={() => {
                  setTestStarted(true);
                  setNoticeVisible(false);
                  setHistoryOpen(false);
                  setSettingOpen(false);
                }}
              >
                검사하기
              </button>
            </div>
          </div>
          {/* snb 끝 */}
        </div>
        <div className="w-9/12">
          <main className="h-screen">
            <div
              id="mainContent"
              className="flex justify-center items-center h-full"
            >
              {isNoticeVisible && <Notice />}
              {isHistoryOpen && <History />}
              {isTestStarted ? <TestForm /> : null}
              {isSettingOpen && <Setting />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function Notice() {
  return (
    <h1 id="testText" className="text-slate-950 -translate-y-full">
      본 검사는 XXX 청각 테스트 검사입니다. <br />
      검사 전에 윈도우 알림 등 다른 사운드를 발생시키는 서비스를 종료해 주세요.{' '}
      <br />
      검사 전에 기기 사운드 볼륨을 적당한 수준으로 조정해 주세요.
    </h1>
  );
}

function History() {
  return (
    <h1 id="testText" className="text-slate-950">
      검사 기록입니다.
    </h1>
  );
}

function ExamineeCard() {
  return (
    <ul className="examinee-card flex items-center justify-center justify-between text-cyan-900 p-5 border-b border-slate-300">
      <li className="examinee-name">
        <p>TEST</p>
      </li>
      <li className="examination-date">
        <p>2023-01-01 01:01</p>
      </li>
      <li className="btn-delete">
        <button
          type="button"
          className="bg-transparent"
          onClick={() => {
            alert('버튼 클릭 시 출력되는 메시지 박스입니다.');
          }}
        >
          삭제
        </button>
      </li>
    </ul>
  );
}

function Setting() {
  const [value, setValue] = useState(0);

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
  };

  return (
    <div className="flex flex-col justify-start h-full p-5 w-1/2">
      <h1 className="text-slate-950 text-center mb-10">설정</h1>

      <div className="text-center text-slate-950 mb-10">
        <p>
          각 문제 사운드간 간격을 지정해 주세요. <br />
          0초에서 5초까지 지정 가능합니다.
        </p>
      </div>

      <div className="input-wrapper text-slate-950 mb-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex w-full">
            <span className="w-12">0초</span>
            <input
              type="range"
              min={0}
              max={5}
              step={1}
              value={value}
              onChange={handleSliderChange}
            />
            <span className="ml-6 w-12">5초</span>
          </div>
          <span className="text-slate-950">{value}초</span>
        </div>
      </div>

      <div className="flex justify-center text-slate-950 mt-5">
        <button
          type="button"
          className="w-36 h-14 bg-green-200 rounded-full mr-10"
        >
          종료
        </button>
        <button type="button" className="w-36 h-14 bg-green-200 rounded-full">
          설정완료
        </button>
      </div>
    </div>
  );
}
