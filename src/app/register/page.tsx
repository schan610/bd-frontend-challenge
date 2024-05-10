"use client"
import { Fragment, useState } from "react";

const steps = [
  {id: "1", title: "Account"},
  {id: "2", title: "Address"},
  {id: "3", title: "Preferences"},
]

const RegisterPage = () => {
  const [curStep, setCurStep] = useState(0)

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

  </section>
  </div>
};

export default RegisterPage;