var clickedBtn=0;
var langSelect=0;
var sideMenuBtn=0;

function loadTemplate(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar template:', error));
  }

  // Carrega o navbar, header e footer
  loadTemplate('navbar', './nav.html');
  loadTemplate('navbar-pgs','./nav-pgs.html');
  loadTemplate('footer', './footer.html');
  
  

function chooseLang(langSelect){
    switch (langSelect){
        case 1:{
            window.location.href = '/site/pages/PT/home.html';
            break;

        }
        case 2:{
            window.location.href = '/site/pages/ENG/home.html';
            break;

        }
        default:{
            window.location.href = 'index.html';
            break;
        }
    }

}


function buttonSwitchPT(clickedBtn){
    switch (clickedBtn){

        case 1:{
    
            window.location.href = '/site/pages/PT/home.html';
            break;
        }
        case 2:{
            window.location.href = '/site/pages/PT/servicos.html';
            break;
    
        }
        case 3:{
            window.location.href = '/site/pages/PT/portfolio.html';
            break;
    
        }
        case 4:{
            window.location.href = '/site/pages/PT/sobre.html';
            break;
    
        }
        case 5:{
            window.location.href = '/site/pages/PT/contato.html';
            break;
    
        }
        case 6:{
            window.location.href = '/site/pages/PT/programacao.html';
            break;
    
        }
        case 7:{
            window.location.href = '/site/pages/PT/impress3d.html';
            break;
    
        }


        default:{
            clickedBtn=0;
            break;
        }   

}
}

function buttonSwitchEng(clickedBtn){
    switch (clickedBtn){

        case 1:{
    
            window.location.href = '/pages/ENG/home.html';
            break;
        }
        case 2:{
            window.location.href = '/pages/ENG/servicos.html';
            break;
    
        }
        case 3:{
            window.location.href = '/pages/ENG/equipamentos.html';
            break;
    
        }
        case 4:{
            window.location.href = '/pages/ENG/contato.html';
            break;
    
        }
        case 5:{
            window.location.href = '/pages/ENG/sobre.html';
            break;
    
        }
        case 6:{
            window.location.href = '/pages/ENG/orcamentos.html';
            break;
    
        }
        default:{
            clickedBtn=0;
            break;
        }   

}
}

function submitForm(){


    console.log("Formulário enviado com sucesso!")

    alert("Formulário Enviado!")
    
}

function enviado(){
    alert("Formulário enviado!");
    console.log("Enviado!");
}

function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('#sideMenu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        smoothScroll(target, 3000); // Duração de 2000ms (2 segundos)
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('#sideMenu a');
    const sections = document.querySelectorAll('.detalhe-text');

    function setActiveLink() {
        let index = sections.length;

        // Verifica qual seção está visível
        while (--index && window.scrollY + 300 < sections[index].offsetTop) {}

        // Remove a classe 'active' de todos os links
        menuLinks.forEach((link) => link.classList.remove('active'));

        // Marca o link correspondente como ativo
        if (index >= 0) {
            menuLinks[index].classList.add('active');
        }
    }

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});
