"use client"
import { FormEvent, Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import AccountForm from "./_components/AccountForm";
import AddressForm from "./_components/AddressForm";
import PreferencesForm from "./_components/PreferencesForm";
import { useRouter } from "next/navigation";

const steps = [
  {id: "1", title: "Account", requiredFields: ["username", "email", "password"]},
  {id: "2", title: "Address", requiredFields: ["address1", "country", "city", "zipcode", "phoneNumber"]},
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
  wantsNotifications: string,
  shareInformation: string,
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
  wantsNotifications: "",
  shareInformation: "",
  notificationPreferences: "",
}

const RegisterPage = () => {
  const [curStep, setCurStep] = useState(0);
  const [formInput, setFormInput] = useState<FormData>(DEFAULT_DATA);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const updateFields = (fields: Partial<FormData>) => {
    setFormInput(prev => {
      return {...prev, ...fields}
    })
  };

  const validateRequiredFields = () => {
    // Check if required fields have been button on next click
    if(steps[curStep].requiredFields) {
      const validate = steps[curStep].requiredFields?.every((item) => {
        if(formInput[item as keyof FormData] === "" || undefined) return false;
        else return true;
      });
      return validate
    } 
    return true;
  };

  const handleNextBtn = () => {

    if(curStep === steps.length-1) return;

    const validate = validateRequiredFields();
    if(validate) {
      setCurStep(prevState => prevState+1);
    }  else return
   };
  const handleBackBtn = () => {
    if(curStep === 0) return;
    setCurStep(prevState => prevState-1);
  };


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null)
    console.log(formInput.wantsNotifications);
    const formData = new FormData(event.currentTarget);
    for (const [key, value] of Object.entries(formInput)) {
      formData.set(key, value.toString());
    }

    const response = await fetch('/api/register', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.data.message);
      router.push('/')
    } else {
      setError("Please fill in correct input")
    }
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
        <form className="form-container" onSubmit={handleSubmit}>
          {curStep === 0 && <AccountForm {...formInput} updateFields={updateFields}/>}
            {curStep === 1 && <AddressForm {...formInput} updateFields={updateFields}/>}
            {curStep === 2 && <PreferencesForm {...formInput} updateFields={updateFields}/>}
        <div className="controls">
          {curStep !== 0 && <button type="button" className="controls__btn--secondary" onClick={handleBackBtn}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>}
            {curStep !== steps.length-1 && <button type="button" className="controls__btn--primary" onClick={handleNextBtn}>Next Step <FontAwesomeIcon icon={faArrowRight} /></button>}
            {curStep === 2 && <button type="submit" className="controls__btn--primary">Register <FontAwesomeIcon icon={faArrowRight} /></button>}
        </div>
        {error && <div className="text-red-700 text-center">{error}</div>}
      </form>
      </div>
  </section>
  </div>
};

export default RegisterPage;