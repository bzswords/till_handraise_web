var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var cache = {
  subscribeButton: null,
  emailInput: null,
  formInput: null,
};

function initCache() {
  cache.emailInput = document.getElementsByClassName('TlTextInput')[0];
  cache.subscribeButton = document.querySelector('#subscribe-btn');
  cache.formInput = document.getElementById('newsletter-form');
}

function clearState() {
  cache.emailInput.classList.remove('TlTextInput__error');
}

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

  cache.subscribeButton.addEventListener(
    "click",
    function(e) {
      e.preventDefault();
      clearState();

      call = setInterval(scroll, 1);
      target = event.srcElement.dataset.scroll;
      offset = document.getElementById(target).offsetTop;
    }
  );
}

function mountNewsletterForm() {
  cache.formInput.addEventListener(
    "submit",
    function(e) {
      e.preventDefault();
      e.stopPropagation();
      var value = String(cache.emailInput.value).toLowerCase();
      var isEmail = EMAIL_REGEX.test(value);
    
      if ((value.length === 0) || (!isEmail)) {
        cache.emailInput.classList.add('TlTextInput__error');
      } else {
        this.submit();
      }
    },
    false
  );
  cache.emailInput.addEventListener('input', function() { clearState() });
}

document.addEventListener("DOMContentLoaded", function() {
  initCache();
  mountSubscribeButton();
  mountNewsletterForm();
});
