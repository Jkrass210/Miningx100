export function animationReview() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    "(min-width: 1030px)": function () {
      gsap.fromTo(".box-reviews__column.first",
        { y: 80 },
        {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: ".box-reviews__testimonials-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );

      // Последний столбец — движется вниз: от -80px до 120px
      gsap.fromTo(".box-reviews__column.last",
        { y: -80 },
        {
          y: 120,
          ease: "none",
          scrollTrigger: {
            trigger: ".box-reviews__testimonials-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }
  })
}
