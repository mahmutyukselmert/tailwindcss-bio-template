document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Formun varsayılan gönderimini engelle
  
    const formData = {
      name: document.querySelector('input[name="name"]').value,
      email: document.querySelector('input[name="email"]').value,
      subject: document.querySelector('input[name="subject"]').value,
      message: document.querySelector('textarea[name="message"]').value,
    };

    document.getElementById('responseMessage').style.display = 'block';
    
    if (formData.name === '' || formData.email === '' || formData.subject === '' || formData.message === '') {
      document.getElementById('responseMessage').classList.remove('bg-green-600');
      document.getElementById('responseMessage').innerText = 'Lütfen tüm alanları doldurunuz.';
      return;
    }

    if(formData.email.indexOf('@') === -1 || formData.email.indexOf('.') === -1) {
      document.getElementById('responseMessage').classList.remove('bg-green-600');
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
  
      const responseData = await response.text();

      if (response.ok) {
        document.getElementById('responseMessage').classList.remove('bg-red-600');
        document.getElementById('responseMessage').innerText = 'Mesajınız başarılı bir şekilde gönderildi. Size mümkün olan en kısa sürede geri dönüş yapılacaktır.';
      } else {
        document.getElementById('responseMessage').classList.remove('bg-green-600');
        document.getElementById('responseMessage').innerText = 'Mesajınız gönderilemedi! Beklenmedik bir hata oluştu.';
      }
    } catch (error) {
      document.getElementById('responseMessage').innerText = `Mesaj Gönderilemedi! Beklenmedik bir hata oluştu.`;
    }

  });