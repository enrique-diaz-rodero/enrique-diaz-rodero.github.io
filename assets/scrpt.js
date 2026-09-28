const botones = document.querySelectorAll('.filtros button');
const skills = document.querySelectorAll('.lista-skills li');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        
        botones.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');

        const filtro = boton.dataset.filtro;

        skills.forEach(skill => {
            const tipo = skill.dataset.tipo;
            const certificada = skill.dataset.certificada;

            if (filtro === 'all') {
                skill.style.display = 'list-item';
            } else if (filtro === 'certificada') {
                skill.style.display = certificada === 'true' ? 'list-item' : 'none';
            } else {
                skill.style.display = tipo === filtro ? 'list-item' : 'none';
            }
        });
    });
});