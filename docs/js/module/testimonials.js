export function testimonials() {
  const testimonials = document.querySelectorAll('.testimonial');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  testimonials.forEach(testimonial => observer.observe(testimonial));
}

