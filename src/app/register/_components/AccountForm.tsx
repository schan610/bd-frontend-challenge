import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserTie, faUserNinja, faEnvelope, faKey, faFingerprint } from "@fortawesome/free-solid-svg-icons";

const AccountForm = () => {
  return <div>
     <div className="flex">
       <div className="form-control">
         <label htmlFor="firstName">First Name</label>
         <div className="input-container">
          <input  type="text" id="firstName" name="firstName" placeholder="First Name"/>
           <FontAwesomeIcon icon={faUser} className="input__icon"/>
          </div>
       </div>
       <div className="form-control">
         <label htmlFor="lastName">Last Name</label>
         <div className="input-container">
          <input  type="text" id="lastName" name="lastName" placeholder="Last Name"/>
           <FontAwesomeIcon icon={faUserTie} className="input__icon"/>
          </div>
       </div>
     </div>
     <div className="form-control">
         <label htmlFor="username">Username *</label>
         <div className="input-container">
          <input  type="text" id="username" name="username" placeholder="Username" required/>
           <FontAwesomeIcon icon={faUserNinja} className="input__icon"/>
          </div>
      </div>
     <div className="form-control">
         <label htmlFor="email">Email Address *</label>
         <div className="input-container">
          <input  type="text" id="email" name="email" placeholder="Email" required/>
           <FontAwesomeIcon icon={faEnvelope} className="input__icon"/>
          </div>
      </div>
     <div className="flex">
       <div className="form-control">
           <label htmlFor="password">Password *</label>
           <div className="input-container">
            <input  type="text" id="password" name="password" placeholder="Password" required/>
             <FontAwesomeIcon icon={faKey} className="input__icon"/>
            </div>
        </div>
        <div className="form-control">
           <label htmlFor="password">Confirm Password *</label>
           <div className="input-container">
            <input  type="text" id="password" name="password" placeholder="Password" required/>
             <FontAwesomeIcon icon={faFingerprint} className="input__icon"/>
            </div>
        </div>
     </div>
  </div>
};

export default AccountForm;
