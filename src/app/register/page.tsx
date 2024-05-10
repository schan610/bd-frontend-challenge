"use client"
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import AccountForm from "./_components/AccountForm";
import AddressForm from "./_components/AddressForm";
import PreferencesForm from "./_components/PreferencesForm";

const steps = [
  {id: "1", title: "Account", requiredFields: ["username", "email", "password"]},
  {id: "2", title: "Address", requiredFields: ["address", "country", "city", "zipcode"]},
  {id: "3", title: "Preferences"},
]

type FormData = {
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  password: string,
  confirmPassword: string,
  address1: string,
  address2: string,
  country: string,
  city: string,
  zipCode: string,
  company: string,
  phoneNumber: string,
  wantsNotifications: boolean,
  shareInformation: boolean,
  notificationPreferences: string,
}
const DEFAULT_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  address1: "",
  address2: "",
  country: "",
  city: "",
  zipCode: "",
  company: "",
  phoneNumber: "",
  wantsNotifications: false,
  shareInformation: false,
  notificationPreferences: "",
}

const RegisterPage = () => {
  const [curStep, setCurStep] = useState(0);
  const [data, setData] = useState(DEFAULT_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => {
      return {...prev, ...fields}
    })
  };

  const validateRequiredFields = () => {

    const validated = steps[curStep].requiredFields?.some((item) => 
       data[item] !== ""
  ) 
    console.log(validated);
    return validated;
  };
  const handleNextBtn = () => {
    if(curStep === steps.length-1) return;
    // check if required fields have been filled
    const validated = validateRequiredFields();
    // console.log(validated);
    // if(validated) {
    //   setCurStep(prevState => prevState+1);
    // }
    // else return;

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
        <form className="form-container">
          {curStep === 0 && <AccountForm {...data} updateFields={updateFields}/>}
            {curStep === 1 && <AddressForm {...data} updateFields={updateFields}/>}
            {curStep === 2 && <PreferencesForm {...data} updateFields={updateFields}/>}
        </form>
      </div>
      <div className="controls">
         {curStep !== 0 && <button className="controls__btn--secondary" onClick={handleBackBtn}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>}
          <button className="controls__btn--primary" onClick={handleNextBtn}>Next Step <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
  </section>
  </div>
};

export default RegisterPage;