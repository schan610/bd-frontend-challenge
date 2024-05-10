const PreferencesForm = () => {
return <>
 <div className="checkbox-control">
  <input type="checkbox" id="wantsNotifications" name="wantsNotifications"/>
  <label htmlFor="wantsNotifications">Send notifications</label>
</div>
 <div className="checkbox-control">
  <input type="checkbox" id="shareInformation" name="shareInformation"/>
  <label htmlFor="shareInformation">Share information with related marketer</label>
</div>
<div className="form-control">
  <label htmlFor="notificationPreferences">Notification Preferences</label>
  <div className="dropdown-container">
      <select id="notificationPreferences" name="notificationPreferences">
          <option value="Email">Email</option>
          <option value="Text">Text</option>
        </select>
  </div>
</div>
</>
};

export default PreferencesForm;