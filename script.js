    // Custom cursor
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
      ring.style.left   = rx + 'px';
      ring.style.top    = ry + 'px';
      requestAnimationFrame(loop);
    })();

    // Sticky nav
    const nav = document.getElementById('header');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    // Skill bars
    const barObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-bar-fill').forEach(f => {
            f.style.transform = `scaleX(${f.dataset.width})`;
          });
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.skills-list').forEach(el => barObserver.observe(el));