var viewModel = {};
(function( $, ko ) {
  var data = $.getJSON("data/pickledFeatures.json", function(data) {
    viewModel = ko.mapping.fromJSON(data.Data);
    ko.applyBindings(viewModel);
  });
})( jQuery, ko );