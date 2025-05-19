particlesJS('particles-js', {
  "particles": {
    "number": { "value": 180, "density": { "enable": true, "value_area": 900 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 100 },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 120, "color": "#ffffff", "opacity": 3, "width": 1 },
    "move": { "enable": true, "speed": 2, "out_mode": "bounce" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { "distance": 10, "line_linked": { "opacity": 1 } },
      "push": { "particles_nb": 100 }
    }
  },
  "retina_detect": true
});
