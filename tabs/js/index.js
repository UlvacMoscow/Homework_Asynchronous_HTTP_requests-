const requestSms = new XMLHttpRequest();
const requestMail = new XMLHttpRequest();
const preloader = document.getElementById('preloader');
const content = document.getElementById('content');
const mail = document.getElementsByTagName('a')[0];
const sms = document.getElementsByTagName('a')[1];

mail.addEventListener('click', clickOnMail);
sms.addEventListener('click', clickOnSms);
requestMail.addEventListener('load', onLoadMail);
requestMail.addEventListener('loadstart', onLoadStart);
requestMail.addEventListener('loadend', onLoadEnd);
requestSms.addEventListener('load', onLoadSms);
requestSms.addEventListener('loadstart', onLoadStart);
requestSms.addEventListener('loadend', onLoadEnd);


requestMail.open("GET", "email-tab.html");
requestMail.send();


function clickOnSms(event) {
  event.preventDefault();
  requestSms.open('GET', 'sms-tab.html')
  requestSms.send();
  this.classList.add('active');
  onLoadSms();
}

function clickOnMail(event)  {
  event.preventDefault();
  requestMail.open('GET', 'email-tab.html')
  requestMail.send();
  this.classList.add('active');
  onLoadMail();
}


//console.log(mail.href)

function onLoadSms()  {
  content.innerHTML = requestSms.responseText;
}

function onLoadMail()  {
  content.innerHTML = requestMail.responseText;
}

function onLoadStart()  {
  preloader.classList.remove('hidden');
}

function onLoadEnd()  {
  preloader.classList.add('hidden');
}
