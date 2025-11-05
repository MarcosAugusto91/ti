document.querySelectorAll('.container h1').forEach(h1 => {
    h1.addEventListener('mouseenter', () => {
      const parent = h1.parentElement;
      parent.style.zIndex = 5;
      parent.style.gridRow = '2 / 6';
    });

    h1.addEventListener('mouseleave', () => {
      const parent = h1.parentElement;
      const sectionClass = parent.classList[0];
      const zIndexMap = {
        section1: 4,
        section2: 3,
        section3: 2,
        section4: 1
      };
      const gridRowMap = {
        section1: '5 / 6',
        section2: '4 / 6',
        section3: '3 / 6',
        section4: '2 / 6'
      };
      parent.style.zIndex = zIndexMap[sectionClass];
      parent.style.gridRow = gridRowMap[sectionClass];
    });
  });