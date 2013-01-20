(function () {
    'use strict';
    // A DOM element with the id calendarContainer must exist in index.html.
    var oContainer = document.getElementById( 'calendarContainer' ),
    // We create an instance of the English locale object.
        oLocale = new CalendarLocale_EN(),
    // We get the actual date to set the calendar default date.
        oDate = new Date();

    Hydra.module.register( 'calendar', function ( bus ) {
        return {
            // Method to initialize the calendar widget
            startCalendar: function () {
                var oCalendar = new Calendar();
                /*
                 * After initializing the calendar widget we need to:
                 *    * Set a container where the widget will be rendered
                 *    * Set the locale that will be used to set the calendar
                 *    * Set the actual date
                 *    * Render the widget inside the container
                 */
                oCalendar
                    .setContainer( oContainer )
                    .setLocale( oLocale )
                    .setDate( oDate )
                    .insertIntoDOM();
            },
            // Init method will be called when the module initializes.
            init: function () {
                this.startCalendar();
            }
        };
    } );
}());