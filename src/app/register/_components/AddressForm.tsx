import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBuilding, faCity, faEnvelopesBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

type UserData = {
  address1: string,
  address2: string,
  country: string,
  city: string,
  zipCode: string,
  company: string,
  phoneNumber: string,
}

type AddressFormProps =  UserData & {
  updateFields: (fields : Partial<UserData>) => void,
};

const AddressForm = ({address1, address2, country, city, zipCode, company, phoneNumber, updateFields} : AddressFormProps) => {
  return <div>
     <div className="flex">
       <div className="form-control">
         <label htmlFor="address1">Address *</label>
         <div className="input-container">
          <input  type="text" id="address1" name="address1" placeholder="Address 1" required value={address1} onChange={e => updateFields({address1: e.target.value})}/>
           <FontAwesomeIcon icon={faAddressCard} className="input__icon"/>
          </div>
       </div>
       <div className="form-control">
         <label htmlFor="address2">Apartment, Suite, etc.</label>
         <div className="input-container">
          <input  type="text" id="address2" name="address2" placeholder="Address 2" value={address2} onChange={e => updateFields({address2: e.target.value})}/>
           <FontAwesomeIcon icon={faBuilding} className="input__icon"/>
          </div>
       </div>
     </div>
     <div className="flex">
       <div className="form-control">
           <label htmlFor="country">Country *</label>
           <div className="dropdown-container">
            <select id="country" name="country" required value={country} onChange={e => updateFields({country: e.target.value})}>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Italy">Italy</option>
                <option value="Austrailia">Austrailia</option>
              </select>
            </div>
        </div>
        <div className="form-control">
           <label htmlFor="city">City *</label>
           <div className="input-container">
            <input  type="text" id="city" name="city" placeholder="City" required value={city} onChange={e => updateFields({city: e.target.value})}/>
             <FontAwesomeIcon icon={faCity} className="input__icon"/>
            </div>
        </div>
        <div className="form-control">
           <label htmlFor="zipCode">Zipcode*</label>
           <div className="input-container">
            <input type="text" pattern="[0-9]{5}" id="zipCode" name="zipCode" placeholder="Zipcode" required value={zipCode} onChange={e => updateFields({zipCode: e.target.value})}/>
             <FontAwesomeIcon icon={faEnvelopesBulk} className="input__icon"/>
            </div>
        </div>
     </div>
     <div className="form-control">
           <label htmlFor="company">Company</label>
           <div className="input-container">
            <input type="text" pattern="[0-9]{5}" id="company" name="company" placeholder="Company" value={company} onChange={e => updateFields({company: e.target.value})}/>
             <FontAwesomeIcon icon={faEnvelopesBulk} className="input__icon"/>
            </div>
        </div>
        <div className="form-control">
           <label htmlFor="phone">Phone Number</label>
           <div className="input-container">
            <input type="text" pattern="[0-9]{5}" id="phone" name="phone" placeholder="Phone Number" value={phoneNumber} onChange={e => updateFields({phoneNumber: e.target.value})}/>
             <FontAwesomeIcon icon={faPhone} className="input__icon"/>
            </div>
        </div>
  </div>
};

export default AddressForm;
