const navIcon = document.querySelector('#icon');

navIcon.addEventListener('click', function(){
    // when the user click on the icon toggle display-nav class to show nav

    document.querySelector('.nav-a').classList.toggle('display-nav')
    
})

// changes images of when the screen is less than 375px to mobile images

