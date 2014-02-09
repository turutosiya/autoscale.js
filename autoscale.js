/**
 * autoscle.js
 *
 * @author       Toshiya TSURU <t_tsuru@sunbi.co.jp>
 * @version      $Id$
 *
 * Last changed: $LastChangedDate$
 * Author:       $Author$
 * 
 */
(function() {
	jQuery.fn.extend({
		/**
		 * autoscale
		 */
		autoscale: function() {
			var _this = this;
			if (!_this._autoscale_window_resize_attached) {
				$(window).resize(function(){ _this.autoscale(); });
				_this._autoscale_window_resize_attached = true;
			}
			// calculate scale
			var scalew = this.parent().width()  / this.width();
			var scaleh = this.parent().height() / this.height();
			var scale  = (scalew < scaleh) ? scalew : scaleh;
			// apply scale
			return this.css({
				"transform"                : "scale(" + scale + ")",
				"transform-origin"         : "center middle",
				"-webkit-transform"        : "scale(" + scale + ")",
				"-webkit-transform-origin" : "center middle"
			});
		}
	});
})();
