"use client"
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const steps = [
  {id: "1", title: "Account"},
  {id: "2", title: "Address"},
  {id: "3", title: "Preferences"},
]

const RegisterPage = () => {
  const [curStep, setCurStep] = useState(0)
  const handleNextBtn = () => {
    if(curStep === steps.length-1) return;
    setCurStep(prevState => prevState+1);
  };
  const handleBackBtn = () => {
    if(curStep === 0) return;

    setCurStep(prevState => prevState-1);
  };
  return <div className="w-screen h-screen flex flex-col justify-center items-center max-w-2xl mx-auto">
    <section className="section-container">
      <div className="step-header">
        <h1>{steps[curStep].title}</h1>
      </div>
      <div className="content-container">
        <div className="form-indicator">
          {steps.map((item, index) => {
              return <Fragment key={item.id}>
              <div key={item.id} className={`form-indicator__item ${curStep === index ? "form-indicator__item--active" : ""}`}><span>{item.id}</span></div>
              {index !== steps.length-1 && <div className="form-indicator__separator"></div> }
            </Fragment>
          } )}
        </div>
      </div>
      <div className="controls">
          <button className="controls__btn--secondary" onClick={handleBackBtn}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
          <button className="controls__btn--primary" onClick={handleNextBtn}>Next Step <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>

  </section>
  </div>
};

export default RegisterPage;