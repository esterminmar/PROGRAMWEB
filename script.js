// Datos de equipos por liga
const equiposPorLiga = {
    'Premier League': ['Manchester United', 'Manchester City', 'Liverpool', 'Chelsea', 'Arsenal', 'Tottenham'],
    'La Liga': ['Real Madrid', 'Barcelona', 'Atletico Madrid', 'Sevilla', 'Real Betis'],
    'Serie A': ['Juventus', 'AC Milan', 'Inter Milan', 'Roma', 'Napoli'],
    'Bundesliga': ['Bayern Munich', 'Borussia Dortmund', 'RB Leipzig', 'Bayer Leverkusen'],
    'Ligue 1': ['PSG', 'Marseille', 'Lyon', 'Monaco'],
    'Liga Colombiana': ['Atlético Nacional', 'Millonarios', 'Junior', 'América de Cali', 'Santa Fe', 'Medellín'],
    'Selecciones': ['Colombia', 'Argentina', 'Brasil', 'España', 'Francia', 'Alemania']
};

// ========== MAPEO DE LOGOS DE EQUIPOS ==========
// Coloca aquí los nombres de tus archivos de imagen para cada equipo
// Las imágenes deben estar en la carpeta: img/equipos/
const imagenesEquipos = {
    // Premier League
    'Manchester United': 'manchester_united.jpg',
    'Manchester City': 'manchester_city.jpg',
    'Liverpool': 'liverpool.jpg',
    'Chelsea': 'chelsea.jpg',
    'Arsenal': 'arsenal.jpg',
    'Tottenham': 'tottenham.jpg',
    
    // La Liga
    'Real Madrid': 'real_madrid.jpg',
    'Barcelona': 'barcelona.jpg',
    'Atletico Madrid': 'atletico_madrid.jpg',
    'Sevilla': 'sevilla.jpg',
    'Real Betis': 'real_betis.jpg',
    
    // Serie A
    'Juventus': 'juventus.jpg',
    'AC Milan': 'ac_milan.jpg',
    'Inter Milan': 'inter_milan.jpg',
    'Roma': 'roma.jpg',
    'Napoli': 'napoli.jpg',
    
    // Bundesliga
    'Bayern Munich': 'bayern_munich.jpg',
    'Borussia Dortmund': 'borussia_dortmund.jpg',
    'RB Leipzig': 'rb_leipzig.jpg',
    'Bayer Leverkusen': 'bayer_leverkusen.jpg',
    
    // Ligue 1
    'PSG': 'psg.jpg',
    'Marseille': 'marseille.jpg',
    'Lyon': 'lyon.jpg',
    'Monaco': 'monaco.jpg',
    
    // Liga Colombiana
    'Atlético Nacional': 'nacional.jpg',
    'Millonarios': 'millonarios.jpg',
    'Junior': 'junior.jpg',
    'América de Cali': 'america.jpg',
    'Santa Fe': 'santa_fe.jpg',
    'Medellín': 'medellin.jpg',
    
    // Selecciones
    'Colombia': 'colombia.jpg',
    'Argentina': 'argentina.jpg',
    'Brasil': 'brasil.jpg',
    'España': 'espana.jpg',
    'Francia': 'francia.jpg',
    'Alemania': 'alemania.jpg'
};

// Iconos/Emojis por equipo (fallback cuando no hay imagen)
const iconosEquipos = {
    'Manchester United': '🔴',
    'Manchester City': '🩵',
    'Liverpool': '🔴',
    'Chelsea': '🔵',
    'Arsenal': '🔴',
    'Tottenham': '⚪',
    'Real Madrid': '👑',
    'Barcelona': '🔵🔴',
    'Atletico Madrid': '🔴⚪',
    'PSG': '🔵🔴',
    'Bayern Munich': '🔴⚪',
    'Borussia Dortmund': '🟡⚫',
    'Juventus': '⚫⚪',
    'AC Milan': '🔴⚫',
    'Atlético Nacional': '🟢⚪',
    'Millonarios': '🔵⚪',
    'Junior': '🔴⚪',
    'Colombia': '🇨🇴',
    'Argentina': '🇦🇷',
    'Brasil': '🇧🇷',
    'España': '🇪🇸',
    'Francia': '🇫🇷',
    'Alemania': '🇩🇪'
};

// Función para obtener la ruta de la imagen del equipo
function getImagenEquipo(equipo) {
    const nombreArchivo = imagenesEquipos[equipo];
    if (nombreArchivo) {
        return `img/equipos/${nombreArchivo}`;
    }
    const nombreNormalizado = equipo.toLowerCase().replace(/ /g, '_').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
    return `img/equipos/${nombreNormalizado}.jpg`;
}

// Función para obtener icono/emoji del equipo (fallback)
function getIconoEquipo(equipo) {
    return iconosEquipos[equipo] || '⚽';
}

// Datos detallados de productos (características)
const productosDetalle = {
    'Camiseta Local 2026': {
        descripcion: 'Camiseta oficial del equipo para la temporada 2026, diseñada con tecnología de absorción de sudor y máxima comodidad.',
        caracteristicas: ['Material: Poliéster 100%', 'Tecnología Dri-FIT', 'Logotipo bordado', 'Cuello redondo', 'Manga corta', 'Lavable a máquina'],
        talles: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    'Camiseta Visitante 2026': {
        descripcion: 'Diseño alternativo para partidos fuera de casa, con colores distintivos y máxima comodidad. Ideal para lucir en cualquier ocasión.',
        caracteristicas: ['Material: Poliéster reciclado', 'Tecnología de ventilación', 'Escudo termoadherido', 'Corte atlético', 'Secado rápido'],
        talles: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    'Camiseta Alternativa 2026': {
        descripcion: 'Edición especial con diseño único, ideal para coleccionistas y fans. No pasarás desapercibido con esta pieza exclusiva.',
        caracteristicas: ['Material: Algodón y poliéster', 'Diseño exclusivo', 'Edición limitada', 'Detalles en relieve', 'Acabados premium'],
        talles: ['S', 'M', 'L', 'XL']
    },
    'Camiseta Retro': {
        descripcion: 'Edición retro que revive los diseños clásicos del equipo. Perfecta para los fans de toda la vida.',
        caracteristicas: ['Material: Algodón 100%', 'Diseño vintage', 'Cuello tipo polo', 'Escudo clásico bordado', 'Edición conmemorativa'],
        talles: ['S', 'M', 'L', 'XL', 'XXL']
    },
    'Short Oficial': {
        descripcion: 'Short oficial del equipo, combina perfectamente con la camiseta. Ideal para entrenamiento o uso diario.',
        caracteristicas: ['Material: Poliéster', 'Elástico ajustable', 'Bolsillos laterales', 'Secado rápido', 'Cómodo y duradero'],
        talles: ['S', 'M', 'L', 'XL']
    }
};

// Productos por equipo (precios en COP - Pesos Colombianos)

// Productos por equipo (precios en COP - Pesos Colombianos)
const productosPorEquipo = {
    'Manchester United': [
        { nombre: 'Camiseta Local 2026', precio: 289900, imagen: 'img/unitedlocal.jpg', equipo: 'Manchester United', categoria: 'Hombre' },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 289900, imagen: 'img/unitedlocaldama.jpg', equipo: 'Manchester United', categoria: 'Dama' },
        { nombre: 'Camiseta Visitante 2026', precio: 289900, imagen: 'img/manutd_visitante.jpg', equipo: 'Manchester United', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 289900, imagen: 'img/manutd_visitantedama.jpg', equipo: 'Manchester United', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 289900, imagen: 'img/manutd_alternativa.jpg', equipo: 'Manchester United', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 289900, imagen: 'img/manutd_alternativadama.jpg', equipo: 'Manchester United', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 289900, imagen: 'img/unitedlocal.png', equipo: 'Manchester United', categoria: 'Niño' },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 289900, imagen: 'img/unitedlocaldama.png', equipo: 'Manchester United', categoria: 'Niña' },
        { nombre: 'Camiseta Visitante 2026(Niño)', precio: 289900, imagen: 'img/manutd_visitante.png', equipo: 'Manchester United', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 289900, imagen: 'img/manutd_visitantedama.png', equipo: 'Manchester United', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 289900, imagen: 'img/manutd_alternativa.png', equipo: 'Manchester United', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 289900, imagen: 'img/manutd_alternativadama.png', equipo: 'Manchester United', categoria: 'Niña'  },
    ],
    'Manchester City': [
        { nombre: 'Camiseta Local 2026', precio: 289900, imagen: 'img/city_local.jpg', equipo: 'Manchester City', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 289900, imagen: 'img/city_localdama.jpg', equipo: 'Manchester City', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 289900, imagen: 'img/city_visitante.jpg', equipo: 'Manchester City', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 289900, imagen: 'img/city_visitantedama.jpg', equipo: 'Manchester City', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 289900, imagen: 'img/city_alternativa.jpg', equipo: 'Manchester City', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 289900, imagen: 'img/city_alternativadama.jpg', equipo: 'Manchester City', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 289900, imagen: 'img/city_local.png', equipo: 'Manchester City', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 289900, imagen: 'img/city_localdama.png', equipo: 'Manchester City', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026(Niño)', precio: 289900, imagen: 'img/city_visitante.png', equipo: 'Manchester City', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 289900, imagen: 'img/city_visitantedama.png', equipo: 'Manchester City', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026(Niño)', precio: 289900, imagen: 'img/city_alternativa.png', equipo: 'Manchester City', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 289900, imagen: 'img/city_alternativadama.png', equipo: 'Manchester City', categoria: 'Niña'  },
    ],
    'Chelsea': [
        { nombre: 'Camiseta Local 2026', precio: 289900, imagen: 'img/chelsealocal.jpg', equipo: 'Chelsea', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 289900, imagen: 'img/chelsealocaldama.jpg', equipo: 'Chelsea', categoria: 'Dama'  },       
        { nombre: 'Camiseta Visitante 2026', precio: 289900, imagen: 'img/chelseavisitante.jpg', equipo: 'Chelsea', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 289900, imagen: 'img/chelseaalternativadama.jpg',equipo: 'Chelsea', categoria: 'Dama'  },        
        { nombre: 'Camiseta Alternativa 2026', precio: 289900, imagen: 'img/chelseaalternativa.jpg',equipo: 'Chelsea', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 289900, imagen: 'img/chelseavisitantedama.jpg', equipo: 'Chelsea', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 289900, imagen: 'img/chelsealocal.png', equipo: 'Chelsea', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 289900, imagen: 'img/chelsealocaldama.png', equipo: 'Chelsea', categoria: 'Niña'  },       
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 289900, imagen: 'img/chelseavisitante.png', equipo: 'Chelsea', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 289900, imagen: 'img/chelseaalternativadama.png',equipo: 'Chelsea', categoria: 'Niña'  },        
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 289900, imagen: 'img/chelseaalternativa.png',equipo: 'Chelsea', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 289900, imagen: 'img/chelseavisitantedama.png', equipo: 'Chelsea', categoria: 'Niña'  },    
    ],
    'Arsenal': [
        { nombre: 'Camiseta Local 2026', precio: 209900, imagen: 'img/Arsenallocal.jpg', equipo: 'Arsenal', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 289900, imagen: 'img/Arsenallocaldama.jpg', equipo: 'Arsenal', categoria: 'Dama'  },    
        { nombre: 'Camiseta Visitante 2026', precio: 289900, imagen: 'img/Arsenalvisitante.jpg', equipo: 'Arsenal', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 289900, imagen: 'img/Arsenalvisitantedama.jpg', equipo: 'Arsenal', categoria: 'Dama'  }, 
        { nombre: 'Camiseta Alternativa 2026', precio: 289900, imagen: 'img/Arsenalalternativa.jpg', equipo: 'Arsenal', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 289900, imagen: 'img/Arsenalalternativadama.jpg', equipo: 'Arsenal', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 209900, imagen: 'img/Arsenallocal.png', equipo: 'Arsenal', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 289900, imagen: 'img/Arsenallocaldama.png', equipo: 'Arsenal', categoria: 'Niña'  },    
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 289900, imagen: 'img/Arsenalvisitante.png', equipo: 'Arsenal', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 289900, imagen: 'img/Arsenalvisitantedama.png', equipo: 'Arsenal', categoria: 'Niña'  }, 
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 289900, imagen: 'img/Arsenalalternativa.png', equipo: 'Arsenal', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 289900, imagen: 'img/Arsenalalternativadama.png', equipo: 'Arsenal', categoria: 'Niña'  },
    ],
    'Tottenham': [
        { nombre: 'Camiseta Local 2026', precio: 289900, imagen: 'img/Tottenhamlocal.jpg', equipo: 'Tottenham', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 289900, imagen: 'img/Tottenhamlocaldama.jpg', equipo: 'Tottenham', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 289900, imagen: 'img/Tottenhamvisitante.jpg', equipo: 'Tottenham', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 289900, imagen: 'img/Tottenhamvisitantedama.jpg', equipo: 'Tottenham', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 289900, imagen: 'img/Tottenhamalternativa.jpg', equipo: 'Tottenham', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 289900, imagen: 'img/Tottenhamalternativadama.jpg', equipo: 'Tottenham', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 289900, imagen: 'img/Tottenhamlocal.png', equipo: 'Tottenham', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 289900, imagen: 'img/Tottenhamlocaldama.png', equipo: 'Tottenham', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 289900, imagen: 'img/Tottenhamvisitante.png', equipo: 'Tottenham', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 289900, imagen: 'img/Tottenhamvisitantedama.png', equipo: 'Tottenham', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 289900, imagen: 'img/Tottenhamalternativa.png', equipo: 'Tottenham', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 289900, imagen: 'img/Tottenhamalternativadama.png', equipo: 'Tottenham', categoria: 'Niña'  },
    ],
    'Atletico Madrid': [
        { nombre: 'Camiseta Local 2026', precio: 289900, imagen: 'img/AtleticodeMadridlocal.jpg', equipo: 'Atletico Madrid', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 289900, imagen: 'img/AtleticodeMadridlocaldama.jpg', equipo: 'Atletico Madrid', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 289900, imagen: 'img/AtleticodeMadridvisitante.jpg', equipo: 'Atletico Madrid', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 289900, imagen: 'img/AtleticodeMadridalternativadama.jpg', equipo: 'Atletico Madrid', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 289900, imagen: 'img/AtleticodeMadridalternativa.jpg', equipo: 'Atletico Madrid', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 289900, imagen: 'img/AtleticodeMadridvisitantedama.jpg', equipo: 'Atletico Madrid', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 289900, imagen: 'img/AtleticodeMadridlocal.png', equipo: 'Atletico Madrid', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 289900, imagen: 'img/AtleticodeMadridlocaldama.png', equipo: 'Atletico Madrid', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 289900, imagen: 'img/AtleticodeMadridvisitante.png', equipo: 'Atletico Madrid', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 289900, imagen: 'img/AtleticodeMadridalternativadama.png', equipo: 'Atletico Madrid', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 289900, imagen: 'img/AtleticodeMadridalternativa.png', equipo: 'Atletico Madrid', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 289900, imagen: 'img/AtleticodeMadridvisitantedama.png', equipo: 'Atletico Madrid', categoria: 'Niña'  },
    ],
    'Sevilla': [
        { nombre: 'Camiseta Local 2026', precio: 289900, imagen: 'img/Sevillalocal.jpg', equipo: 'Sevilla', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 289900, imagen: 'img/SevillalocalDama.jpg', equipo: 'Sevilla', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 289900, imagen: 'img/Sevillavisitante.jpg', equipo: 'Sevilla', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 289900, imagen: 'img/SevillavisitanteDama.jpg', equipo: 'Sevilla', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 289900, imagen: 'img/Sevillaalternativa.jpg', equipo: 'Sevilla', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 289900, imagen: 'img/SevillaalternativaDama.jpg', equipo: 'Sevilla', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 289900, imagen: 'img/Sevillalocal.png', equipo: 'Sevilla', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 289900, imagen: 'img/SevillalocalDama.png', equipo: 'Sevilla', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 289900, imagen: 'img/Sevillavisitante.png', equipo: 'Sevilla', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 289900, imagen: 'img/SevillavisitanteDama.png', equipo: 'Sevilla', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 289900, imagen: 'img/Sevillaalternativa.png', equipo: 'Sevilla', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 289900, imagen: 'img/SevillaalternativaDama.png', equipo: 'Sevilla', categoria: 'Niña'  },
    ],
    'Real Betis': [
        { nombre: 'Camiseta Local 2026', precio: 289900, imagen: 'img/realbetislocal.jpg', equipo: 'Real Betis', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 289900, imagen: 'img/realbetislocalDama.jpg', equipo: 'Real Betis', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 289900, imagen: 'img/Realbetisvisitante.jpg', equipo: 'Real Betis', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 289900, imagen: 'img/RealbetisvisitanteDama.jpg', equipo: 'Real Betis', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 289900, imagen: 'img/Realbetisalternativa.jpg', equipo: 'Real Betis', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 289900, imagen: 'img/RealbetisalternativaDama.jpg', equipo: 'Real Betis', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 289900, imagen: 'img/realbetislocal.png', equipo: 'Real Betis', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 289900, imagen: 'img/realbetislocalDama.png', equipo: 'Real Betis', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 289900, imagen: 'img/Realbetisvisitante.png', equipo: 'Real Betis', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 289900, imagen: 'img/RealbetisvisitanteDama.png', equipo: 'Real Betis', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 289900, imagen: 'img/Realbetisalternativa.png', equipo: 'Real Betis', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 289900, imagen: 'img/RealbetisalternativaDama.png', equipo: 'Real Betis', categoria: 'Niña'  },
    ],
    'Real Madrid': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/realmadrid_local.jpg', equipo: 'Real Madrid', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/realmadrid_localDama.jpg', equipo: 'Real Madrid', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/realmadrid_visitante.jpg', equipo: 'Real Madrid', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/realmadrid_visitanteDama.jpg', equipo: 'Real Madrid', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/realmadrid_alternativa.jpg', equipo: 'Real Madrid', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/realmadrid_alternativaDama.jpg', equipo: 'Real Madrid', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/realmadrid_local.png', equipo: 'Real Madrid', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/realmadrid_localDama.png', equipo: 'Real Madrid', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/realmadrid_visitante.png', equipo: 'Real Madrid', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/realmadrid_visitanteDama.png', equipo: 'Real Madrid', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/realmadrid_alternativa.png', equipo: 'Real Madrid', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/realmadrid_alternativaDama.png', equipo: 'Real Madrid', categoria: 'Niña'  },
    ],
    'Barcelona': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/barcaLocal.png', equipo: 'Barcelona', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/barcaLocalDama.png', equipo: 'Barcelona', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/barcelona_visitante.jpg', equipo: 'Barcelona', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/barcelona_visitanteDama.jpg', equipo: 'Barcelona', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/barcelona_alternativa.jpg', equipo: 'Barcelona', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/barcelona_alternativaDama.jpg', equipo: 'Barcelona', categoria: 'Dama'  },
        { nombre: 'Camiseta Retro', precio: 259900, imagen: 'img/barcelona_retro.jpg', equipo: 'Barcelona', categoria: 'Hombre'  },
        { nombre: 'Camiseta Retro (Dama)', precio: 259900, imagen: 'img/barcelona_retroDama.jpg', equipo: 'Barcelona', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/barcaLocal1.png', equipo: 'Barcelona', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/barcaLocalDama1.png', equipo: 'Barcelona', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/barcelona_visitante.png', equipo: 'Barcelona', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/barcelona_visitanteDama.png', equipo: 'Barcelona', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/barcelona_alternativa.png', equipo: 'Barcelona', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/barcelona_alternativaDama.png', equipo: 'Barcelona', categoria: 'Niña'  },
        { nombre: 'Camiseta Retro (Niño)', precio: 259900, imagen: 'img/barcelona_retro.png', equipo: 'Barcelona', categoria: 'Niño'  },
        { nombre: 'Camiseta Retro (Niña)', precio: 259900, imagen: 'img/barcelona_retroDama.png', equipo: 'Barcelona', categoria: 'Niña'  },
    ],
    'Juventus': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/Juventuslocal.jpg', equipo: 'Juventus', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/JuventuslocalDama.jpg', equipo: 'Juventus', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/Juventusvisitante.jpg', equipo: 'Juventus', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/JuventusvisitanteDama.jpg', equipo: 'Juventus', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/Juventusalternativa.jpg', equipo: 'Juventus', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/JuventusalternativaDama.jpg', equipo: 'Juventus', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/Juventuslocal.png', equipo: 'Juventus', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/JuventuslocalDama.png', equipo: 'Juventus', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/Juventusvisitante.png', equipo: 'Juventus', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/JuventusvisitanteDama.png', equipo: 'Juventus', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/Juventusalternativa.png', equipo: 'Juventus', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/JuventusalternativaDama.png', equipo: 'Juventus', categoria: 'Niña'  },
    ],
    'AC Milan': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/acMilanlocal.jpg', equipo: 'AC Milan', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/acMilanlocalDama.jpg', equipo: 'AC Milan', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/acMilanvisitante.jpg', equipo: 'AC Milan', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/acMilanvisitanteDama.jpg', equipo: 'AC Milan', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/acMilanalternativa.jpg', equipo: 'AC Milan', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/acMilanalternativaDama.jpg', equipo: 'AC Milan', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/acMilanlocal.png', equipo: 'AC Milan', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/acMilanlocalDama.png', equipo: 'AC Milan', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/acMilanvisitante.png', equipo: 'AC Milan', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/acMilanvisitanteDama.png', equipo: 'AC Milan', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/acMilanalternativa.png', equipo: 'AC Milan', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/acMilanalternativaDama.png', equipo: 'AC Milan', categoria: 'Niña'  },
    ],
    'Inter Milan': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/inter_milanlocal.jpg', equipo: 'Inter Milan', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/inter_milanlocalDama.jpg', equipo: 'Inter Milan', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/inter_milanvisitante.jpg', equipo: 'Inter Milan', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/inter_milanvisitanteDama.jpg', equipo: 'Inter Milan', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/inter_milanalternativa.jpg', equipo: 'Inter Milan', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/inter_milanalternativaDama.jpg', equipo: 'Inter Milan', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/inter_milanlocal.png', equipo: 'Inter Milan', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/inter_milanlocalDama.png', equipo: 'Inter Milan', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/inter_milanvisitante.png', equipo: 'Inter Milan', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/inter_milanvisitanteDama.png', equipo: 'Inter Milan', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/inter_milanalternativa.png', equipo: 'Inter Milan', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/inter_milanalternativaDama.png', equipo: 'Inter Milan', categoria: 'Niña'  },
    ],
    'Roma': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/romalocal.jpg', equipo: 'Roma', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/romalocalDama.jpg', equipo: 'Roma', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/romavisitante.jpg', equipo: 'Roma', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/romavisitanteDama.jpg', equipo: 'Roma', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/romaalternativa.jpg', equipo: 'Roma', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/romaalternativaDama.jpg', equipo: 'Roma', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/romalocal.png', equipo: 'Roma', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/romalocalDama.png', equipo: 'Roma', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/romavisitante.png', equipo: 'Roma', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/romavisitanteDama.png', equipo: 'Roma', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/romaalternativa.png', equipo: 'Roma', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/romaalternativaDama.png', equipo: 'Roma', categoria: 'Niña'  },
    ],
    'Napoli': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/napolilocal.jpg', equipo: 'Napoli', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/napolilocalDama.jpg', equipo: 'Napoli', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/napolivisitante.jpg', equipo: 'Napoli', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/napolivisitanteDama.jpg', equipo: 'Napoli', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/napolialternativa.jpg', equipo: 'Napoli', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/napolialternativaDama.jpg', equipo: 'Napoli', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/napolilocal.png', equipo: 'Napoli', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/napolilocalDama.png', equipo: 'Napoli', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/napolivisitante.png', equipo: 'Napoli', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/napolivisitanteDama.png', equipo: 'Napoli', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/napolialternativa.png', equipo: 'Napoli', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/napolialternativaDama.png', equipo: 'Napoli', categoria: 'Niña'  },
    ],
    'Bayern Munich': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/bayernmunichlocal.jpg', equipo: 'Bayern Munich', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/bayernmunichlocaldama.jpg', equipo: 'Bayern Munich', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/bayernmunichvisitante.jpg', equipo: 'Bayern Munich', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/bayernmunichalternativadama.jpg', equipo: 'Bayern Munich', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/bayernmunichalternativa.jpg', equipo: 'Bayern Munich', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa (Dama)', precio: 299900, imagen: 'img/bayernmunichvisitantedama.jpg', equipo: 'Bayern Munich', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/bayernmunichlocal.png', equipo: 'Bayern Munich', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/bayernmunichlocaldama.png', equipo: 'Bayern Munich', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/bayernmunichvisitante.png', equipo: 'Bayern Munich', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/bayernmunichalternativadama.png', equipo: 'Bayern Munich', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/bayernmunichalternativa.png', equipo: 'Bayern Munich', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/bayernmunichvisitantedama.png', equipo: 'Bayern Munich', categoria: 'Niña'  },
   ],
    'RB Leipzig': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/rbeipziglocal.jpg', equipo: 'RB Leipzig', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/rbeipziglocalDama.jpg', equipo: 'RB Leipzig', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/rbeipzigvisitante.jpg', equipo: 'RB Leipzig', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/rbeipzigvisitanteDama.jpg', equipo: 'RB Leipzig', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/rbeipzigalternativa.jpg', equipo: 'RB Leipzig', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/rbeipzigalternativaDama.jpg', equipo: 'RB Leipzig', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/rbeipziglocal.png', equipo: 'RB Leipzig', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/rbeipziglocalDama.png', equipo: 'RB Leipzig', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/rbeipzigvisitante.png', equipo: 'RB Leipzig', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/rbeipzigvisitanteDama.png', equipo: 'RB Leipzig', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/rbeipzigalternativaniño.png', equipo: 'RB Leipzig', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/rbeipzigalternativaDama.png', equipo: 'RB Leipzig', categoria: 'Niña'  },
    ],
    'Borussia Dortmund': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/borussiadortmundlocal.jpg', equipo: 'Borussia Dortmund' , categoria: 'Hombre' },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/borussiadortmundlocalDama.jpg', equipo: 'Borussia Dortmund' , categoria: 'Dama' },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/borussiadortmundvisitante.jpg', equipo: 'Borussia Dortmund', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/borussiadortmundvisitanteDama.jpg', equipo: 'Borussia Dortmund', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/borussiadortmundalternativa.jpg', equipo: 'Borussia Dortmund', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/borussiadortmundalternativaDama.jpg', equipo: 'Borussia Dortmund', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/borussiadortmundlocal.png', equipo: 'Borussia Dortmund', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/borussiadortmundlocalDama.png', equipo: 'Borussia Dortmund', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/borussiadortmundvisitante.png', equipo: 'Borussia Dortmund', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/borussiadortmundvisitanteDama.png', equipo: 'Borussia Dortmund', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/borussiadortmundalternativa.png', equipo: 'Borussia Dortmund', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/borussiadortmundalternativaDama.png', equipo: 'Borussia Dortmund', categoria: 'Niña'  },
    ],
    'Bayer Leverkusen': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/bayerleverkusenlocal.jpg', equipo: 'Bayer Leverkusen', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/bayerleverkusenlocalDama.jpg', equipo: 'Bayer Leverkusen', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/bayerleverkusenvisitante.jpg', equipo: 'Bayer Leverkusen', categoria: 'Hombre' },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/bayerleverkusenvisitanteDama.jpg', equipo: 'Bayer Leverkusen', categoria: 'Dama' },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/bayerleverkusenalternativa.jpg', equipo: 'Bayer Leverkusen', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/bayerleverkusenalternativaDama.jpg', equipo: 'Bayer Leverkusen', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/bayerleverkusenlocal.png', equipo: 'Bayer Leverkusen', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/bayerleverkusenlocalDama.png', equipo: 'Bayer Leverkusen', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/bayerleverkusenvisitante.png', equipo: 'Bayer Leverkusen', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/bayerleverkusenvisitanteDama.png', equipo: 'Bayer Leverkusen', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/bayerleverkusenalternativa.png', equipo: 'Bayer Leverkusen', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/bayerleverkusenalternativaDama.png', equipo: 'Bayer Leverkusen', categoria: 'Niña'  },
    ],
    'Liverpool': [
        { nombre: 'Camiseta Local 2026', precio: 279900, imagen: 'img/liverpool_local.jpg', equipo: 'Liverpool', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 279900, imagen: 'img/liverpool_localDama.jpg', equipo: 'Liverpool', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 279900, imagen: 'img/liverpool_visitante.jpg', equipo: 'Liverpool', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 279900, imagen: 'img/liverpool_visitanteDama.jpg', equipo: 'Liverpool', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 279900, imagen: 'img/liverpool_local.png', equipo: 'Liverpool', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 279900, imagen: 'img/liverpool_localDama.png', equipo: 'Liverpool', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 279900, imagen: 'img/liverpool_visitante.png', equipo: 'Liverpool', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 279900, imagen: 'img/liverpool_visitanteDama.png', equipo: 'Liverpool', categoria: 'Niña'  },
    ],
    'PSG': [
        { nombre: 'Camiseta Local 2026', precio: 309900, imagen: 'img/psg_local.jpg', equipo: 'PSG', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 309900, imagen: 'img/psg_localDama.jpg', equipo: 'PSG', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 309900, imagen: 'img/psg_visitante.jpg', equipo: 'PSG', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 309900, imagen: 'img/psg_visitanteDama.jpg', equipo: 'PSG', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 309900, imagen: 'img/psg_local.png', equipo: 'PSG', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 309900, imagen: 'img/psg_localDama.png', equipo: 'PSG', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 309900, imagen: 'img/psg_visitante.png', equipo: 'PSG', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 309900, imagen: 'img/psg_visitanteDama.png', equipo: 'PSG', categoria: 'Niña'  },
    ],
    'Lyon': [
        { nombre: 'Camiseta Local 2026', precio: 309900, imagen: 'img/lyonlocal.jpg', equipo: 'Lyon', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 309900, imagen: 'img/lyonlocalDama.jpg', equipo: 'Lyon', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 309900, imagen: 'img/lyonvisitante.jpg', equipo: 'Lyon', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 309900, imagen: 'img/lyonvisitanteDama.jpg', equipo: 'Lyon', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/lyonalternativa.jpg', equipo: 'Lyon', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/lyonalternativaDama.jpg', equipo: 'Lyon', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 309900, imagen: 'img/lyonlocal.png', equipo: 'Lyon', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 309900, imagen: 'img/lyonlocalDama.png', equipo: 'Lyon', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 309900, imagen: 'img/lyonvisitante.png', equipo: 'Lyon', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 309900, imagen: 'img/lyonvisitanteDama.png', equipo: 'Lyon', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/lyonalternativa.png', equipo: 'Lyon', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/lyonalternativaDama.png', equipo: 'Lyon', categoria: 'Niña'  },
    ],
    'Marseille': [
        { nombre: 'Camiseta Local 2026', precio: 309900, imagen: 'img/marsellalocal.jpg', equipo: 'Marseille', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 309900, imagen: 'img/marsellalocalDama.jpg', equipo: 'Marseille', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 309900, imagen: 'img/marsellavisitante.jpg', equipo: 'Marseille', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 309900, imagen: 'img/marsellavisitanteDama.jpg', equipo: 'Marseille', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/marsellaalternativa.jpg', equipo: 'Marseille', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/marsellaalternativaDama.jpg', equipo: 'Marseille', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 309900, imagen: 'img/marsellalocal.png', equipo: 'Marseille', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 309900, imagen: 'img/marsellalocalDama.png', equipo: 'Marseille', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 309900, imagen: 'img/marsellavisitante.png', equipo: 'Marseille', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 309900, imagen: 'img/marsellavisitanteDama.png', equipo: 'Marseille', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/marsellaalternativa.png', equipo: 'Marseille', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/marsellaalternativaDama.png', equipo: 'Marseille', categoria: 'Niña'  },
    ],
    'Monaco': [
        { nombre: 'Camiseta Local 2026', precio: 309900, imagen: 'img/monacolocal.jpg', equipo: 'Monaco', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 309900, imagen: 'img/monacolocalDama.jpg', equipo: 'Monaco', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 309900, imagen: 'img/monacovisitante.jpg', equipo: 'Monaco', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 309900, imagen: 'img/monacovisitanteDama.jpg', equipo: 'Monaco', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 299900, imagen: 'img/monacoalternativa.jpg', equipo: 'Monaco', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 299900, imagen: 'img/monacoalternativaDama.jpg', equipo: 'Monaco', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 309900, imagen: 'img/monacolocal.png', equipo: 'Monaco', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 309900, imagen: 'img/monacolocalDama.png', equipo: 'Monaco', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 309900, imagen: 'img/monacovisitante.png', equipo: 'Monaco', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 309900, imagen: 'img/monacovisitanteDama.png', equipo: 'Monaco', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 299900, imagen: 'img/monacoalternativa.png', equipo: 'Monaco', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 299900, imagen: 'img/monacoalternativaDama.png', equipo: 'Monaco', categoria: 'Niña'  },
    ],
    'Atlético Nacional': [
        { nombre: 'Camiseta Local 2026', precio: 199900, imagen: 'img/nacional_local.jpg', equipo: 'Atlético Nacional', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 199900, imagen: 'img/nacional_localDama.jpg', equipo: 'Atlético Nacional', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 199900, imagen: 'img/nacional_visitante.jpg', equipo: 'Atlético Nacional', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 199900, imagen: 'img/nacional_visitanteDama.jpg', equipo: 'Atlético Nacional', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 199900, imagen: 'img/nacional_local.png', equipo: 'Atlético Nacional', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 199900, imagen: 'img/nacional_localDama.png', equipo: 'Atlético Nacional', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 199900, imagen: 'img/nacional_visitante.png', equipo: 'Atlético Nacional', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 199900, imagen: 'img/nacional_visitanteDama.png', equipo: 'Atlético Nacional', categoria: 'Niña'  },
    ],
    'Millonarios': [
        { nombre: 'Camiseta Local 2026', precio: 189900, imagen: 'img/millonarios_local.jpg', equipo: 'Millonarios', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 189900, imagen: 'img/millonarios_localDama.jpg', equipo: 'Millonarios', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 189900, imagen: 'img/millonarios_visitante.jpg', equipo: 'Millonarios', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 189900, imagen: 'img/millonarios_visitanteDama.jpg', equipo: 'Millonarios', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 189900, imagen: 'img/millonarios_local.png', equipo: 'Millonarios', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 189900, imagen: 'img/millonarios_localDama.png', equipo: 'Millonarios', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 189900, imagen: 'img/millonarios_visitante.png', equipo: 'Millonarios', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 189900, imagen: 'img/millonarios_visitanteDama.png', equipo: 'Millonarios', categoria: 'Niña'  },
    ],
    'Junior': [
        { nombre: 'Camiseta Local 2026', precio: 179900, imagen: 'img/junior_local.jpg', equipo: 'Junior', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 179900, imagen: 'img/junior_localDama.jpg', equipo: 'Junior', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 179900, imagen: 'img/junior_visitante.jpg', equipo: 'Junior', categoria: 'Hombre'  },       
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 179900, imagen: 'img/junior_visitanteDama.jpg', equipo: 'Junior', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 179900, imagen: 'img/junior_local.png', equipo: 'Junior', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 179900, imagen: 'img/junior_localDama.png', equipo: 'Junior', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 179900, imagen: 'img/junior_visitante.png', equipo: 'Junior', categoria: 'Niño'  },       
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 179900, imagen: 'img/junior_visitanteDama.png', equipo: 'Junior', categoria: 'Niña'  },
    ],
     'América de Cali': [
        { nombre: 'Camiseta Local 2026', precio: 179900, imagen: 'img/americalocal.jpg', equipo: 'América de Cali', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 179900, imagen: 'img/americalocalDama.jpg', equipo: 'América de Cali', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 179900, imagen: 'img/americavisitante.jpg', equipo: 'América de Cali', categoria: 'Hombre'  },    
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 179900, imagen: 'img/americavisitanteDama.jpg', equipo: 'América de Cali', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 179900, imagen: 'img/americalocal.png', equipo: 'América de Cali', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 179900, imagen: 'img/americalocalDama.png', equipo: 'América de Cali', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 179900, imagen: 'img/americavisitante.png', equipo: 'América de Cali', categoria: 'Niño'  },    
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 179900, imagen: 'img/americavisitanteDama.png', equipo: 'América de Cali', categoria: 'Niña'  },
    ],
     'Santa Fe': [
        { nombre: 'Camiseta Local 2026', precio: 179900, imagen: 'img/santafelocal.jpg', equipo: 'Santa Fe', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 179900, imagen: 'img/santafelocalDama.jpg', equipo: 'Santa Fe', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 179900, imagen: 'img/santafevisitante.jpg', equipo: 'Santa Fe' , categoria: 'Hombre' },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 179900, imagen: 'img/santafevisitanteDama.jpg', equipo: 'Santa Fe' , categoria: 'Dama' },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 179900, imagen: 'img/santafelocal.png', equipo: 'Santa Fe', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 179900, imagen: 'img/santafelocalDama.png', equipo: 'Santa Fe', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 179900, imagen: 'img/santafevisitante.png', equipo: 'Santa Fe' , categoria: 'Niño' },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 179900, imagen: 'img/santafevisitanteDama.png', equipo: 'Santa Fe' , categoria: 'Niña' },
    ],
     'Medellín': [
        { nombre: 'Camiseta Local 2026', precio: 179900, imagen: 'img/medellinlocal.jpg', equipo: 'Medellín', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 179900, imagen: 'img/medellinlocaldama.jpg', equipo: 'Medellín', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 179900, imagen: 'img/medellinvisitante.jpg', equipo: 'Medellín', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 179900, imagen: 'img/medellinvisitanteDama.jpg', equipo: 'Medellín', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 179900, imagen: 'img/medellinlocal.png', equipo: 'Medellín', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 179900, imagen: 'img/medellinlocaldama.png', equipo: 'Medellín', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 179900, imagen: 'img/medellinvisitante.png', equipo: 'Medellín', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 179900, imagen: 'img/medellinvisitanteDama.png', equipo: 'Medellín', categoria: 'Niña'  },
    ],
    'Colombia': [
        { nombre: 'Camiseta Local 2026', precio: 279900, imagen: 'img/colombia_local.jpg', equipo: 'Colombia', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 279900, imagen: 'img/colombia_localdama.jpg', equipo: 'Colombia', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 279900, imagen: 'img/colombia_visitante.jpg', equipo: 'Colombia', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 279900, imagen: 'img/colombia_visitantedama.jpg', equipo: 'Colombia', categoria: 'Dama'  },
        { nombre: 'Camiseta Alternativa 2026', precio: 279900, imagen: 'img/colombia_alternativa.jpg', equipo: 'Colombia', categoria: 'Hombre'  },
        { nombre: 'Camiseta Alternativa 2026 (Dama)', precio: 279900, imagen: 'img/colombia_alternativadama.jpg', equipo: 'Colombia', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 279900, imagen: 'img/colombia_local.png', equipo: 'Colombia', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 279900, imagen: 'img/colombia_localdama.png', equipo: 'Colombia', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 279900, imagen: 'img/colombia_visitante.png', equipo: 'Colombia', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 279900, imagen: 'img/colombia_visitantedama.png', equipo: 'Colombia', categoria: 'Niña'  },
        { nombre: 'Camiseta Alternativa 2026 (Niño)', precio: 279900, imagen: 'img/colombia_alternativa.png', equipo: 'Colombia', categoria: 'Niño'  },
        { nombre: 'Camiseta Alternativa 2026 (Niña)', precio: 279900, imagen: 'img/colombia_alternativadama.png', equipo: 'Colombia', categoria: 'Niña'  },
    ],
    'Argentina': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/argentina_local.jpg', equipo: 'Argentina', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/argentina_localdama.jpg', equipo: 'Argentina', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/argentina_visitante.jpg', equipo: 'Argentina', categoria: 'Hombre'  },    
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/argentina_visitantedama.jpg', equipo: 'Argentina', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/argentina_local.png', equipo: 'Argentina', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/argentina_localdama.png', equipo: 'Argentina', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/argentina_visitante.png', equipo: 'Argentina', categoria: 'Niño'  },    
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/argentina_visitantedama.png', equipo: 'Argentina', categoria: 'Niña'  },
    ],
    'Brasil': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/brasil_local.jpg', equipo: 'Brasil', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/brasil_localdama.jpg', equipo: 'Brasil', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/brasil_visitante.jpg', equipo: 'Brasil', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/brasil_visitantedama.jpg', equipo: 'Brasil', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/brasil_local.png', equipo: 'Brasil', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/brasil_localdama.png', equipo: 'Brasil', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/brasil_visitante.png', equipo: 'Brasil', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/brasil_visitantedama.png', equipo: 'Brasil', categoria: 'Niña'  },
    ],
    'España': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/espana_local.jpg', equipo: 'España', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/espana_localdama.jpg', equipo: 'España', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/espana_visitante.jpg', equipo: 'España', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/espana_visitantedama.jpg', equipo: 'España', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/espana_local.png', equipo: 'España', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/espana_localdama.png', equipo: 'España', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/espana_visitante.png', equipo: 'España', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/espana_visitantedama.png', equipo: 'España', categoria: 'Niña'  },
    ],
    'Francia': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/francia_local.jpg', equipo: 'Francia', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/francia_localdama.jpg', equipo: 'Francia', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/francia_visitante.jpg', equipo: 'Francia', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 299900, imagen: 'img/francia_visitantedama.jpg', equipo: 'Francia', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/francia_local.png', equipo: 'Francia', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/francia_localdama.png', equipo: 'Francia', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/francia_visitante.png', equipo: 'Francia', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 299900, imagen: 'img/francia_visitantedama.png', equipo: 'Francia', categoria: 'Niña'  },
    ],
    'Alemania': [
        { nombre: 'Camiseta Local 2026', precio: 299900, imagen: 'img/alemanialocal.jpg', equipo: 'Alemania', categoria: 'Hombre'  },
        { nombre: 'Camiseta Local 2026 (Dama)', precio: 299900, imagen: 'img/alemanialocaldama.jpg', equipo: 'Alemania', categoria: 'Dama'  },
        { nombre: 'Camiseta Visitante 2026', precio: 299900, imagen: 'img/alemania_visitante.jpg', equipo: 'Alemania', categoria: 'Hombre'  },
        { nombre: 'Camiseta Visitante 2026 (Dama)', precio: 120000, imagen: 'img/alemania_visitantedama.jpg', equipo: 'Alemania', categoria: 'Dama'  },
        { nombre: 'Camiseta Local 2026 (Niño)', precio: 299900, imagen: 'img/alemanialocal.png', equipo: 'Alemania', categoria: 'Niño'  },
        { nombre: 'Camiseta Local 2026 (Niña)', precio: 299900, imagen: 'img/alemanialocaldama.png', equipo: 'Alemania', categoria: 'Niña'  },
        { nombre: 'Camiseta Visitante 2026 (Niño)', precio: 299900, imagen: 'img/alemania_visitante.png', equipo: 'Alemania', categoria: 'Niño'  },
        { nombre: 'Camiseta Visitante 2026 (Niña)', precio: 120000, imagen: 'img/alemania_visitantedama.png', equipo: 'Alemania', categoria: 'Niña'  },
    ]
};


// Productos genéricos para equipos sin datos específicos
const getProductosGenericos = (equipo) => [
    { nombre: `Camiseta Local ${equipo}`, precio: 249900, imagen: 'img/generic_local.jpg', equipo: equipo },
    { nombre: `Camiseta Visitante ${equipo}`, precio: 249900, imagen: 'img/generic_visitante.jpg', equipo: equipo },
    { nombre: `Short Oficial ${equipo}`, precio: 99900, imagen: 'img/generic_short.jpg', equipo: equipo }
];

let carrito = [];
let usuarioActual = null;
let historialNavegacion = ['inicio']; // Historial para volver atrás

// Inicializar Swiper (carrusel)
function initSwiper() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.mySwiper', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            effect: 'slide',
        });
    }
}

// Cargar datos guardados
function loadSavedData() {
    if(localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
        actualizarContadorCarrito();
    }
    if(localStorage.getItem('usuario')) {
        usuarioActual = JSON.parse(localStorage.getItem('usuario'));
        actualizarUIUsuario();
    }
}

function ocultarTodo(){
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.add("hidden");
    });
}

function mostrar(id){
    ocultarTodo();
    document.getElementById(id).classList.remove("hidden");
    // Agregar al historial
    if(historialNavegacion[historialNavegacion.length - 1] !== id) {
        historialNavegacion.push(id);
    }
    actualizarBotonVolver();
}

function mostrarInicio() {
    ocultarTodo();
    document.getElementById("inicio").classList.remove("hidden");
    historialNavegacion = ['inicio'];
    actualizarBotonVolver();
    // Reiniciar carrusel si es necesario
    setTimeout(() => initSwiper(), 100);
}

function volverAtras() {
    if(historialNavegacion.length > 1) {
        historialNavegacion.pop();
        const anterior = historialNavegacion[historialNavegacion.length - 1];
        ocultarTodo();
        document.getElementById(anterior).classList.remove("hidden");
        actualizarBotonVolver();
        if(anterior === 'inicio') {
            setTimeout(() => initSwiper(), 100);
        }
    }
}

function actualizarBotonVolver() {
    const btnVolver = document.getElementById('btnVolver');
    const seccionActual = historialNavegacion[historialNavegacion.length - 1];
    if(btnVolver) {
        btnVolver.style.display = seccionActual !== 'inicio' ? 'flex' : 'none';
    }
}

/*MOSTRAR CATEGORÍAS CON LOGOS */
function mostrarCategoria(cat){
    ocultarTodo();
    document.getElementById("categoria").classList.remove("hidden");
    document.getElementById("tituloCategoria").innerHTML = `<i class="fas fa-users"></i> ${cat}`;
    
    const equiposGrid = document.getElementById("equipos-grid");
    equiposGrid.innerHTML = '';
    
    let equipos = [];
    if(cat === 'Hombre' || cat === 'Dama') {
        equipos = ['Real Madrid', 'Barcelona', 'Manchester United', 'Liverpool', 'PSG', 'Atlético Nacional', 'Millonarios'];
    } else if(cat === 'Niño' || cat === 'Niña') {
        equipos = ['Barcelona', 'Real Madrid', 'Colombia', 'Argentina', 'Brasil'];
    } else {
        equipos = ['Real Madrid', 'Barcelona', 'Manchester United', 'Atlético Nacional', 'Colombia'];
    }
    
    equipos.forEach(equipo => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => mostrarProductos(equipo, cat);        
        // Usar el sistema de logos
        let imagenSrc = getImagenEquipo(equipo);
        let iconoFallback = getIconoEquipo(equipo);
        
        card.innerHTML = `
            <img src="${imagenSrc}" 
                 onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\'height:150px; display:flex; align-items:center; justify-content:center; background:#1f2f4a; color:#8BE000; font-size:3rem;\'>${iconoFallback}</div><h3><i class=\'fas fa-tshirt\'></i> ${equipo}</h3>'">
            <h3><i class="fas fa-tshirt"></i> ${equipo}</h3>
        `;
        equiposGrid.appendChild(card);
    });
    
    historialNavegacion.push('categoria');
    actualizarBotonVolver();
}

/* MOSTRAR EQUIPOS POR LIGA CON LOGOS */
function mostrarEquiposPorLiga(liga){
    ocultarTodo();
    document.getElementById("categoria").classList.remove("hidden");
    document.getElementById("tituloCategoria").innerHTML = `<i class="fas fa-trophy"></i> ${liga}`;
    
    const equiposGrid = document.getElementById("equipos-grid");
    equiposGrid.innerHTML = '';
    
    const equipos = equiposPorLiga[liga] || [];
    
    if(equipos.length === 0) {
        equiposGrid.innerHTML = '<p style="text-align:center">No hay equipos disponibles para esta liga</p>';
        return;
    }
    
    equipos.forEach(equipo => {
        const card = document.createElement('div');
        card.className = 'card';
    card.onclick = () => mostrarProductos(equipo, 'Todas');
        // Usar el sistema de logos
        let imagenSrc = getImagenEquipo(equipo);
        let iconoFallback = getIconoEquipo(equipo);
        
        card.innerHTML = `
            <img src="${imagenSrc}" 
                 onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\'height:150px; display:flex; align-items:center; justify-content:center; background:#1f2f4a; color:#8BE000; font-size:3rem;\'>${iconoFallback}</div><h3><i class=\'fas fa-tshirt\'></i> ${equipo}</h3>'">
            <h3><i class="fas fa-tshirt"></i> ${equipo}</h3>
        `;
        equiposGrid.appendChild(card);
    });
    
    historialNavegacion.push('categoria');
    actualizarBotonVolver();
}


function mostrarProductos(equipo, categoria = 'Hombre'){
    ocultarTodo();
    document.getElementById("productos").classList.remove("hidden");
    
    // Ajustamos el título: si dice 'Todas', solo mostramos el nombre del equipo
    const tituloSufijo = categoria === 'Todas' ? '' : ` - ${categoria}`;
    document.getElementById("tituloEquipo").innerHTML = `<i class="fas fa-tshirt"></i> ${equipo}${tituloSufijo}`;
    
    const productosGrid = document.getElementById("productos-grid");
    productosGrid.innerHTML = '';
    
    const productosTotales = productosPorEquipo[equipo] || getProductosGenericos(equipo);
    
    // AQUÍ ESTÁ LA NUEVA MAGIA: Si la categoría es 'Todas', deja pasar todas las camisetas.
    // Si no, filtra por la categoría específica elegida.
    const productos = productosTotales.filter(p => 
        categoria === 'Todas' || p.categoria === categoria || !p.categoria
    );
    
    // Si el equipo no tiene camisetas registradas para esa categoría, mostramos un mensaje
    if(productos.length === 0) {
        productosGrid.innerHTML = '<p style="text-align:center; grid-column: 1 / -1;">No hay productos disponibles para este equipo.</p>';
        historialNavegacion.push('productos');
        actualizarBotonVolver();
        return;
    }
    
    productos.forEach(producto => {
        // Obtenemos las tallas
        const detalle = productosDetalle[producto.nombre] || { talles: ['S', 'M', 'L', 'XL'] };
        let tallesOptions = detalle.talles.map(t => `<option value="${t}">Talla ${t}</option>`).join('');
        
        // Creamos ID único para el selector
        const selectId = `talle-${equipo.replace(/\s+/g, '')}-${producto.nombre.replace(/\s+/g, '')}`;

        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${producto.imagen}" onerror="this.src='https://via.placeholder.com/300x200/1f2f4a/white?text=${producto.nombre.replace(/ /g, '+')}'" 
                 onclick="verDetalleProducto('${producto.nombre}', ${producto.precio}, '${producto.imagen}', '${producto.equipo}')">
            <h4>${producto.nombre}</h4>
            <p><strong>$${producto.precio.toLocaleString('es-CO')}</strong></p>
            
            <select id="${selectId}" class="talle-selector-grid">
                <option value="" disabled selected>Selecciona tu talla</option>
                ${tallesOptions}
            </select>

            <button class="btn-detalle" onclick="verDetalleProducto('${producto.nombre}', ${producto.precio}, '${producto.imagen}', '${producto.equipo}')">
                <i class="fas fa-info-circle"></i> Ver Detalles
            </button>
            <button onclick="agregarCarritoDesdeGrid('${producto.nombre}', ${producto.precio}, '${producto.equipo}', '${selectId}')">
                <i class="fas fa-shopping-cart"></i> Agregar
            </button>
        `;
        productosGrid.appendChild(productDiv);
    });
    
    historialNavegacion.push('productos');
    actualizarBotonVolver();
}

// Añade esta nueva función para leer la talla del selector antes de agregar al carrito:
function agregarCarritoDesdeGrid(nombre, precio, equipo, selectId) {
    const selectElement = document.getElementById(selectId);
    const talle = selectElement.value;
    
    if (!talle) {
        alert('¡Por favor selecciona una talla antes de agregar al carrito! 👕');
        return;
    }
    
    agregarCarritoConTalle(nombre, precio, equipo, talle);
}

function verDetalleProducto(nombre, precio, imagen, equipo) {
    const detalle = productosDetalle[nombre] || {
        descripcion: 'Camiseta oficial de alta calidad, ideal para verdaderos fanáticos del fútbol. Diseño cómodo y duradero.',
        caracteristicas: ['Material: Poliéster 100%', 'Lavable a máquina', 'Resistente al desgaste', 'Diseño oficial', '100% original'],
        talles: ['S', 'M', 'L', 'XL']
    };
    
    const modal = document.getElementById('modalDetalle');
    const contenido = document.getElementById('modal-detalle-contenido');
    
    let tallesOptions = '';
    detalle.talles.forEach(talle => {
        tallesOptions += `<option value="${talle}">Talla ${talle}</option>`;
    });
    
    contenido.innerHTML = `
        <div class="detalle-producto">
            <img src="${imagen}" onerror="this.src='https://via.placeholder.com/400x400/1f2f4a/white?text=${nombre.replace(/ /g, '+')}'" alt="${nombre}">
            <div class="detalle-info">
                <h3>${nombre}</h3>
                <p><strong>Equipo:</strong> ${equipo}</p>
                <div class="detalle-precio">$${precio.toLocaleString('es-CO')}</div>
                <div class="detalle-descripcion">
                    <p>${detalle.descripcion}</p>
                </div>
                <div class="detalle-caracteristicas">
                    <strong>Características:</strong>
                    <ul>
                        ${detalle.caracteristicas.map(c => `<li><i class="fas fa-check-circle" style="color:#8BE000"></i> ${c}</li>`).join('')}
                    </ul>
                </div>
                <div class="talle-selector">
                    <strong>Talla:</strong>
                    <select id="talleSeleccionado">
                        ${tallesOptions}
                    </select>
                </div>
                <button class="btn-comprar-modal" onclick="comprarDesdeModal('${nombre}', ${precio}, '${equipo}')">
                    <i class="fas fa-shopping-cart"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function comprarDesdeModal(nombre, precio, equipo) {
    const talle = document.getElementById('talleSeleccionado')?.value || 'M';
    agregarCarritoConTalle(nombre, precio, equipo, talle);
    cerrarModal();
}

function agregarCarrito(nombre, precio, equipo) {
    agregarCarritoConTalle(nombre, precio, equipo, 'M');
}

function agregarCarritoConTalle(nombre, precio, equipo, talle) {
    const producto = {
        id: Date.now(),
        nombre: nombre,
        equipo: equipo,
        precio: precio,
        talle: talle,
        cantidad: 1
    };
    
    const existente = carrito.find(item => item.nombre === nombre && item.equipo === equipo && item.talle === talle);
    if(existente) {
        existente.cantidad++;
    } else {
        carrito.push(producto);
    }
    
    guardarCarrito();
    actualizarCarrito();
    actualizarContadorCarrito();
    alert(`✅ ${nombre} (Talla ${talle}) de ${equipo} agregado al carrito 🛒`);
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    actualizarCarrito();
    actualizarContadorCarrito();
    alert('Producto eliminado del carrito');
}

function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito-contenido');
    
    if(carrito.length === 0) {
        carritoDiv.innerHTML = '<p style="text-align:center"><i class="fas fa-box-open"></i> Tu carrito está vacío</p>';
        return;
    }
    
    let total = 0;
    let html = '<div class="carrito-items">';
    
    carrito.forEach((item, index) => {
        total += item.precio * item.cantidad;
        html += `
            <div class="carrito-item">
                <div>
                    <p><strong>${item.nombre}</strong></p>
                    <p>Equipo: ${item.equipo}</p>
                    <p>Talla: ${item.talle}</p>
                    <p>Cantidad: ${item.cantidad}</p>
                    <p>Precio unitario: $${item.precio.toLocaleString('es-CO')}</p>
                    <p>Subtotal: $${(item.precio * item.cantidad).toLocaleString('es-CO')}</p>
                </div>
                <button onclick="eliminarDelCarrito(${index})">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        `;
    });
    
    html += `<h3 style="text-align:right; margin-top:20px">Total: $${total.toLocaleString('es-CO')}</h3>`;
    html += `<button class="btn-pagar" onclick="pagar()">
                <i class="fas fa-credit-card"></i> Proceder al Pago
            </button>`;
    html += '</div>';
    
    carritoDiv.innerHTML = html;
}

function actualizarContadorCarrito() {
    const count = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const contador = document.getElementById('carrito-count');
    if(contador) {
        contador.textContent = count;
        contador.style.display = count > 0 ? 'inline-block' : 'none';
    }
}

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function pagar() {
    if(carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    alert(`🛍️ Gracias por tu compra!\n\nTotal: $${total.toLocaleString('es-CO')}\n\nLos productos serán enviados a tu dirección de registro.\n\n¡Disfruta tu nueva camiseta!`);
    carrito = [];
    guardarCarrito();
    actualizarCarrito();
    actualizarContadorCarrito();
    mostrar('carrito');
}

function cerrarModal() {
    document.getElementById('modalDetalle').style.display = 'none';
}

function iniciarSesion() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if(!email || !password) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    usuarioActual = { email: email, nombre: email.split('@')[0] };
    localStorage.setItem('usuario', JSON.stringify(usuarioActual));
    actualizarUIUsuario();
    alert(`¡Bienvenido ${usuarioActual.nombre}!`);
    mostrar('inicio');
    setTimeout(() => initSwiper(), 100);
}

function mostrarRegistro() {
    mostrar('registro');
}

function registrarUsuario() {
    const nombre = document.getElementById('reg-nombre').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;
    
    if(!nombre || !email || !password || !confirm) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    if(password !== confirm) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    usuarioActual = { nombre: nombre, email: email };
    localStorage.setItem('usuario', JSON.stringify(usuarioActual));
    actualizarUIUsuario();
    alert(`¡Registro exitoso! Bienvenido ${nombre}`);
    mostrar('inicio');
    setTimeout(() => initSwiper(), 100);
}

function actualizarUIUsuario() {
    const loginLink = document.querySelector('.nav-icons a[onclick*="mostrar"]');
    if(usuarioActual && loginLink) {
        const links = document.querySelectorAll('.nav-icons a');
        links.forEach(link => {
            if(link.innerHTML.includes('Login') || link.innerHTML.includes('Iniciar')) {
                link.innerHTML = `<i class="fas fa-user"></i> ${usuarioActual.nombre}`;
                link.setAttribute('onclick', 'cerrarSesion()');
            }
        });
    }
}

function cerrarSesion() {
    usuarioActual = null;
    localStorage.removeItem('usuario');
    const loginLink = document.querySelector('.nav-icons a');
    if(loginLink) {
        const links = document.querySelectorAll('.nav-icons a');
        links.forEach(link => {
            if(link.innerHTML.includes(usuarioActual?.nombre) || link.getAttribute('onclick') === 'cerrarSesion()') {
                link.innerHTML = `<i class="fas fa-user"></i> Login`;
                link.setAttribute('onclick', "mostrar('login')");
            }
        });
    }
    alert('Sesión cerrada');
    mostrar('inicio');
    setTimeout(() => initSwiper(), 100);
}

// Evento para cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('modalDetalle');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// NUEVA FUNCIÓN PARA TRAER LOS DATOS Y GUARDARLOS
async function cargarProductosBD() {
    try {
        const respuesta = await fetch('http://localhost:3000/api/productos');
        productosBD = await respuesta.json(); // Guardamos los datos en la variable global
        console.log("¡Productos reales listos para usar!", productosBD);
    } catch (error) {
        console.error("Error conectando con el servidor:", error);
    }
}

// EL ARRANQUE DE LA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    console.log("Iniciando la página...");
    loadSavedData();
    cargarProductosBD(); // Aquí es donde llamamos a la función de arriba
    mostrarInicio();
    initSwiper();
});