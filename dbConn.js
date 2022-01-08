var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://chenova.net/AboutUsPage.php", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));