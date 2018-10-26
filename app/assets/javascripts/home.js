var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var cache = {
  subscribeButton: null,
  emailInput: null,
  formInput: null,
  header: null,
  drawerToggle: null,
  headerIsOpen: false,
  csrfToken: null,
};

function initCache() {
  cache.emailInput = document.getElementsByClassName('TlTextInput')[0];
  cache.subscribeButton = document.querySelector('#subscribe-btn');
  cache.formInput = document.getElementById('newsletter-form');
  cache.header = document.getElementsByClassName('Header')[0];
  cache.drawerToggle = document.getElementById('drawer-toggle');
  
  cache.csrfToken = document
    .querySelectorAll('[name="csrf-token"]')[0]
    .getAttribute('content')
}

function clearState() {
  cache.emailInput.classList.remove('TlTextInput__error');
}

function mountSubscribeButton() {
  var offset = 0;
  var call;
  function scroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      clearInterval(call)
    } else if ((offset - window.scrollY) > 0) {
      window.scrollTo(0, window.scrollY + 40)
    } else {
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

      var emailInput = document.getElementById('email-input');
      var value = emailInput.value;
      var isEmail = EMAIL_REGEX.test(String(value).toLowerCase());
    
      if ((value.length === 0) || (!isEmail)) {
        cache.emailInput.classList.add('TlTextInput__error');
      } else {
        Rails.ajax({
          url: '/leads',
          type: 'POST',
          data: 'email=' + value,
          success: function(resp) {
            document.getElementById('newsletter').classList.add('Newsletter__success');
          },
          error: function(resp) {
            cache.emailInput.classList.add('TlTextInput__error');
          }
        })
      }
    },
    false
  );
  cache.emailInput.addEventListener('input', function() { clearState() });
}

function mountDrawerToggle() {
  cache.drawerToggle.addEventListener(
    "click",
    function() {
      if (cache.headerIsOpen) {
        cache.header.classList.remove('Header-mobile');
        cache.headerIsOpen = false;
      } else {
        cache.header.classList.add('Header-mobile');
        cache.headerIsOpen = true;
      }
    }
  )
}

document.addEventListener("DOMContentLoaded", function() {
  initCache();
  mountSubscribeButton();
  mountNewsletterForm();
  mountDrawerToggle();
});
