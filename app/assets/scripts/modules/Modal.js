import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events() {
        //clicking the open modal buttom
        this.openModalButton.click(this.openModal.bind(this));

        //clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));

        //pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return false; //this will prevent the browser from scrolling up to the top
        // because the "get in touch" btn has a href of "#", which automatically takes
        // //us back to the top when clicked
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) { //listen for keyUp on Escape Key
            this.closeModal();
        }
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;