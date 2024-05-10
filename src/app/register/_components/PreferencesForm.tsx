type UserData = {
  wantsNotifications: string,
  shareInformation: string,
  notificationPreferences: string,
}

type PreferencesFormProps =  UserData & {
  updateFields: (fields : Partial<UserData>) => void,
};

const PreferencesForm = ({wantsNotifications, shareInformation, notificationPreferences, updateFields} : PreferencesFormProps) => {

const handleCheck = (type: string) => {
  if(type === "wantsNotifications") {
    if(!wantsNotifications || wantsNotifications === "No" ) {
      updateFields({wantsNotifications: "Yes"})
    } else {
      updateFields({wantsNotifications: "No"})
    }
  }

  if(type === "shareInformation") {
    if(!shareInformation || shareInformation === "No") {
      updateFields({shareInformation: "Yes"})
    } else {
      updateFields({shareInformation: "No"})
    }
  }
}

return <>
 <div className="checkbox-control">
  <input type="checkbox" id="wantsNotifications" name="wantsNotifications"  checked={wantsNotifications === "Yes" ? true : false }onChange={() => handleCheck("wantsNotifications")}/>
  <label htmlFor="wantsNotifications">Send notifications</label>
</div>
 <div className="checkbox-control">
  <input type="checkbox" id="shareInformation" name="shareInformation" 
   checked={shareInformation === "Yes" ? true : false }
  onChange={() => handleCheck("shareInformation")}/>
  <label htmlFor="shareInformation">Share information with related marketer</label>
</div>
<div className="form-control">
  <label htmlFor="notificationPreferences">Notification Preferences</label>
  <div className="dropdown-container">
      <select id="notificationPreferences" value={notificationPreferences !== "" ? notificationPreferences : "none"} name="notificationPreferences" onChange={e => updateFields({notificationPreferences: e.target.value})}>
          <option value="none" disabled hidden></option> 
          <option value="Email">Email</option>
          <option value="Text">Text</option>
        </select>
  </div>
</div>
</>
};

export default PreferencesForm;