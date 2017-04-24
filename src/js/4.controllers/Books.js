;(function( win, doc ) {
    'use strict';


    win.APP.Ctrls.Books = Books();


    function Books() {

        var $public = {};

        $public.init = function init() {
            APP.Services.AsideFilterBooks.init();
        }

        return $public;

    }


})( window, document ); 
