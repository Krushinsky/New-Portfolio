let langEn = document.querySelector('#en');
langEn.addEventListener('click', ()=>{
    document.querySelector('html').lang = 'en';
    document.querySelector('.navHome').textContent = 'Home';
    document.querySelector('.navAboutMe').textContent = 'About';
    document.querySelector('.navPortfolio').textContent = "Portfolio";
    document.querySelector('.navCertificates').textContent = 'Certificates';
    document.querySelector('.navContact').textContent = 'Contact';
    document.querySelector('.header').textContent = 'Hello. My name is Evgeny Krushinsky. I am a front end developer. Welcome to my page.';
    document.querySelector('.aboutMeHTwo').textContent = 'About me';
    document.querySelector('#par').innerHTML = 'I am from Chelyabinsk, Russia. Interested in programming since 2020. I have finished studying HTML5/CSS3, Bootstrap, Figma and JavaScript at <a href=`https://edu-canshecode.thinkific.com/`>CanSheCode</a>  School (Canada web development boot camp) by now and continue to study React.js, Redux, Node.js, GitHub there. In addition to that, I am learning Python on my own.';
    document.querySelector('.logo').textContent = 'Portfolio';
    document.querySelector('.parText').textContent = 'This section presents my work on HTML/CSS/JavaScript.';
    document.querySelector('#certificate').textContent = 'My certificates';
    document.querySelector('.contact').textContent = 'Contact';

    document.querySelectorAll('.linkText').forEach(item=>{
        item.textContent = 'Website'
    })
    document.querySelector('.harry').innerHTML = 'Harry Potter books website.<br> HTML/CSS/JavaScript'
    document.querySelector('.qoutes').innerHTML = 'Website with quotes. <br> HTML/CSS/JavaScript'
    document.querySelector('.adv').innerHTML = 'Lawyer website.<br> HTML/CSS'
    document.querySelector('.snow').innerHTML = 'Website of Russian cities.<br> HTML/CSS/JavaScript'
    document.querySelector('.question').innerHTML = 'JS question site.<br> HTML/CSS/JavaScript'
    document.querySelector('.saw').innerHTML = 'Guess the number website.<br> HTML/CSS/JavaScript'
    document.querySelector('.alarm').innerHTML = 'Website timer (alarm clock). <br> HTML/CSS/JavaScript'
    document.querySelector('.thrilling').innerHTML = 'Savings calculator website. <br> HTML/CSS/JavaScript'
    document.querySelector('.animal').innerHTML = 'Website for teaching children. <br> HTML/CSS/JavaScript'
    document.querySelector('.weather').innerHTML = 'Weather website. <br> HTML/CSS/JavaScript'
})

let langRu = document.querySelector('#ru');
langRu.addEventListener('click', ()=>{
document.querySelector('html').lang = 'ru';
    document.querySelector('.navHome').textContent = 'Домой';
    document.querySelector('.navAboutMe').textContent = 'Обо мне';
    document.querySelector('.navPortfolio').textContent = "Портфолио";
    document.querySelector('.navCertificates').textContent = 'Мои знания';
    document.querySelector('.navContact').textContent = 'Контакты';
    document.querySelector('.header').textContent = 'Добрый день. Меня зовут Евгений Крушинский. Я front-end разработчик. Добро пожаловать на мою страницу.';
    document.querySelector('.aboutMeHTwo').textContent = 'Обо мне';
    document.querySelector('#par').innerHTML = 'Я живу в России, в г. Челябинск. Увлекаюсь программированием c 2020 года. На текущий момент я прошёл обучение в школе <a href="https://edu-canshecode.thinkific.com/">CanSheCode</a> по напралениям: HTML/CSS, Bootstrap, JavaScript, Figma. Помимо упомянутых обучений, в школе <a href="https://edu-canshecode.thinkific.com/">CanSheCode</a> были пройдены дополнительные вебинары. Сейчас я прохожу обучение по React, Node.js, а также продолжаю самостоятельно изучать Python.';
    document.querySelector('.logo').textContent = 'Портфолио';
    document.querySelector('.parText').textContent = 'В разделе представлены мои работы по HTML/CSS/JavaScript.';
    document.querySelector('#certificate').textContent = 'Мои знания';
    document.querySelector('.contact').textContent = 'Контакты';

    document.querySelectorAll('.linkText').forEach(item=>{
        item.textContent = 'Перейти на сайт'
    })
    document.querySelector('.harry').innerHTML = 'Сайт книг про Гарри Поттера.<br> HTML/CSS/JavaScript'
    document.querySelector('.qoutes').innerHTML = 'Сайт c цитатами. <br> HTML/CSS/JavaScript'
    document.querySelector('.adv').innerHTML = 'Сайт Адвоката.<br> HTML/CSS'
    document.querySelector('.snow').innerHTML = 'Сайт городов России.<br> HTML/CSS/JavaScript'
    document.querySelector('.question').innerHTML = 'Сайт вопросов по JS.<br> HTML/CSS/JavaScript'
    document.querySelector('.saw').innerHTML = 'Сайт угадай число.<br> HTML/CSS/JavaScript'
    document.querySelector('.alarm').innerHTML = 'Сайт таймер(будильник). <br> HTML/CSS/JavaScript'
    document.querySelector('.thrilling').innerHTML = 'Сайт по рассчету накоплений. <br> HTML/CSS/JavaScript'
    document.querySelector('.animal').innerHTML = 'Сайт для обучения детей. <br> HTML/CSS/JavaScript'
    document.querySelector('.weather').innerHTML = 'Сайт погоды. <br> HTML/CSS/JavaScript'
})