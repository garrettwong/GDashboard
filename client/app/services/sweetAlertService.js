import { default as swal } from 'sweetalert2/dist/sweetalert2.min'
import 'sweetalert2/dist/sweetalert2.min.css'

export default class SweetAlert {
    constructor() {
        this.swal = swal;
    }

    static getClassName() { return 'SweetAlert'; }
    getClassName() { return SweetAlert.getClassName(); }
}
