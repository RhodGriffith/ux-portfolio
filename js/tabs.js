$(function(){
  var $tabs = $('[role="tab"]');
  var $panels = $('[role="tabpanel"]');
  $tabs.click(function(){
    var selected = $(this).attr('aria-selected');
    if( selected === 'true' ) {
      return false;
    }
    var id = '#' + $(this).attr('aria-controls');
    $tabs.attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');
    $panels.attr('aria-hidden', 'true');
    $(id).attr('aria-hidden', 'false');
  });
});
