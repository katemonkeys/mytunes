var SongQueueView = Backbone.View.extend({

	initialize: function() {
		this.collection.on('add',this.render,this);
		this.collection.on('remove',this.render,this);
	},

	tagName: 'table',

	render: function(){
		this.$el.children().detach();

		return this.$el.html('<th>Song Queue</th>').append(
			this.collection.map(function(song){
				return new SongQueueEntryView({model: song}).render();
			})
		);
	}

});