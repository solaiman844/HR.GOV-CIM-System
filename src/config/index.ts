const config = {
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:4000',
  featureNewUI: process.env.REACT_APP_FEATURE_FLAG_NEW_UI === 'true',
};

export default config;
