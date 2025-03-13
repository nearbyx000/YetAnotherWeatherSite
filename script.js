
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
let button = document.createElement('button');
button.setAttribute('type', 'button');
button.classList.add('btn');
button.textContent("Узнать погоду")
button.addEventListener('click', () => {
    console.log("Как тока апи будет так и скажу");
});
document.body.append(button);
