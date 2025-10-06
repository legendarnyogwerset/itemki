// Inventory Management App
class InventoryApp {
    constructor() {
        // Initial data from provided JSON
        this.items = [
            {
                "serial": "DOM064",
                "item": "Czerwony spray",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:30:09",
                "boxChanged": "2025-09-14 21:30:19"
            },
            {
                "serial": "DOM070",
                "item": "Płyn do robienia baniek",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:30:31",
                "boxChanged": "2025-09-14 21:30:49"
            },
            {
                "serial": "DOM013",
                "item": "Kadzidełka",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:31:00",
                "boxChanged": "2025-09-14 21:31:10"
            },
            {
                "serial": "DOM068",
                "item": "Maszynka do baniek",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:31:50",
                "boxChanged": "2025-09-14 21:31:59"
            },
            {
                "serial": "DOM040",
                "item": "Gikerek",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:32:06",
                "boxChanged": "2025-09-14 21:32:12"
            },
            {
                "serial": "DOM009",
                "item": "Układanki od Mamy tosi",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:32:18",
                "boxChanged": "2025-09-14 21:32:26"
            },
            {
                "serial": "DOM038",
                "item": "chiński specyfik",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:32:49",
                "boxChanged": "2025-09-14 21:32:49"
            },
            {
                "serial": "DOM036",
                "item": "Munchkin Steampunk",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:33:33",
                "boxChanged": "2025-09-14 21:33:42"
            },
            {
                "serial": "DOM032",
                "item": "Munchkin OG",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:33:50",
                "boxChanged": "2025-09-14 21:34:00"
            },
            {
                "serial": "DOM039",
                "item": "Zestaw alkoholowy - 2x mini limoncello i ZAPASOWE PIWO",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:34:21",
                "boxChanged": "2025-09-14 21:34:30"
            },
            {
                "serial": "DOM015",
                "item": "Płyn do maszyny do dymu",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:34:38",
                "boxChanged": "2025-09-14 21:34:57"
            },
            {
                "serial": "DOM006",
                "item": "Kufel od Agi",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:35:05",
                "boxChanged": "2025-09-14 21:35:14"
            },
            {
                "serial": "DOM060",
                "item": "Ładowarka indukcyjna baseus",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:35:29",
                "boxChanged": "2025-09-14 21:35:36"
            },
            {
                "serial": "DOM030",
                "item": "dualshock",
                "box": "BOX05",
                "lastSeen": "2025-09-14 21:36:24",
                "boxChanged": "2025-09-14 21:36:24"
            },
            {
                "serial": "DOM011",
                "item": "2x Torba OKO HORUSA i ok 25x przeterminowane zaproszenia na event asstera",
                "box": "",
                "lastSeen": "2025-09-14 22:09:16",
                "boxChanged": "2025-09-14 22:10:05"
            },
            {
                "serial": "DOM092",
                "item": "mac pro tidal 1",
                "box": "TIDAL",
                "lastSeen": "2025-10-06 19:55:19",
                "boxChanged": "2025-10-06 19:55:19"
            },
            {
                "serial": "DOM115",
                "item": "mac tidal 2",
                "box": "TIDAL",
                "lastSeen": "2025-10-06 19:56:04",
                "boxChanged": "2025-10-06 19:56:04"
            },
            {
                "serial": "DOM087",
                "item": "mac air",
                "box": "TIDAL",
                "lastSeen": "2025-10-06 19:57:29",
                "boxChanged": "2025-09-14 19:57:29"
            },
            {
                "serial": "DOM086",
                "item": "wiertara BOSCH z udarem",
                "box": "",
                "lastSeen": "2025-10-06 20:01:02",
                "boxChanged": ""
            },
            {
                "serial": "DOM093",
                "item": "uchwyt do wspinaczki",
                "box": "",
                "lastSeen": "2025-10-06 20:03:58",
                "boxChanged": ""
            },
            {
                "serial": "DOM116",
                "item": "mała deska do pracy",
                "box": "",
                "lastSeen": "2025-10-06 20:04:11",
                "boxChanged": ""
            },
            {
                "serial": "DOM091",
                "item": "pompowane siedzenie na festiwal 1",
                "box": "",
                "lastSeen": "2025-10-06 20:04:59",
                "boxChanged": ""
            },
            {
                "serial": "DOM089",
                "item": "pompowane do siedzenia 2",
                "box": "",
                "lastSeen": "2025-10-06 20:05:42",
                "boxChanged": ""
            },
            {
                "serial": "DOM004",
                "item": "Szklanki",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM005",
                "item": "Węgielki do shisky IZZY COCO",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM008",
                "item": "Skarbonka Serduszko",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM010",
                "item": "SHISHA",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM012",
                "item": "Świeczki małe",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM014",
                "item": "Wełna czarna",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM017",
                "item": "Wełna różowa",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM018",
                "item": "Wełna tęczowa, wełna zielona, szydełko i druciki wyswagowane",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM019",
                "item": "Kieliszki do whisky x6",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM022",
                "item": "Czapka banan",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM023",
                "item": "Komiks hiphopowy od Madi",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM026",
                "item": "Karton od aparatu Tostera",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM029",
                "item": "Zegarek od starego",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM033",
                "item": "Kabel do zasilania głośniki/piecyk",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM035",
                "item": "Czerwone światełko rowerowe DUNLOP",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM061",
                "item": "Pojemnik na odpady medyczne z wenflonami w środku",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM062",
                "item": "Zapasowy mały iqos",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM063",
                "item": "Pan Bulwa",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM065",
                "item": "Głośniczek JBL GO",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM066",
                "item": "Piwny Kubek",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM067",
                "item": "Płyn LIZARD do czyszczenia podstrunnicy",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            },
            {
                "serial": "DOM069",
                "item": "POO CURLING",
                "box": "",
                "lastSeen": "",
                "boxChanged": ""
            }
        ];

        this.boxes = [
            {
                "code": "BOX05",
                "name": "Pudełko różne",
                "location": "Magazyn",
                "itemCount": 14
            },
            {
                "code": "TIDAL",
                "name": "Sprzęt muzyczny",
                "location": "Studio",
                "itemCount": 3
            }
        ];

        // App state
        this.currentTab = 'lista';
        this.currentView = 'table'; // 'table' or 'card'
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.sortBy = 'serial';
        this.sortOrder = 'asc';
        this.filters = {
            search: '',
            box: '',
            status: ''
        };
        this.editingItem = null;
        this.qrReader = null;
        this.scanMode = 'normal';
        this.batchResults = [];

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateSelects();
        this.renderItems();
        this.updateBoxCounts();
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.nav__tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = e.currentTarget.dataset.tab;
                this.switchTab(tabName);
            });
        });

        // View toggle
        document.getElementById('card-view-btn').addEventListener('click', () => {
            this.switchView('card');
        });
        document.getElementById('table-view-btn').addEventListener('click', () => {
            this.switchView('table');
        });

        // Filters
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.filters.search = e.target.value;
            this.currentPage = 1;
            this.renderItems();
        });

        document.getElementById('box-filter').addEventListener('change', (e) => {
            this.filters.box = e.target.value;
            this.currentPage = 1;
            this.renderItems();
        });

        document.getElementById('status-filter').addEventListener('change', (e) => {
            this.filters.status = e.target.value;
            this.currentPage = 1;
            this.renderItems();
        });

        document.getElementById('clear-filters').addEventListener('click', () => {
            this.clearFilters();
        });

        // Table sorting
        document.querySelectorAll('.sortable').forEach(header => {
            header.addEventListener('click', (e) => {
                const sortField = e.currentTarget.dataset.sort;
                this.handleSort(sortField);
            });
        });

        // Add item button
        document.getElementById('add-item-btn').addEventListener('click', () => {
            this.openItemModal();
        });

        // Modal events
        this.setupModalEvents();

        // Scanner events
        this.setupScannerEvents();

        // Export/Import events
        this.setupExportImportEvents();
    }

    setupModalEvents() {
        // Item modal
        const itemModal = document.getElementById('item-modal');
        const closeModal = document.getElementById('close-modal');
        const cancelModal = document.getElementById('cancel-modal');
        const itemForm = document.getElementById('item-form');

        [closeModal, cancelModal].forEach(btn => {
            btn.addEventListener('click', () => this.closeItemModal());
        });

        itemModal.querySelector('.modal__backdrop').addEventListener('click', () => {
            this.closeItemModal();
        });

        itemForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveItem();
        });

        // Delete modal
        const deleteModal = document.getElementById('delete-modal');
        const closeDeleteModal = document.getElementById('close-delete-modal');
        const cancelDelete = document.getElementById('cancel-delete');
        const confirmDelete = document.getElementById('confirm-delete');

        [closeDeleteModal, cancelDelete].forEach(btn => {
            btn.addEventListener('click', () => this.closeDeleteModal());
        });

        deleteModal.querySelector('.modal__backdrop').addEventListener('click', () => {
            this.closeDeleteModal();
        });

        confirmDelete.addEventListener('click', () => {
            this.deleteItem();
        });
    }

    setupScannerEvents() {
        const startScan = document.getElementById('start-scan');
        const stopScan = document.getElementById('stop-scan');
        const scanMode = document.getElementById('scan-mode');

        startScan.addEventListener('click', () => this.startScanning());
        stopScan.addEventListener('click', () => this.stopScanning());
        scanMode.addEventListener('change', (e) => {
            this.scanMode = e.target.value;
            if (this.scanMode === 'batch') {
                this.batchResults = [];
            }
        });
    }

    setupExportImportEvents() {
        // Export
        document.getElementById('export-json').addEventListener('click', () => this.exportJSON());
        document.getElementById('export-csv').addEventListener('click', () => this.exportCSV());

        // Import
        document.getElementById('import-json').addEventListener('click', () => this.importJSON());
        document.getElementById('import-csv').addEventListener('click', () => this.importCSV());
    }

    switchTab(tabName) {
        // Update nav
        document.querySelectorAll('.nav__tab').forEach(tab => {
            tab.classList.remove('nav__tab--active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('nav__tab--active');

        // Update content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('tab-content--active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('tab-content--active');

        this.currentTab = tabName;
    }

    switchView(viewType) {
        this.currentView = viewType;
        
        // Update buttons
        const cardBtn = document.getElementById('card-view-btn');
        const tableBtn = document.getElementById('table-view-btn');
        
        cardBtn.classList.toggle('btn--primary', viewType === 'card');
        cardBtn.classList.toggle('btn--outline', viewType !== 'card');
        tableBtn.classList.toggle('btn--primary', viewType === 'table');
        tableBtn.classList.toggle('btn--outline', viewType !== 'table');

        // Update views
        const cardView = document.getElementById('card-view');
        const tableView = document.getElementById('table-view');
        
        cardView.style.display = viewType === 'card' ? 'grid' : 'none';
        tableView.style.display = viewType === 'table' ? 'block' : 'none';

        this.renderItems();
    }

    populateSelects() {
        const selects = [
            document.getElementById('target-box'),
            document.getElementById('box-filter'),
            document.getElementById('item-box')
        ];

        selects.forEach(select => {
            // Clear existing options except first
            const firstOption = select.querySelector('option');
            select.innerHTML = '';
            if (firstOption) {
                select.appendChild(firstOption);
            }

            // Add box options
            this.boxes.forEach(box => {
                const option = document.createElement('option');
                option.value = box.code;
                option.textContent = `${box.code} - ${box.name}`;
                select.appendChild(option);
            });
        });
    }

    getFilteredItems() {
        let filtered = [...this.items];

        // Apply search filter
        if (this.filters.search) {
            const search = this.filters.search.toLowerCase();
            filtered = filtered.filter(item => 
                item.serial.toLowerCase().includes(search) ||
                item.item.toLowerCase().includes(search) ||
                item.box.toLowerCase().includes(search)
            );
        }

        // Apply box filter
        if (this.filters.box) {
            filtered = filtered.filter(item => item.box === this.filters.box);
        }

        // Apply status filter
        if (this.filters.status) {
            if (this.filters.status === 'with-box') {
                filtered = filtered.filter(item => item.box);
            } else if (this.filters.status === 'no-box') {
                filtered = filtered.filter(item => !item.box);
            }
        }

        // Apply sorting
        filtered.sort((a, b) => {
            let aVal = a[this.sortBy] || '';
            let bVal = b[this.sortBy] || '';

            if (typeof aVal === 'string') {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }

            if (aVal < bVal) return this.sortOrder === 'asc' ? -1 : 1;
            if (aVal > bVal) return this.sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        return filtered;
    }

    renderItems() {
        const filteredItems = this.getFilteredItems();
        
        if (this.currentView === 'table') {
            this.renderTable(filteredItems);
        } else {
            this.renderCards(filteredItems);
        }
        
        this.renderPagination(filteredItems.length);
        this.updateSortIndicators();
    }

    renderTable(items) {
        const tbody = document.getElementById('table-body');
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageItems = items.slice(startIndex, endIndex);

        tbody.innerHTML = '';

        pageItems.forEach(item => {
            const row = document.createElement('tr');
            
            const boxStatus = item.box ? 
                `<span class="status status--with-box">${item.box}</span>` :
                `<span class="status status--no-box">Brak</span>`;

            const lastSeen = item.lastSeen ? 
                new Date(item.lastSeen).toLocaleString('pl-PL') : '-';
            const boxChanged = item.boxChanged ? 
                new Date(item.boxChanged).toLocaleString('pl-PL') : '-';

            row.innerHTML = `
                <td><strong>${item.serial}</strong></td>
                <td>${item.item}</td>
                <td>${boxStatus}</td>
                <td class="text-muted">${lastSeen}</td>
                <td class="text-muted">${boxChanged}</td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn action-btn--edit" onclick="app.editItem('${item.serial}')">
                            ✏️ Edytuj
                        </button>
                        <button class="action-btn action-btn--delete" onclick="app.confirmDeleteItem('${item.serial}')">
                            🗑️ Usuń
                        </button>
                    </div>
                </td>
            `;
            
            tbody.appendChild(row);
        });

        if (pageItems.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="text-center text-muted" style="padding: 2rem;">
                        Nie znaleziono przedmiotów
                    </td>
                </tr>
            `;
        }
    }

    renderCards(items) {
        const cardView = document.getElementById('card-view');
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const pageItems = items.slice(startIndex, endIndex);

        cardView.innerHTML = '';

        pageItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            const boxStatus = item.box ? 
                `<span class="status status--with-box">${item.box}</span>` :
                `<span class="status status--no-box">Brak pudełka</span>`;

            const lastSeen = item.lastSeen ? 
                new Date(item.lastSeen).toLocaleString('pl-PL') : 'Nigdy';

            card.innerHTML = `
                <div class="card__header">
                    <h4>${item.serial}</h4>
                    ${boxStatus}
                </div>
                <div class="card__body">
                    <h5>${item.item}</h5>
                    <p class="text-muted">Ostatnio widziany: ${lastSeen}</p>
                </div>
                <div class="card__footer">
                    <div class="action-buttons">
                        <button class="btn btn--outline btn--sm" onclick="app.editItem('${item.serial}')">
                            ✏️ Edytuj
                        </button>
                        <button class="btn btn--outline btn--sm" onclick="app.confirmDeleteItem('${item.serial}')" 
                                style="color: var(--color-error); border-color: var(--color-error);">
                            🗑️ Usuń
                        </button>
                    </div>
                </div>
            `;

            cardView.appendChild(card);
        });

        if (pageItems.length === 0) {
            cardView.innerHTML = `
                <div class="text-center text-muted" style="grid-column: 1 / -1; padding: 2rem;">
                    Nie znaleziono przedmiotów
                </div>
            `;
        }
    }

    renderPagination(totalItems) {
        const pagination = document.getElementById('pagination');
        const totalPages = Math.ceil(totalItems / this.itemsPerPage);

        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }

        let paginationHTML = '';

        // Previous button
        paginationHTML += `
            <button class="pagination-btn ${this.currentPage === 1 ? 'disabled' : ''}" 
                    onclick="app.goToPage(${this.currentPage - 1})" 
                    ${this.currentPage === 1 ? 'disabled' : ''}>
                ← Poprzednia
            </button>
        `;

        // Page numbers
        const startPage = Math.max(1, this.currentPage - 2);
        const endPage = Math.min(totalPages, this.currentPage + 2);

        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `
                <button class="pagination-btn ${i === this.currentPage ? 'pagination-btn--active' : ''}" 
                        onclick="app.goToPage(${i})">
                    ${i}
                </button>
            `;
        }

        // Next button
        paginationHTML += `
            <button class="pagination-btn ${this.currentPage === totalPages ? 'disabled' : ''}" 
                    onclick="app.goToPage(${this.currentPage + 1})" 
                    ${this.currentPage === totalPages ? 'disabled' : ''}>
                Następna →
            </button>
        `;

        // Info
        const startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endItem = Math.min(this.currentPage * this.itemsPerPage, totalItems);
        paginationHTML += `
            <div class="pagination-info">
                ${startItem}-${endItem} z ${totalItems}
            </div>
        `;

        pagination.innerHTML = paginationHTML;
    }

    goToPage(page) {
        const totalItems = this.getFilteredItems().length;
        const totalPages = Math.ceil(totalItems / this.itemsPerPage);
        
        if (page >= 1 && page <= totalPages) {
            this.currentPage = page;
            this.renderItems();
        }
    }

    handleSort(field) {
        if (this.sortBy === field) {
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortBy = field;
            this.sortOrder = 'asc';
        }
        this.currentPage = 1;
        this.renderItems();
    }

    updateSortIndicators() {
        document.querySelectorAll('.sort-indicator').forEach(indicator => {
            indicator.classList.remove('asc', 'desc');
        });

        const currentHeader = document.querySelector(`[data-sort="${this.sortBy}"] .sort-indicator`);
        if (currentHeader) {
            currentHeader.classList.add(this.sortOrder);
        }
    }

    clearFilters() {
        this.filters = { search: '', box: '', status: '' };
        document.getElementById('search-input').value = '';
        document.getElementById('box-filter').value = '';
        document.getElementById('status-filter').value = '';
        this.currentPage = 1;
        this.renderItems();
    }

    openItemModal(item = null) {
        this.editingItem = item;
        const modal = document.getElementById('item-modal');
        const title = document.getElementById('modal-title');
        const form = document.getElementById('item-form');

        title.textContent = item ? 'Edytuj przedmiot' : 'Dodaj przedmiot';

        if (item) {
            document.getElementById('item-serial').value = item.serial;
            document.getElementById('item-name').value = item.item;
            document.getElementById('item-box').value = item.box;
        } else {
            form.reset();
        }

        modal.classList.remove('hidden');
    }

    closeItemModal() {
        document.getElementById('item-modal').classList.add('hidden');
        this.editingItem = null;
    }

    saveItem() {
        const serial = document.getElementById('item-serial').value.trim();
        const name = document.getElementById('item-name').value.trim();
        const box = document.getElementById('item-box').value;

        if (!serial || !name) {
            alert('Proszę wypełnić wszystkie wymagane pola');
            return;
        }

        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

        if (this.editingItem) {
            // Update existing item
            const index = this.items.findIndex(item => item.serial === this.editingItem.serial);
            if (index !== -1) {
                const oldBox = this.items[index].box;
                this.items[index] = {
                    ...this.items[index],
                    serial,
                    item: name,
                    box,
                    lastSeen: now,
                    boxChanged: oldBox !== box ? now : this.items[index].boxChanged
                };
            }
        } else {
            // Add new item
            if (this.items.find(item => item.serial === serial)) {
                alert('Przedmiot o tym numerze seryjnym już istnieje');
                return;
            }

            this.items.push({
                serial,
                item: name,
                box,
                lastSeen: now,
                boxChanged: box ? now : ''
            });
        }

        this.updateBoxCounts();
        this.renderItems();
        this.closeItemModal();
    }

    editItem(serial) {
        const item = this.items.find(item => item.serial === serial);
        if (item) {
            this.openItemModal(item);
        }
    }

    confirmDeleteItem(serial) {
        const item = this.items.find(item => item.serial === serial);
        if (item) {
            document.getElementById('delete-item-name').textContent = `${item.serial} - ${item.item}`;
            document.getElementById('delete-modal').classList.remove('hidden');
            this.itemToDelete = serial;
        }
    }

    closeDeleteModal() {
        document.getElementById('delete-modal').classList.add('hidden');
        this.itemToDelete = null;
    }

    deleteItem() {
        if (this.itemToDelete) {
            this.items = this.items.filter(item => item.serial !== this.itemToDelete);
            this.updateBoxCounts();
            this.renderItems();
            this.closeDeleteModal();
        }
    }

    updateBoxCounts() {
        this.boxes.forEach(box => {
            box.itemCount = this.items.filter(item => item.box === box.code).length;
        });
    }

    // Scanner functionality
    startScanning() {
        const readerElement = document.getElementById('qr-reader');
        
        if (this.qrReader) {
            this.stopScanning();
        }

        this.qrReader = new Html5Qrcode("qr-reader");
        
        Html5Qrcode.getCameras().then(devices => {
            if (devices && devices.length) {
                const cameraId = devices[0].id;
                
                this.qrReader.start(
                    cameraId,
                    {
                        fps: 10,
                        qrbox: { width: 250, height: 250 }
                    },
                    (qrCodeMessage) => {
                        this.handleQRScan(qrCodeMessage);
                    },
                    (errorMessage) => {
                        // Handle scan error silently
                    }
                ).then(() => {
                    document.getElementById('start-scan').style.display = 'none';
                    document.getElementById('stop-scan').style.display = 'inline-flex';
                });
            }
        }).catch(err => {
            console.error('Error starting camera:', err);
            alert('Nie można uruchomić kamery');
        });
    }

    stopScanning() {
        if (this.qrReader) {
            this.qrReader.stop().then(() => {
                this.qrReader.clear();
                this.qrReader = null;
                document.getElementById('start-scan').style.display = 'inline-flex';
                document.getElementById('stop-scan').style.display = 'none';
            });
        }
    }

    handleQRScan(qrCode) {
        const targetBox = document.getElementById('target-box').value;
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

        let item = this.items.find(item => item.serial === qrCode);
        
        if (!item) {
            // Create new item
            const itemName = prompt(`Nowy przedmiot: ${qrCode}\nPodaj nazwę:`);
            if (!itemName) return;

            item = {
                serial: qrCode,
                item: itemName,
                box: targetBox,
                lastSeen: now,
                boxChanged: targetBox ? now : ''
            };
            this.items.push(item);
        } else {
            // Update existing item
            const oldBox = item.box;
            item.box = targetBox;
            item.lastSeen = now;
            if (oldBox !== targetBox) {
                item.boxChanged = now;
            }
        }

        if (this.scanMode === 'batch') {
            this.batchResults.push({
                serial: qrCode,
                action: item ? 'updated' : 'created',
                box: targetBox,
                timestamp: now
            });
            this.displayBatchResults();
        } else {
            this.displayScanResult(item);
            this.stopScanning();
        }

        this.updateBoxCounts();
        if (this.currentTab === 'lista') {
            this.renderItems();
        }
    }

    displayScanResult(item) {
        const resultsDiv = document.getElementById('scan-results');
        resultsDiv.innerHTML = `
            <div class="card">
                <div class="card__header">
                    <h4>✅ Zeskanowano pomyślnie</h4>
                </div>
                <div class="card__body">
                    <p><strong>Numer:</strong> ${item.serial}</p>
                    <p><strong>Przedmiot:</strong> ${item.item}</p>
                    <p><strong>Pudełko:</strong> ${item.box || 'Brak'}</p>
                    <p><strong>Czas:</strong> ${new Date(item.lastSeen).toLocaleString('pl-PL')}</p>
                </div>
            </div>
        `;
    }

    displayBatchResults() {
        const resultsDiv = document.getElementById('scan-results');
        const resultsHTML = this.batchResults.map(result => `
            <div class="scan-result-item">
                <span class="status status--with-box">${result.serial}</span>
                <span>${result.action === 'created' ? 'Utworzono' : 'Zaktualizowano'}</span>
                <span class="text-muted">${result.box || 'Brak pudełka'}</span>
            </div>
        `).join('');

        resultsDiv.innerHTML = `
            <div class="card">
                <div class="card__header">
                    <h4>Wyniki skanowania wsadowego (${this.batchResults.length})</h4>
                </div>
                <div class="card__body">
                    ${resultsHTML}
                </div>
                <div class="card__footer">
                    <button class="btn btn--outline btn--sm" onclick="app.clearBatchResults()">
                        Wyczyść wyniki
                    </button>
                </div>
            </div>
        `;
    }

    clearBatchResults() {
        this.batchResults = [];
        document.getElementById('scan-results').innerHTML = '';
    }

    // Export/Import functionality
    exportJSON() {
        const data = {
            items: this.items,
            boxes: this.boxes,
            exportDate: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `inwentarz_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    exportCSV() {
        const headers = ['Numer seryjny', 'Nazwa', 'Pudełko', 'Ostatnio widziany', 'Zmiana pudełka'];
        const csvData = [headers];

        this.items.forEach(item => {
            csvData.push([
                item.serial,
                item.item,
                item.box || '',
                item.lastSeen || '',
                item.boxChanged || ''
            ]);
        });

        const csvContent = csvData.map(row => 
            row.map(field => `"${field.toString().replace(/"/g, '""')}"`).join(',')
        ).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `inwentarz_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    }

    importJSON() {
        const fileInput = document.getElementById('import-json-file');
        const file = fileInput.files[0];

        if (!file) {
            alert('Proszę wybrać plik JSON');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                
                if (data.items && Array.isArray(data.items)) {
                    if (confirm('Czy na pewno chcesz zastąpić obecne dane?')) {
                        this.items = data.items;
                        if (data.boxes && Array.isArray(data.boxes)) {
                            this.boxes = data.boxes;
                        }
                        this.populateSelects();
                        this.updateBoxCounts();
                        this.renderItems();
                        alert('Dane zostały zaimportowane pomyślnie');
                    }
                } else {
                    alert('Nieprawidłowy format pliku JSON');
                }
            } catch (error) {
                alert('Błąd podczas parsowania pliku JSON');
            }
        };
        reader.readAsText(file);
    }

    importCSV() {
        const fileInput = document.getElementById('import-csv-file');
        const file = fileInput.files[0];

        if (!file) {
            alert('Proszę wybrać plik CSV');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target.result;
                const lines = text.split('\n');
                const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
                
                if (confirm('Czy na pewno chcesz zastąpić obecne przedmioty?')) {
                    const newItems = [];
                    
                    for (let i = 1; i < lines.length; i++) {
                        const line = lines[i].trim();
                        if (!line) continue;
                        
                        const values = line.split(',').map(v => v.replace(/"/g, '').trim());
                        
                        if (values.length >= 2) {
                            newItems.push({
                                serial: values[0] || '',
                                item: values[1] || '',
                                box: values[2] || '',
                                lastSeen: values[3] || '',
                                boxChanged: values[4] || ''
                            });
                        }
                    }
                    
                    this.items = newItems;
                    this.updateBoxCounts();
                    this.renderItems();
                    alert(`Zaimportowano ${newItems.length} przedmiotów`);
                }
            } catch (error) {
                alert('Błąd podczas parsowania pliku CSV');
            }
        };
        reader.readAsText(file);
    }
}

// Initialize app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new InventoryApp();
});