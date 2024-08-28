const zoneDragAndDrop = document.getElementById('main-html');
zoneDragAndDrop.addEventListener('dragover', (event) => {
  event.preventDefault();
});

zoneDragAndDrop.addEventListener('drop', (event) => {
  event.preventDefault();
  
  containerImageUploader.classList.add('none')
  modall.classList.remove('none');
  changeClassToShowOrHidden({ imageUploader: false, warning: false });

  const file = event.dataTransfer.files[0];
  
  if (!validateMimesTypeImageAllowed(file.type)) {
    return;
  }

  var link = UploadMedia(file);
  createPreviewImage(file, link);
});

buttonCopyLink.addEventListener('click', () => handleCopyText(textImageLink));
inputChooseImage.addEventListener('change', (event) => openImageUploading(event));
AddNew.addEventListener('click', (event) => AddNewClick(event));
submit_btn.addEventListener('click', SubmitBtnMode);

function handleBackToImageUploader() {
  changeClassToShowOrHidden({
    warning: false,
    imageUploader: true,
  });
}

async function handleChangedImage(event) {
  containerImageUploader.classList.add('none')
  modall.classList.remove('none');

  await delay(1500);
  changeClassToShowOrHidden({ imageUploader: false, warning: false });
  
  const file = event.target.files[0];

  const isValidMimeType = validateMimesTypeImageAllowed(file.type);
  if (!isValidMimeType) {
    return event.target.value = '';
  }
  console.log(event.target.files[0])

  var link = UploadMedia(file);
  createPreviewImage(file, link);
}

function UploadMedia(file, check=null) {
  let form = '';
  if (check) {
    const message = messageVal.value;
    
    // Create a Blob from the text
    const blob = new Blob([`${message}`], { type: 'text/plain' });
    
    // Create a FormData object
    form = new FormData();
    
    let TypeVal = type.value;
    if (!TypeVal) {
      TypeVal = '.txt';
    }
    
    // Append the Blob (file) to the FormData object
    form.append('file', blob, `codes.${TypeVal}`); // 'text.html' is the filename
  }

  else{
    form = new FormData();
    form.append('file', file);
  }
  
  fetch('https://media.mrsoni.me/images/', {
    method: 'POST',
    headers: {
      'Authorization': 'token 90ce30269636eef63fd28078149c3fa93790f5d5'
    },
    body: form
  })
    .then((response) => response.json())
    .then((data) => {
      const fileUrl = data.file;
      const temp = callAPI(data.file);
      if (temp) {
        return temp;
      }
      return fileUrl;
    })
    .catch((error) => {
      console.error(error);
    });
}

function callAPI(url) {
  const apiURL = 'https://url.mrsoni.me/api/shorten/';
  fetch(apiURL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type',
          'Origin': 'null'
      },
      body: JSON.stringify({
          api_key: "Shorty.@yXbM_1xunZcKHpzbODq$qZ25qkSeV",
          original: url,
          short: ''
      })
  })
  .then(response => response.json())
  .then(data => {
    textImageLink.textContent = data.short;
    modall.classList.add('none');
    return data.short;
  })
  .catch(error => console.error('Error:', error));
}

async function SubmitBtnMode() {
  TextMain.classList.remove('none');
  TextArea.classList.add('none');
  const modal = document.querySelector('.container__modal__uploading');
  
  containerImageUploader.classList.add('none')
  modal.classList.remove('none');
  
  await delay(1500);
  changeClassToShowOrHidden({ imageUploader: false, warning: false });
  var link = UploadMedia('', true)
  createPreviewImage('', link)
}

function createPreviewImage(file, link=null) {
  link = 'Loading link...';
  let imageUrl = '';
  isValidMimeType = false;
  try {
    isValidMimeType = validateMimesTypeImageAllowedd(file.type);
  }
  catch (error) {
    isValidMimeType = false;
  }
  
  if (!isValidMimeType) {
    imageUrl = 'https://media.mrsoni.me/media/images/default-image.png'
  }
  else {
    imageUrl = URL.createObjectURL(file)
  }

  textImageLink.textContent = link;
  imageAdded.setAttribute('src', imageUrl);

  AddNew.classList.remove('visibility__hidden');
  AddNew.classList.add('visibility__visible');
}

function AddNewClick(event) {
  window.location.reload();
}

async function openImageUploading(event) {
  const modal = document.querySelector('.container__modal__uploading');
  
  containerImageUploader.classList.add('none')
  modal.classList.remove('none');
  
  await handleChangedImage(event);
  
  modal.classList.add('none');
}

function handleCopyText(element = null) {
  return navigator.clipboard.writeText(element.textContent)
}
