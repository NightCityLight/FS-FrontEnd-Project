const searchInputWrapper = document.querySelector("#nav2 .search-input-wrapper");

const searchInput = document.querySelector("#nav2 .search-input input");

const searchIcon = document.querySelector("#nav2 .search-icon i");

const closeIcon = document.querySelector("#nav2 .search-input i");

searchIcon.addEventListener('click',()=>{

    searchIcon.parentElement.classList.add("change");
    searchInputWrapper.classList.add("change");

    setTimeout(()=>{

        searchInput.focus();
    },1000);
});

closeIcon.addEventListener('click',()=>{

    searchIcon.parentElement.classList.remove("change");
    searchInputWrapper.classList.remove("change");
});


let themeToggler = document.querySelector('.theme-toggler');

themeToggler.onclick = ()=>{

    themeToggler.classList.toggle('active');

    if(themeToggler.classList.contains('active')){

        document.body.classList.add('active');

    }else{
        document.body.classList.remove('active');
    }
}

document.querySelectorAll('.theme-colors .colors').forEach(colors =>{

   colors.onclick = () => {
    let background = colors.style.background;
    document.querySelector(':root').style.setProperty('--main-color', background);
   }
});


const menuButton = document.getElementById('bar');
const cusmenu = document.getElementsByClassName('themes-container');
const closeIt = document.getElementById('theme-off');

if(menuButton) { bar.addEventListener('click', () => {

        themes-container.classList.add('active');
    }) 
}

if(closeIt) {

    theme-off.addEventListener('click', ()=> {

        themes-container.classList.remove('active')
        
    })
}



//let theme = document.querySelector('themes-container');



// document.querySelector('#customizer').onclick = ()=> {

//     theme.classList.add('active');
//     document.body.classList.paddingRight = '350px';
// }

// document.querySelector('#theme-close').onclick = ()=> {

//     theme.classList.remove('active');
//     document.body.classList.paddingRight = '0px';
// }

