import logo from './logo.svg';
import './App.css';

import {initializeApp} from 'firebase/app';
import { setConsent, setAnalyticsCollectionEnabled, getAnalytics} from 'firebase/analytics';
const app = initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
});

const analytics = getAnalytics(app);

setAnalyticsCollectionEnabled(analytics, true);

// Add some delay to wait for gtag loading
const setConsentParams = async (e) =>{
  console.log('Called')
  
  setConsent({
    ad_personalization: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    personalization_storage: 'denied',
    security_storage: 'granted',
  })
}

function App() {
  return (
    <div className="App">
      <button onClick={setConsentParams}>Change Consent</button>
    </div>
  );
}

export default App;
