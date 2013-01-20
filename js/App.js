(function (win) {
    'use strict';
    // Define the namespace
    window.App = {};
    document.addEventListener('DOMContentLoaded', function () {
        Hydra.module.start( 'calendar' );
    });
}(window));