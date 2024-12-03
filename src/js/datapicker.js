import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker'; // Импортируем Datepicker
import 'jquery-ui/themes/base/theme.css'; // Импортируем базовую тему (при необходимости)

$(document).ready(function () {
  // Пример использования Datepicker
  $('#datepicker').datepicker({
    // Настройки Datepicker
    dateFormat: 'dd-mm-yy',
  });
});