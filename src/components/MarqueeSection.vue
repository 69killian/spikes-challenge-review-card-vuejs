<template>
    <div class="marquee-demo">
      <div class="marquee" data-direction="left">
        <div class="marquee-content">
          <div
            v-for="(card, index) in repeatedCards"
            :key="'left-' + index"
            class="review-card with-gradient"
          >
            <div class="review-header">
              <img :src="card.avatarUrl" :alt="card.name" class="avatar" />
              <div class="review-info">
                <p class="name">{{ card.name }}</p>
                <p class="username">{{ card.username }}</p>
              </div>
            </div>
            <p class="review-body">{{ card.body }}</p>
          </div>
        </div>
      </div>
  
      <div class="marquee reverse" data-direction="right">
        <div class="marquee-content">
          <div
            v-for="(card, index) in repeatedCards"
            :key="'right-' + index"
            class="review-card with-gradient"
          >
            <div class="review-header">
              <img :src="card.avatarUrl" :alt="card.name" class="avatar" />
              <div class="review-info">
                <p class="name">{{ card.name }}</p>
                <p class="username">{{ card.username }}</p>
              </div>
            </div>
            <p class="review-body">{{ card.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MarqueeSection",
    data() {
      return {
        cardData: [
            {
                name: "Jean Dupont",
                username: "@jean_du_59",
                body: "Vraiment impressionné par la qualité et l'attention portée aux détails, bravo à toute l'équipe !",
                avatarUrl: require('@/assets/3.png'),
            },
            {
                name: "Marie Curieuse",
                username: "@marie.curieuse",
                body: "Une plateforme intuitive et agréable à utiliser. J'adore !",
                avatarUrl: require('@/assets/4.png'),
            },
            {
                name: "Arthur Leclerc",
                username: "@artleclerc",
                body: "Le concept est super bien pensé, et les réponses sont rapides et précises.",
                avatarUrl: require('@/assets/5.png'),
            },
            {
                name: "Lucie Soleil",
                username: "@lucie.soleil",
                body: "Honnêtement, c'est une des meilleures plateformes que j'ai utilisées cette année.",
                avatarUrl: require('@/assets/6.png'),
            },
            {
                name: "Kevin Dynamo",
                username: "@kev.dynamo",
                body: "Merci pour cette expérience géniale, continuez comme ça !",
                avatarUrl: require('@/assets/7.png'),
            },
            {
                name: "Sophie Créative",
                username: "@sophie.crea",
                body: "C'est exactement ce qu'il me fallait pour avancer dans mes projets. Merci !",
                avatarUrl: require('@/assets/8.png'),
            },
            {
                name: "Paul Horizon",
                username: "@paul.horiz",
                body: "Je recommande fortement, l'équipe est au top et les fonctionnalités géniales.",
                avatarUrl: require('@/assets/9.png'),
            },
            {
                name: "Elisa Innovante",
                username: "@elisa.inno",
                body: "Un grand merci pour cette solution efficace et simple d'utilisation.",
                avatarUrl: require('@/assets/10.png'),
            },
            {
                name: "Max Visionnaire",
                username: "@max.visio",
                body: "Rien à redire, tout fonctionne parfaitement et c'est un plaisir à utiliser.",
                avatarUrl: require('@/assets/11.png'),
            },
            {
                name: "Chloé Inspirée",
                username: "@chloe.inspire",
                body: "J'adore le design et les fonctionnalités proposées, c'est un vrai plus !",
                avatarUrl: require('@/assets/12.png'),
            },
        ],
      };
    },
    computed: {
      repeatedCards() {
        // Duplication
        return Array.from({ length: 10 }, () => this.cardData).flat();
      },
    },
    mounted() {
      this.applyMarqueeAnimation();
      setInterval(this.resetAnimations, 30000); // reset de l'animation après 30 secondes
    },
    methods: {
      applyMarqueeAnimation() {
        const marqueeContents = document.querySelectorAll(".marquee-content");
        marqueeContents.forEach((marqueeContent) => {
          marqueeContent.style.display = "flex";
          marqueeContent.style.gap = "16px";
          marqueeContent.style.animationDuration = "500s";
          marqueeContent.style.animationTimingFunction = "linear";
          marqueeContent.style.animationIterationCount = "infinite";
  
          if (marqueeContent.closest(".marquee")) {
            marqueeContent.style.animationName = "marquee";
          }
  
          if (marqueeContent.closest(".marquee.reverse")) {
            marqueeContent.style.animationName = "marqueeReverse";
          }
  
          marqueeContent.addEventListener("mouseenter", () => {
            marqueeContent.style.animationPlayState = "paused";
          });
  
          marqueeContent.addEventListener("mouseleave", () => {
            marqueeContent.style.animationPlayState = "running";
          });
        });
      },
      resetAnimations() {
        const marqueeContents = document.querySelectorAll(".marquee-content");
  
        marqueeContents.forEach((marqueeContent) => {
          marqueeContent.style.animation = "none";
  
          setTimeout(() => {
            marqueeContent.style.animation = "";
            this.applyMarqueeAnimation();
          }, 10);
        });
      },
    },
  };
  </script>
  
  