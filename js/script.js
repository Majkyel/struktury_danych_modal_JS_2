'use strict';
(function () {
    
    // getting nodeList
    var modalLinks = document.querySelectorAll('.show-modal');
    var closeButtons = document.querySelectorAll('.modal .close');
    var modals = document.querySelectorAll('.modal');

    var showModal = function(event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
        document.querySelector(event.target.attributes.href.value).classList.add('show');
    };
 
    Array.prototype.forEach.call(modalLinks, function(item) {
        item.addEventListener('click', showModal);
    });
    
    // close modal click on overlay or x
    var hideModal = function(event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
    };

    Array.prototype.forEach.call(closeButtons, function(item) {
       item.addEventListener('click',hideModal); 
    }); 

    document.querySelector('#modal-overlay').addEventListener('click', hideModal);

    Array.prototype.forEach.call(modals, function(item) {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            modals.classList.remove('show');
            showModal();
        })
    });
})();
