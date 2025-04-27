import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Declare gtag on window interface
declare global {
  interface Window {
    gtag?: (event: string, action: string, params: {
      page_path: string;
    }) => void;
  }
}

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag exists before calling it
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }

    // Your custom analytics logic here
    console.log('Page view:', location.pathname);
    
    // Example: Send to your own analytics endpoint
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   body: JSON.stringify({ path: location.pathname })
    // });

  }, [location]);

  return null;
};

export default RouteTracker;