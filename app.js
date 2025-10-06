class InventoryApp {
    constructor() {
        // Initialize with complete 44 items from provided data
        this.items = [
            {"serial": "DOM064", "item": "Czerwony spray", "box": "BOX05", "lastSeen": "2025-09-14 21:30:09", "boxChanged": "2025-09-14 21:30:19"},
            {"serial": "DOM070", "item": "Płyn do robienia baniek", "box": "BOX05", "lastSeen": "2025-09-14 21:30:31", "boxChanged": "2025-09-14 21:30:49"},
            {"serial": "DOM013", "item": "Kadzidełka", "box": "BOX05", "lastSeen": "2025-09-14 21:31:00", "boxChanged": "2025-09-14 21:31:10"},
            {"serial": "DOM068", "item": "Maszynka do baniek", "box": "BOX05", "lastSeen": "2025-09-14 21:31:50", "boxChanged": "2025-09-14 21:31:59"},
            {"serial": "DOM040", "item": "Gikerek", "box": "BOX05", "lastSeen": "2025-09-14 21:32:06", "boxChanged": "2025-09-14 21:32:12"},
            {"serial": "DOM009", "item": "Układanki od Mamy tosi", "box": "BOX05", "lastSeen": "2025-09-14 21:32:18", "boxChanged": "2025-09-14 21:32:26"},
            {"serial": "DOM038", "item": "chiński specyfik", "box": "BOX05", "lastSeen": "2025-09-14 21:32:49", "boxChanged": "2025-09-14 21:32:49"},
            {"serial": "DOM036", "item": "Munchkin Steampunk", "box": "BOX05", "lastSeen": "2025-09-14 21:33:33", "boxChanged": "2025-09-14 21:33:42"},
            {"serial": "DOM032", "item": "Munchkin OG", "box": "BOX05", "lastSeen": "2025-09-14 21:33:50", "boxChanged": "2025-09-14 21:34:00"},
            {"serial": "DOM039", "item": "Zestaw alkoholowy - 2x mini limoncello i ZAPASOWE PIWO", "box": "BOX05", "lastSeen": "2025-09-14 21:34:21", "boxChanged": "2025-09-14 21:34:30"},
            {"serial": "DOM015", "item": "Płyn do maszyny do dymu", "box": "BOX05", "lastSeen": "2025-09-14 21:34:38", "boxChanged": "2025-09-14 21:34:57"},
            {"serial": "DOM006", "item": "Kufel od Agi", "box": "BOX05", "lastSeen": "2025-09-14 21:35:05", "boxChanged": "2025-09-14 21:35:14"},
            {"serial": "DOM060", "item": "Ładowarka indukcyjna baseus", "box": "BOX05", "lastSeen": "2025-09-14 21:35:29", "boxChanged": "2025-09-14 21:35:36"},
            {"serial": "DOM030", "item": "dualshock", "box": "BOX05", "lastSeen": "2025-09-14 21:36:24", "boxChanged": "2025-09-14 21:36:24"},
            {"serial": "DOM011", "item": "2x Torba OKO HORUSA i ok 25x przeterminowane zaproszenia na event asstera", "box": "", "lastSeen": "2025-09-14 22:09:16", "boxChanged": "2025-09-14 22:10:05"},
            {"serial": "DOM092", "item": "mac pro tidal 1", "box": "TIDAL", "lastSeen": "2025-10-06 19:55:19", "boxChanged": "2025-10-06 19:55:19"},
            {"serial": "DOM115", "item": "mac tidal 2", "box": "TIDAL", "lastSeen": "2025-10-06 19:56:04", "boxChanged": "2025-10-06 19:56:04"},
            {"serial": "DOM087", "item": "mac air", "box": "TIDAL", "lastSeen": "2025-10-06 19:57:29", "boxChanged": "2025-10-06 19:57:29"},
            {"serial": "DOM086", "item": "wiertara BOSCH z udarem", "box": "", "lastSeen": "2025-10-06 20:01:02", "boxChanged": ""},
            {"serial": "DOM093", "item": "uchwyt do wspinaczki", "box": "", "lastSeen": "2025-10-06 20:03:58", "boxChanged": ""},
            {"serial": "DOM116", "item": "mała deska do pracy", "box": "", "lastSeen": "2025-10-06 20:04:11", "boxChanged": ""},
            {"serial": "DOM091", "item": "pompowane siedzenie na festiwal 1", "box": "", "lastSeen": "2025-10-06 20:04:59", "boxChanged": ""},
            {"serial": "DOM089", "item": "pompowane do siedzenia 2", "box": "", "lastSeen": "2025-10-06 20:05:42", "boxChanged": ""},
            {"serial": "DOM004", "item": "Szklanki", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM005", "item": "Węgielki do shisky IZZY COCO", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM008", "item": "Skarbonka Serduszko", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM010", "item": "SHISHA", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM012", "item": "Świeczki małe", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM014", "item": "Wełna czarna", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM017", "item": "Wełna różowa", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM018", "item": "Wełna tęczowa, wełna zielona, szydełko i druciki wyswagowane", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM019", "item": "Kieliszki do whisky x6", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM022", "item": "Czapka banan", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM023", "item": "Komiks hiphopowy od Madi", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM026", "item": "Karton od aparatu Tostera", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM029", "item": "Zegarek od starego", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM033", "item": "Kabel do zasilania głośniki/piecyk", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM035", "item": "Czerwone światełko rowerowe DUNLOP", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM061", "item": "Pojemnik na odpady medyczne z wenflonami w środku", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM062", "item": "Zapasowy mały iqos", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM063", "item": "Pan Bulwa", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM065", "item": "Głośniczek JBL GO", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM066", "item": "Piwny Kubek", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM067", "item": "Płyn LIZARD do czyszczenia podstrunnicy", "box": "", "lastSeen": "", "boxChanged": ""},
            {"serial": "DOM069", "item": "POO CURLING", "box": "", "lastSeen": "", "boxChanged": ""}
        ];

        this.boxes = [
            {"code": "BOX05", "name": "Pudełko różne", "location": "Magazyn", "itemCount": 14},
            {"code": "TIDAL", "name": "Sprzęt muzyczny", "location": "Studio", "itemCount": 3}
        ];

        // Scanner state
        this.scannerActive = false;
        this.scanMode = 'normal'; // 'normal' or 'batch'
        this.video = null;
        this.canvas = null;
        this.ctx = null;
        this.scanLoop = null;
        this.lastScannedCode = null;
        this.lastScanTime = 0;
        this.currentScannedItem = null;

        // Batch session
        this.batchSession = {
            active: false,
            targetBox: null,
            scannedItems: [],
            startTime: null
        };

        // Import data buffer
        this.importData = null;

        // Audio settings
        this.audioEnabled = true;
        this.vibrationEnabled = true;

        // Load saved data and initialize
        this.loadData();
        this.initializeUI();
        this.bindEvents();
        this.updateBoxCounts();
        this.renderItems();
        this.renderBoxes();
        this.populateBoxSelectors();
        this.renderStats();
    }

    // Data management
    loadData() {
        const savedData = localStorage.getItem('qr_inventory_data');
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                if (data.items && Array.isArray(data.items)) {
                    this.items = data.items;
                }
                if (data.boxes && Array.isArray(data.boxes)) {
                    this.boxes = data.boxes;
                }
            } catch (error) {
                console.error('Error loading data:', error);
            }
        }
    }

    saveData() {
        const data = {
            items: this.items,
            boxes: this.boxes,
            lastUpdate: new Date().toISOString()
        };
        localStorage.setItem('qr_inventory_data', JSON.stringify(data));
    }

    // UI Initialization
    initializeUI() {
        this.video = document.getElementById('video');
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas?.getContext('2d');
    }

    bindEvents() {
        // Tab navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.currentTarget.dataset.tab;
                this.switchTab(tab);
            });
        });

        // Scanner mode toggle
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                this.setScanMode(mode);
            });
        });

        // Scanner controls
        document.getElementById('startScanBtn').addEventListener('click', () => this.startScanning());
        document.getElementById('stopScanBtn').addEventListener('click', () => this.stopScanning());

        // Batch controls
        document.getElementById('batchBoxSelect').addEventListener('change', (e) => {
            this.selectBatchBox(e.target.value);
        });
        document.getElementById('addNewBoxBtn').addEventListener('click', () => this.showAddBoxModal());
        document.getElementById('endBatchBtn').addEventListener('click', () => this.endBatchSession());
        document.getElementById('undoLastBtn').addEventListener('click', () => this.undoLastScan());

        // Item scan modal
        document.getElementById('closeScanModal').addEventListener('click', () => this.hideItemScanModal());
        document.getElementById('continueScanBtn').addEventListener('click', () => this.continueScanFromModal());
        document.getElementById('scanBoxBtn').addEventListener('click', () => this.scanBoxFromModal());
        document.getElementById('editItemBtn').addEventListener('click', () => this.editItemFromModal());

        // Box management
        document.getElementById('addBoxModalBtn').addEventListener('click', () => this.showAddBoxModal());
        document.getElementById('saveBoxBtn').addEventListener('click', () => this.saveBox());
        document.getElementById('cancelAddBoxBtn').addEventListener('click', () => this.hideAddBoxModal());
        document.getElementById('closeAddBoxModal').addEventListener('click', () => this.hideAddBoxModal());

        // Item editing
        document.getElementById('saveItemBtn').addEventListener('click', () => this.saveItem());
        document.getElementById('cancelEditItemBtn').addEventListener('click', () => this.hideEditItemModal());
        document.getElementById('closeEditItemModal').addEventListener('click', () => this.hideEditItemModal());

        // Search and filter
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterItems(e.target.value);
        });
        document.getElementById('filterBox').addEventListener('change', (e) => {
            this.filterByBox(e.target.value);
        });

        // Import controls
        document.getElementById('csvFileInput').addEventListener('change', (e) => this.handleFileImport(e, 'csv'));
        document.getElementById('jsonFileInput').addEventListener('change', (e) => this.handleFileImport(e, 'json'));
        document.getElementById('parseClipboardBtn').addEventListener('click', () => this.parseClipboardData());
        document.getElementById('confirmImportBtn').addEventListener('click', () => this.confirmImport());
        document.getElementById('cancelImportBtn').addEventListener('click', () => this.cancelImport());

        // Export controls
        document.getElementById('exportCsvBtn').addEventListener('click', () => this.exportCSV());
        document.getElementById('exportJsonBtn').addEventListener('click', () => this.exportJSON());
        document.getElementById('copyTsvBtn').addEventListener('click', () => this.copyToClipboard('tsv'));
        document.getElementById('copyJsonBtn').addEventListener('click', () => this.copyToClipboard('json'));

        // Modal click outside to close
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        });
    }

    // Tab Navigation
    switchTab(tabName) {
        // Update nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');

        // Stop scanner when switching tabs
        if (tabName !== 'scanner' && this.scannerActive) {
            this.stopScanning();
        }

        // Refresh data when switching tabs
        if (tabName === 'lista') {
            this.renderItems();
            this.renderBoxes();
        }

        if (tabName === 'eksport') {
            this.renderStats();
        }
    }

    // Scanner Mode Management
    setScanMode(mode) {
        this.scanMode = mode;
        
        // Update mode buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

        // Show/hide batch controls
        const batchControls = document.getElementById('batchControls');
        if (mode === 'batch') {
            batchControls.classList.remove('hidden');
        } else {
            batchControls.classList.add('hidden');
            this.endBatchSession(); // End any active batch session
        }

        this.updateScanInstruction();
    }

    // QR Scanner Functions
    async startScanning() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { 
                    facingMode: 'environment',
                    width: { ideal: 400 },
                    height: { ideal: 300 }
                } 
            });
            
            this.video.srcObject = stream;
            this.scannerActive = true;
            
            // Update UI
            document.getElementById('startScanBtn').classList.add('hidden');
            document.getElementById('stopScanBtn').classList.remove('hidden');
            document.getElementById('cameraContainer').classList.remove('hidden');
            
            this.updateScanInstruction();
            this.updateScannerStatus('Skanowanie aktywne');
            
            // Start scan loop when video is ready
            this.video.addEventListener('loadedmetadata', () => {
                this.canvas.width = this.video.videoWidth;
                this.canvas.height = this.video.videoHeight;
                this.scanLoop = requestAnimationFrame(() => this.scan());
            });
            
        } catch (error) {
            console.error('Error starting camera:', error);
            this.showToast('Nie można uruchomić kamery. Sprawdź uprawnienia.', 'error');
            this.updateScannerStatus('Błąd kamery');
        }
    }

    stopScanning() {
        this.scannerActive = false;
        
        if (this.video.srcObject) {
            this.video.srcObject.getTracks().forEach(track => track.stop());
            this.video.srcObject = null;
        }
        
        if (this.scanLoop) {
            cancelAnimationFrame(this.scanLoop);
            this.scanLoop = null;
        }
        
        // Update UI
        document.getElementById('startScanBtn').classList.remove('hidden');
        document.getElementById('stopScanBtn').classList.add('hidden');
        document.getElementById('cameraContainer').classList.add('hidden');
        
        this.updateScannerStatus('Gotowy');
    }

    scan() {
        if (!this.scannerActive || !this.video || this.video.readyState !== this.video.HAVE_ENOUGH_DATA) {
            if (this.scannerActive) {
                this.scanLoop = requestAnimationFrame(() => this.scan());
            }
            return;
        }
        
        this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
        const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        
        if (window.jsQR) {
            const code = jsQR(imageData.data, imageData.width, imageData.height);
            
            if (code && code.data) {
                this.handleScanResult(code.data);
            }
        }
        
        if (this.scannerActive) {
            this.scanLoop = requestAnimationFrame(() => this.scan());
        }
    }

    handleScanResult(scannedCode) {
        const now = Date.now();
        const debounceDelay = 2000;
        
        // Prevent duplicate scans too quickly
        if (this.lastScannedCode === scannedCode && (now - this.lastScanTime) < debounceDelay) {
            return;
        }
        
        this.lastScannedCode = scannedCode;
        this.lastScanTime = now;
        
        // Validate DOM code pattern
        const isValidDomCode = /^DOM\d{3,}$/i.test(scannedCode);
        
        if (!isValidDomCode) {
            this.playSound('error');
            this.vibrate([100, 100, 100]);
            this.showToast(`Nieprawidłowy kod: ${scannedCode}`, 'error');
            return;
        }

        if (this.scanMode === 'batch') {
            this.handleBatchScan(scannedCode);
        } else {
            this.handleNormalScan(scannedCode);
        }
    }

    handleNormalScan(code) {
        const existingItem = this.items.find(item => item.serial === code);
        const timestamp = this.getCurrentTimestamp();
        
        this.playSound('success');
        this.vibrate([100]);
        
        if (existingItem) {
            existingItem.lastSeen = timestamp;
            this.currentScannedItem = existingItem;
        } else {
            // Add new item
            const newItem = {
                serial: code,
                item: '',
                box: '',
                lastSeen: timestamp,
                boxChanged: timestamp
            };
            this.items.push(newItem);
            this.currentScannedItem = newItem;
        }
        
        this.saveData();
        this.showItemScanModal(this.currentScannedItem);
    }

    handleBatchScan(code) {
        if (!this.batchSession.active) {
            this.showToast('Wybierz pudełko przed rozpoczęciem skanowania', 'error');
            return;
        }

        // Check if already scanned in this session
        if (this.batchSession.scannedItems.includes(code)) {
            this.playSound('error');
            this.vibrate([100, 100, 100]);
            this.showToast('Przedmiot już zeskanowany w tej sesji', 'warning');
            return;
        }
        
        this.batchSession.scannedItems.push(code);
        
        // Update or create item
        let item = this.items.find(i => i.serial === code);
        const timestamp = this.getCurrentTimestamp();
        
        if (!item) {
            item = {
                serial: code,
                item: '',
                box: this.batchSession.targetBox,
                lastSeen: timestamp,
                boxChanged: timestamp
            };
            this.items.push(item);
        } else {
            item.lastSeen = timestamp;
            if (item.box !== this.batchSession.targetBox) {
                item.boxChanged = timestamp;
                item.box = this.batchSession.targetBox;
            }
        }
        
        this.saveData();
        this.playSound('batch');
        this.vibrate([50]);
        this.updateBatchDisplay();
        this.showToast(`✅ ${code} → ${this.batchSession.targetBox}`, 'success');
    }

    // Modal Functions
    showItemScanModal(item) {
        document.getElementById('scannedSerial').textContent = item.serial;
        document.getElementById('scannedItemName').textContent = item.item || 'Bez nazwy';
        
        const box = this.boxes.find(b => b.code === item.box);
        document.getElementById('scannedItemBox').textContent = box ? `📦 ${box.name} (${box.code})` : '📍 Nie przypisano';
        document.getElementById('scannedLastSeen').textContent = item.lastSeen ? `Ostatnio: ${item.lastSeen}` : 'Pierwszy raz';
        
        document.getElementById('itemScanModal').classList.remove('hidden');
    }

    hideItemScanModal() {
        document.getElementById('itemScanModal').classList.add('hidden');
        this.currentScannedItem = null;
    }

    continueScanFromModal() {
        this.hideItemScanModal();
        // Continue scanning - modal is closed, scanner keeps running
    }

    scanBoxFromModal() {
        this.hideItemScanModal();
        this.showToast('Teraz zeskanuj kod pudełka', 'info');
        // Keep scanner running for box scan
    }

    editItemFromModal() {
        this.hideItemScanModal();
        if (this.currentScannedItem) {
            this.showEditItemModal(this.currentScannedItem.serial);
        }
    }

    // Batch Session Management
    selectBatchBox(boxCode) {
        if (!boxCode) {
            this.endBatchSession();
            return;
        }

        const box = this.boxes.find(b => b.code === boxCode);
        if (!box) return;

        this.batchSession = {
            active: true,
            targetBox: boxCode,
            scannedItems: [],
            startTime: new Date().toISOString()
        };

        // Update UI
        document.getElementById('batchSession').classList.remove('hidden');
        document.getElementById('sessionBoxName').textContent = `${box.name} (${boxCode})`;
        this.updateBatchDisplay();
        this.updateScanInstruction();
        
        this.showToast(`Rozpoczęto batch: ${box.name}`, 'success');
    }

    updateBatchDisplay() {
        document.getElementById('scannedCount').textContent = this.batchSession.scannedItems.length;
        
        const listContainer = document.getElementById('scannedItemsList');
        listContainer.innerHTML = '';
        
        // Show last 5 items
        this.batchSession.scannedItems.slice(-5).forEach((code) => {
            const item = this.items.find(i => i.serial === code);
            const div = document.createElement('div');
            div.className = 'scanned-item';
            div.innerHTML = `
                <span class="text-mono">${code}</span>
                <span class="text-muted">${item?.item || 'Bez nazwy'}</span>
            `;
            listContainer.appendChild(div);
        });
        
        // Enable/disable undo button
        document.getElementById('undoLastBtn').disabled = this.batchSession.scannedItems.length === 0;
    }

    undoLastScan() {
        if (this.batchSession.scannedItems.length === 0) return;
        
        const removedCode = this.batchSession.scannedItems.pop();
        
        // Remove box assignment from item
        const item = this.items.find(i => i.serial === removedCode);
        if (item && item.box === this.batchSession.targetBox) {
            item.box = '';
            item.boxChanged = this.getCurrentTimestamp();
        }
        
        this.saveData();
        this.updateBatchDisplay();
        this.showToast(`Cofnięto: ${removedCode}`, 'info');
    }

    endBatchSession() {
        if (!this.batchSession.active) return;
        
        const count = this.batchSession.scannedItems.length;
        this.updateBoxCounts();
        
        if (count > 0) {
            this.showToast(`✅ Batch zakończony: ${count} przedmiotów → ${this.batchSession.targetBox}`, 'success');
        }
        
        // Reset session
        this.batchSession = { active: false, targetBox: null, scannedItems: [], startTime: null };
        document.getElementById('batchSession').classList.add('hidden');
        document.getElementById('batchBoxSelect').value = '';
        this.updateScanInstruction();
    }

    // Box Management
    showAddBoxModal() {
        document.getElementById('addBoxModal').classList.remove('hidden');
        document.getElementById('boxCodeInput').focus();
    }

    hideAddBoxModal() {
        document.getElementById('addBoxModal').classList.add('hidden');
        document.getElementById('addBoxForm').reset();
    }

    saveBox() {
        const code = document.getElementById('boxCodeInput').value.trim().toUpperCase();
        const name = document.getElementById('boxNameInput').value.trim();
        const location = document.getElementById('boxLocationInput').value.trim();
        
        if (!code || !name) {
            this.showToast('Kod i nazwa są wymagane', 'error');
            return;
        }
        
        if (this.boxes.find(box => box.code === code)) {
            this.showToast('Pudełko o tym kodzie już istnieje', 'error');
            return;
        }
        
        const newBox = {
            code: code,
            name: name,
            location: location || '',
            itemCount: 0
        };
        
        this.boxes.push(newBox);
        this.saveData();
        this.renderBoxes();
        this.populateBoxSelectors();
        this.hideAddBoxModal();
        
        this.showToast(`Dodano pudełko: ${name}`, 'success');
    }

    deleteBox(code) {
        if (confirm('Czy na pewno chcesz usunąć to pudełko?\nPrzedmioty w nim pozostaną, ale utracą przypisanie.')) {
            // Remove box assignment from items
            this.items.forEach(item => {
                if (item.box === code) {
                    item.box = '';
                    item.boxChanged = this.getCurrentTimestamp();
                }
            });
            
            this.boxes = this.boxes.filter(box => box.code !== code);
            this.saveData();
            this.renderBoxes();
            this.populateBoxSelectors();
            this.updateBoxCounts();
            
            this.showToast('Pudełko zostało usunięte', 'success');
        }
    }

    // Item Management
    showEditItemModal(serial) {
        const item = this.items.find(i => i.serial === serial);
        if (!item) return;
        
        document.getElementById('editSerial').value = item.serial;
        document.getElementById('editItemName').value = item.item;
        
        // Populate box options
        const select = document.getElementById('editItemBox');
        select.innerHTML = '<option value="">-- Bez przypisania --</option>';
        this.boxes.forEach(box => {
            const option = document.createElement('option');
            option.value = box.code;
            option.textContent = `${box.name} (${box.code})`;
            if (box.code === item.box) {
                option.selected = true;
            }
            select.appendChild(option);
        });
        
        document.getElementById('editItemModal').classList.remove('hidden');
    }

    hideEditItemModal() {
        document.getElementById('editItemModal').classList.add('hidden');
        document.getElementById('editItemForm').reset();
    }

    saveItem() {
        const serial = document.getElementById('editSerial').value;
        const itemName = document.getElementById('editItemName').value.trim();
        const box = document.getElementById('editItemBox').value;
        
        const item = this.items.find(i => i.serial === serial);
        if (!item) return;
        
        const oldBox = item.box;
        item.item = itemName;
        item.box = box;
        
        if (oldBox !== box) {
            item.boxChanged = this.getCurrentTimestamp();
        }
        
        this.saveData();
        this.updateBoxCounts();
        this.renderItems();
        this.hideEditItemModal();
        
        this.showToast('Przedmiot został zaktualizowany', 'success');
    }

    deleteItem(serial) {
        if (confirm('Czy na pewno chcesz usunąć ten przedmiot?')) {
            this.items = this.items.filter(item => item.serial !== serial);
            this.saveData();
            this.updateBoxCounts();
            this.renderItems();
            this.showToast('Przedmiot został usunięty', 'success');
        }
    }

    // Rendering Functions
    renderItems() {
        const container = document.getElementById('itemsList');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.items.forEach(item => {
            const box = this.boxes.find(b => b.code === item.box);
            const div = document.createElement('div');
            div.className = 'item-card';
            div.innerHTML = `
                <div class="item-header">
                    <span class="item-serial">${item.serial}</span>
                    <div class="item-actions">
                        <button class="btn btn--outline btn--sm" onclick="app.showEditItemModal('${item.serial}')" title="Edytuj">✏️</button>
                        <button class="btn btn--outline btn--sm" onclick="app.deleteItem('${item.serial}')" title="Usuń">🗑️</button>
                    </div>
                </div>
                <div class="item-name">${item.item || 'Bez nazwy'}</div>
                <div class="item-box">
                    ${box ? `📦 ${box.name} (${box.code})` : '📍 Nie przypisano'}
                </div>
                ${item.lastSeen ? `<div class="item-last-seen">Ostatnio: ${item.lastSeen}</div>` : ''}
            `;
            container.appendChild(div);
        });
    }

    renderBoxes() {
        const container = document.getElementById('boxesList');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.boxes.forEach(box => {
            const div = document.createElement('div');
            div.className = 'box-card';
            div.innerHTML = `
                <div class="box-header">
                    <span class="box-code">${box.code}</span>
                    <div class="item-actions">
                        <button class="btn btn--outline btn--sm" onclick="app.deleteBox('${box.code}')" title="Usuń">🗑️</button>
                    </div>
                </div>
                <div class="box-name">${box.name}</div>
                <div class="box-location">📍 ${box.location}</div>
                <span class="box-count">${box.itemCount} przedmiotów</span>
            `;
            container.appendChild(div);
        });
    }

    populateBoxSelectors() {
        const selectors = ['batchBoxSelect', 'filterBox'];
        
        selectors.forEach(selectorId => {
            const select = document.getElementById(selectorId);
            if (!select) return;
            
            const currentValue = select.value;
            const firstOption = select.children[0].outerHTML;
            select.innerHTML = firstOption;
            
            this.boxes.forEach(box => {
                const option = document.createElement('option');
                option.value = box.code;
                option.textContent = `${box.name} (${box.code})`;
                if (box.code === currentValue) {
                    option.selected = true;
                }
                select.appendChild(option);
            });
        });
    }

    updateBoxCounts() {
        this.boxes.forEach(box => {
            box.itemCount = this.items.filter(item => item.box === box.code).length;
        });
        this.saveData();
    }

    // Search and Filter
    filterItems(searchTerm) {
        const items = document.querySelectorAll('.item-card');
        const term = searchTerm.toLowerCase();
        
        items.forEach(item => {
            const serial = item.querySelector('.item-serial').textContent.toLowerCase();
            const name = item.querySelector('.item-name').textContent.toLowerCase();
            const box = item.querySelector('.item-box').textContent.toLowerCase();
            
            if (serial.includes(term) || name.includes(term) || box.includes(term)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    filterByBox(boxCode) {
        const items = document.querySelectorAll('.item-card');
        
        items.forEach(item => {
            const serial = item.querySelector('.item-serial').textContent;
            const itemData = this.items.find(i => i.serial === serial);
            
            if (!boxCode || itemData?.box === boxCode || (boxCode === 'unassigned' && !itemData?.box)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Import Functions
    handleFileImport(event, type) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            this.parseImportData(content, type);
        };
        reader.readAsText(file);
        
        // Reset input
        event.target.value = '';
    }

    parseClipboardData() {
        const content = document.getElementById('clipboardInput').value.trim();
        if (!content) {
            this.showToast('Wklej dane do analizy', 'error');
            return;
        }
        
        // Try to detect format
        let type = 'csv';
        if (content.trim().startsWith('{') || content.trim().startsWith('[')) {
            type = 'json';
        }
        
        this.parseImportData(content, type);
    }

    parseImportData(content, type) {
        try {
            let parsedData = [];
            
            if (type === 'json') {
                const jsonData = JSON.parse(content);
                if (jsonData.items && Array.isArray(jsonData.items)) {
                    parsedData = jsonData.items;
                } else if (Array.isArray(jsonData)) {
                    parsedData = jsonData;
                } else {
                    parsedData = [jsonData];
                }
            } else {
                // Parse CSV
                const lines = content.split('\n').filter(line => line.trim());
                if (lines.length < 2) {
                    throw new Error('CSV musi zawierać nagłówki i co najmniej jeden rekord');
                }
                
                const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, '').toLowerCase());
                
                for (let i = 1; i < lines.length; i++) {
                    const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
                    const row = {};
                    headers.forEach((header, index) => {
                        row[header] = values[index] || '';
                    });
                    parsedData.push(row);
                }
            }
            
            this.previewImport(parsedData);
            
        } catch (error) {
            console.error('Import error:', error);
            this.showToast('Błąd parsowania danych: ' + error.message, 'error');
        }
    }

    previewImport(data) {
        this.importData = data.filter(item => {
            const serial = item.serial || item.Serial || '';
            return /^DOM\d{3,}$/i.test(serial);
        });
        
        if (this.importData.length === 0) {
            this.showToast('Nie znaleziono prawidłowych kodów DOM w danych', 'error');
            return;
        }
        
        // Show preview
        document.getElementById('importPreview').classList.remove('hidden');
        
        const newCount = this.importData.filter(item => !this.items.find(i => i.serial === (item.serial || item.Serial))).length;
        const updateCount = this.importData.length - newCount;
        
        // Update stats
        document.getElementById('previewStats').innerHTML = `
            <span class="preview-stat">Rekordów: ${this.importData.length}</span>
            <span class="preview-stat">Nowych: ${newCount}</span>
            <span class="preview-stat">Aktualizacji: ${updateCount}</span>
        `;
        
        // Show table preview (first 5 rows)
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');
        const headers = ['Serial', 'Item', 'Box', 'LastSeen'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);
        
        this.importData.slice(0, 5).forEach(item => {
            const row = document.createElement('tr');
            const serial = item.serial || item.Serial || '';
            const itemName = item.item || item.Item || '';
            const box = item.box || item.Box || '';
            const lastSeen = item.lastSeen || item.LastSeen || '';
            
            [serial, itemName, box, lastSeen].forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                row.appendChild(td);
            });
            table.appendChild(row);
        });
        
        document.getElementById('previewData').innerHTML = '';
        document.getElementById('previewData').appendChild(table);
    }

    confirmImport() {
        if (!this.importData) return;
        
        let newCount = 0;
        let updateCount = 0;
        
        this.importData.forEach(importItem => {
            const serial = (importItem.serial || importItem.Serial || '').toUpperCase();
            if (!serial || !/^DOM\d{3,}$/i.test(serial)) return;
            
            const existingIndex = this.items.findIndex(item => item.serial === serial);
            
            const itemData = {
                serial: serial,
                item: importItem.item || importItem.Item || '',
                box: importItem.box || importItem.Box || '',
                lastSeen: importItem.lastSeen || importItem.LastSeen || this.getCurrentTimestamp(),
                boxChanged: importItem.boxChanged || importItem.BoxChanged || this.getCurrentTimestamp()
            };
            
            if (existingIndex >= 0) {
                this.items[existingIndex] = { ...this.items[existingIndex], ...itemData };
                updateCount++;
            } else {
                this.items.push(itemData);
                newCount++;
            }
        });
        
        this.saveData();
        this.updateBoxCounts();
        this.renderItems();
        this.cancelImport();
        
        this.showToast(`Import: ${newCount} nowych, ${updateCount} aktualizacji`, 'success');
    }

    cancelImport() {
        this.importData = null;
        document.getElementById('importPreview').classList.add('hidden');
        document.getElementById('clipboardInput').value = '';
    }

    // Export Functions
    exportCSV() {
        const includeEmpty = document.getElementById('includeEmpty')?.checked ?? true;
        const includeBoxInfo = document.getElementById('includeBoxInfo')?.checked ?? true;
        
        let items = this.items;
        if (!includeEmpty) {
            items = items.filter(item => item.item.trim() !== '');
        }
        
        let csv = 'Serial,Item,Box,LastSeen,BoxChanged';
        if (includeBoxInfo) {
            csv += ',BoxName,BoxLocation';
        }
        csv += '\n';
        
        items.forEach(item => {
            const box = this.boxes.find(b => b.code === item.box);
            let row = `"${item.serial}","${item.item}","${item.box}","${item.lastSeen}","${item.boxChanged}"`;
            
            if (includeBoxInfo) {
                row += `,"${box?.name || ''}","${box?.location || ''}"`;
            }
            
            csv += row + '\n';
        });
        
        this.downloadFile(csv, 'inventory.csv', 'text/csv');
    }

    exportJSON() {
        const data = {
            items: this.items,
            boxes: this.boxes,
            exportDate: new Date().toISOString(),
            totalItems: this.items.length,
            totalBoxes: this.boxes.length
        };
        
        const json = JSON.stringify(data, null, 2);
        this.downloadFile(json, 'inventory.json', 'application/json');
    }

    copyToClipboard(format) {
        let content = '';
        
        if (format === 'tsv') {
            content = 'Serial\tItem\tBox\tLastSeen\tBoxChanged\n';
            this.items.forEach(item => {
                content += `${item.serial}\t${item.item}\t${item.box}\t${item.lastSeen}\t${item.boxChanged}\n`;
            });
        } else if (format === 'json') {
            content = JSON.stringify({
                items: this.items,
                boxes: this.boxes
            }, null, 2);
        }
        
        navigator.clipboard.writeText(content).then(() => {
            this.showToast('Skopiowano do schowka', 'success');
        }).catch(() => {
            this.showToast('Błąd kopiowania', 'error');
        });
    }

    downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url);
        this.showToast(`Pobrano: ${filename}`, 'success');
    }

    renderStats() {
        const container = document.getElementById('exportStats');
        if (!container) return;
        
        const totalItems = this.items.length;
        const itemsWithNames = this.items.filter(item => item.item.trim() !== '').length;
        const itemsAssigned = this.items.filter(item => item.box !== '').length;
        const totalBoxes = this.boxes.length;
        
        container.innerHTML = `
            <div class="stat-card">
                <span class="stat-value">${totalItems}</span>
                <span class="stat-label">Przedmiotów</span>
            </div>
            <div class="stat-card">
                <span class="stat-value">${itemsWithNames}</span>
                <span class="stat-label">Z nazwami</span>
            </div>
            <div class="stat-card">
                <span class="stat-value">${itemsAssigned}</span>
                <span class="stat-label">Przypisanych</span>
            </div>
            <div class="stat-card">
                <span class="stat-value">${totalBoxes}</span>
                <span class="stat-label">Pudełek</span>
            </div>
        `;
    }

    // Utility Functions
    getCurrentTimestamp() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    updateScanInstruction() {
        const instruction = document.getElementById('scanInstruction');
        if (!instruction) return;
        
        if (this.scanMode === 'batch' && this.batchSession.active) {
            instruction.textContent = `Skanuj przedmioty → ${this.batchSession.targetBox}`;
        } else if (this.scanMode === 'batch') {
            instruction.textContent = 'Wybierz pudełko dla trybu batch';
        } else {
            instruction.textContent = 'Skieruj kamerę na kod DOM';
        }
    }

    updateScannerStatus(status) {
        const statusEl = document.getElementById('scannerStatus');
        if (statusEl) {
            statusEl.textContent = status;
        }
    }

    playSound(type) {
        if (!this.audioEnabled) return;
        
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            const frequencies = {
                'success': 800,
                'batch': 1000,
                'error': 400
            };
            
            oscillator.frequency.setValueAtTime(frequencies[type] || 600, audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        } catch (error) {
            // Audio context may be blocked - ignore error
        }
    }

    vibrate(pattern) {
        if (this.vibrationEnabled && 'vibrate' in navigator) {
            navigator.vibrate(pattern);
        }
    }

    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        if (!toast || !toastMessage) return;
        
        toastMessage.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new InventoryApp();
});

// Global functions for onclick handlers
window.app = null;