import {iosVhFix} from './utils/ios-vh-fix';
import {sendForm} from './modules/form/send-form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    sendForm('diagnostics');
  });
});
