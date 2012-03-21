// **This example illustrates the binding of DOM events to View methods.**
//
// _Working example: [2.html](../2.html)._  
// _[Go to Example 3](3.html)_

//
(function($){
  var ListView = Backbone.View.extend({
    el: $('body'), // el attaches to existing element
    // `events`: Where DOM events are bound to View methods. Backbone doesn't have a separate controller to handle such bindings; it all happens in a View.
    events: {
      'click button#add': 'addItem'
    },
    initialize: function(){
      _.bindAll(this, 'render', 'addItem'); // every function that uses 'this' as the current object should be in here
      
      this.counter = 0; // total number of items added thus far
      this.render();
    },
    // `render()` now introduces a button to add a new list item.
    render: function(){
      $(this.el).append("<button id='add'>Add list item</button>");
      $(this.el).append("<ul></ul>");
    },
    // `addItem()`: Custom function called via `click` event above.
    addItem: function(){
      this.counter++;
      $('ul', this.el).append("<li>hello world"+this.counter+"</li>");
    }
  });

  var listView = new ListView();      
})(jQuery);

// For more on coding and startups: <br/>
// <a href="https://twitter.com/arturadib" class="twitter-follow-button" data-show-count="false">Follow @arturadib</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
