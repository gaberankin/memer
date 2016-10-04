'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escapeHtml;
function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function (m) {
    return map[m];
  });
}