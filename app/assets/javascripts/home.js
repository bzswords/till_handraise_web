document.addEventListener("DOMContentLoaded", function() {
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
});
