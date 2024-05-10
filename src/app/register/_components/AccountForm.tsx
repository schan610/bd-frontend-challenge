import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserTie, faUserNinja, faEnvelope, faKey, faFingerprint } from "@fortawesome/free-solid-svg-icons";

type UserData = {
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  password: string,
  confirmPassword: string,
}

type AccountFormProps =  UserData & {
  updateFields: (fields : Partial<UserData>) => void,
};

const AccountForm = ({firstName, lastName, email, username, password, confirmPassword, updateFields} : AccountFormProps) => {
  return <div>
     <div className="flex">
       <div className="form-control">
         <label htmlFor="firstName">First Name</label>
         <div className="input-container">
          <input  type="text" id="firstName" name="firstName" placeholder="First Name" value={firstName} onChange={e => updateFields({firstName: e.target.value})}/>
           <FontAwesomeIcon icon={faUser} className="input__icon"/>
          </div>
       </div>
       <div className="form-control">
         <label htmlFor="lastName">Last Name</label>
         <div className="input-container">
          <input  type="text" id="lastName" name="lastName" placeholder="Last Name" value={lastName} onChange={e => updateFields({lastName: e.target.value})}/>
           <FontAwesomeIcon icon={faUserTie} className="input__icon"/>
          </div>
       </div>
     </div>
     <div className="form-control">
         <label htmlFor="username">Username *</label>
         <div className="input-container">
          <input  type="text" id="username" name="username" placeholder="Username" required value={username}  onChange={e => updateFields({username: e.target.value})}/>
           <FontAwesomeIcon icon={faUserNinja} className="input__icon"/>
          </div>
      </div>
     <div className="form-control">
         <label htmlFor="email">Email Address *</label>
         <div className="input-container">
          <input  type="text" id="email" name="email" placeholder="Email" required value={email}  onChange={e => updateFields({email: e.target.value})}/>
           <FontAwesomeIcon icon={faEnvelope} className="input__icon"/>
          </div>
      </div>
     <div className="flex">
       <div className="form-control">
           <label htmlFor="password">Password *</label>
           <div className="input-container">
            <input  type="password" id="password" name="password" placeholder="Password" required value={password}  onChange={e => updateFields({password: e.target.value})}/>
             <FontAwesomeIcon icon={faKey} className="input__icon"/>
            </div>
        </div>
        <div className="form-control">
           <label htmlFor="password">Confirm Password *</label>
           <div className="input-container">
            <input  type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Passwword" required value={confirmPassword} onChange={e => updateFields({confirmPassword: e.target.value})}/>
             <FontAwesomeIcon icon={faFingerprint} className="input__icon"/>
            </div>
        </div>
     </div>
  </div>
};

export default AccountForm;
