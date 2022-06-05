const fnameValidate = () => {
  let fname = document.getElementById('name').value;

  //check name
  if (fname == '') {
    displayMsg('messageForName', 'Please enter your name');
    return false;
  } else if (fname.length < 3) {
    displayMsg('messageForName', 'Name must be at least 3 characters long');
    return false;
  } else {
    displayMsg('messageForName', 'valid forst name');
    return true;
  }
};
