function initAnchorBtn() {
  $('[data-scroll-top]').on('click', function () {
    $('.modal-scrollable').animate(
      {
        scrollTop: 0,
      },
      1000,
    )
  })
}

function cityProgress(e) {
  e.preventDefault()
  if (!$(this).valid()) {
    return
  }
  var $input = $(this).find('.js-input-city')
  var $progress = $(this).find('.js-input-city-progress')
  var $percent = $(this).find('.js-input-city-percent')
  var value = 0
  var max = 100

  $input.addClass('active')

  var interval = setInterval(function () {
    value++
    $percent.text(value + '%')
    $progress.css({
      width: value + '%',
    })
    if (value === max) {
      clearInterval(interval)
      setTimeout(function () {
        $input.removeClass('active')
        $('[data-remodal-id=modal-form-city]').remodal().open()
      }, 700)
    }
  }, 40)
}

function initCityForm() {
  $('[data-city-form]').on('submit', cityProgress)
}

$(document).ready(function () {
  initAnchorBtn()
  initCityForm()

  $('input').inputmask()
})




const cards = document.querySelectorAll('.card-quantity');
const input = document.getElementById('quantityInput');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    input.value = card.dataset.quantity;
  });
});
