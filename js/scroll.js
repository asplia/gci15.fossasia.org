/*Add your Thank-You great down below
Remember to insert a comma after the second last great*/
(function() {
  var words = [
      'Спасибо за вклад!',
      'Bedankt voor het bijdragen!',
      'योगदान के लिए धन्यवाद!',
      'Благодаря за приноса Ви!',
      'දායකවූවාට ස්තුතියි!',
      '感謝您的貢獻！',
      '!شكرا لكم للمساهمة',
      'תודה על התרומה שלך',
      'Cảm ơn bạn đã đóng góp!',
      'Nous vous remercions de votre contribution!',
      'Dziękujemy za współpracę!',
      'યોગદાન માટે આભાર !',
      'Gracias por contribuir!',
      'Berkontribusi untuk Terima kasih!',
      '感谢您的贡献！',
      'ขอขอบคุณสำหรับการสนับสนุนของคุณ',
      'Obrigado por contribuir!',
      'Danke fürs Mitmachen!',
      'Thank you for contributing!'
    ],
    i = 0;
  setInterval(function() {
    $('#changingword').fadeOut(function() {
      $(this).html(words[i = (i + 1) % words.length]).fadeIn();
    });
  }, 3000);

})();