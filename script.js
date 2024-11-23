const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

const responses = {
  'hola': '¡Hola! ¿Cómo estás?',
  'adiós': '¡Adiós! Que tengas un buen día.',
  'cómo estás': 'Estoy bien, gracias por preguntar.',
  'qué puedes hacer': 'Puedo responder a tus preguntas básicas.',
  'qué día es hoy': `Hoy es ${new Date().toLocaleDateString()}.`,
  'qué hora es': `Son las ${new Date().toLocaleTimeString()}.`,
  'quién eres': 'Soy un asistente virtual listo para ayudarte.',
  'qué es javascript': 'JavaScript es un lenguaje de programación que permite crear contenido dinámico en páginas web.',
  'cómo aprendo programación': 'Puedes comenzar con tutoriales en línea, libros y practicando con proyectos pequeños.',
  'cuál es tu nombre': 'No tengo un nombre específico, pero soy tu asistente virtual.',
  'qué tiempo hará hoy': 'Lo siento, no tengo información meteorológica en este momento.',
  'cómo funciona un chatbot': 'Un chatbot procesa el texto del usuario y genera respuestas basadas en reglas o IA.',
  'por qué el cielo es azul': 'El cielo parece azul debido a la dispersión de la luz solar en la atmósfera.',
  'qué es html': 'HTML es un lenguaje de marcado utilizado para estructurar páginas web.',
  'qué es css': 'CSS es un lenguaje de estilos que se utiliza para diseñar y dar formato a las páginas web.',
  'recomiéndame un libro': 'Te recomiendo "El Alquimista" de Paulo Coelho, un libro inspirador.',
  'cuál es la capital de méxico': 'La capital de México es la Ciudad de México.',
  'dime un chiste': '¿Por qué el libro de matemáticas estaba triste? Porque tenía demasiados problemas.',
  'qué es inteligencia artificial': 'La inteligencia artificial es la simulación de procesos de inteligencia humana por parte de sistemas computarizados.',
  'cuál es tu comida favorita': 'No como, pero si pudiera, ¡quizá sería pizza!',
  'qué es un algoritmo': 'Un algoritmo es una serie de pasos o instrucciones para resolver un problema o realizar una tarea.',
  'cómo funciona internet': 'Internet es una red global de computadoras conectadas que comparten información mediante protocolos como TCP/IP.',
  'cuál es el mejor lenguaje de programación': 'No hay uno mejor, todo depende de lo que quieras lograr. Por ejemplo, Python es excelente para IA y JavaScript para desarrollo web.',
  'qué es un servidor': 'Un servidor es una computadora o sistema que proporciona recursos, datos o servicios a otros dispositivos en una red.',
  'cómo puedo ser más productivo': 'Establece metas claras, prioriza tareas y elimina distracciones mientras trabajas.',
  'qué es el aprendizaje automático': 'El aprendizaje automático es una rama de la IA que permite a las computadoras aprender y mejorar a partir de datos.',
  'cómo programar un sitio web': 'Puedes empezar aprendiendo HTML, CSS y JavaScript. Usa editores como VS Code para escribir tu código.',
  'qué son las bases de datos': 'Son sistemas que almacenan y organizan datos para que puedan ser fácilmente accedidos, gestionados y actualizados.',
  'qué es python': 'Python es un lenguaje de programación versátil y fácil de aprender, popular para desarrollo web, ciencia de datos e inteligencia artificial.',
  'dime algo curioso': '¿Sabías que los pulpos tienen tres corazones?',
  'qué puedo hacer si estoy aburrido': 'Puedes leer un libro, aprender algo nuevo o hacer ejercicio. ¡Hay muchas opciones!',
  'cuántos continentes hay': 'Hay siete continentes: África, Antártida, Asia, Europa, América del Norte, América del Sur y Oceanía.',
  'qué es un navegador web': 'Es una aplicación que te permite acceder y navegar por sitios web, como Chrome, Firefox o Safari.',
  'qué es una API': 'Una API es un conjunto de reglas que permite que diferentes aplicaciones se comuniquen entre sí.',
  'cuál es la velocidad de la luz': 'La velocidad de la luz en el vacío es aproximadamente 299,792 kilómetros por segundo.',
  'cómo aprender inglés': 'Puedes usar aplicaciones, ver películas con subtítulos, practicar con hablantes nativos y estudiar gramática básica.',
  'qué es una red social': 'Es una plataforma en línea que conecta a personas para compartir contenido y comunicarse.',
  'qué es el big bang': 'El Big Bang es la teoría que explica el origen del universo a partir de una gran explosión hace unos 13.8 mil millones de años.',
  'cómo está el clima': 'Lo siento, no puedo acceder a datos climáticos en este momento.',
  'qué es un robot': 'Un robot es una máquina programada para realizar tareas de manera autónoma o semiautónoma.',
  'quién inventó la computadora': 'La computadora moderna fue desarrollada gracias al trabajo de muchas personas, pero Charles Babbage es conocido como el "padre de la computadora".',
  'qué es una función en programación': 'Una función es un bloque de código que realiza una tarea específica y puede ser reutilizado.'
};

const inputInitHeight = chatInput.scrollHeight;

// Función para crear un elemento <li> de chat
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
};

// Generar una respuesta basada en el objeto responses
const generateResponse = (userMessage) => {
    return responses[userMessage.toLowerCase()] || 'Lo siento, no entiendo tu pregunta.';
};

// Manejar el chat
const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Limpiar el input y ajustar su altura
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Agregar el mensaje del usuario al chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Generar y mostrar la respuesta del chatbot
        const botResponse = generateResponse(userMessage);
        const incomingChatLI = createChatLi(botResponse, "incoming");
        chatbox.appendChild(incomingChatLI);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 600);
};

// Ajustar la altura del input según su contenido
chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

// Detectar el envío con Enter (sin Shift)
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

// Enviar mensaje al hacer clic en el botón
sendChatBtn.addEventListener("click", handleChat);

// Mostrar u ocultar el chatbot
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));