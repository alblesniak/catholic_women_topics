document.addEventListener('DOMContentLoaded', async () => {
  // Dane do prezentacji (wcześniejsze slajdy)
  const forumStats = {
    posts: [
      { forum: 'Radio Katolik', count: 415048, percent: '92.50%' },
      { forum: 'Dolina Modlitwy', count: 33660, percent: '7.50%' },
    ],
    sumPosts: 448708,
  };

  const uniqueUsersStats = {
    users: [
      { forum: 'Radio Katolik', count: 4206, percent: '92.12%' },
      { forum: 'Dolina Modlitwy', count: 360, percent: '7.88%' },
    ],
    sumUsers: 4566,
  };

  const top10RadioKatolik = [
    {
      username: 'Yarpen Zirgin',
      liczba_postow: 16784,
      plec: 'mężczyzna',
      wyznanie: 'katolik',
    },
    {
      username: 'Barney',
      liczba_postow: 15587,
      plec: 'mężczyzna',
      wyznanie: 'katolik',
    },
    {
      username: 'Jockey',
      liczba_postow: 12958,
      plec: 'mężczyzna',
      wyznanie: 'katolik',
    },
    {
      username: 'merss',
      liczba_postow: 12790,
      plec: 'kobieta',
      wyznanie: 'katolik',
    },
    {
      username: 'Małgosia',
      liczba_postow: 10059,
      plec: 'kobieta',
      wyznanie: 'katolik',
    },
    {
      username: 'Brandeisbluesky',
      liczba_postow: 7987,
      plec: 'kobieta',
      wyznanie: 'katolik',
    },
    {
      username: 'sahcim',
      liczba_postow: 7647,
      plec: 'mężczyzna',
      wyznanie: 'katolik',
    },
    {
      username: 'Wespecjan',
      liczba_postow: 6683,
      plec: 'mężczyzna',
      wyznanie: 'nie chcę podawać',
    },
    {
      username: 'Andy72',
      liczba_postow: 6607,
      plec: 'mężczyzna',
      wyznanie: 'katolik',
    },
    { username: 'thorwald', liczba_postow: 6272, plec: '', wyznanie: '' },
  ];

  const top10DolinaModlitwy = [
    {
      username: 'Magnolia',
      liczba_postow: 7501,
      plec: 'kobieta',
      wyznanie: 'katolicyzm',
    },
    { username: 'Skaza', liczba_postow: 2583, plec: '', wyznanie: '' },
    {
      username: 'Aloes',
      liczba_postow: 2383,
      plec: '',
      wyznanie: 'katolicyzm',
    },
    {
      username: 'daniel',
      liczba_postow: 1997,
      plec: 'mężczyzna',
      wyznanie: 'katolicyzm',
    },
    {
      username: 'Dominik',
      liczba_postow: 1976,
      plec: 'mężczyzna',
      wyznanie: 'katolicyzm',
    },
    {
      username: 'Marek Piotrowski',
      liczba_postow: 1884,
      plec: 'mężczyzna',
      wyznanie: 'katolicyzm',
    },
    {
      username: 'Lunka',
      liczba_postow: 1273,
      plec: 'kobieta',
      wyznanie: 'katolicyzm',
    },
    {
      username: 'esperanza',
      liczba_postow: 1220,
      plec: 'kobieta',
      wyznanie: 'katolicyzm',
    },
    { username: 'abi', liczba_postow: 1118, plec: '', wyznanie: 'katolicyzm' },
    { username: 'Melisska', liczba_postow: 900, plec: '', wyznanie: '' },
  ];

  const uniqueWyznania = [
    '-',
    'agnostycyzm',
    'ateizm',
    'bezwyznaniowiec',
    'chrześcijanin, inne (trynitarny i biblijny)',
    'chrześcijanin, prawosławie',
    'chrześcijanin, protestantyzm',
    'inne wyznanie',
    'judaizm',
    'katolicyzm',
    'katolik',
    'nie chcę podawać',
    'protestantyzm',
    'religia niechrześcijańska',
    'wierzę w jezusa ale nie uznaję trójcy i/lub biblii',
    'świadek jehowy',
  ];
  const uniqueCount = 16;

  const wyznaniaStats = [
    {
      wyznanie: 'katolicyzm',
      liczba_uzytkownikow: 2078,
      laczna_liczba_postow: 230129,
      procent_uzytkownikow: 45.47,
    },
    {
      wyznanie: '(nie podano)',
      liczba_uzytkownikow: 1477,
      laczna_liczba_postow: 134035,
      procent_uzytkownikow: 32.32,
    },
    {
      wyznanie: 'nie chcę podawać',
      liczba_uzytkownikow: 748,
      laczna_liczba_postow: 49398,
      procent_uzytkownikow: 16.37,
    },
    {
      wyznanie: 'chrześcijanin, protestantyzm',
      liczba_uzytkownikow: 65,
      laczna_liczba_postow: 3071,
      procent_uzytkownikow: 1.42,
    },
    {
      wyznanie: 'chrześcijanin, prawosławie',
      liczba_uzytkownikow: 44,
      laczna_liczba_postow: 1372,
      procent_uzytkownikow: 0.96,
    },
    {
      wyznanie: 'wierzę w jezusa ale nie uznaję trójcy i/lub biblii',
      liczba_uzytkownikow: 36,
      laczna_liczba_postow: 6381,
      procent_uzytkownikow: 0.79,
    },
    {
      wyznanie: 'bezwyznaniowiec',
      liczba_uzytkownikow: 35,
      laczna_liczba_postow: 5890,
      procent_uzytkownikow: 0.77,
    },
    {
      wyznanie: 'chrześcijanin, inne (trynitarny i biblijny)',
      liczba_uzytkownikow: 30,
      laczna_liczba_postow: 11427,
      procent_uzytkownikow: 0.66,
    },
    {
      wyznanie: 'religia niechrześcijańska',
      liczba_uzytkownikow: 20,
      laczna_liczba_postow: 4256,
      procent_uzytkownikow: 0.44,
    },
    {
      wyznanie: 'inne wyznanie',
      liczba_uzytkownikow: 17,
      laczna_liczba_postow: 1512,
      procent_uzytkownikow: 0.37,
    },
    {
      wyznanie: 'agnostycyzm',
      liczba_uzytkownikow: 6,
      laczna_liczba_postow: 970,
      procent_uzytkownikow: 0.13,
    },
    {
      wyznanie: 'protestantyzm',
      liczba_uzytkownikow: 6,
      laczna_liczba_postow: 237,
      procent_uzytkownikow: 0.13,
    },
    {
      wyznanie: 'ateizm',
      liczba_uzytkownikow: 4,
      laczna_liczba_postow: 11,
      procent_uzytkownikow: 0.09,
    },
    {
      wyznanie: 'świadek jehowy',
      liczba_uzytkownikow: 3,
      laczna_liczba_postow: 18,
      procent_uzytkownikow: 0.07,
    },
    {
      wyznanie: 'judaizm',
      liczba_uzytkownikow: 1,
      laczna_liczba_postow: 1,
      procent_uzytkownikow: 0.02,
    },
  ];

  const plecStats = [
    {
      plec: 'mężczyzna',
      liczba_uzytkownikow: 2220,
      laczna_liczba_postow: 252333,
      procent_uzytkownikow: 48.63,
    },
    {
      plec: 'kobieta',
      liczba_uzytkownikow: 1221,
      laczna_liczba_postow: 107786,
      procent_uzytkownikow: 26.75,
    },
    {
      plec: '(nie podano)',
      liczba_uzytkownikow: 1124,
      laczna_liczba_postow: 88589,
      procent_uzytkownikow: 24.62,
    },
  ];

  const wyznaniaPlecStats = [
    {
      wyznanie: 'katolicyzm',
      kobiety: 769,
      pKob: 37.01,
      mezczyzni: 1278,
      pMez: 61.5,
      niezid: 31,
      pNiez: 1.49,
    },
    {
      wyznanie: '(nie podano)',
      kobiety: 100,
      pKob: 6.77,
      mezczyzni: 288,
      pMez: 19.5,
      niezid: 1089,
      pNiez: 73.73,
    },
  ];

  const meanTokensStats = [
    {
      gender: 'kobieta',
      count: 769,
      mean: 162.505168,
      std: 230.359745,
      min: 0.5,
      p25: 52.666667,
      p50: 102.6,
      p75: 177.125,
      max: 3157.5,
    },
    {
      gender: 'mężczyzna',
      count: 1278,
      mean: 146.706964,
      std: 216.697075,
      min: 0.0,
      p25: 52.044118,
      p50: 95.501572,
      p75: 174.786713,
      max: 4309.0,
    },
  ];

  const postCountStats = [
    {
      gender: 'kobieta',
      count: 769,
      mean: 103.574772,
      std: 763.024215,
      min: 1.0,
      p25: 1.0,
      p50: 2.0,
      p75: 7.0,
      max: 12790.0,
    },
    {
      gender: 'mężczyzna',
      count: 1278,
      mean: 114.743349,
      std: 852.069728,
      min: 1.0,
      p25: 1.0,
      p50: 3.0,
      p75: 12.0,
      max: 16784.0,
    },
  ];

  function generateTable(headers, rows) {
    let html = '<table><thead><tr>';
    headers.forEach((h) => {
      html += `<th>${h}</th>`;
    });
    html += '</tr></thead><tbody>';
    rows.forEach((r) => {
      html += '<tr>';
      r.forEach((val) => {
        html += `<td>${val}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
    return html;
  }

  // Definicja slajdów z wcześniejszych danych jako slajdy pionowe w jednym głównym slajdzie
  const introSlide = `
    <section>
      <h1 class="main-category">Przetwarzanie i analiza korpusów</h1>
      <div>
          <p>Prezentacja statystyk dotyczących wybranych forów internetowych, ich użytkowników, wyznań oraz podstawowych charakterystyk tekstowych.</p>
      </div>
    </section>
  `;

  const forumStatsSlides = `
    <section>
      <h1 class="main-category">Statystyki forów</h1>
      <section>
          <h2>Ogólna liczba postów</h2>
          ${generateTable(
            ['Forum', 'Liczba postów', 'Procent postów'],
            forumStats.posts.map((p) => [p.forum, p.count, p.percent])
          )}
          <p><strong>Suma wszystkich postów:</strong> ${forumStats.sumPosts}</p>
      </section>
      <section>
          <h2>Statystyki unikalnych użytkowników</h2>
          ${generateTable(
            [
              'Forum',
              'Liczba unikalnych użytkowników',
              'Procent unikalnych użytkowników',
            ],
            uniqueUsersStats.users.map((u) => [u.forum, u.count, u.percent])
          )}
          <p><strong>Suma wszystkich unikalnych użytkowników:</strong> ${
            uniqueUsersStats.sumUsers
          }</p>
      </section>
    </section>
  `;

  const topUsersSlides = `
    <section>
      <h1 class="main-category">Top 10 użytkowników</h1>
      <section>
          <h2>Forum: Radio Katolik</h2>
          ${generateTable(
            ['Użytkownik', 'Liczba postów', 'Płeć', 'Wyznanie'],
            top10RadioKatolik.map((u) => [
              u.username,
              u.liczba_postow,
              u.plec || '(nie podano)',
              u.wyznanie || '(nie podano)',
            ])
          )}
      </section>
      <section>
          <h2>Forum: Dolina Modlitwy</h2>
          ${generateTable(
            ['Użytkownik', 'Liczba postów', 'Płeć', 'Wyznanie'],
            top10DolinaModlitwy.map((u) => [
              u.username,
              u.liczba_postow,
              u.plec || '(nie podano)',
              u.wyznanie || '(nie podano)',
            ])
          )}
      </section>
    </section>
  `;

  const wyznaniaSlides = `
    <section>
      <h1 class="main-category">Wyznania</h1>
      <section>
          <h2>Unikalne wartości w kolumnie "profile_wyznanie"</h2>
          <ul class="subcategories">
              ${uniqueWyznania.map((w) => `<li>${w}</li>`).join('')}
          </ul>
          <p><strong>Liczba unikalnych wartości:</strong> ${uniqueCount}</p>
      </section>
      <section>
          <h2>Statystyki wyznań (oba fora łącznie)</h2>
          ${generateTable(
            [
              'Wyznanie',
              'Liczba użytkowników',
              'Łączna liczba postów',
              'Procent użytkowników',
            ],
            wyznaniaStats.map((w) => [
              w.wyznanie,
              w.liczba_uzytkownikow,
              w.laczna_liczba_postow,
              w.procent_uzytkownikow + '%',
            ])
          )}
          <p><strong>Suma unikalnych użytkowników:</strong> 4570</p>
          <p><strong>Suma postów:</strong> 448708</p>
      </section>
    </section>
  `;

  const plecSlides = `
    <section>
      <h1 class="main-category">Płeć użytkowników</h1>
      <section>
          <h2>Statystyki płci (oba fora łącznie)</h2>
          ${generateTable(
            [
              'Płeć',
              'Liczba użytkowników',
              'Łączna liczba postów',
              'Procent użytkowników',
            ],
            plecStats.map((p) => [
              p.plec,
              p.liczba_uzytkownikow,
              p.laczna_liczba_postow,
              p.procent_uzytkownikow + '%',
            ])
          )}
          <p><strong>Suma unikalnych użytkowników:</strong> 4565</p>
          <p><strong>Suma postów:</strong> 448708</p>
      </section>
      <section>
          <h2>Statystyki wyznań i płci (oba fora łącznie)</h2>
          <p>(Przykładowy wycinek tabeli z danymi)</p>
          ${generateTable(
            [
              'Wyznanie',
              'Liczba kobiet',
              '% kobiet',
              'Liczba mężczyzn',
              '% mężczyzn',
              'Niezidentyfikowani',
              '% niezident.',
            ],
            wyznaniaPlecStats.map((w) => [
              w.wyznanie,
              w.kobiety,
              w.pKob + '%',
              w.mezczyzni,
              w.pMez + '%',
              w.niezid,
              w.pNiez + '%',
            ])
          )}
          <p><strong>Suma unikalnych użytkowników:</strong> 4570</p>
      </section>
    </section>
  `;

  const podstawoweSlides = `
    <section>
      <h1 class="main-category">Podstawowe statystyki</h1>
      <section>
          <h2>Statystyki dla mean_tokens</h2>
          ${generateTable(
            ['Płeć', 'count', 'mean', 'std', 'min', '25%', '50%', '75%', 'max'],
            meanTokensStats.map((m) => [
              m.gender,
              m.count,
              m.mean.toFixed(2),
              m.std.toFixed(2),
              m.min,
              m.p25.toFixed(2),
              m.p50.toFixed(2),
              m.p75.toFixed(2),
              m.max,
            ])
          )}
      </section>
      <section>
          <h2>Statystyki dla post_count</h2>
          ${generateTable(
            ['Płeć', 'count', 'mean', 'std', 'min', '25%', '50%', '75%', 'max'],
            postCountStats.map((m) => [
              m.gender,
              m.count,
              m.mean.toFixed(2),
              m.std.toFixed(2),
              m.min,
              m.p25,
              m.p50,
              m.p75,
              m.max,
            ])
          )}
      </section>
      <section>
          <h2>Podstawowe statystyki - wszystkie kolumny</h2>
          <p>Ze względu na obszerność danych, można tutaj przedstawić np. skrócony raport lub wykresy. W pełnej analizie uwzględniono mediany, średnie, odchylenia standardowe dla różnych grup użytkowników oraz parametry związane z "mean_tokens" i "post_count".</p>
          <p>(Szczegółowa tabela została podana w surowych danych.)</p>
      </section>
    </section>
  `;

  // Cała sekcja główna, w której będzie intro i wszystkie statystyki jako wertykalne slajdy
  const mainStatsSection = `
    <section>
      ${introSlide}
      ${forumStatsSlides}
      ${topUsersSlides}
      ${wyznaniaSlides}
      ${plecSlides}
      ${podstawoweSlides}
    </section>
  `;

  const slidesContainer = document.getElementById('category-slides');
  // Wstawiamy główną sekcję z wszystkimi slajdami statystyk na sam początek
  slidesContainer.insertAdjacentHTML('afterbegin', mainStatsSection);

  // Pozostały kod z chmurami słów i kategoriami:
  async function loadWordclouds() {
    const availableWomenTopics = Array.from({ length: 31 }, (_, i) => i + 1);
    const availableMenTopics = Array.from({ length: 34 }, (_, i) => i);

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
      img.style.width = '30%';
      img.style.height = 'auto';
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
          if (imgIndex < 30) {
            const img = document.createElement('img');
            img.style.width = '32%';
            img.style.height = 'auto';
            img.src = `visualizations/women_wordclouds/topic_${imgIndex}_wordcloud.png`;
            rowDiv.appendChild(img);
          }
        }
        container.appendChild(rowDiv);
      }
      verticalSection.appendChild(container);
      womenMainSection.appendChild(verticalSection);
    }

    // Ostatni slajd dla kobiet (2 obrazy)
    const womenLastSection = document.createElement('section');
    const lastImagesDiv = document.createElement('div');
    lastImagesDiv.style.display = 'flex';
    lastImagesDiv.style.justifyContent = 'center';
    lastImagesDiv.style.alignItems = 'center';
    lastImagesDiv.style.gap = '0';
    lastImagesDiv.style.marginTop = '15vh';

    [30, 31].forEach((topicNum) => {
      const img = document.createElement('img');
      img.src = `visualizations/women_wordclouds/topic_${topicNum}_wordcloud.png`;
      img.style.width = '45%';
      img.style.height = 'auto';
      lastImagesDiv.appendChild(img);
    });

    womenLastSection.appendChild(lastImagesDiv);
    womenMainSection.appendChild(womenLastSection);

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
      img.style.width = '30%';
      img.style.height = 'auto';
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
            const remainingImages = Math.min(3, 34 - (i + row * 3));
            img.style.width = `${90 / remainingImages}%`;
            img.style.height = 'auto';
            img.src = `visualizations/men_wordclouds/topic_${imgIndex}_wordcloud.png`;
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

    const datasets = [];
    const labels = [];
    const fullLabels = [];

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

    const categoryData = data.categories.map((cat) => ({
      label: cat.name,
      data: [],
      backgroundColor:
        categoryColors[cat.name]?.bg || 'rgba(158, 158, 158, 0.6)',
      borderColor: categoryColors[cat.name]?.border || 'rgba(158, 158, 158, 1)',
      borderWidth: 1,
    }));

    data.categories.forEach((category, catIndex) => {
      category.subcategories.forEach((subcategory) => {
        fullLabels.push(subcategory.name);
        labels.push(truncateText(subcategory.name));
        for (let i = 0; i < catIndex; i++) {
          categoryData[i].data.push(0);
        }
        categoryData[catIndex].data.push(subcategory.count);
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

    const datasets = [];
    const labels = [];
    const fullLabels = [];

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

    const subcategoryData = category.subcategories.map((subcat, index) => ({
      label: subcat.name,
      data: [],
      backgroundColor: subcategoryColors[index].bg,
      borderColor: subcategoryColors[index].border,
      borderWidth: 1,
    }));

    category.subcategories.forEach((subcategory, subIndex) => {
      if (subcategory.subsubcategories) {
        subcategory.subsubcategories.forEach((subsubcat) => {
          fullLabels.push(subsubcat.name);
          labels.push(truncateText(subsubcat.name));
          for (let i = 0; i < subIndex; i++) {
            subcategoryData[i].data.push(0);
          }
          subcategoryData[subIndex].data.push(subsubcat.count);
          for (let i = subIndex + 1; i < category.subcategories.length; i++) {
            subcategoryData[i].data.push(0);
          }
        });
      }
    });

    datasets.push(...subcategoryData);

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

  const [womenSection, menSection] = await loadWordclouds();
  slidesContainer.insertBefore(menSection, slidesContainer.firstChild);
  slidesContainer.insertBefore(womenSection, slidesContainer.firstChild);

  const response = await fetch('./reports/category_analysis.json');
  const data = await response.json();

  const chartSlide = await createCategoryChart(data);
  if (chartSlide) {
    slidesContainer.appendChild(chartSlide);
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
