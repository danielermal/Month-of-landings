const highwayTitle = document.querySelector('.highway__title')
const highwayText = document.querySelector('.highway__text')
const rightButton = document.querySelectorAll('.highway__button_move_right')
const leftButton = document.querySelectorAll('.highway__button_move_left')
const highwayPictureContainer = document.querySelector('.highway__picture-container')
const annotation = highwayPictureContainer.querySelector('.highway__picture-annotation')
const highway = ['Шоссе', 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.']
const gravel = ['Грэвел', 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.']
const tt = ['ТТ', 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.']

function highwayTextContent () {
  const highwayPictureFirst = highwayPictureContainer.querySelector('.highway__picture')
  if (highwayPictureFirst.alt === 'шоссе') {
    highwayTitle.textContent = highway[0]
    highwayText.textContent = highway[1]
    annotation.src = './images/annotation-highway.svg'
  }
  if (highwayPictureFirst.alt === 'грэвел') {
    highwayTitle.textContent = gravel[0]
    highwayText.textContent = gravel[1]
    annotation.src = './images/annotation-graver.svg'
  }
  if (highwayPictureFirst.alt === 'TT') {
    highwayTitle.textContent = tt[0]
    highwayText.textContent = tt[1]
    annotation.src = './images/annotation-tt.svg'
  }
}
rightButton.forEach(function (item) {
  item.addEventListener('click', function () {
    const highwayPicture = highwayPictureContainer.querySelector('.highway__picture')
    highwayPicture.remove()
    highwayPictureContainer.append(highwayPicture)
    highwayTextContent()
  })
})

leftButton.forEach(function (item) {
  item.addEventListener('click', function () {
    const highwayPicture = highwayPictureContainer.querySelectorAll('.highway__picture')
    const highwayPictureLast = highwayPicture[(highwayPicture.length - 1)]
    highwayPictureLast.remove()
    highwayPictureContainer.prepend(highwayPictureLast)
    highwayTextContent()
  })
})

// bicycles
const highwayButton = document.querySelector('.bicycles__button_highway')
const gravelButton = document.querySelector('.bicycles__button_gravel')
const ttButton = document.querySelector('.bicycles__button_tt')
const bicyclesLinks = document.querySelectorAll('.bicycles__link')
const bicyclesPictures = document.querySelectorAll('.bicycles__picture')
const bicyclesText = document.querySelectorAll('.bicycles__name')
const highwayLinks = ['https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN', 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J', 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF']
const gravelLinks = ['https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE', 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9', 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8']
const ttLinks = ['https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9', 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835', 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q']
const highwayPictures = ['./images/Cervelo-Caledonia-5.png', './images/Cannondale-Systemsix-Himod.png', './images/Trek-Domane-SL-7.png']
const gravelPictures = ['./images/Cervelo-Aspero-GRX-810.png', './images/Specialized-S-Works-Diverge.png', './images/Cannondale-Topstone-Lefty-3.png']
const ttPictures = ['./images/Specialized-S-Works-Shiv.png', './images/BMC-Timemachine-01-ONE.png', './images/Cervelo-P-Series.png']
const highwayNames = ['Cervelo Caledonia-5', 'Cannondale Systemsix Himod', 'Trek Domane SL-7']
const gravelNames = ['Cervelo Aspero GRX 810', 'Specialized S-Works Diverge', 'Cannondale Topstone Lefty 3']
const ttNames = ['Specialized S-Works Shiv', 'BMC Timemachine 01 ONE', 'Cervelo P-Series']
const bicyclesList = document.querySelector('.bicycles__change-select')

  bicyclesList.addEventListener('click', function () {
    if (bicyclesList.value === 'Шоссе') {
      for (let i = 0; i < 3; i++) {
        bicyclesLinks[i].href = highwayLinks[i]
        bicyclesPictures[i].src = highwayPictures[i]
        bicyclesText[i].textContent = highwayNames[i]
      }
    }
    if (bicyclesList.value === 'Грэвел') {
      for (let i = 0; i < 3; i++) {
        bicyclesLinks[i].href = gravelLinks[i]
        bicyclesPictures[i].src = gravelPictures[i]
        bicyclesText[i].textContent = gravelNames[i]
      }
    }
    if (bicyclesList.value === 'ТТ') {
      for (let i = 0; i < 3; i++) {
        bicyclesLinks[i].href = ttLinks[i]
        bicyclesPictures[i].src = ttPictures[i]
        bicyclesText[i].textContent = ttNames[i]
      }
    }
  })

function changeButton (button) {
  const buttons = document.querySelectorAll('.bicycles__button')
  buttons.forEach(function (item) {
    item.classList.remove('bicycles__button_active')
  })
  button.classList.add('bicycles__button_active')
}

highwayButton.addEventListener('click', function () {
  changeButton(highwayButton)
  for (let i = 0; i < 3; i++) {
    bicyclesLinks[i].href = highwayLinks[i]
    bicyclesPictures[i].src = highwayPictures[i]
    bicyclesText[i].textContent = highwayNames[i]
  }
})

gravelButton.addEventListener('click', function () {
  changeButton(gravelButton)
  for (let i = 0; i < 3; i++) {
    bicyclesLinks[i].href = gravelLinks[i]
    bicyclesPictures[i].src = gravelPictures[i]
    bicyclesText[i].textContent = gravelNames[i]
  }
})

ttButton.addEventListener('click', function () {
  changeButton(ttButton)
  for (let i = 0; i < 3; i++) {
    bicyclesLinks[i].href = ttLinks[i]
    bicyclesPictures[i].src = ttPictures[i]
    bicyclesText[i].textContent = ttNames[i]
  }
})



// footer
const emailInput = document.querySelector('.footer__email')
const emailSubmitButton = document.querySelector('.footer__email-submit')
const footerForm = document.querySelector('.footer__form')

emailInput.addEventListener('click', function () {
  emailSubmitButton.classList.add('footer__email-submit_active')
  footerForm.addEventListener('submit', function (evt) {
    evt.preventDefault()
    emailInput.value = "Круто!"
  })
})

// theme dark
const changeThemeButton = document.querySelector('.footer__pseudo-item')
const changeThemePopupButton = document.querySelector('.popup__pseudo-item')
const page = document.querySelector('.page')
const header = document.querySelector('.header')
const headerLink = document.querySelectorAll('.header__link')
const mainScreenText = document.querySelector('.main-screen__text')
const eddieMercsText = document.querySelectorAll('.eddie-mercs__text')
const highwayContent = document.querySelector('.highway__text')
const highwayButtonLeft = document.querySelector('.highway__button_move_left')
const highwayButtonRight = document.querySelector('.highway__button_move_right')
const bicyclesButtons = document.querySelectorAll('.bicycles__button')
const trainingText = document.querySelector('.training__text')
const trainingLinks = document.querySelectorAll('.training__link')
const footer = document.querySelector('.footer')
const emailContainer = document.querySelector('.footer__email-container')
const email = document.querySelector('.footer__email')
const emailSubmit = document.querySelector('.footer__email-submit')
const closePopupButton = document.querySelector('.header__menu-button_popup')
const bicyclesChangeSelect = document.querySelector('.bicycles__change-select')
const bicyclesNames = document.querySelectorAll('.bicycles__name')
const popupContainer = document.querySelector('.popup__container')
const popupText = document.querySelectorAll('.popup__link')

function changeTheme () {
  page.classList.toggle('page_theme_dark')
  header.classList.toggle('header_theme_dark')
  headerLink.forEach( function (item) {
    item.classList.toggle('header__link_theme_dark')
  })
  mainScreenText.classList.toggle('main-screen__text_theme_dark')
  eddieMercsText.forEach( function (item) {
    item.classList.toggle('eddie-mercs__text_theme_dark')
  })
  highwayContent.classList.toggle('highway__text_theme_dark')
  highwayButtonLeft.classList.toggle('highway__button_move_left_theme_dark')
  highwayButtonRight.classList.toggle('highway__button_move_right_theme_dark')
  bicyclesButtons.forEach( function (item) {
    item.classList.toggle('bicycles__button_theme_dark')
  })
  trainingText.classList.toggle('training__text_theme_dark')
  trainingLinks.forEach( function (item) {
    item.classList.toggle('training__link_theme_dark')
  })
  footer.classList.toggle('footer_theme_dark')
  emailContainer.classList.toggle('footer__email-container_theme_dark')
  email.classList.toggle('footer__email_theme_dark')
  emailSubmit.classList.toggle('footer__email-submit_theme_dark')
  bicyclesChangeSelect.classList.toggle('bicycles__change-select_theme_dark')
  popupContainer.classList.toggle('popup__container_theme_dark')
  popupText.forEach(function (item) {
    item.classList.toggle('popup__link_theme_dark')
  })
}

changeThemeButton.addEventListener('click', () => changeTheme())

changeThemePopupButton.addEventListener('click', function () {
  changeTheme()
  bicyclesNames.forEach(function (item) {
    item.classList.toggle('bicycles__name_theme_dark')
  })
})

// при прокрутке велосипеда меняем цвет кнопок
const scroller = document.querySelector('.bicycles__content')
const itemWidth = scroller.querySelector('.bicycles__container').clientWidth
const scrollbarButton = document.querySelectorAll('.bicycles__scrollbar-button')

scroller.addEventListener('scroll', function () {
  console.log(parseInt(scroller.scrollLeft))
  if (parseInt(scroller.scrollLeft) >= 0 && parseInt(scroller.scrollLeft) <= 300) {
    scrollbarButton.forEach(function (item) {
      item.classList.remove('bicycles__scrollbar-button_status_active')
    })
    scrollbarButton[0].classList.add('bicycles__scrollbar-button_status_active')
  }
  if (parseInt(scroller.scrollLeft) > 299 && parseInt(scroller.scrollLeft) <= 500) {
    scrollbarButton.forEach(function (item) {
      item.classList.remove('bicycles__scrollbar-button_status_active')
    })
    scrollbarButton[1].classList.add('bicycles__scrollbar-button_status_active')
  }
  if (parseInt(scroller.scrollLeft) >= 550) {
    scrollbarButton.forEach(function (item) {
      item.classList.remove('bicycles__scrollbar-button_status_active')
    })
    scrollbarButton[2].classList.add('bicycles__scrollbar-button_status_active')
  }
})

//popup
const popup = document.querySelector('.popup')
const popupButton = document.querySelector('.header__menu-button')
const popupLink = popup.querySelectorAll('.popup__link')

popupButton.addEventListener('click', function () {
  popup.classList.toggle('popup_opened')
  popupButton.classList.toggle('header__menu-button_popup')
})

popupLink.forEach(function (item) {
  item.addEventListener('click', function () {
    popup.classList.remove('popup_opened')
    popupButton.classList.remove('header__menu-button_popup')
  })
})
