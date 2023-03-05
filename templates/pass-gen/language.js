$(document).ready(function() {
	// Default language
	loadLanguage('en');

	// Listen for language change events
	$('#language-select').change(function() {
		var language = $(this).val();
		loadLanguage(language);
	});
});


//OLD
// function loadLanguage(language) {
// 	// Load language data from JSON file
// 	$.getJSON('lang/' + language + '.json', function(data) {
// 		// Update page content
// 		$('#heading').text(data.heading);
// 		$('#content').text(data.content);
//      $('#pass-gen').text(data.pass_gen);
// 	});
// }



// Langauges selector
$(document).ready(function() {
    const langSelect = $('#language-select');
    let language = langSelect.val();
  
    // load language after language-select
    langSelect.change(function() {
      language = $(this).val();
      loadLanguage();
    });
  
    // language loading
    function loadLanguage() {
      $.getJSON(`lang/${language}.json`, function(data) {
        for (const key in data) {
          $(`#${key}`).text(data[key]);
        }
      });
    }
  
    // When Website Loading
    loadLanguage();
  });
  