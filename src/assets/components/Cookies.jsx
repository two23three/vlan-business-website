import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Create a context for global cookie management
const CookieContext = createContext();

// Create a provider component
export const CookieProvider = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    // Check if the user has already given consent
    const consentCookie = Cookies.get('cookieConsent');
    if (consentCookie === 'true') {
      setCookieConsent(true);
    }
  }, []);

  // Function to set a cookie
  const setCookie = (name, value, options = {}) => {
    if (cookieConsent) {
      Cookies.set(name, value, options);
    }
  };

  // Function to get a cookie
  const getCookie = (name) => {
    return Cookies.get(name);
  };

  // Function to remove a cookie
  const removeCookie = (name, options = {}) => {
    Cookies.remove(name, options);
  };

  // Function to handle user consent
  const handleConsent = (consent) => {
    setCookieConsent(consent);
    Cookies.set('cookieConsent', consent, { expires: 365 }); // Store consent for 1 year
  };

  const value = {
    cookieConsent,
    setCookie,
    getCookie,
    removeCookie,
    handleConsent,
  };

  return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>;
};

// Custom hook to use the cookie context
export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};

// Cookie consent banner component
export const CookieConsentBanner = () => {
  const { cookieConsent, handleConsent } = useCookies();

  if (cookieConsent) {
    return null; // Don't show the banner if consent has been given
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <p>This website uses cookies to enhance your experience. By continuing to use this site, you agree to our use of cookies.</p>
      <button
        onClick={() => handleConsent(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Accept
      </button>
    </div>
  );
};