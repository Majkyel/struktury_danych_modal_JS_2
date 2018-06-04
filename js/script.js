'use strict';
(function () {
    
    var modalLinks = document.querySelectorAll('.show-modal');
    var closeButtons = document.querySelectorAll('.modal .close');
    var modals = document.querySelectorAll('.modal');

    var showModal = function(event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
        document.querySelector(event.target.attributes.href.value).classList.add('show');
    };

    modalLinks.forEach( function(item) {
        item.addEventListener('click', showModal);
    });

    var hideModal = function(event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
    };

    closeButtons.forEach( function(item) {
       item.addEventListener('click',hideModal); 
    });

    document.querySelector('#modal-overlay').addEventListener('click', hideModal);

    modals.forEach( function(item) {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            modals.classList.remove('show');
            showModal();
        })
    });
})();
