// Add shims and polyfills
//import 'hybrids/shim';

// Import global stylesheets
//import './style.css';

const { define } = window.hybrids;
import AppRoot from './app-root.js';

// Define root custom elements with application
define('app-root', AppRoot);