function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 500; i++) {
    // Increase the number of stars to 1000

    const star = document.createElement("div");
    document.body.appendChild(star);
    star.className = "star";
    star.style.width = ".1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
                    let x = Math.random() * window.innerWidth;
                let y = Math.random() * window.innerHeight;
                let duration = Math.random() * 3 + 1;

                star.style.left = `${x}px`;
                star.style.top = `${y}px`;
                star.style.animationDuration = `${duration}s`;
  }
}
createStars();