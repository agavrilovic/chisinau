/*
 * main functions
 */
// game resources
var g_resources = [
	// parallax background
	{name: "bkg0", type:"image", src: "img/bkg0.png"},
	{name: "bkg1", type:"image", src: "img/bkg1.png"},
	// interface
	{name: "title", type:"image", src: "img/title.png"},
	{name: "play", type:"image", src: "img/play.png"},
	{name: "play_hover", type:"image", src: "img/play_hover.png"},
	{name: "restart", type:"image", src: "img/restart.png"},
	{name: "restart_hover", type:"image", src: "img/restart_hover.png"},
	{ name: "menu", type: "image", src: "img/menu.png" },
	{ name: "menu_hover", type: "image", src: "img/menu_hover.png" },
	// life
	{name: "life0", type:"image", src: "img/life0.png"},
	{name: "life1", type:"image", src: "img/life1.png"},
	{name: "life2", type:"image", src: "img/life2.png"},
	{name: "life3", type:"image", src: "img/life3.png"},
	// game
	{name: "ship", type:"image", src: "img/ship.png"},
	{name: "enemy", type:"image", src: "img/enemy.png"},
	{name: "missile", type:"image", src: "img/missile.png"},
	{name: "implosion", type:"image", src: "img/implosion.png"},
	// audio
	{ name: "nextlevel", type: "audio", src: "sound/", channel: 1 },
	{name: "clash", type:"audio", src: "sound/", channel: 1},
	{ name: "missile", type: "audio", src: "sound/", channel: 1 },
	{ name: "implosion", type: "audio", src: "sound/", channel: 1 },
	{ name: "background", type: "audio", src: "sound/", channel: 1 }     
];

var jsApp =
{	
	/*
	 * Initialize the jsApp
	 */
	onload: function()
	{
		// init the video
		if (!me.video.init("jsapp", 800, 450))
		{
			alert("Sorry but your browser does not support html 5 canvas. Please try with another one!");
			return;
		}
		// initialize the audio
		me.audio.init("ogg");
		// set all resources to be loaded
		me.loader.onload = this.loaded.bind(this);
		me.loader.preload(g_resources);
		// set the "Loading" Screen Object
		me.state.set(me.state.LOADING, new LoadingScreen());
		// load everything & display a loading screen
		me.state.change(me.state.LOADING);
	},
	/*
	 * callback when everything is loaded
	 */
	loaded: function ()
	{
		// set a global fading transition for the screen
		me.state.transition("fade", "#FFFFFF", 250);
		// enable the keyboard
		me.input.bindKey(me.input.KEY.LEFT, "left");
		me.input.bindKey(me.input.KEY.RIGHT, "right");
		me.input.bindKey(me.input.KEY.UP, "up");
		me.input.bindKey(me.input.KEY.DOWN, "down");
		me.input.bindKey(me.input.KEY.SPACE, "fire", true);
	    // draw menu
		me.state.set(me.state.MENU, new MenuScreen());
		me.state.change(me.state.MENU);
	}
}; // jsApp
// bootstrap :)
window.onReady(function() 
{
	jsApp.onload();
});
