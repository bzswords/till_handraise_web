function mountSubscribeButton() {
  var offset = 0;
  var call;
  function scroll() {
    if ((offset - window.scrollY) > 0) {
      window.scrollTo(0, window.scrollY + 40)
    }
    else {
      clearInterval(call)
    }
  };

  function onClick() {
    event.preventDefault();
    call = setInterval(scroll, 1);
    target = event.srcElement.dataset.scroll;
    offset = document.getElementById(target).offsetTop;
  }

  document.querySelector('#subscribe-btn').addEventListener("click", onClick);
}

function mountNewsletterForm() {
  var onSubmit = function(e) {
    e.preventDefault();
    e.stopPropagation();

    var emailInput = document.getElementById('email-input');
    var value = emailInput.value;

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isEmail = re.test(String(value).toLowerCase())
  
    if ((value.length === 0) || (!isEmail)) {
      var component = document.getElementsByClassName('TlTextInput')[0];
      component.classList.add('TlTextInput__error');
    } else {
      this.submit();
    }
  }

  var onChange = function(e) {
    var component = document.getElementsByClassName('TlTextInput')[0];
    component.classList.remove('TlTextInput__error');
  }

  var elem = document.getElementById('newsletter-form');
  elem.addEventListener("submit", onSubmit, false);

  var textElem = document.getElementById('email-input');
  textElem.addEventListener('input', onChange);
}

document.addEventListener("DOMContentLoaded", function() {
  mountSubscribeButton();
  mountNewsletterForm();
});
