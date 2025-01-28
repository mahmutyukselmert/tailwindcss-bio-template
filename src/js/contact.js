document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value,
    subject: document.querySelector('input[name="subject"]').value,
    message: document.querySelector('textarea[name="message"]').value,
  };

  document.getElementById('responseMessage').style.display = 'block';
  const bgErrorColor = '#dc2226';
  const bgSuccessColor = '#16a34a';
  
  if (formData.name === '' || formData.email === '' || formData.subject === '' || formData.message === '') {
    document.getElementById('responseMessage').style.background = bgErrorColor;
    document.getElementById('responseMessage').innerText = 'Lütfen tüm alanları doldurunuz.';
    return;
  }

  if(formData.email.indexOf('@') === -1 || formData.email.indexOf('.') === -1) {
    document.getElementById('responseMessage').style.background = bgErrorColor;
    document.getElementById('responseMessage').innerText = 'Lütfen geçerli bir e-posta adresi giriniz.';
  }

  const url = 'https://sendtelegrammessage-7ojxtvwkca-uc.a.run.app';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    if (response.ok) {
      document.getElementById('responseMessage').style.background = bgSuccessColor;
      document.getElementById('responseMessage').innerText = 'Mesajınız başarılı bir şekilde gönderildi. Size mümkün olan en kısa sürede geri dönüş yapılacaktır.';
    } else {
      document.getElementById('responseMessage').style.background = bgErrorColor;
      if ( responseData.error ) {
        document.getElementById('responseMessage').innerText = responseData.error;
      }
    }
  } catch (error) {
    document.getElementById('responseMessage').style.background = bgErrorColor;
    document.getElementById('responseMessage').innerText = `Mesaj Gönderilemedi! Beklenmedik bir hata oluştu.`;
  }
  hideResponseMessageAfterDelay(responseMessage);

});

function hideResponseMessageAfterDelay(element) {
  setTimeout(() => {
    element.style.display = 'none';
  }, 2000);
}