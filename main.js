(function () {
  var cfg = window.SITE_CONFIG || {};
  var code = (cfg.referralCode || "YOUR-CODE").trim();
  var link = (cfg.referralLink || "").trim();

  document.querySelectorAll("[data-ref-code]").forEach(function (el) {
    el.textContent = code;
  });
  document.querySelectorAll("[data-last-checked]").forEach(function (el) {
    if (cfg.lastChecked) el.textContent = cfg.lastChecked;
  });
  document.querySelectorAll("[data-ref-link]").forEach(function (el) {
    if (link) {
      el.href = link;
      el.hidden = false;
    }
  });

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }
    return legacyCopy(text);
  }

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy") ? resolve() : reject();
      } catch (e) {
        reject(e);
      }
      document.body.removeChild(ta);
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    var label = btn.textContent;
    btn.addEventListener("click", function () {
      copyText(code).then(
        function () {
          btn.textContent = btn.getAttribute("data-copied") || "Copied!";
          btn.classList.add("ok");
          setTimeout(function () {
            btn.textContent = label;
            btn.classList.remove("ok");
          }, 2000);
        },
        function () {
          // Could not copy automatically: select the code so the
          // reader can long-press / Ctrl+C it themselves.
          var codeEl = document.querySelector(".code[data-ref-code]");
          if (codeEl && window.getSelection) {
            var range = document.createRange();
            range.selectNodeContents(codeEl);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
          }
          btn.textContent = btn.getAttribute("data-manual") || "Selected - copy it manually";
          setTimeout(function () { btn.textContent = label; }, 3000);
        }
      );
    });
  });
})();

// Header border on scroll + floating code bar (mobile) when the
// referral ticket is out of view and the reader is past the hero.
(function () {
  var top = document.querySelector(".top");
  var bar = document.querySelector(".codebar");
  var ticket = document.getElementById("code");
  var hero = document.querySelector(".hero");
  var ticketVisible = false;

  function update() {
    var y = window.scrollY || 0;
    if (top) top.classList.toggle("scrolled", y > 8);
    if (bar && hero) {
      var pastHero = y > hero.offsetHeight * 0.8;
      bar.classList.toggle("show", pastHero && !ticketVisible);
    }
  }

  if (ticket && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      ticketVisible = entries[0].isIntersecting;
      update();
    }).observe(ticket);
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
})();
