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

// Buscamos los botones DENTRO de la sección #proyectos
const botonesProyectos = document.querySelectorAll('#proyectos .filtros button');
const proyectos = document.querySelectorAll('.lista-proyectos article');

botonesProyectos.forEach(botonProyecto => {
    botonProyecto.addEventListener('click', () => {

        // 1. Cambiar el botón activo
        botonesProyectos.forEach(b => b.classList.remove('activo'));
        botonProyecto.classList.add('activo');

        // 2. Leer el filtro (ej. "html")
        const filtro = botonProyecto.dataset.filtro;

        // 3. Recorrer proyectos
        proyectos.forEach(proyecto => {
            // Leer las tecnologías del proyecto (ej. "html css javascript")
            const tecnologias = proyecto.dataset.tecnologias;

            // 4. Lógica de filtrado
            if (filtro === 'all') {
                // Mostrar todos
                proyecto.style.display = ''; 
            } else if (tecnologias.includes(filtro)) {
                // Si las tecnologías incluyen el filtro, mostrar
                proyecto.style.display = ''; 
            } else {
                // Si no lo incluyen, ocultar
                proyecto.style.display = 'none'; 
            }
        });
    });
});