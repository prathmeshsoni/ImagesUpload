function validateMimesTypeImageAllowed(mime) {
  return true;
  const mimesAllowed = ['image/jpeg', 'image/png'];

  if (!mimesAllowed.includes(mime)) {
    changeClassToShowOrHidden({ warning: true });
    buttonButtonBack.addEventListener('click', handleBackToImageUploader)
    return false;
  }
}

function validateMimesTypeImageAllowedd(mime) {
  const mimesAllowed = ['image/jpeg', 'image/png'];

  if (!mimesAllowed.includes(mime)) {
    return false;
  }

  return true;
}
