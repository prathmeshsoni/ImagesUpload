function changeClassToShowOrHidden({
  warning = false,
  imageUploader = false
}) {
  if (warning) {
    containerBackUpload.classList.remove('hidden');
    containerWarningUpload.classList.remove('hidden');
    containerWarningUploadMessage.classList.remove('hidden');
    containerSuccessUpload.classList.add('hidden');
    imageAdded.classList.add('hidden');
    containerCopyLink.classList.add('hidden');
  } else {
    containerBackUpload.classList.add('hidden');
    containerWarningUpload.classList.add('hidden');
    containerWarningUploadMessage.classList.add('hidden');
    containerSuccessUpload.classList.remove('hidden');
    imageAdded.classList.remove('hidden');
    containerCopyLink.classList.remove('hidden');
  }
  
  if (!imageUploader) {
    containerImageUploader.classList.add('none');
    containerUploadedImage.classList.remove('none');    
  } else {
    containerUploadedImage.classList.add('none');
    containerImageUploader.classList.remove('none');
  }
  
  return;
}
