import Store from './services/Store.js';
import { loadData } from './services/Menu.js';

// create a global app variable
window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => loadData());
