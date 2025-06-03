// Scroll suave para seções
document.querySelectorAll('a.rolar').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de destaque ao passar o mouse nos itens do portfólio
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Botão "voltar ao topo"
const botaoTopo = document.createElement('button');
botaoTopo.innerText = '↑ Topo';
botaoTopo.style.position = 'fixed';
botaoTopo.style.bottom = '20px';
botaoTopo.style.right = '20px';
botaoTopo.style.padding = '10px';
botaoTopo.style.border = 'none';
botaoTopo.style.backgroundColor = '#333';
botaoTopo.style.color = '#fff';
botaoTopo.style.borderRadius = '5px';
botaoTopo.style.cursor = 'pointer';
botaoTopo.style.display = 'none';
botaoTopo.style.zIndex = '999';

document.body.appendChild(botaoTopo);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        botaoTopo.style.display = 'block';
    } else {
        botaoTopo.style.display = 'none';
    }
});

botaoTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
