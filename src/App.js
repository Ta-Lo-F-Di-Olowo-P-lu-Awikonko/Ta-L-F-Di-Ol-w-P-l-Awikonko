import { useEffect, useState, useMemo } from 'react';
import './App.css';

import Start from './components/Start/Start';
import Timer from './components/Timer/Timer';
import Trivia from './components/Trivia/Trivia';
import Winner from './components/Winner/Winner';
import {data} from './data/data';
import { BsStopCircle } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import 'reactjs-popup/dist/index.css';


import Popups from './components/Popup/Popup';

function App() {
   const [isOpen, setIsOpen] = useState(false);

   const togglePopup = () => {
    setIsOpen(!isOpen);
       setTimerRunning(false);
    setEarned("₦ 0");
    setTimerRunning(true);
     setQuestionNumber(1);
  }

  const moneyPyramid = useMemo(() => 
    [
        {id:1, amount:" Ẹgbẹ̀rún Márùn-ún"},
        {id:2, amount:" Ẹgbẹ̀rún Méje"},
        {id:3, amount:" Ẹgbẹ̀rún Mẹ́wàá"},
        {id:4, amount:" Ẹgbẹ̀rún Lọ́nà Okòó"},
        {id:5, amount:" Ẹgbẹ̀rún Lọ́nà Ọgbọ́n"},
        {id:6, amount:" Ẹgbẹ̀rún Lọ́nà Àádọ́ta"},
        {id:7, amount:" Ẹgbẹ̀rún Lọ́nà Ọgọ́ta"},
        {id:8, amount:" Ẹgbẹ̀rún Lọ́nà Ọgọ́rin"},
        {id:9, amount:" Ẹgbẹ̀rún Lọ́nà Ọgọ́rùn-ún"},
        {id:10, amount:" Ẹgbẹ̀rún Lọ́nà Ọgọ́fà"},
        {id:11, amount:" Ẹgbẹ̀rún Lọ́nà Àádọ́jọ̀"},
        {id:12, amount:" Ẹgbẹ̀rún Lọ́nà Igba"},
        // {id:13, amount:" ₦2,000,000"},
        // {id:14, amount:" ₦5,000,000"},
        // {id:15, amount:" ₦10,000,000"},
    ].reverse(), //an array method to reverse the order just like flex-direction: column reverse;
  []);

  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₦ 0");
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    questionNumber > 1 && 
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  const playAgain = () => {
    setQuestionNumber(1);
    setStop(false);
    setEarned("₦ 0");
    setTimerRunning(true);
  };

  const quitGame = () => {
    setTimerRunning(false);
    setStop(true);
  };

  const exitGame = () => {
    setTimerRunning(false);
    setUsername(null);
    setQuestionNumber(1);
    setEarned("₦ 0");
  };



  return (

    <div className="app">

        {username ? (

          <>

            {questionNumber > 15 ? <Winner username={username} earned={earned} restartGame={playAgain} /> 
              : (
                
                <>
                  <div className="main">

                    {stop ? 
                      <div className='endPage'>
                        <h1 className='endText'> O jogun: {earned} </h1>
                        <button 
                          className='endButton'
                          onClick={playAgain}
                        >
                            Play Lẹẹkansi
                        </button>
                      </div>
                      : (
                      <>
                        <div className="mainTop">
                          <div className="timer">
                            <Timer 
                                setStop={setStop} 
                                questionNumber={questionNumber} 
                                timerRunning={timerRunning}
                            />
                          </div>
                        </div>

                        <div className="mainBottom">
                            <Trivia 
                                data={data} 
                                setStop={setStop} 
                                questionNumber={questionNumber}
                                setQuestionNumber={setQuestionNumber}
                                setTimerRunning={setTimerRunning}
                            />
                        </div>       
                      </>
                    )}

                  </div>

                  <div className="pyramid">

                    <div className='userList'>
                       <div className="gameButtons">
                            
                            <button 
                              className="TheroryButton"
                                onClick={togglePopup}
                            >
                   Therory 
                            </button>                    
                        </div>
                         <div>
  
    {isOpen && <Popups
      content={<>
        <h3>Theory</h3>
        <p className='questions'>
          1) Tani bàbà Odùduwà? <br></br>
2) Ogun abele Orile-ede Naijiria, láàárín ọdún wo, sì ọdún wo?<br></br>
3) Ọgbọ́n la fi í pẹmọ́, àyà gbangba la fi í pejò, pẹ̀lẹ́pùtù la fi í roko ìdí ọpẹ jẹ òwe e?<br></br>
4) kín ni orúkọ oyè ọba ìlú Warri?<br></br>
5) Eewọ ni, ilé wo ni kò gbọdọ jẹ Àdàbà Òrófó?<br></br>
6) Eelo ni 176 ni onka Yorùbá?<br></br>
7) Ẹranko wo là ń pè ní Ewújù?<br></br>
8) Kín ni orúkọ aare orile-ede Amerika?<br></br>
9) Ọmọ ilé ìgbìmò asofin mélòó ni nbẹ ni Naijiria?<br></br>
10) Olú ìlú ipinle Anambra ni?<br></br>
11) Oṣù wo ni Yoruba npe ni Sẹẹrẹ?<br></br>
12) Ọjọ́ mélòó ló wà nínú ọdún kan?</p>
  
      </>}
      handleClose={togglePopup}
    />}
  </div>
                       <div className="gameButtons">
                            <button 
                              className='quitGame' 
                              onClick={quitGame}
                            >
                                <BsStopCircle style={{color: 'red', fontSize: '30px'}} />
                            </button>
                            <button 
                              className="exitGame"
                              onClick={exitGame}
                            >
                          <RxExit style={{color: 'red', fontSize: '30px'}} />
                            </button>                    
                        </div>

                        <div className="userDetails">
                            <p className="userName">orukọ : {username}</p>
                            <p className='userMoney'>Lapapọ awọn dukia : <br/> {earned}</p>  
                            <br></br>
                               <p className="userName">ÀTẸ̀GÙN OWÓ </p>                  
                        </div>

                    </div>
                    
                    <ul className="moneyList">
                         
                        {moneyPyramid.map((money, index) => {
                          return (
                            <li 
                              className={questionNumber === money.id ? 'moneyListItem active' : 'moneyListItem'} 
                              key={index}
                            >
                                <span className='moneyListItemNumber'>{money.id}</span>
                                <span className="moneyListItemAmount">{money.amount}</span>
                            </li>
                          )
                        })}

                    </ul>

                  </div>   
                  </>
                )
            }       
          </>
         ) : (
              <Start setUsername={setUsername}/>
             )      
        } 

    </div>

  );

};

export default App;
