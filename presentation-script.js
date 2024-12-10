document.addEventListener('DOMContentLoaded', async () => {
  // Funkcja do tworzenia tabeli HTML z danych
  function createTable(headers, rows) {
    const table = document.createElement('table');
    table.style.width = '80%';
    table.style.margin = '0 auto';
    table.style.borderCollapse = 'collapse';
    table.style.fontSize = '0.9em';

    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    headers.forEach((h) => {
      const th = document.createElement('th');
      th.textContent = h;
      th.style.borderBottom = '1px solid #ccc';
      th.style.padding = '8px';
      th.style.textAlign = 'center';
      trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    rows.forEach((r) => {
      const tr = document.createElement('tr');
      r.forEach((cell) => {
        const td = document.createElement('td');
        td.textContent = cell;
        td.style.borderBottom = '1px solid #eee';
        td.style.padding = '6px';
        td.style.textAlign = 'center';
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    return table;
  }

  const titleSlide = document.createElement('section');
  titleSlide.style.display = 'flex';
  titleSlide.style.flexDirection = 'column';
  titleSlide.style.alignItems = 'center';
  titleSlide.style.justifyContent = 'center';
  titleSlide.style.height = '100%';
  titleSlide.style.textAlign = 'center';

  const title = document.createElement('h1');
  title.textContent =
    'Wypowiedzi kobiet i mężczyzn na katolickich forach dyskusyjnych w perspektywie lingwistyki komputerowej (modelowania tematycznego)';
  title.style.fontSize = '2em';
  title.style.marginBottom = '50px';
  titleSlide.appendChild(title);

  const authors = document.createElement('p');
  authors.innerHTML = `
    mgr Albert Leśniak<br>
    UJ Wydział Studiów Międzynarodowych i Politycznych<br>
    albert.lesniak@uj.edu.pl<br><br>
    prof. dr hab. Zbigniew Pasek<br>
    AGH w Krakowie, Wydział Humanistyczny<br>
    pasek@agh.edu.pl
  `;
  authors.style.fontSize = '0.75em';
  authors.style.lineHeight = '1.8em';
  titleSlide.appendChild(authors);

  // Wstawiamy stronę tytułową na początek prezentacji
  const slidesContainer = document.getElementById('category-slides');
  slidesContainer.insertBefore(titleSlide, slidesContainer.firstChild);

  // Tworzymy główną sekcję na początku prezentacji z danymi statystycznymi
  const statsMainSection = document.createElement('section');

  // Pierwszy slajd: Materiał badawczy
  const materialSlide = document.createElement('section');
  materialSlide.style.display = 'flex';
  materialSlide.style.flexDirection = 'column';
  materialSlide.style.alignItems = 'center';
  materialSlide.style.justifyContent = 'center';
  materialSlide.style.height = '100%';

  // Nagłówek
  const materialHeader = document.createElement('h1');
  materialHeader.textContent = 'Materiał badawczy';
  materialHeader.style.marginBottom = '50px';
  materialSlide.appendChild(materialHeader);

  // Kontener na dwie kolumny
  const columnsContainer1 = document.createElement('div');
  columnsContainer1.style.display = 'flex';
  columnsContainer1.style.justifyContent = 'center';
  columnsContainer1.style.alignItems = 'flex-start';
  columnsContainer1.style.gap = '50px';
  columnsContainer1.style.marginTop = '30px';

  // Lewa kolumna - Forum Radio Katolik
  const leftColumn1 = document.createElement('div');
  leftColumn1.style.display = 'flex';
  leftColumn1.style.flexDirection = 'column';
  leftColumn1.style.alignItems = 'center';

  const leftTitle1 = document.createElement('h2');
  leftTitle1.textContent = 'Forum Radio Katolik';
  leftTitle1.style.textAlign = 'center';
  leftTitle1.style.fontSize = '1.2em';
  leftColumn1.appendChild(leftTitle1);

  const leftImg1 = document.createElement('img');
  leftImg1.src = './images/radio_katolik.png';
  leftImg1.style.height = '600px'; // Wszystkie obrazy mają równą wysokość
  leftImg1.style.objectFit = 'contain'; // Zachowanie proporcji
  leftImg1.style.display = 'block';
  leftImg1.style.margin = '20px 0';
  leftColumn1.appendChild(leftImg1);

  const leftLink1 = document.createElement('p');
  leftLink1.textContent = 'https://www.dyskusje.radiokatolik.pl/';
  leftLink1.style.textAlign = 'center';
  leftColumn1.appendChild(leftLink1);

  // Prawa kolumna - Forum Dolina Modlitwy
  const rightColumn1 = document.createElement('div');
  rightColumn1.style.display = 'flex';
  rightColumn1.style.flexDirection = 'column';
  rightColumn1.style.alignItems = 'center';

  const rightTitle1 = document.createElement('h2');
  rightTitle1.textContent = 'Forum Dolina Modlitwy';
  rightTitle1.style.textAlign = 'center';
  rightTitle1.style.fontSize = '1.2em';
  rightColumn1.appendChild(rightTitle1);

  const rightImg1 = document.createElement('img');
  rightImg1.src = './images/dolina_modlitwy.png';
  rightImg1.style.height = '600px'; // Wszystkie obrazy mają równą wysokość
  rightImg1.style.objectFit = 'contain'; // Zachowanie proporcji
  rightImg1.style.display = 'block';
  rightImg1.style.margin = '20px 0';
  rightColumn1.appendChild(rightImg1);

  const rightLink1 = document.createElement('p');
  rightLink1.textContent = 'https://dolinamodlitwy.pl/forum/';
  rightLink1.style.textAlign = 'center';
  rightColumn1.appendChild(rightLink1);

  columnsContainer1.appendChild(leftColumn1);
  columnsContainer1.appendChild(rightColumn1);
  materialSlide.appendChild(columnsContainer1);

  // Dodanie slajdu
  statsMainSection.appendChild(materialSlide);

  // Drugi slajd: Statystyki korpusów
  const statsSlide = document.createElement('section');
  statsSlide.style.display = 'flex';
  statsSlide.style.flexDirection = 'column';
  statsSlide.style.alignItems = 'center';
  statsSlide.style.justifyContent = 'center';
  statsSlide.style.height = '100%';

  // Nagłówek
  const statsHeader = document.createElement('h1');
  statsHeader.textContent = 'Statystyki korpusów';
  statsHeader.style.marginBottom = '50px';
  statsSlide.appendChild(statsHeader);

  // Kontener na tabelkę
  const tableContainer2 = document.createElement('div');
  tableContainer2.style.display = 'flex';
  tableContainer2.style.flexDirection = 'column';
  tableContainer2.style.justifyContent = 'center';
  tableContainer2.style.alignItems = 'center';
  tableContainer2.style.width = '100%';
  tableContainer2.style.marginTop = '20px';

  // Tabela statystyk forów
  const headers2 = ['Nazwa forum', 'Liczba postów', 'Procent postów'];
  const rows2 = [
    ['Radio Katolik', '415048', '92.50%'],
    ['Dolina Modlitwy', '33660', '7.50%'],
  ];
  const tableElem2 = createTable(headers2, rows2);
  tableContainer2.appendChild(tableElem2);

  // Podpis pod tabelką
  const summary2 = document.createElement('p');
  summary2.textContent = 'Suma wszystkich postów: 448708';
  summary2.style.textAlign = 'center';
  summary2.style.marginTop = '30px';
  tableContainer2.appendChild(summary2);

  statsSlide.appendChild(tableContainer2);

  // Dodanie slajdu
  statsMainSection.appendChild(statsSlide);

  // 2. Statystyki unikalnych użytkowników
  {
    const usersSection = document.createElement('section');
    usersSection.style.display = 'flex';
    usersSection.style.flexDirection = 'column';
    usersSection.style.height = '100%';
    usersSection.style.justifyContent = 'space-between'; // Rozkładanie w pionie
    usersSection.style.alignItems = 'center'; // Wyśrodkowanie w poziomie

    // Nagłówek
    const h = document.createElement('h1');
    h.textContent = 'Statystyki unikalnych użytkowników na forach';
    h.style.textAlign = 'center'; // Wyśrodkowanie tekstu
    usersSection.appendChild(h);

    // Kontener na tabelkę
    const middleContainer = document.createElement('div');
    middleContainer.style.marginTop = '200px';
    middleContainer.style.flex = '1'; // Zajmowanie całej dostępnej przestrzeni
    middleContainer.style.display = 'flex';
    middleContainer.style.flexDirection = 'column';
    middleContainer.style.justifyContent = 'center'; // Pionowe wyśrodkowanie
    middleContainer.style.alignItems = 'center'; // Poziome wyśrodkowanie

    // Tabela statystyk unikalnych użytkowników
    const headers = [
      'Nazwa forum',
      'Liczba unikalnych użytkowników',
      'Procent unikalnych użytkowników',
    ];
    const rows = [
      ['Radio Katolik', '4206', '92.12%'],
      ['Dolina Modlitwy', '360', '7.88%'],
    ];
    const tableElem = createTable(headers, rows);
    middleContainer.appendChild(tableElem);

    // Dodajemy kontener tabelki do sekcji
    usersSection.appendChild(middleContainer);

    // Podpis na dole
    const summary = document.createElement('p');
    summary.textContent = 'Suma wszystkich unikalnych użytkowników: 4566';
    summary.style.textAlign = 'center'; // Wyśrodkowanie tekstu
    summary.style.margin = '150px 0'; // Odstęp od innych elementów
    usersSection.appendChild(summary);

    // Dodanie sekcji do głównego kontenera slajdów
    statsMainSection.appendChild(usersSection);
  }
  // 3. Top 10 użytkowników na forach (Radio Katolik i Dolina Modlitwy)
  {
    const topUsersSection = document.createElement('section');
    topUsersSection.style.display = 'flex';
    topUsersSection.style.flexDirection = 'column';
    topUsersSection.style.alignItems = 'center';
    topUsersSection.style.justifyContent = 'flex-start';
    topUsersSection.style.height = '100%';

    const h = document.createElement('h1');
    h.textContent = 'Top 10 użytkowników na forach';
    topUsersSection.appendChild(h);

    // Kontener na dwie kolumny z tabelami
    const columnsContainer = document.createElement('div');
    columnsContainer.style.display = 'flex';
    columnsContainer.style.justifyContent = 'center';
    columnsContainer.style.alignItems = 'flex-start';
    columnsContainer.style.gap = '20px'; // Zwiększony odstęp między tabelami
    columnsContainer.style.marginTop = '50px'; // Mniejszy margines u góry
    columnsContainer.style.marginBottom = '0px';

    // Lewa kolumna - Radio Katolik
    const leftColumn = document.createElement('div');
    leftColumn.style.display = 'flex';
    leftColumn.style.flexDirection = 'column';
    leftColumn.style.alignItems = 'center';

    const leftTitle = document.createElement('h2');
    leftTitle.textContent = 'Radio Katolik';
    leftTitle.style.textAlign = 'center';
    leftTitle.style.fontSize = '1.2em';
    leftColumn.appendChild(leftTitle);

    // Tabela dla Radio Katolik
    const leftHeaders = ['Użytkownik', 'Liczba postów', 'Płeć', 'Wyznanie'];
    const leftRows = [
      ['Yarpen Zirgin', '16784', 'mężczyzna', 'katolik'],
      ['Barney', '15587', 'mężczyzna', 'katolik'],
      ['Jockey', '12958', 'mężczyzna', 'katolik'],
      ['merss', '12790', 'kobieta', 'katolik'],
      ['Małgosia', '10059', 'kobieta', 'katolik'],
      ['Brandeisbluesky', '7987', 'kobieta', 'katolik'],
      ['sahcim', '7647', 'mężczyzna', 'katolik'],
      ['Wespecjan', '6683', 'mężczyzna', 'nie chcę podawać'],
      ['Andy72', '6607', 'mężczyzna', 'katolik'],
      ['thorwald', '6272', '', ''],
    ];
    const leftTable = createTable(leftHeaders, leftRows);
    leftTable.style.transform = 'scale(0.8)'; // Zmniejszenie wielkości tabeli
    leftTable.style.transformOrigin = 'top'; // Punkt zaczepienia transformacji
    leftTable.style.marginBottom = '20px'; // Zmniejszony odstęp między tabelami

    // Wyrównanie kolumn i dodanie odstępów między nimi
    leftTable.querySelectorAll('td, th').forEach((cell, index) => {
      cell.style.padding = '10px 15px'; // Większe odstępy między kolumnami
      if (index % leftHeaders.length === 0) {
        cell.style.textAlign = 'left'; // Wyrównanie pierwszej kolumny do lewej
      } else {
        cell.style.textAlign = 'center'; // Pozostałe kolumny do środka
      }
    });

    leftColumn.appendChild(leftTable);

    // Prawa kolumna - Dolina Modlitwy
    const rightColumn = document.createElement('div');
    rightColumn.style.display = 'flex';
    rightColumn.style.flexDirection = 'column';
    rightColumn.style.alignItems = 'center';

    const rightTitle = document.createElement('h2');
    rightTitle.textContent = 'Dolina Modlitwy';
    rightTitle.style.textAlign = 'center';
    rightTitle.style.fontSize = '1.2em';
    rightColumn.appendChild(rightTitle);

    // Tabela dla Dolina Modlitwy
    const rightHeaders = [
      'Użytkownik',
      'Liczba postów',
      'Płeć (profil)',
      'Wyznanie (profil)',
    ];
    const rightRows = [
      ['Magnolia', '7501', 'kobieta', 'katolicyzm'],
      ['Skaza', '2583', '', ''],
      ['Aloes', '2383', '', 'katolicyzm'],
      ['daniel', '1997', 'mężczyzna', 'katolicyzm'],
      ['Dominik', '1976', 'mężczyzna', 'katolicyzm'],
      ['Marek Piotrowski', '1884', 'mężczyzna', 'katolicyzm'],
      ['Lunka', '1273', 'kobieta', 'katolicyzm'],
      ['esperanza', '1220', 'kobieta', 'katolicyzm'],
      ['abi', '1118', '', 'katolicyzm'],
      ['Melisska', '900', '', ''],
    ];
    const rightTable = createTable(rightHeaders, rightRows);
    rightTable.style.transform = 'scale(0.8)'; // Zmniejszenie wielkości tabeli
    rightTable.style.transformOrigin = 'top'; // Punkt zaczepienia transformacji

    // Wyrównanie kolumn i dodanie odstępów między nimi
    rightTable.querySelectorAll('td, th').forEach((cell, index) => {
      cell.style.padding = '10px 15px'; // Większe odstępy między kolumnami
      if (index % rightHeaders.length === 0) {
        cell.style.textAlign = 'left'; // Wyrównanie pierwszej kolumny do lewej
      } else {
        cell.style.textAlign = 'center'; // Pozostałe kolumny do środka
      }
    });

    rightColumn.appendChild(rightTable);

    columnsContainer.appendChild(leftColumn);
    columnsContainer.appendChild(rightColumn);

    topUsersSection.appendChild(columnsContainer);

    // Dodajemy gotowy slajd do kontenera
    statsMainSection.appendChild(topUsersSection);
  }
  // 6. Statystyki wyznań (obie fora łącznie)
  {
    const wyznStatSection = document.createElement('section');
    wyznStatSection.style.display = 'flex';
    wyznStatSection.style.flexDirection = 'column';
    wyznStatSection.style.height = '100%';
    wyznStatSection.style.justifyContent = 'space-between';
    wyznStatSection.style.alignItems = 'center';
    wyznStatSection.style.padding = '0 20px';

    const h2 = document.createElement('h1');
    h2.textContent = 'Statystyki wyznań dla obu forów łącznie';
    h2.style.marginTop = '5px'; // Minimalny odstęp od góry
    h2.style.marginBottom = '0px'; // Minimalny odstęp pod nagłówkiem
    wyznStatSection.appendChild(h2);

    const middleContainer = document.createElement('div');
    middleContainer.style.flex = '1';
    middleContainer.style.display = 'flex';
    middleContainer.style.flexDirection = 'column';
    middleContainer.style.justifyContent = 'center';
    middleContainer.style.alignItems = 'center';
    middleContainer.style.marginBottom = '0'; // Usunięcie marginesu

    const headers = [
      'Wyznanie',
      'Liczba użytkowników',
      'Łączna liczba postów',
      'Procent użytkowników',
    ];
    const rows = [
      ['katolicyzm', '2078', '230129', '45.47%'],
      ['(nie podano)', '1477', '134035', '32.32%'],
      ['nie chcę podawać', '748', '49398', '16.37%'],
      ['chrześcijanin, protestantyzm', '65', '3071', '1.42%'],
      ['chrześcijanin, prawosławie', '44', '1372', '0.96%'],
      [
        'wierzę w jezusa ale nie uznaję trójcy i/lub biblii',
        '36',
        '6381',
        '0.79%',
      ],
      ['bezwyznaniowiec', '35', '5890', '0.77%'],
      ['chrześcijanin, inne (trynitarny i biblijny)', '30', '11427', '0.66%'],
      ['religia niechrześcijańska', '20', '4256', '0.44%'],
      ['inne wyznanie', '17', '1512', '0.37%'],
      ['agnostycyzm', '6', '970', '0.13%'],
      ['protestantyzm', '6', '237', '0.13%'],
      ['ateizm', '4', '11', '0.09%'],
      ['świadek jehowy', '3', '18', '0.07%'],
      ['judaizm', '1', '1', '0.02%'],
    ];

    const tableElem = createTable(headers, rows);
    tableElem.style.width = '100%'; // Rozszerzenie tabeli
    tableElem.style.transform = 'scale(0.8)'; // Delikatne zmniejszenie tabeli
    tableElem.style.transformOrigin = 'center'; // Wycentrowanie zmniejszenia
    tableElem.style.margin = '0'; // Usunięcie marginesów
    tableElem.querySelectorAll('td:first-child').forEach((cell) => {
      cell.style.textAlign = 'left'; // Wyrównanie pierwszej kolumny do lewej
      cell.style.paddingLeft = '10px'; // Dodanie lekkiego odstępu od lewej
    });
    middleContainer.appendChild(tableElem);

    wyznStatSection.appendChild(middleContainer);

    const summaryContainer = document.createElement('div');
    summaryContainer.style.textAlign = 'center'; // Wyśrodkowanie podsumowania
    summaryContainer.style.marginTop = '10px'; // Minimalny odstęp od tabeli

    const summary1 = document.createElement('p');
    summary1.textContent = 'Suma unikalnych użytkowników: 4570';
    summary1.style.margin = '5px 0'; // Zmniejszenie marginesu
    const summary2 = document.createElement('p');
    summary2.textContent = 'Suma postów: 448708';
    summary2.style.margin = '5px 0'; // Zmniejszenie marginesu

    summaryContainer.appendChild(summary1);
    summaryContainer.appendChild(summary2);
    wyznStatSection.appendChild(summaryContainer);

    statsMainSection.appendChild(wyznStatSection);
  }

  // 7. Statystyki płci (obie fora łącznie)
  {
    const plecSection = document.createElement('section');
    plecSection.style.display = 'flex';
    plecSection.style.flexDirection = 'column';
    plecSection.style.height = '100%';
    plecSection.style.justifyContent = 'space-between';
    plecSection.style.alignItems = 'center';
    plecSection.style.padding = '0 20px';

    const h2 = document.createElement('h1');
    h2.textContent = 'Statystyki płci dla obu forów łącznie';
    h2.style.marginTop = '20px';
    h2.style.marginBottom = '150px';
    plecSection.appendChild(h2);

    const middleContainer = document.createElement('div');
    middleContainer.style.flex = '1';
    middleContainer.style.display = 'flex';
    middleContainer.style.flexDirection = 'column';
    middleContainer.style.justifyContent = 'center';
    middleContainer.style.alignItems = 'center';
    middleContainer.style.marginBottom = '200px';

    const headers = [
      'Płeć',
      'Liczba użytkowników',
      'Łączna liczba postów',
      'Procent użytkowników',
    ];
    const rows = [
      ['mężczyzna', '2220', '252333', '48.63%'],
      ['kobieta', '1221', '107786', '26.75%'],
      ['(nie podano)', '1124', '88589', '24.62%'],
    ];

    middleContainer.appendChild(createTable(headers, rows));
    plecSection.appendChild(middleContainer);

    const summaryContainer = document.createElement('div');
    const summary1 = document.createElement('p');
    summary1.textContent = 'Suma unikalnych użytkowników: 4565';
    summary1.style.textAlign = 'center';
    summary1.style.margin = '10px 0';
    const summary2 = document.createElement('p');
    summary2.textContent = 'Suma postów: 448708';
    summary2.style.textAlign = 'center';
    summary2.style.margin = '10px 0';
    summaryContainer.appendChild(summary1);
    summaryContainer.appendChild(summary2);
    plecSection.appendChild(summaryContainer);

    statsMainSection.appendChild(plecSection);
  }
  // 8. Statystyki wyznań i płci łącznie
  {
    const wyznPlecSection = document.createElement('section');
    wyznPlecSection.style.display = 'flex';
    wyznPlecSection.style.flexDirection = 'column';
    wyznPlecSection.style.height = '100%';
    wyznPlecSection.style.justifyContent = 'flex-start'; // Elementy zaczynają od góry
    wyznPlecSection.style.alignItems = 'center';
    wyznPlecSection.style.padding = '0 20px';

    const h2 = document.createElement('h1');
    h2.textContent = 'Statystyki wyznań i płci dla obu forów łącznie';
    h2.style.marginTop = '10px'; // Zmniejszenie marginesu od góry
    h2.style.marginBottom = '10px'; // Zmniejszenie odstępu pod nagłówkiem
    wyznPlecSection.appendChild(h2);

    const middleContainer = document.createElement('div');
    middleContainer.style.flex = '0'; // Wyłączamy elastyczność
    middleContainer.style.display = 'flex';
    middleContainer.style.flexDirection = 'column';
    middleContainer.style.justifyContent = 'center';
    middleContainer.style.alignItems = 'center';
    middleContainer.style.marginTop = '-20px'; // Podniesienie tabeli bliżej nagłówka
    middleContainer.style.marginBottom = '20px'; // Minimalny margines od dołu

    const headers = [
      'Wyznanie',
      'Łączna liczba kobiet',
      'Procentowy udział kobiet',
      'Łączna liczba mężczyzn',
      'Procentowy udział mężczyzn',
      'Łączna liczba niezidentyfikowanych',
      'Procentowy udział niezidentyfikowanych',
    ];
    const rows = [
      ['katolicyzm', '769', '37.01%', '1278', '61.50%', '31', '1.49%'],
      ['(nie podano)', '100', '6.77%', '288', '19.50%', '1089', '73.73%'],
      ['nie chcę podawać', '289', '38.64%', '459', '61.36%', '0', '0.00%'],
      [
        'chrześcijanin, protestantyzm',
        '22',
        '33.85%',
        '43',
        '66.15%',
        '0',
        '0.00%',
      ],
      [
        'chrześcijanin, prawosławie',
        '10',
        '22.73%',
        '34',
        '77.27%',
        '0',
        '0.00%',
      ],
      [
        'wierzę w jezusa ale nie uznaję trójcy i/lub biblii',
        '3',
        '8.33%',
        '33',
        '91.67%',
        '0',
        '0.00%',
      ],
      ['bezwyznaniowiec', '9', '25.71%', '26', '74.29%', '0', '0.00%'],
      [
        'chrześcijanin, inne (trynitarny i biblijny)',
        '9',
        '30.00%',
        '21',
        '70.00%',
        '0',
        '0.00%',
      ],
      [
        'religia niechrześcijańska',
        '4',
        '20.00%',
        '16',
        '80.00%',
        '0',
        '0.00%',
      ],
      ['inne wyznanie', '4', '23.53%', '12', '70.59%', '1', '5.88%'],
      ['agnostycyzm', '0', '0.00%', '4', '66.67%', '2', '33.33%'],
      ['protestantyzm', '1', '16.67%', '5', '83.33%', '0', '0.00%'],
      ['ateizm', '2', '50.00%', '2', '50.00%', '0', '0.00%'],
      ['świadek jehowy', '0', '0.00%', '1', '33.33%', '2', '66.67%'],
      ['judaizm', '0', '0.00%', '1', '100.00%', '0', '0.00%'],
    ];

    const tableElem = createTable(headers, rows);
    tableElem.style.width = '100%'; // Rozszerzenie tabeli do pełnej szerokości
    tableElem.style.transform = 'scale(0.9)'; // Lekkie zmniejszenie tabeli
    tableElem.style.transformOrigin = 'center'; // Wycentrowanie
    tableElem.style.margin = '0'; // Usunięcie nadmiarowych marginesów
    tableElem.style.fontSize = '0.6em'; // Zmniejszenie rozmiaru czcionki
    tableElem.querySelectorAll('td:first-child').forEach((cell) => {
      cell.style.textAlign = 'left'; // Wyrównanie pierwszej kolumny do lewej
      cell.style.paddingLeft = '10px'; // Dodanie lekkiego wcięcia
    });
    middleContainer.appendChild(tableElem);

    wyznPlecSection.appendChild(middleContainer);

    const summary = document.createElement('p');
    summary.textContent = 'Suma unikalnych użytkowników: 4570';
    summary.style.textAlign = 'center';
    summary.style.marginTop = '10px'; // Minimalny odstęp od tabeli
    wyznPlecSection.appendChild(summary);

    statsMainSection.appendChild(wyznPlecSection);
  }
  // 9. Rozkład liczby tokneów w postach kobiet i mężczyzn
  {
    const meanTokensSection = document.createElement('section');
    meanTokensSection.style.display = 'flex';
    meanTokensSection.style.flexDirection = 'column';
    meanTokensSection.style.alignItems = 'center';
    meanTokensSection.style.justifyContent = 'center';
    meanTokensSection.style.height = '100%';

    const h2 = document.createElement('h1');
    h2.textContent = 'Rozkład liczby tokneów w postach kobiet i mężczyzn';
    h2.style.marginBottom = '30px'; // Zmniejszenie odstępu pod nagłówkiem
    meanTokensSection.appendChild(h2);

    // Wykres
    const img = document.createElement('img');
    img.src = './images/tokens_chart.png';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.style.maxWidth = '100%';
    img.style.width = '80%'; // Zmniejszenie szerokości wykresu
    img.style.height = 'auto';
    meanTokensSection.appendChild(img);

    // Przekształcone dane (pivot tabeli)
    const pivotHeaders = [
      'Kategoria',
      'Liczba postów',
      'Średnia',
      'Odchylenie standardowe',
      'Minimalna',
      '25%',
      'Mediana (50%)',
      '75%',
      'Maksymalna',
    ];
    const pivotRows = [
      [
        'Kobiety',
        '79649.00',
        '113.66',
        '246.57',
        '0.00',
        '15.00',
        '45.00',
        '117.00',
        '11502.00',
      ],
      [
        'Mężczyźni',
        '146642.00',
        '104.03',
        '225.30',
        '0.00',
        '21.00',
        '47.00',
        '108.00',
        '11810.00',
      ],
    ];

    const pivotTable = createTable(pivotHeaders, pivotRows);

    // Stylowanie tabeli
    pivotTable.style.marginTop = '30px'; // Odstęp od wykresu
    pivotTable.style.transform = 'scale(0.9)'; // Zmniejszenie rozmiaru tabeli
    pivotTable.style.transformOrigin = 'center'; // Wycentrowanie skalowania
    pivotTable.style.fontSize = '0.9em'; // Mniejsza czcionka
    pivotTable.style.width = '70%'; // Dopasowanie szerokości

    pivotTable
      .querySelectorAll('td:first-child, th:first-child')
      .forEach((cell) => {
        cell.style.textAlign = 'left'; // Wyrównanie pierwszej kolumny do lewej
        cell.style.paddingLeft = '10px'; // Wcięcie
      });

    meanTokensSection.appendChild(pivotTable);
    statsMainSection.appendChild(meanTokensSection);
  }
  {
    const allStatsSection = document.createElement('section');
    allStatsSection.style.display = 'flex';
    allStatsSection.style.flexDirection = 'column';
    allStatsSection.style.justifyContent = 'center';
    allStatsSection.style.alignItems = 'center';
    allStatsSection.style.height = '100%';
    allStatsSection.style.padding = '0 40px';

    const h2 = document.createElement('h1');
    h2.textContent = 'Ostateczna konstrukcja korpusów';
    h2.style.marginBottom = '50px';
    h2.style.fontSize = '1.5em'; // Zmniejszono czcionkę nagłówka
    allStatsSection.appendChild(h2);

    const listContainer = document.createElement('div');
    listContainer.style.width = '80%';

    const ol = document.createElement('ol');
    ol.style.fontSize = '0.9em'; // Zmniejszona czcionka listy
    ol.style.lineHeight = '1.6em'; // Dostosowany odstęp między punktami

    const li1 = document.createElement('li');
    li1.innerHTML = `<b>Długość postów:</b><br>
      <span style="font-size: 0.85em; line-height: 1.4em;">
        - Minimalna długość: 25 tokenów<br>
        - Maksymalna długość: 1000 tokenów<br>
        Posty poniżej 25 tokenów mogą być zbyt krótkie, aby zawierać znaczącą treść do analizy tematycznej. Posty powyżej 1000 tokenów mogą być zbyt długie i niereprezentacyjne dla typowej dyskusji na forum.
      </span>`;
    ol.appendChild(li1);

    const li2 = document.createElement('li');
    li2.innerHTML = `<b>Liczba postów od jednego użytkownika:</b><br>
      <span style="font-size: 0.85em; line-height: 1.4em;">
        - Maksymalnie 100 postów od jednego użytkownika<br>
        Ograniczenie to zapewni różnorodność głosów i perspektyw, zapobiegając dominacji korpusu przez pojedynczych, bardzo aktywnych użytkowników.
      </span>`;
    ol.appendChild(li2);

    const li3 = document.createElement('li');
    li3.innerHTML = `<b>Równowaga płci:</b><br>
      <span style="font-size: 0.85em; line-height: 1.4em;">
        - Wybierz równą liczbę postów od kobiet i mężczyzn<br>
        Zapewni to reprezentację obu płci w analizie, co jest ważne dla zrozumienia potencjalnych różnic w tematach dyskusji.
      </span>`;
    ol.appendChild(li3);

    const li4 = document.createElement('li');
    li4.innerHTML = `<b>Ostateczny rozmiar korpusów:</b><br>
      <span style="font-size: 0.85em; line-height: 1.4em;">
        - Korpus kobiet: 7980 postów<br>
        - Korpus mężczyzn: 7980 postów
      </span>`;
    ol.appendChild(li4);

    listContainer.appendChild(ol);
    allStatsSection.appendChild(listContainer);
    statsMainSection.appendChild(allStatsSection);
  }

  slidesContainer.insertBefore(statsMainSection, slidesContainer.children[1]);
  // Slajd o nazwie "Modelowanie Tematyczne"
  const topicModelingSection = document.createElement('section');
  topicModelingSection.style.display = 'flex';
  topicModelingSection.style.flexDirection = 'column';
  topicModelingSection.style.alignItems = 'center';
  topicModelingSection.style.justifyContent = 'flex-start'; // Wyśrodkowanie w pionie zmienione na górne
  topicModelingSection.style.height = '100%';
  topicModelingSection.style.padding = '0 20px';

  const topicModelingTitle = document.createElement('h1');
  topicModelingTitle.innerHTML = 'Modelowanie Tematyczne';
  topicModelingTitle.style.marginBottom = '50px'; // Zmniejszenie odstępu pod nagłówkiem
  topicModelingTitle.style.fontSize = '1.2em'; // Jeszcze mniejsza czcionka nagłówka
  topicModelingSection.appendChild(topicModelingTitle);

  const topicModelingContent = document.createElement('div');
  topicModelingContent.style.display = 'flex';
  topicModelingContent.style.flexDirection = 'column';
  topicModelingContent.style.alignItems = 'center';

  const topicModelingText = document.createElement('p');
  topicModelingText.innerHTML = `
  <span style="font-size: 1em; line-height: 1.4em; text-align: center; display: block;">
    <b>Modelowanie tematyczne</b> to proces analizy dużych zbiorów tekstów w celu 
    identyfikacji ukrytych struktur tematycznych. W tym badaniu zastosowano algorytm 
    Top2Vec, który pozwala na automatyczne grupowanie dokumentów w tematy, 
    bazując na ich semantycznym podobieństwie.
  </span>
  <br>
`;
  topicModelingContent.appendChild(topicModelingText);

  const topicModelingList = document.createElement('div');
  topicModelingList.style.display = 'flex';
  topicModelingList.style.justifyContent = 'center';
  topicModelingList.style.alignItems = 'flex-start';
  topicModelingList.style.marginLeft = '0%';

  const topicModelingListContent = document.createElement('p');
  topicModelingListContent.innerHTML = `
  <span style="font-size: 0.8em; line-height: 1.3em; display: block; text-align: center; font-weight: bold;">
    Przykładowe kroki w modelowaniu tematycznym:
  </span>
  <ul style="text-align: left; margin-top: 20px; font-size: 0.75em; line-height: 1.2em; align-self: flex-start; width: 85%; margin-left: 7.5%;">
    <li>Przetwarzanie tekstów w celu usunięcia szumu (<i>stop słowa</i>, <i>lematyzacja</i>).</li>
    <li>Tworzenie reprezentacji numerycznych tekstów (np. <i>wektory embeddingowe</i>).</li>
    <li>Grupowanie dokumentów w tematy przy użyciu algorytmu klasteryzacji.</li>
    <li>Analiza wygenerowanych tematów poprzez ich reprezentację graficzną (np. <i>chmury słów</i>).</li>
  </ul>
`;
  topicModelingList.appendChild(topicModelingListContent);
  topicModelingContent.appendChild(topicModelingList);

  topicModelingSection.appendChild(topicModelingContent);

  // Wstawiamy slajd o modelowaniu tematycznym zaraz po statystykach
  slidesContainer.insertBefore(
    topicModelingSection,
    slidesContainer.children[2]
  );
  // Slajdy algorytmu Top2Vec
  const top2VecMainSection = document.createElement('section');

  // Tytuł sekcji Top2Vec
  const top2VecTitle = document.createElement('h1');
  top2VecTitle.textContent = 'Algorytm Top2Vec';
  top2VecTitle.style.marginBottom = '20px'; // Zmniejszony odstęp
  top2VecTitle.style.fontSize = '1.2em'; // Zmniejszona czcionka
  top2VecMainSection.appendChild(top2VecTitle);

  // Funkcja do tworzenia slajdu
  function createTop2VecSlide(description, imagePath) {
    const slideSection = document.createElement('section');
    slideSection.style.paddingTop = '20px'; // Przesunięcie treści do góry

    const descriptionP = document.createElement('p');
    descriptionP.style.fontSize = '0.9em'; // Zmniejszona czcionka
    descriptionP.style.lineHeight = '1.4em'; // Zmniejszony odstęp między liniami
    descriptionP.style.textAlign = 'left';
    descriptionP.style.margin = '100px 10% 20px'; // Zmniejszony margines
    descriptionP.innerHTML = description;
    slideSection.appendChild(descriptionP);

    const imageContainer = document.createElement('div');
    imageContainer.style.display = 'flex';
    imageContainer.style.justifyContent = 'center';
    imageContainer.style.alignItems = 'center';
    imageContainer.style.marginBottom = '10px'; // Zmniejszony margines

    const image = document.createElement('img');
    image.src = imagePath;
    image.style.maxWidth = '90%'; // Zmniejszona szerokość
    image.style.maxHeight = '600px'; // Zmniejszona wysokość obrazu
    image.style.objectFit = 'contain';
    imageContainer.appendChild(image);
    slideSection.appendChild(imageContainer);

    const sourceP = document.createElement('p');
    sourceP.style.fontSize = '0.6em'; // Zmniejszona czcionka
    sourceP.style.textAlign = 'center';
    sourceP.style.marginTop = '20px'; // Zmniejszony margines
    sourceP.innerHTML = `Źródło: <a href="https://arxiv.org/abs/2008.09470" target="_blank" rel="noopener">
    Angelov, D. (2020). Top2Vec: Distributed Representations of Topics. arXiv:2008.09470 [cs.CL].
  </a>`;
    slideSection.appendChild(sourceP);

    return slideSection;
  }

  // Slajdy Top2Vec
  const top2VecSlides = [
    createTop2VecSlide(
      `<b>Krok 1: Wspólne osadzanie wektorów dokumentów i słów</b><br>
    Utworzenie wspólnych osadzonych wektorów dokumentów i słów przy użyciu Doc2Vec, Universal Sentence Encoder lub BERT Sentence Transformer. 
    Dokumenty są umieszczane blisko innych podobnych dokumentów i blisko najbardziej wyróżniających słów.`,
      './images/top2vec_1.png'
    ),
    createTop2VecSlide(
      `<b>Krok 2: Redukcja wymiaru wektorów dokumentów</b><br>
    Utworzenie niższowymiarowego osadzenia wektorów dokumentów przy użyciu UMAP. 
    Wektory dokumentów w przestrzeni wysokowymiarowej są bardzo rzadkie, redukcja wymiaru pomaga w znajdowaniu gęstych obszarów. Każdy punkt reprezentuje wektor dokumentu.`,
      './images/top2vec_2.png'
    ),
    createTop2VecSlide(
      `<b>Krok 3: Identyfikacja gęstych obszarów dokumentów</b><br>
    Znalezienie gęstych obszarów dokumentów przy użyciu HDBSCAN. 
    Kolorowe obszary reprezentują gęste obszary dokumentów. Czerwone punkty są wartościami odstającymi, które nie należą do określonego klastra.`,
      './images/top2vec_3.png'
    ),
    createTop2VecSlide(
      `<b>Krok 4: Obliczenie wektora tematu</b><br>
    Dla każdego gęstego obszaru obliczenie centroidu wektorów dokumentów w oryginalnym wymiarze, który stanowi wektor tematu. 
    Czerwone punkty to dokumenty odstające i nie są używane do obliczania wektora tematu. Fioletowe punkty to wektory dokumentów należące do gęstego obszaru, z którego obliczany jest wektor tematu.`,
      './images/top2vec_4.png'
    ),
    createTop2VecSlide(
      `<b>Krok 5: Identyfikacja słów kluczowych</b><br>
    Znalezienie n najbliższych wektorów słów względem otrzymanego wektora tematu. 
    Najbliższe wektory słów w kolejności bliskości stają się słowami kluczowymi tematu.`,
      './images/top2vec_5.png'
    ),
  ];

  // Dodaj slajdy Top2Vec do kontenera
  top2VecSlides.forEach((slide) => {
    slidesContainer.appendChild(slide);
  });

  // Dodanie slajdów do głównej sekcji
  top2VecMainSection.append(...top2VecSlides);

  // Wstawiamy sekcję Top2Vec po slajdzie o modelowaniu tematycznym
  slidesContainer.insertBefore(top2VecMainSection, slidesContainer.children[3]);

  // Oryginalny kod ładowania wordcloudów i wykresów:
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
      container.style.gap = '40px'; // Zmniejszenie gap
      container.style.height = '100%';
      container.style.justifyContent = 'flex-start';
      container.style.padding = '20px'; // Dodanie paddingu
      container.style.marginTop = '0'; // Usunięcie negatywnego marginTop

      // Dwa rzędy po 3 obrazy
      for (let row = 0; row < 2; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'space-around'; // Zmiana na space-around
        rowDiv.style.alignItems = 'center';
        rowDiv.style.gap = '40px'; // Dostosowanie gap

        for (let j = 0; j < 3; j++) {
          const imgIndex = i + row * 3 + j;
          if (imgIndex < 31) {
            const img = document.createElement('img');
            img.src = `visualizations/women_wordclouds/topic_${imgIndex}_wordcloud.png`;
            img.style.maxWidth = '30%'; // Dostosowanie szerokości
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
      container.style.gap = '40px'; // Zmniejszenie gap
      container.style.height = '100%';
      container.style.justifyContent = 'flex-start';
      container.style.padding = '20px'; // Dodanie paddingu
      container.style.marginTop = '0'; // Usunięcie negatywnego marginTop

      // Dwa rzędy po 3 obrazy
      for (let row = 0; row < 2; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'space-around'; // Zmiana na space-around
        rowDiv.style.alignItems = 'center';
        rowDiv.style.gap = '40px'; // Zmniejszenie gap

        for (let j = 0; j < 3; j++) {
          const imgIndex = i + row * 3 + j;
          if (imgIndex < 34) {
            const img = document.createElement('img');
            img.src = `visualizations/men_wordclouds/topic_${imgIndex}_wordcloud.png`;
            img.style.maxWidth = '30%'; // Dostosowanie szerokości
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

  const response = await fetch('./reports/category_analysis.json');
  const data = await response.json();
  // Główny slajd dla "Słowozbiór 'spowiedź' w korpusie wypowiedzi kobiet"
  const womenWordcloudSlide = document.createElement('section'); // Główny slajd
  womenWordcloudSlide.style.display = 'flex';
  womenWordcloudSlide.style.flexDirection = 'column';
  womenWordcloudSlide.style.alignItems = 'center';
  womenWordcloudSlide.style.padding = '40px 20px';

  // Nagłówek dla głównego slajdu
  const header = document.createElement('h1');
  header.textContent = "Słowozbiór 'spowiedź' w korpusie wypowiedzi kobiet";
  header.style.fontSize = '2em';
  header.style.textAlign = 'center';
  header.style.marginBottom = '30px';
  womenWordcloudSlide.appendChild(header);

  // Kontener na dwie kolumny (wordcloud + dane)
  const columnsContainer = document.createElement('div');
  columnsContainer.style.display = 'flex';
  columnsContainer.style.justifyContent = 'space-around';
  columnsContainer.style.alignItems = 'flex-start';
  columnsContainer.style.width = '90%';
  columnsContainer.style.gap = '40px';

  // Kolumna z obrazem (wordcloud)
  const leftColumn = document.createElement('div');
  leftColumn.style.flex = '1';
  leftColumn.style.display = 'flex';
  leftColumn.style.justifyContent = 'center';
  leftColumn.style.alignItems = 'center';
  leftColumn.style.marginTop = '150px';

  const img = document.createElement('img');
  img.src = './visualizations/women_wordclouds/topic_1_wordcloud.png';
  img.style.maxWidth = '90%';
  img.style.height = 'auto';
  img.style.objectFit = 'contain';
  leftColumn.appendChild(img);

  // Kolumna z danymi (informacje o dokumentach i słowach kluczowych)
  const rightColumn = document.createElement('div');
  rightColumn.style.flex = '1';
  rightColumn.style.display = 'flex';
  rightColumn.style.flexDirection = 'column';
  rightColumn.style.justifyContent = 'center'; // Centrowanie w pionie
  rightColumn.style.alignItems = 'center'; // Centrowanie w poziomie
  rightColumn.style.marginTop = '50px';

  const dataContainer = document.createElement('div');
  dataContainer.style.textAlign = 'center'; // Wyrównanie tekstu w kontenerze
  dataContainer.innerHTML = `
  <p style="font-size: 1em; margin-bottom: 20px; text-align: center;">
    <span style="font-weight: bold;">Liczba dokumentów:</span> 461
  </p>
  <p style="font-size: 1em; margin-bottom: 20px; text-align: center;">
    <span style="font-weight: bold;">10 pierwszych słów kluczowych:</span>
  </p>
  <ul style="font-size: 0.9em; line-height: 1.6em; padding-left: 20px; margin: 0; list-style-type: disc; text-align: left;">
    <li style="font-style: italic;">spowiedzi: 0.7464</li>
    <li style="font-style: italic;">spowiedź: 0.6153</li>
    <li style="font-style: italic;">wyznać: 0.6105</li>
    <li style="font-style: italic;">wyznałam: 0.5804</li>
    <li style="font-style: italic;">ciężki: 0.5706</li>
    <li style="font-style: italic;">spowiedzią: 0.5375</li>
    <li style="font-style: italic;">grzech: 0.5300</li>
    <li style="font-style: italic;">wyspowiadać: 0.5008</li>
    <li style="font-style: italic;">popełniłam: 0.4996</li>
    <li style="font-style: italic;">powiedziałam: 0.4980</li>
  </ul>`;
  rightColumn.appendChild(dataContainer);

  // Dodanie kolumn do kontenera
  columnsContainer.appendChild(leftColumn);
  columnsContainer.appendChild(rightColumn);

  // Dodanie kontenera do głównego slajdu
  womenWordcloudSlide.appendChild(columnsContainer);

  // Tworzenie nowego slajdu "additionalSlide"
  const additionalSlide = document.createElement('section');
  additionalSlide.style.display = 'flex';
  additionalSlide.style.flexDirection = 'column';
  additionalSlide.style.alignItems = 'center';
  additionalSlide.style.justifyContent = 'space-between'; // Rozdzielanie nagłówka i obrazu
  additionalSlide.style.padding = '40px';

  // Nagłówek dla nowego slajdu
  const newSlideHeader = document.createElement('h1');
  newSlideHeader.textContent = 'Człowiek i AI - dwa modele pracy z danymi';
  newSlideHeader.style.fontSize = '2.5em'; // Powiększenie nagłówka
  newSlideHeader.style.textAlign = 'center';
  newSlideHeader.style.marginBottom = '20px'; // Redukcja odstępu poniżej nagłówka
  additionalSlide.appendChild(newSlideHeader);

  // Kontener dla obrazu (aby lepiej ustawić pozycję obrazu na środku)
  const imageContainer = document.createElement('div');
  imageContainer.style.flex = '1'; // Użycie elastyczności, aby obraz był na środku
  imageContainer.style.display = 'flex';
  imageContainer.style.justifyContent = 'center';
  imageContainer.style.alignItems = 'center';
  imageContainer.style.width = '100%';

  // Obraz w nowym slajdzie
  const newSlideImg = document.createElement('img');
  newSlideImg.src = './images/screen.png';
  // Wymuszenie większych wymiarów obrazu
  newSlideImg.style.width = '95%'; // Ustawienie szerokości na 95% slajdu
  newSlideImg.style.height = 'auto'; // Zachowanie proporcji
  newSlideImg.style.maxHeight = '90%'; // Ograniczenie wysokości do 90% slajdu
  newSlideImg.style.objectFit = 'contain'; // Skalowanie obrazu proporcjonalnie
  newSlideImg.style.margin = '0 auto'; // Wycentrowanie obrazu w przestrzeni
  imageContainer.appendChild(newSlideImg);

  // Dodanie kontenera z obrazem do slajdu
  additionalSlide.appendChild(imageContainer);

  // === Tworzenie wrappera wertykalnego dla WomenWordcloudSlide i additionalSlide ===
  const verticalWrapper = document.createElement('section'); // Tworzymy kontener dla slajdów wertykalnych
  verticalWrapper.appendChild(womenWordcloudSlide); // Pierwszy slajd (WomenWordcloudSlide)
  verticalWrapper.appendChild(additionalSlide); // Drugi slajd wertykalny (additionalSlide)

  // Tworzenie kolejnego slajdu pod additionalSlide
  const qualitativeAnalysisSlide = document.createElement('section');
  qualitativeAnalysisSlide.style.display = 'flex';
  qualitativeAnalysisSlide.style.flexDirection = 'column';
  qualitativeAnalysisSlide.style.alignItems = 'center';
  qualitativeAnalysisSlide.style.justifyContent = 'center'; // Wyśrodkowanie pionowe
  qualitativeAnalysisSlide.style.padding = '40px';

  // Nagłówek dla nowego slajdu
  const qualitativeHeader = document.createElement('h1');
  qualitativeHeader.textContent = "Słowozbiór 'spowiedź': analiza jakościowa";
  qualitativeHeader.style.fontSize = '2.5em'; // Powiększenie nagłówka
  qualitativeHeader.style.textAlign = 'center';
  qualitativeHeader.style.marginBottom = '100px'; // Odstęp poniżej nagłówka
  qualitativeAnalysisSlide.appendChild(qualitativeHeader);

  // Kontener dla listy punktów
  const pointsContainer = document.createElement('div');
  pointsContainer.style.width = '80%'; // Szerokość kontenera dla punktów
  pointsContainer.style.textAlign = 'left'; // Wyrównanie tekstu do lewej
  pointsContainer.style.fontSize = '1.5em'; // Powiększenie czcionki
  pointsContainer.style.lineHeight = '1.4em'; // Optymalna interlinia
  pointsContainer.style.margin = '0 auto'; // Wyśrodkowanie horyzontalne

  // Lista punktów
  const pointsList = document.createElement('ul');
  pointsList.style.listStyleType = 'disc'; // Znaczniki listy (kropki)
  pointsList.style.paddingLeft = '20px'; // Dodanie wcięcia dla punktów
  pointsList.style.margin = '0'; // Usuń domyślne marginesy listy

  // Dodanie punktów do listy
  const points = [
    'Spowiedź jest źródłem problemów i lęków',
    'Strach, że za mało szczera albo niemożność dokonania oceny wagi i rodzaju grzechu (np. ksiądz sugeruje „tylko z ciężkich”)',
    'Zapis zmagań między szczerą ponadprzeciętną wolą wypełniania roli dobrej katoliczki a dyskursem i praktykami katolicyzmu, które wzywają do „uporządkowania” i przestrzegania rozbudowanego systemu reguł',
    'Zmaganie się głęboko wierzących kobiet z religijnymi „procedurami” z wymiarem powinnościowym katolicyzmu',
  ];

  points.forEach((point) => {
    const listItem = document.createElement('li');
    listItem.textContent = point;
    listItem.style.marginBottom = '10px'; // Zmniejszenie odstępu między punktami
    pointsList.appendChild(listItem);
  });

  pointsContainer.appendChild(pointsList);
  qualitativeAnalysisSlide.appendChild(pointsContainer);

  // Dodanie nowego slajdu pod additionalSlide (wertykalnie)
  verticalWrapper.appendChild(qualitativeAnalysisSlide); // Dodanie nowego slajdu do wertykalnego kontenera

  // Tworzenie pierwszego slajdu z przykładami
  const examplesSlide1 = document.createElement('section');
  examplesSlide1.style.display = 'flex';
  examplesSlide1.style.flexDirection = 'column';
  examplesSlide1.style.alignItems = 'center';
  examplesSlide1.style.justifyContent = 'center';
  examplesSlide1.style.padding = '40px';

  // Nagłówek dla pierwszego slajdu
  const examplesHeader1 = document.createElement('h1');
  examplesHeader1.textContent = "Słowozbiór 'spowiedź': przykłady";
  examplesHeader1.style.fontSize = '2.5em';
  examplesHeader1.style.textAlign = 'center';
  examplesHeader1.style.marginBottom = '30px';
  examplesSlide1.appendChild(examplesHeader1);

  // Kontener dla listy przykładów (slajd 1)
  const examplesContainer1 = document.createElement('div');
  examplesContainer1.style.width = '80%'; // Poszerzenie kontenera
  examplesContainer1.style.textAlign = 'left';
  examplesContainer1.style.fontSize = '1.4em';
  examplesContainer1.style.lineHeight = '1em';
  examplesContainer1.style.margin = '100px auto'; // Obniżenie kontenera

  // Lista przykładów dla pierwszego slajdu
  const examplesList1 = document.createElement('ul');
  examplesList1.style.listStyleType = 'disc';
  examplesList1.style.paddingLeft = '20px';
  examplesList1.style.margin = '0';

  const examples1 = [
    `„Jeśli było to grzechem, to ciężkim czy lekkim, jak myślicie? Proszę o pomoc bo boje się, ze popełnię jutro świętokradztwo przystępując do Komunii... Mam problem ze skrupułami i ksiądz mi mówił, żebym nie przystępowała do Komunii tylko gdy będę pewna, ze popełniłam grzech ciężki, a ja chyba nie jestem pewna, ale może moje sumienie źle mi mówi... Nie wiem co robić?”`,
    `„mam problem z ocenianiem wagi grzechu”`,
    `„Wiem że grzeszę i boje się że nawet jak bym szła do spowiedzi to będzie ona nieważna, bo ja tęsknię za tamtym i go pragnę... Dodano po 2 minutach 34 sekundach: I co najgorsze to pragnę kontaktu. Ten anonim to taka moja forma kontaktu z nim...sam na sam.”`,
  ];

  examples1.forEach((example) => {
    const listItem = document.createElement('li');
    listItem.textContent = example;
    listItem.style.marginBottom = '10px';
    examplesList1.appendChild(listItem);
  });

  examplesContainer1.appendChild(examplesList1);
  examplesSlide1.appendChild(examplesContainer1);

  // Dodanie pierwszego slajdu do kontenera
  verticalWrapper.appendChild(examplesSlide1);

  // Tworzenie drugiego slajdu z przykładami
  const examplesSlide2 = document.createElement('section');
  examplesSlide2.style.display = 'flex';
  examplesSlide2.style.flexDirection = 'column';
  examplesSlide2.style.alignItems = 'center';
  examplesSlide2.style.justifyContent = 'center';
  examplesSlide2.style.padding = '40px';

  // Nagłówek dla drugiego slajdu
  const examplesHeader2 = document.createElement('h1');
  examplesHeader2.textContent = "Słowozbiór 'spowiedź': przykłady";
  examplesHeader2.style.fontSize = '2.5em';
  examplesHeader2.style.textAlign = 'center';
  examplesHeader2.style.marginBottom = '30px';
  examplesSlide2.appendChild(examplesHeader2);

  // Kontener dla listy przykładów (slajd 2)
  const examplesContainer2 = document.createElement('div');
  examplesContainer2.style.width = '80%'; // Poszerzenie kontenera
  examplesContainer2.style.textAlign = 'left';
  examplesContainer2.style.fontSize = '1.25em';
  examplesContainer2.style.lineHeight = '1em';
  examplesContainer2.style.margin = '50px auto'; // Obniżenie kontenera

  // Lista przykładów dla drugiego slajdu
  const examplesList2 = document.createElement('ul');
  examplesList2.style.listStyleType = 'disc';
  examplesList2.style.paddingLeft = '20px';
  examplesList2.style.margin = '0';

  const examples2 = [
    `„Niestety po przemyśleniu tego wszystkiego stwierdzam, że nie jestem w stanie zrezygnować z tabletek. Nie odejdę od Boga i będę uczestniczyć w mszach, ale na spowiedź, która da mi rozgrzeszenie nie zasługuję”`,
    `„Mam wątpliwości co do grzechu. Przeraża mnie to, że jest tak cienka granica pomiędzy brakiem grzechu, a grzechem ciężkim. Np. nieczyste myśli traktowane są chyba jako właśnie ciężki grzech (jeżeli się mylę, to mówcie). Mój problem polega na tym, że ja nie wiem, czy ten grzech miał miejsce. (Jeszcze tylko zaznaczę, że jestem osobą ze skrupułami i zawsze bardzo dokładnie rozpracowuję nawet najmniejszą sytuację, czy to aby na pewno nie był grzech). Z drugiej strony nie chcę się spowiadać z grzechu ciężkiego, którego nie popełniłam. No dobra, może w końcu powiem, o co mi chodzi: Czy jeżeli w naszych myślach pojawi się ''marzenie'', w którym widzimy siebie z osobą przeciwnej płci i marzymy wtedy o bliskości (np. o całowaniu z tą osobą) i my tą myśl wywołamy całkowicie świadomie z dokładnie takim zamiarem, a do tego jeszcze nie odrzucamy tej myśli, tylko ją podtrzymujemy to jest to grzech? Ja tak sobie marzyłam o tym i nagle sobie uświadomiłam, że to może być grzech i dopiero wtedy przestałam. Czy jeżeli okaże się to grzechem, to czy jest jakieś ''łagodniejsze'' określenie tzw. nieczystych myśli, bo w końcu nie wyobrażałam sobie jakiś naprawdę strasznych i nieczystych sytuacji, tylko po prostu zwykłe całowanie.”`,
  ];

  examples2.forEach((example) => {
    const listItem = document.createElement('li');
    listItem.textContent = example;
    listItem.style.marginBottom = '10px';
    examplesList2.appendChild(listItem);
  });

  examplesContainer2.appendChild(examplesList2);
  examplesSlide2.appendChild(examplesContainer2);

  // Dodanie drugiego slajdu do kontenera
  verticalWrapper.appendChild(examplesSlide2);

  // Dodanie sekcji do kontenera
  const loadedWordcloudSections = await loadWordclouds(); // Zmieniona nazwa zmiennej
  if (loadedWordcloudSections) {
    loadedWordcloudSections.forEach((section, index) => {
      slidesContainer.appendChild(section);

      // Po dodaniu sekcji dla mężczyzn, wstaw sekcję dla kobiet z podslajdami
      if (index === 1) {
        slidesContainer.appendChild(verticalWrapper); // Dodaj wrapper zamiast samego WomenWordcloudSlide
      }
    });
  }

  // Tworzenie wykresu (chartSlide)
  const chartSlide = await createCategoryChart(data);
  if (chartSlide) {
    slidesContainer.appendChild(chartSlide);
  }

  // Funkcja do wczytywania pliku tekstowego
  async function loadPrompt(filePath) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.text();
    } catch (error) {
      console.error('Error loading prompt file:', error);
      return 'Error loading prompt file.';
    }
  }

  // Dodanie horizontalSlide
  const horizontalSlide = document.createElement('section');
  horizontalSlide.style.display = 'flex';
  horizontalSlide.style.flexDirection = 'column';
  horizontalSlide.style.alignItems = 'center';
  horizontalSlide.style.justifyContent = 'center';
  horizontalSlide.style.padding = '40px';

  // Nagłówek dla slajdu
  const horizontalHeader = document.createElement('h1');
  horizontalHeader.textContent = 'Człowiek i AI - dwa modele pracy z danymi';
  horizontalHeader.style.fontSize = '2.5em';
  horizontalHeader.style.textAlign = 'center';
  horizontalHeader.style.marginBottom = '50px';
  horizontalSlide.appendChild(horizontalHeader);

  // Kontener na codeblock
  const codeBlockContainer = document.createElement('div');
  codeBlockContainer.style.width = '90%'; // Ustal szerokość kontenera
  codeBlockContainer.style.height = '70%'; // Ustal wysokość kontenera
  codeBlockContainer.style.margin = '0 auto'; // Wyśrodkowanie poziome
  codeBlockContainer.style.display = 'flex'; // Flexbox dla wyśrodkowania pionowego
  codeBlockContainer.style.justifyContent = 'center';
  codeBlockContainer.style.alignItems = 'center';
  codeBlockContainer.style.backgroundColor = '#272822'; // Tło Monokai
  codeBlockContainer.style.borderRadius = '8px'; // Zaokrąglenie rogów
  codeBlockContainer.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Lekki cień
  codeBlockContainer.style.padding = '0'; // Usuń padding, aby nie tworzyć dodatkowej ramki

  // Element <pre> dla kodu
  const codeBlock = document.createElement('pre');
  codeBlock.className = 'language-none'; // Klasa dla Highlight.js
  codeBlock.setAttribute('data-line-numbers', '1-5|6-10|11-15|16-20'); // Zakresy linii
  codeBlock.style.width = '100%'; // Kod zajmuje całą szerokość kontenera
  codeBlock.style.height = '100%'; // Kod zajmuje całą wysokość kontenera
  codeBlock.style.overflowY = 'auto'; // Dodanie przewijania pionowego
  codeBlock.style.margin = '0'; // Usuń marginesy
  codeBlock.style.padding = '10px'; // Dodaj padding dla czytelności
  codeBlock.style.color = '#f8f8f2'; // Kolor tekstu Monokai
  codeBlock.style.fontSize = '0.75em';
  codeBlock.style.lineHeight = '1.6em';
  codeBlock.style.fontFamily = `'Courier New', Courier, monospace`;
  codeBlock.style.whiteSpace = 'pre-wrap'; // Zawijanie tekstu
  codeBlock.style.boxSizing = 'border-box'; // Zapewnienie poprawnego obliczania rozmiarów

  // Wczytaj i dodaj zawartość prompta
  loadPrompt('./prompt.txt').then((promptContent) => {
    codeBlock.textContent = promptContent; // Wstaw treść prompta bez dodatkowych elementów
    codeBlockContainer.appendChild(codeBlock); // Dodaj <pre> do kontenera
    horizontalSlide.appendChild(codeBlockContainer); // Dodaj kontener do slajdu
  });

  // Dodanie slajdu do kontenera przed chartSlide
  slidesContainer.insertBefore(horizontalSlide, chartSlide);

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

  data.categories.forEach((category, index) => {
    if (index >= 5) return; // Warunek: przerywamy iterację po 5 kategoriach
    const colorTheme = themeColors[index % themeColors.length];
    const categorySection = createCategorySection(category, colorTheme);
    categorySection.setAttribute(
      'data-color-theme',
      JSON.stringify(colorTheme)
    );
    slidesContainer.appendChild(categorySection);
  });

  // Tworzenie nowego slajdu "Wnioski"
  const conclusionsSlide = document.createElement('section');
  conclusionsSlide.style.display = 'flex';
  conclusionsSlide.style.flexDirection = 'column';
  conclusionsSlide.style.alignItems = 'center';
  conclusionsSlide.style.justifyContent = 'center';
  conclusionsSlide.style.padding = '40px';

  // Nagłówek dla slajdu
  const conclusionsHeader = document.createElement('h1');
  conclusionsHeader.textContent = 'Wnioski';
  conclusionsHeader.style.fontSize = '2.5em';
  conclusionsHeader.style.textAlign = 'center';
  conclusionsHeader.style.marginBottom = '0px';
  conclusionsSlide.appendChild(conclusionsHeader);

  // Kontener dla listy punktów
  const conclusionsContainer = document.createElement('div');
  conclusionsContainer.style.width = '80%';
  conclusionsContainer.style.textAlign = 'left';
  conclusionsContainer.style.fontSize = '1.5em';
  conclusionsContainer.style.lineHeight = '1em';
  conclusionsContainer.style.margin = '0 auto';

  // Lista punktów
  const conclusionsList = document.createElement('ul');
  conclusionsList.style.listStyleType = 'disc';
  conclusionsList.style.paddingLeft = '20px';
  conclusionsList.style.margin = '0';

  // Dodanie punktów do listy
  const conclusionsPoints = [
    '„Tradycyjne” role kobiet i sfery ich aktywności nadal są silne. Kobiety mało mówią o świecie, ale częściej niż mężczyźni zabierają głos na temat życia duchowego, milczą raczej o sprawach publicznych',
    'Bardzo silne poczucie winy, grzeszności (spowiedź dominującym słowozbiorem!) i akt modlitwy w centrum',
    'Polityka i erotyzm w centrum „męskiego” dyskursu i uwagi',
    'Mężczyźni są bardziej „publiczni”, a kobiety bardziej „prywatne” (?)',
  ];

  conclusionsPoints.forEach((point) => {
    const listItem = document.createElement('li');
    listItem.textContent = point;
    listItem.style.marginBottom = '20px';
    conclusionsList.appendChild(listItem);
  });

  // Dodanie listy do kontenera i kontenera do slajdu
  conclusionsContainer.appendChild(conclusionsList);
  conclusionsSlide.appendChild(conclusionsContainer);

  // Dodanie slajdu na końcu prezentacji
  slidesContainer.appendChild(conclusionsSlide);

  // Tworzenie pierwszego slajdu wertykalnego
  const conclusionsContinuedSlide1 = document.createElement('section');
  conclusionsContinuedSlide1.style.display = 'flex';
  conclusionsContinuedSlide1.style.flexDirection = 'column';
  conclusionsContinuedSlide1.style.alignItems = 'center';
  conclusionsContinuedSlide1.style.justifyContent = 'center';
  conclusionsContinuedSlide1.style.padding = '40px';

  // Nagłówek dla pierwszego slajdu
  const conclusionsHeader1 = document.createElement('h1');
  conclusionsHeader1.textContent = 'Wnioski, ciąg dalszy...';
  conclusionsHeader1.style.fontSize = '2.5em';
  conclusionsHeader1.style.textAlign = 'center';
  conclusionsHeader1.style.marginBottom = '50px';
  conclusionsContinuedSlide1.appendChild(conclusionsHeader1);

  // Treść dla pierwszego slajdu
  const conclusionsContent1 = document.createElement('div');
  conclusionsContent1.style.width = '80%';
  conclusionsContent1.style.textAlign = 'left';
  conclusionsContent1.style.fontSize = '1.5em';
  conclusionsContent1.style.lineHeight = '1em';
  conclusionsContent1.style.margin = '0 auto';
  conclusionsContent1.style.display = 'block'; // Upewnij się, że układ jest liniowy

  // Treść punktów
  const conclusionsText1 = `
  <p><b>Ad spowiedź 1:</b></p>
  <ul style="margin-bottom: 20px;">
    <li>Problem zmagania się z procedurami i wymaganiami Kościoła w zakresie grzeszności i oczyszczenia</li>
    <li>Spowiedź pojawia się przede wszystkim w kontekście obaw przed niedopełnieniem wymogów, np. czy przebieg sakramentu był poprawny, jaki ma być zakres tego, co powinno być wyznane</li>
  </ul>
  <p><b>Ad spowiedź 2:</b></p>
  <ul>
    <li>W drugiej kolejności warto zauważyć, że pojawiają się: bardzo silne emocje (ponadprzeciętna religijność) oraz sfera zdrowia psychicznego (skutek opresyjnego charakter dyskursu wokół sakramentu czy szerzej katolickich praktyk)</li>
  </ul>
  `;

  conclusionsContent1.innerHTML = conclusionsText1;
  conclusionsContinuedSlide1.appendChild(conclusionsContent1);

  // Tworzenie drugiego slajdu wertykalnego
  const conclusionsContinuedSlide2 = document.createElement('section');
  conclusionsContinuedSlide2.style.display = 'flex';
  conclusionsContinuedSlide2.style.flexDirection = 'column';
  conclusionsContinuedSlide2.style.alignItems = 'center';
  conclusionsContinuedSlide2.style.justifyContent = 'center';
  conclusionsContinuedSlide2.style.padding = '40px';

  // Nagłówek dla drugiego slajdu
  const conclusionsHeader2 = document.createElement('h1');
  conclusionsHeader2.textContent = 'Wnioski, ciąg dalszy...';
  conclusionsHeader2.style.fontSize = '2.5em';
  conclusionsHeader2.style.textAlign = 'center';
  conclusionsHeader2.style.marginBottom = '100px';
  conclusionsContinuedSlide2.appendChild(conclusionsHeader2);

  // Treść dla drugiego slajdu
  const conclusionsContent2 = document.createElement('div');
  conclusionsContent2.style.width = '80%';
  conclusionsContent2.style.textAlign = 'left';
  conclusionsContent2.style.fontSize = '1.5em';
  conclusionsContent2.style.lineHeight = '1em';
  conclusionsContent2.style.margin = '0 auto';

  // Treść punktów
  const conclusionsText2 = `
    <ul>
      <li>Dominujące dylematy, którymi dzielą się w swoich postach kobiety (zderzenie głębokiej religijności z systemem poprawności rytualnej), przypomina sytuację Marcina Lutra („Świadek Chrystusa”)</li>
      <li>Strach przed nieskutecznym dopełnieniem religijnego rytuału (tak ważnego jak sakrament)</li>
      <li>Luter odrzucił rygoryzm rytuału i uwewnętrznił akt usprawiedliwiającej wiary, zerwał z dominacją eklezjologii nad sakramentologią Kościoła</li>
      <li>Kobiety katoliczki nie podejmują ucieczki, ale kierują się do psychoterapeuty</li>
    </ul>
  `;

  conclusionsContent2.innerHTML = conclusionsText2;
  conclusionsContinuedSlide2.appendChild(conclusionsContent2);

  // Tworzenie kontenera wertykalnego
  const conclusionsVerticalWrapper = document.createElement('section');
  conclusionsVerticalWrapper.appendChild(conclusionsSlide); // Oryginalny slajd "Wnioski"
  conclusionsVerticalWrapper.appendChild(conclusionsContinuedSlide1); // Pierwszy slajd wertykalny
  conclusionsVerticalWrapper.appendChild(conclusionsContinuedSlide2); // Drugi slajd wertykalny

  // Dodanie kontenera wertykalnego do prezentacji
  slidesContainer.appendChild(conclusionsVerticalWrapper);

  // Tworzenie ostatniego slajdu
  const finalSlide = document.createElement('section');
  finalSlide.style.display = 'flex';
  finalSlide.style.flexDirection = 'column';
  finalSlide.style.justifyContent = 'flex-start'; // Elementy zaczynają od góry
  finalSlide.style.alignItems = 'center';
  finalSlide.style.height = '100%';
  finalSlide.style.padding = '40px';

  // Dodanie nagłówka
  const finalSlideHeader = document.createElement('h1');
  finalSlideHeader.textContent = 'Dziękujemy za uwagę!';
  finalSlideHeader.style.fontSize = '3em'; // Rozmiar czcionki jak h1
  finalSlideHeader.style.textAlign = 'center';
  finalSlideHeader.style.marginTop = '300px'; // Przeniesienie nagłówka niżej
  finalSlide.appendChild(finalSlideHeader);

  // Dodanie slajdu na końcu
  slidesContainer.appendChild(finalSlide);

  Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    width: '100%',
    height: '100%',
    margin: 0.1, // Odstępy od krawędzi
    minScale: 0.5, // Minimalna skala
    maxScale: 1.5, // Maksymalna skala
    embedded: false,
    responsive: true, // Ważne, aby włączyć skalowanie
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
