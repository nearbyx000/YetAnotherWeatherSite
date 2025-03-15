
function smooth_scroll(){
     // Плавная прокрутка
     document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Изменение активной ссылки при прокрутке
    window.addEventListener('scroll', function() {
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('nav a');
        
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}
let popka = document.createElement('button');
popka.setAttribute('type', 'button');
popka.classList.add('btn');
popka.textContent("Узнать погоду")
function OnClick(){
    console.log("Как тока апи будет,так и скажу")
};
popka.onclick(OnClick);

