import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import privacy from './pdfAssets/Xyma_privacypolicy.pdf';
import RoutingPage from './components/RoutingPage';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RoutingPage />
      </BrowserRouter>

      <CookieConsent
        style={{
          background: "#f5f5f5",
          color: "black",
        }}
        buttonStyle={{
          backgroundColor: "#13d647",
          color: "white",
          borderRadius: "0.375rem",
          padding: "0.25rem 0.5rem",
          textAlign: "center",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        <div className="font-satoshi font-medium gap-1 text-[#616366] text-center text-sm md:text-base 2xl:text-xl">
          We use cookies to enhance your browsing experience. By continuing, you
          agree to our <span className="underline cursor-pointer font-semibold" onClick={() => window.open(privacy,'_blank')}>privacy policy</span>{" "}
          regarding cookie usage.
        </div>
      </CookieConsent>
    </>
  );
}

export default App
