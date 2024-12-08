document.addEventListener('DOMContentLoaded', async () => {
  async function loadWordclouds() {
    // Lista dostępnych obrazów
    const availableWomenTopics = Array.from({ length: 31 }, (_, i) => i + 1); // topic 1-30
    const availableMenTopics = Array.from({ length: 34 }, (_, i) => i); // topic 0-33

    // Sekcja dla kobiet
    const womenMainSection = document.createElement('section');

    // Pierwszy slajd dla kobiet (2 obrazy)
    const womenSection = document.createElement('section');
    const womenTitle = document.createElement('h1');
    womenTitle.textContent = 'Top2Vec: słowozbiory z korpusu kobiet';
    womenSection.appendChild(womenTitle);

    const womenImagesDiv = document.createElement('div');
    [1, 2].forEach((topicNum) => {
      const img = document.createElement('img');
      img.src = `visualizations/women_wordclouds/topic_${topicNum}_wordcloud.png`;
      womenImagesDiv.appendChild(img);
    });
    womenSection.appendChild(womenImagesDiv);
    womenMainSection.appendChild(womenSection);

    // Drugi slajd dla kobiet (3 obrazy)
    const womenSecondSection = document.createElement('section');
    const secondSectionDiv = document.createElement('div');
    secondSectionDiv.style.display = 'flex';
    secondSectionDiv.style.justifyContent = 'center';
    secondSectionDiv.style.alignItems = 'center';
    secondSectionDiv.style.gap = '80px';
    [3, 4, 5].forEach((topicNum) => {
      const img = document.createElement('img');
      img.src = `visualizations/women_wordclouds/topic_${topicNum}_wordcloud.png`;
      img.style.maxWidth = '30%';
      img.style.maxHeight = '38vh';
      img.style.objectFit = 'contain';
      secondSectionDiv.appendChild(img);
    });
    womenSecondSection.appendChild(secondSectionDiv);
    womenMainSection.appendChild(womenSecondSection);

    // Kolejne slajdy dla kobiet (po 6 obrazów)
    for (let i = 6; i < 30; i += 6) {
      const verticalSection = document.createElement('section');
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.gap = '80px';
      container.style.height = '100%';
      container.style.justifyContent = 'flex-start';
      container.style.padding = '0';
      container.style.marginTop = '-40px';

      // Dwa rzędy po 3 obrazy
      for (let row = 0; row < 2; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'center';
        rowDiv.style.alignItems = 'center';
        rowDiv.style.gap = '80px';

        for (let j = 0; j < 3; j++) {
          const imgIndex = i + row * 3 + j;
          if (imgIndex < 31) {
            const img = document.createElement('img');
            img.src = `visualizations/women_wordclouds/topic_${imgIndex}_wordcloud.png`;
            img.style.maxWidth = '32%';
            img.style.maxHeight = '38vh';
            img.style.objectFit = 'contain';
            rowDiv.appendChild(img);
          }
        }
        container.appendChild(rowDiv);
      }
      verticalSection.appendChild(container);
      womenMainSection.appendChild(verticalSection);
    }

    // Sekcja dla mężczyzn
    const menMainSection = document.createElement('section');

    // Pierwszy slajd dla mężczyzn (2 obrazy)
    const menSection = document.createElement('section');
    const menTitle = document.createElement('h1');
    menTitle.textContent = 'Top2Vec: słowozbiory z korpusu mężczyzn';
    menSection.appendChild(menTitle);

    const menImagesDiv = document.createElement('div');
    [0, 1].forEach((topicNum) => {
      const img = document.createElement('img');
      img.src = `visualizations/men_wordclouds/topic_${topicNum}_wordcloud.png`;
      menImagesDiv.appendChild(img);
    });
    menSection.appendChild(menImagesDiv);
    menMainSection.appendChild(menSection);

    // Drugi slajd dla mężczyzn (3 obrazy)
    const menSecondSection = document.createElement('section');
    const menSecondSectionDiv = document.createElement('div');
    menSecondSectionDiv.style.display = 'flex';
    menSecondSectionDiv.style.justifyContent = 'center';
    menSecondSectionDiv.style.alignItems = 'center';
    menSecondSectionDiv.style.gap = '80px';
    [2, 3, 4].forEach((topicNum) => {
      const img = document.createElement('img');
      img.src = `visualizations/men_wordclouds/topic_${topicNum}_wordcloud.png`;
      img.style.maxWidth = '30%';
      img.style.maxHeight = '38vh';
      img.style.objectFit = 'contain';
      menSecondSectionDiv.appendChild(img);
    });
    menSecondSection.appendChild(menSecondSectionDiv);
    menMainSection.appendChild(menSecondSection);

    // Kolejne slajdy dla mężczyzn (po 6 obrazów)
    for (let i = 5; i < 34; i += 6) {
      const verticalSection = document.createElement('section');
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.flexDirection = 'column';
      container.style.gap = '80px';
      container.style.height = '100%';
      container.style.justifyContent = 'flex-start';
      container.style.padding = '0';
      container.style.marginTop = '-40px';

      // Dwa rzędy po 3 obrazy
      for (let row = 0; row < 2; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'center';
        rowDiv.style.alignItems = 'center';
        rowDiv.style.gap = '80px';

        for (let j = 0; j < 3; j++) {
          const imgIndex = i + row * 3 + j;
          if (imgIndex < 34) {
            const img = document.createElement('img');
            img.src = `visualizations/men_wordclouds/topic_${imgIndex}_wordcloud.png`;
            img.style.maxWidth = '32%';
            img.style.maxHeight = '38vh';
            img.style.objectFit = 'contain';
            rowDiv.appendChild(img);
          }
        }
        container.appendChild(rowDiv);
      }
      verticalSection.appendChild(container);
      menMainSection.appendChild(verticalSection);
    }

    return [womenMainSection, menMainSection];
  }

  async function createCategoryChart(data) {
    if (typeof Chart === 'undefined') {
      console.error('Chart.js nie jest załadowany');
      return null;
    }

    // Prepare data for grouped chart
    const datasets = [];
    const labels = [];
    const fullLabels = [];

    // Colors matching the theme sections with more variations
    const categoryColors = {
      'Grzech i Sakrament Pokuty': {
        bg: 'rgba(42, 118, 221, 0.6)',
        border: 'rgba(42, 118, 221, 1)',
      },
      'Spowiedź i jej ważność': {
        bg: 'rgba(30, 136, 229, 0.6)',
        border: 'rgba(30, 136, 229, 1)',
      },
      'Wątpliwości dotyczące grzechu': {
        bg: 'rgba(13, 71, 161, 0.6)',
        border: 'rgba(13, 71, 161, 1)',
      },
      'Poczucie winy i skrupulatność': {
        bg: 'rgba(0, 145, 234, 0.6)',
        border: 'rgba(0, 145, 234, 1)',
      },
      'Obawy związane z Komunią Świętą': {
        bg: 'rgba(66, 165, 245, 0.6)',
        border: 'rgba(66, 165, 245, 1)',
      },
      'Lęk i obawy duchowe': {
        bg: 'rgba(100, 181, 246, 0.6)',
        border: 'rgba(100, 181, 246, 1)',
      },
      'Emocje i zdrowie psychiczne': {
        bg: 'rgba(76, 175, 80, 0.6)',
        border: 'rgba(76, 175, 80, 1)',
      },
      'Zaburzenia emocjonalne i psychiczne': {
        bg: 'rgba(67, 160, 71, 0.6)',
        border: 'rgba(67, 160, 71, 1)',
      },
      'Emocje w życiu duchowym': {
        bg: 'rgba(104, 159, 56, 0.6)',
        border: 'rgba(104, 159, 56, 1)',
      },
      'Relacja z Bogiem i życie duchowe': {
        bg: 'rgba(156, 39, 176, 0.6)',
        border: 'rgba(156, 39, 176, 1)',
      },
      'Kryzys wiary i duchowe zwątpienie': {
        bg: 'rgba(142, 36, 170, 0.6)',
        border: 'rgba(142, 36, 170, 1)',
      },
      'Poszukiwanie i pogłębianie wiary': {
        bg: 'rgba(123, 31, 162, 0.6)',
        border: 'rgba(123, 31, 162, 1)',
      },
      'Modlitwa i praktyki religijne': {
        bg: 'rgba(171, 71, 188, 0.6)',
        border: 'rgba(171, 71, 188, 1)',
      },
      'Relacje międzyludzkie i rodzina': {
        bg: 'rgba(255, 152, 0, 0.6)',
        border: 'rgba(255, 152, 0, 1)',
      },
      'Małżeństwo i związki': {
        bg: 'rgba(245, 124, 0, 0.6)',
        border: 'rgba(245, 124, 0, 1)',
      },
      'Relacje społeczne i przyjaźnie': {
        bg: 'rgba(251, 140, 0, 0.6)',
        border: 'rgba(251, 140, 0, 1)',
      },
      'Rodzina i wychowanie dzieci': {
        bg: 'rgba(255, 167, 38, 0.6)',
        border: 'rgba(255, 167, 38, 1)',
      },
      'Moralność i etyka': {
        bg: 'rgba(233, 30, 99, 0.6)',
        border: 'rgba(233, 30, 99, 1)',
      },
      'Dylematy moralne': {
        bg: 'rgba(216, 27, 96, 0.6)',
        border: 'rgba(216, 27, 96, 1)',
      },
      'Grzech i przebaczenie innym': {
        bg: 'rgba(194, 24, 91, 0.6)',
        border: 'rgba(194, 24, 91, 1)',
      },
      'Inne tematy': {
        bg: 'rgba(158, 158, 158, 0.6)',
        border: 'rgba(158, 158, 158, 1)',
      },
    };

    // Create main dataset for categories
    const categoryData = data.categories.map((cat) => ({
      label: cat.name,
      data: [],
      backgroundColor:
        categoryColors[cat.name]?.bg || 'rgba(158, 158, 158, 0.6)',
      borderColor: categoryColors[cat.name]?.border || 'rgba(158, 158, 158, 1)',
      borderWidth: 1,
    }));

    // Fill in data for each category and its subcategories
    data.categories.forEach((category, catIndex) => {
      category.subcategories.forEach((subcategory) => {
        fullLabels.push(subcategory.name);
        labels.push(truncateText(subcategory.name));
        // Fill in zeros for previous categories
        for (let i = 0; i < catIndex; i++) {
          categoryData[i].data.push(0);
        }
        // Add current subcategory data
        categoryData[catIndex].data.push(subcategory.count);
        // Fill in zeros for remaining categories
        for (let i = catIndex + 1; i < data.categories.length; i++) {
          categoryData[i].data.push(0);
        }
      });
    });

    datasets.push(...categoryData);

    const chartContainer = document.createElement('section');
    chartContainer.style.height = '80vh';
    chartContainer.style.position = 'relative';
    chartContainer.style.width = '90%';
    chartContainer.style.margin = '-20px auto 0';

    const canvas = document.createElement('canvas');
    canvas.id = 'categoryChart';
    chartContainer.appendChild(canvas);

    // Funkcja do skracania tekstu
    function truncateText(text, maxLength = 25) {
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + '...';
    }

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20,
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Analiza Kategorii i Podkategorii',
            font: {
              size: 32,
              weight: 'bold',
            },
            padding: {
              top: 0,
              bottom: 50,
            },
          },
          tooltip: {
            callbacks: {
              title: function (context) {
                return fullLabels[context[0].dataIndex];
              },
            },
          },
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 14,
              },
              boxWidth: 15,
              padding: 15,
            },
            maxHeight: 200,
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              autoSkip: false,
              maxRotation: 45,
              minRotation: 45,
              font: {
                size: 12,
              },
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });

    return chartContainer;
  }

  const response = await fetch('./reports/category_analysis.json');
  const data = await response.json();
  const slidesContainer = document.getElementById('category-slides');

  // Dodaj wordcloudy przed istniejącymi slajdami
  const wordcloudSections = await loadWordclouds();
  if (wordcloudSections) {
    wordcloudSections.forEach((section) => {
      slidesContainer.insertBefore(section, slidesContainer.firstChild);
    });
  }

  const chartSlide = await createCategoryChart(data);
  if (chartSlide) {
    slidesContainer.insertBefore(chartSlide, slidesContainer.firstChild);
  }

  const themeColors = [
    {
      base: 'rgba(42, 118, 221, 0.1)',
      hover: 'rgba(42, 118, 221, 0.2)',
      count: 'rgba(42, 118, 221, 0.8)',
    },
    {
      base: 'rgba(76, 175, 80, 0.1)',
      hover: 'rgba(76, 175, 80, 0.2)',
      count: 'rgba(76, 175, 80, 0.8)',
    },
    {
      base: 'rgba(156, 39, 176, 0.1)',
      hover: 'rgba(156, 39, 176, 0.2)',
      count: 'rgba(156, 39, 176, 0.8)',
    },
    {
      base: 'rgba(255, 152, 0, 0.1)',
      hover: 'rgba(255, 152, 0.2)',
      count: 'rgba(255, 152, 0.8)',
    },
    {
      base: 'rgba(233, 30, 99, 0.1)',
      hover: 'rgba(233, 30, 99, 0.2)',
      count: 'rgba(233, 30, 99, 0.8)',
    },
  ];

  function createSubcategorySlide(subcategory, colorTheme) {
    const slide = document.createElement('section');

    const subcategoryTitle = document.createElement('h2');
    subcategoryTitle.classList.add('subcategory-title');

    const titleText = document.createElement('span');
    titleText.textContent = subcategory.name;
    titleText.classList.add('title-text');
    titleText.style.color = colorTheme.count;

    const titleCount = document.createElement('span');
    titleCount.textContent = `${subcategory.percentage}% (${subcategory.count})`;
    titleCount.classList.add('title-count');
    titleCount.style.color = colorTheme.count;

    subcategoryTitle.appendChild(titleText);
    subcategoryTitle.appendChild(titleCount);
    slide.appendChild(subcategoryTitle);

    const subsubcategoriesList = document.createElement('ul');
    subsubcategoriesList.classList.add('subsubcategories');

    let currentlyExpanded = null;

    subcategory.subsubcategories.forEach((subsubcategory) => {
      const subsubcategoryContainer = document.createElement('div');
      subsubcategoryContainer.classList.add('subsubcategory-container');

      const subsubcategoryItem = document.createElement('li');
      subsubcategoryItem.classList.add('expandable');

      subsubcategoryItem.style.backgroundColor = colorTheme.base;
      subsubcategoryItem.addEventListener('mouseover', () => {
        subsubcategoryItem.style.backgroundColor = colorTheme.hover;
      });
      subsubcategoryItem.addEventListener('mouseout', () => {
        subsubcategoryItem.style.backgroundColor = colorTheme.base;
      });

      const nameSpan = document.createElement('span');
      nameSpan.textContent = subsubcategory.name;

      const countSpan = document.createElement('span');
      countSpan.textContent = `${subsubcategory.percentage}% (${subsubcategory.count})`;
      countSpan.classList.add('count');
      countSpan.style.color = colorTheme.count;

      subsubcategoryItem.appendChild(nameSpan);
      subsubcategoryItem.appendChild(countSpan);

      if (
        subsubcategory.descriptions &&
        subsubcategory.descriptions.length > 0
      ) {
        const descriptionsList = document.createElement('ul');
        descriptionsList.classList.add('descriptions');

        subsubcategory.descriptions.forEach((description) => {
          const descriptionItem = document.createElement('li');
          descriptionItem.style.borderLeftColor = colorTheme.count;

          const descNameSpan = document.createElement('span');
          descNameSpan.textContent = description.name;

          const descCountSpan = document.createElement('span');
          descCountSpan.textContent = `(${description.count})`;
          descCountSpan.classList.add('count');
          descCountSpan.style.color = colorTheme.count;

          descriptionItem.appendChild(descNameSpan);
          descriptionItem.appendChild(descCountSpan);

          descriptionsList.appendChild(descriptionItem);
        });

        subsubcategoryContainer.appendChild(subsubcategoryItem);
        subsubcategoryContainer.appendChild(descriptionsList);

        subsubcategoryItem.addEventListener('click', (e) => {
          e.stopPropagation();
          if (subsubcategoryItem.classList.contains('expanded')) {
            subsubcategoryItem.classList.remove('expanded');
            currentlyExpanded = null;
          } else {
            if (currentlyExpanded) {
              currentlyExpanded.classList.remove('expanded');
            }
            subsubcategoryItem.classList.add('expanded');
            currentlyExpanded = subsubcategoryItem;
          }
        });
      } else {
        subsubcategoryContainer.appendChild(subsubcategoryItem);
      }

      subsubcategoriesList.appendChild(subsubcategoryContainer);
    });

    slide.appendChild(subsubcategoriesList);
    return slide;
  }

  function createSubcategoryChart(category, colorTheme) {
    const chartSlide = document.createElement('section');

    const chartContainer = document.createElement('div');
    chartContainer.classList.add('chart-container');
    chartContainer.style.height = '80vh';
    chartContainer.style.position = 'relative';
    chartContainer.style.width = '90%';
    chartContainer.style.margin = '-20px auto 0';

    const canvas = document.createElement('canvas');
    canvas.id = `subcategory-chart-${category.name.replace(/\s+/g, '-')}`;
    chartContainer.appendChild(canvas);
    chartSlide.appendChild(chartContainer);

    // Prepare datasets for each subcategory
    const datasets = [];
    const labels = [];
    const fullLabels = [];

    // Generate color variations for subcategories
    const baseColor = colorTheme.count;
    const [r, g, b] = baseColor.match(/\d+/g).map(Number);

    const subcategoryColors = category.subcategories.map((_, index) => {
      const opacity = 0.6;
      const shade = 1 - index * 0.15;
      return {
        bg: `rgba(${r * shade}, ${g * shade}, ${b * shade}, ${opacity})`,
        border: `rgba(${r * shade}, ${g * shade}, ${b * shade}, 1)`,
      };
    });

    // Create datasets for each subcategory
    const subcategoryData = category.subcategories.map((subcat, index) => ({
      label: subcat.name,
      data: [],
      backgroundColor: subcategoryColors[index].bg,
      borderColor: subcategoryColors[index].border,
      borderWidth: 1,
    }));

    // Fill in data for subsubcategories
    category.subcategories.forEach((subcategory, subIndex) => {
      if (subcategory.subsubcategories) {
        subcategory.subsubcategories.forEach((subsubcat) => {
          fullLabels.push(subsubcat.name);
          labels.push(truncateText(subsubcat.name));
          // Fill in zeros for previous subcategories
          for (let i = 0; i < subIndex; i++) {
            subcategoryData[i].data.push(0);
          }
          // Add current subsubcategory data
          subcategoryData[subIndex].data.push(subsubcat.count);
          // Fill in zeros for remaining subcategories
          for (let i = subIndex + 1; i < category.subcategories.length; i++) {
            subcategoryData[i].data.push(0);
          }
        });
      }
    });

    datasets.push(...subcategoryData);

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 20,
          },
        },
        plugins: {
          title: {
            display: true,
            text: `Analiza kategorii "${category.name}"`,
            font: {
              size: 32,
              weight: 'bold',
            },
            padding: {
              top: 0,
              bottom: 50,
            },
          },
          tooltip: {
            callbacks: {
              title: function (context) {
                return fullLabels[context[0].dataIndex];
              },
            },
          },
          legend: {
            position: 'bottom',
            labels: {
              font: {
                size: 14,
              },
              boxWidth: 15,
              padding: 15,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              autoSkip: false,
              maxRotation: 45,
              minRotation: 45,
              font: {
                size: 12,
              },
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });

    return chartSlide;
  }

  function createCategorySection(category, colorTheme) {
    const mainSection = document.createElement('section');
    mainSection.classList.add('category-section');

    // Pierwszy slajd z wykresem
    const chartSlide = createSubcategoryChart(category, colorTheme);
    mainSection.appendChild(chartSlide);

    // Kolejne slajdy z podkategoriami
    category.subcategories.forEach((subcategory) => {
      const subcategorySlide = createSubcategorySlide(subcategory, colorTheme);
      mainSection.appendChild(subcategorySlide);
    });

    return mainSection;
  }

  data.categories.forEach((category, index) => {
    const colorTheme = themeColors[index % themeColors.length];
    const categorySection = createCategorySection(category, colorTheme);
    categorySection.setAttribute(
      'data-color-theme',
      JSON.stringify(colorTheme)
    );
    slidesContainer.appendChild(categorySection);
  });

  Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    embedded: false,
    width: '100%',
    height: '100%',
    margin: 0.1,
    minScale: 0.2,
    maxScale: 2.0,
  });

  function updateInterfaceColors(colorTheme) {
    document.documentElement.style.setProperty(
      '--theme-color',
      colorTheme.count
    );
    document.documentElement.style.setProperty(
      '--scrollbar-color',
      colorTheme.count
    );
    document.documentElement.style.setProperty(
      '--controls-color',
      colorTheme.count
    );
  }

  Reveal.addEventListener('slidechanged', function (event) {
    let currentSection = event.currentSlide;
    while (currentSection && !currentSection.hasAttribute('data-color-theme')) {
      currentSection = currentSection.parentElement;
    }

    if (currentSection) {
      const colorTheme = JSON.parse(
        currentSection.getAttribute('data-color-theme')
      );
      updateInterfaceColors(colorTheme);
    }
  });

  const firstSection = document.querySelector('section[data-color-theme]');
  if (firstSection) {
    const initialColorTheme = JSON.parse(
      firstSection.getAttribute('data-color-theme')
    );
    updateInterfaceColors(initialColorTheme);
  }
});

function truncateText(text, maxLength = 25) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}
