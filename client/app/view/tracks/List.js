Ext.define('Spotify.view.tracks.List', {
	extend: 'Ext.dataview.List',

	xtype: 'spotify-track-list',

	requires: [
		'Spotify.view.tracks.ListController'
	],

	controller      : 'spotify-tracks-list',
	listeners       : {
		disclose: 'onItemDisclosureHandler'
	},
	onItemDisclosure: true,
	itemTpl         : '<div class="track">' +

	'<div class="track-bookmark-icon">' +
	'<span class="x-fa  {[values.bookmarked ? "fa-bookmark" : "fa-bookmark-o"]}" />' +
	'</div>' +

	'<div class="track-info">' +
	'<span class="track-played-at">{played_at:date("d.m.Y - H:i")}</span>' +
	'<br /> {name} - {artist}' +
	'</div>' +

	'</div>'
});
