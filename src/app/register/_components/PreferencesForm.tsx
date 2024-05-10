type UserData = {
  wantsNotifications: boolean,
  shareInformation: boolean,
  notificationPreferences: string,
}

type PreferencesFormProps =  UserData & {
  updateFields: (fields : Partial<UserData>) => void,
};

const PreferencesForm = ({wantsNotifications, shareInformation, notificationPreferences, updateFields} : PreferencesFormProps) => {

return <>
 <div className="checkbox-control">
  <input type="checkbox" id="wantsNotifications" name="wantsNotifications" checked={wantsNotifications} onChange={() => updateFields({wantsNotifications: !wantsNotifications})}/>
  <label htmlFor="wantsNotifications">Send notifications</label>
</div>
 <div className="checkbox-control">
  <input type="checkbox" id="shareInformation" name="shareInformation" checked={shareInformation}onChange={() => updateFields({shareInformation: !shareInformation})}/>
  <label htmlFor="shareInformation">Share information with related marketer</label>
</div>
<div className="form-control">
  <label htmlFor="notificationPreferences">Notification Preferences</label>
  <div className="dropdown-container">
      <select id="notificationPreferences" name="notificationPreferences" value={notificationPreferences} onChange={e => updateFields({notificationPreferences: e.target.value})}>
          <option value="Email">Email</option>
          <option value="Text">Text</option>
        </select>
  </div>
</div>
</>
};

export default PreferencesForm;