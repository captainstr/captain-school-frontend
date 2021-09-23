(function ($) {
  Drupal.behaviors.threebPopupsModal = {
    attach: function (context, settings) {
      var form = document.querySelector("#registration-form");

      document.querySelectorAll(".popup-element-body").forEach((item) => {
        let alternate_registration = item.querySelector(
          ".alternate_registration"
        )
          ? item.querySelector(".alternate_registration").innerHTML
          : "";
        if (alternate_registration === "Alternate Registration") {
          item.querySelector(".register-link").innerHTML =
            "<span class='alt-reg'>Register</span>";
        }
      });

      jQuery(".register-link a").on("click", function (event) {
        event.preventDefault();
        let alterate_registration = "";

        let parent = this.parentElement.parentElement;

        alterate_registration = parent.querySelector(".alternate_registration")
          ? parent.querySelector(".alternate_registration").innerHTML
          : "";

        if (alterate_registration !== "Alternate Registration") {
          var addressValue = $(this).attr("href");
          PopupCenter(addressValue, "popup", 800, 800);
          jQuery(document).find(".popup-element-wrapper").hide();
        }
      });

      jQuery(':input[name="field_depositcheck[und]"]').on(
        "change",
        function (event) {
          if (this.value == "_none") {
            jQuery(".braintree-field").hide();
            jQuery(".form-item-authaccept").hide();
            jQuery("#field-braintree-add-more-wrapper").hide();
            jQuery("#edit-submit").css("margin-bottom", "5rem");
            jQuery(".field-name-field-depositcheck").css("margin-top", "3rem");
          } else {
            jQuery(".braintree-field").show();
            jQuery("#field-braintree-add-more-wrapper").show();
            jQuery(".form-item-authaccept").show();
            jQuery("#edit-submit").css("margin-bottom", "1rem");
            jQuery(".field-name-field-depositcheck").css("margin-top", "1rem");
          }
        }
      );

      var sPath = window.location.pathname;
      var sPage = sPath.substring(sPath.lastIndexOf("/") + 1);
      if (sPage == "register" || sPage == "balance") {
        brainTreeCreate(sPage);
      }
      if (sPage == "balance") {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var amount = url.searchParams.get("amount");
        let firstname = url.searchParams.get("firstname");
        let lastname = url.searchParams.get("lastname");
        jQuery("#edit-field-first-name-und-0-value").val(firstname);
        jQuery("#edit-field-last-name-und-0-value").val(lastname);
        jQuery("#balance-price").text("Balance Due: $" + amount);
      }
    },
  };

  function validateForm() {
    var isValid = true;
    jQuery(".required").each(function () {
      if (jQuery(this).hasClass("chosen-container")) {
        return;
      }
      if (jQuery(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  function brainTreeCreate(sPage) {
    braintree.client.create(
      {
        authorization: document.querySelector(
          "#block-threeb-mod-braintree-token .content"
        ).textContent,
      },
      function (clientErr, clientInstance) {
        if (clientErr) {
          console.log(clientErr);
          return;
        }

        var options = {
          client: clientInstance,
          styles: {
            input: {},
            input: {},
            "input.invalid": {
              color: "red",
            },
            "input.valid": {
              color: "green",
            },
          },
          fields: {
            number: {
              container: "#card-number",
              placeholder: "xxxx xxxx xxxx xxxx",
              maxCardLength: 16,
            },
            cvv: {
              container: "#cvv",
              placeholder: "xxx",
            },
            expirationDate: {
              container: "#expiration-date",
              placeholder: "xx/xx",
            },
          },
        };

        braintree.hostedFields.create(
          options,
          function (hostedFieldsErr, hostedFieldsInstance) {
            if (hostedFieldsErr) {
              console.error(hostedFieldsErr);
              return;
            }

            //submit.removeAttribute('disabled');
            var form;
            if (sPage == "register") {
              var form = document.querySelector("#registration-form");
            } else if (sPage == "balance") {
              var form = document.querySelector(
                "#balance-entityform-edit-form"
              );
            }
            form.addEventListener(
              "submit",
              function (event) {
                event.preventDefault();
                if (
                  jQuery(
                    ':input[name="field_depositcheck[und]"]:checked'
                  ).val() == "_none"
                ) {
                  form.submit();
                  return;
                }

                hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
                  if (tokenizeErr) {
                    console.error(tokenizeErr);
                    return;
                  }

                  document.querySelector(
                    'input[name="payment_method_nonce"]'
                  ).value = payload.nonce;
                  form.submit();
                });
              },
              false
            );
          }
        );
      }
    );
  }

  function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft =
      window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop =
      window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;
    var height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;

    var left = width / 2 - w / 2 + dualScreenLeft;
    var top = height / 2 - h / 2 + dualScreenTop;
    var newWindow = window.open(
      url,
      title,
      "scrollbars=no, resizable=no, width=" +
        w +
        ", height=" +
        h +
        ", top=" +
        top +
        ", left=" +
        left
    );

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus();
    }
  }
})(jQuery);
