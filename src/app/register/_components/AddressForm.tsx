import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBuilding, faChevronDown, faCity, faEnvelopesBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

const AddressForm = () => {
  return <div>
     <div className="flex">
       <div className="form-control">
         <label htmlFor="address1">Address *</label>
         <div className="input-container">
          <input  type="text" id="address1" name="address1" placeholder="Address 1" required/>
           <FontAwesomeIcon icon={faAddressCard} className="input__icon"/>
          </div>
       </div>
       <div className="form-control">
         <label htmlFor="address2">Apartment, Suite, etc.</label>
         <div className="input-container">
          <input  type="text" id="address2" name="address2" placeholder="Address 2"/>
           <FontAwesomeIcon icon={faBuilding} className="input__icon"/>
          </div>
       </div>
     </div>
     <div className="flex">
       <div className="form-control">
           <label htmlFor="country">Country *</label>
           <div className="dropdown-container">
            <select id="country" name="country" required>
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
            <input  type="text" id="city" name="city" placeholder="City" required/>
             <FontAwesomeIcon icon={faCity} className="input__icon"/>
            </div>
        </div>
        <div className="form-control">
           <label htmlFor="zipcode">Zipcode*</label>
           <div className="input-container">
            <input type="text" pattern="[0-9]{5}" id="zipcode" name="zipcode" placeholder="Zipcode" required/>
             <FontAwesomeIcon icon={faEnvelopesBulk} className="input__icon"/>
            </div>
        </div>
     </div>
     <div className="form-control">
           <label htmlFor="company">Company</label>
           <div className="input-container">
            <input type="text" pattern="[0-9]{5}" id="company" name="company" placeholder="Company"/>
             <FontAwesomeIcon icon={faEnvelopesBulk} className="input__icon"/>
            </div>
        </div>
        <div className="form-control">
           <label htmlFor="phone">Phone Number</label>
           <div className="input-container">
            <input type="text" pattern="[0-9]{5}" id="phone" name="phone" placeholder="Phone Number"/>
             <FontAwesomeIcon icon={faPhone} className="input__icon"/>
            </div>
        </div>
  </div>
};

export default AddressForm;
