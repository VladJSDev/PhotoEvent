const baseURL = 'http://api.eventphoto.me/api/';

const jsonFetch = async (functionname, options = {}, file = null) => {
  try {
    const url = baseURL + functionname;
    options['headers'] = headers(file)
    const response = await fetch(url, options);
    const jsonResponse = await response.json();
    if (jsonResponse.success === -2) {
      localStorage.removeItem('user_data');
      localStorage.removeItem('access_token');
      window.location.reload();
    }
    return jsonResponse;
  } catch (error) {
    console.log(error);
    return buildError(error);
  }
};

const buildError = (error = '') => ({ success: false, error });

const headers = (file) => {
  const returnValue = {
    Accept: 'application/json',
  };
  if (file === null) {
    returnValue['Content-Type'] = 'application/json';
  }

  if (localStorage.getItem('access_token') != null) {
    returnValue['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('access_token'));
  }

  returnValue['X-DreamFactory-API-Key'] = '9872c656103801c503a6abe2b7d9991eabd9e387a37b96d7284c772ce0b61f65';

  return returnValue;
};

export default jsonFetch;
