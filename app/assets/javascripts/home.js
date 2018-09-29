document.addEventListener("DOMContentLoaded", function() {
  var onSubmit = function(e) {
    e.preventDefault();
    e.stopPropagation();

    var emailInput = document.getElementById('email-input');
    var value = emailInput.value;

    if (value.length === 0) {
      var component = document.getElementsByClassName('TlTextInput')[0];
      component.classList.add('TlTextInput__error');
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
