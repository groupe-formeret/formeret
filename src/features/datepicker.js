import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { French } from "flatpickr/dist/l10n/fr.js"


function datepicker() {
    /* call flatrpickr for class .is-date*/
    flatpickr(".is-date", {
        dateFormat: "d-m-Y",
        minDate: "today",
        disableMobile: "true",
        altInput: true,
        altFormat: "d-m-Y",
        allowInput: true,
        locale: French,
    });
}

export default datepicker;