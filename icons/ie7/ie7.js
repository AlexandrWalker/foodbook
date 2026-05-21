/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'FoodbookIconFont\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-vk-min': '&#xe951;',
		'icon-callback': '&#xe900;',
		'icon-wa': '&#xe901;',
		'icon-callback-min': '&#xe902;',
		'icon-wa-min': '&#xe903;',
		'icon-tg-min': '&#xe904;',
		'icon-max-min': '&#xe905;',
		'icon-orientation': '&#xe906;',
		'icon-foodbook': '&#xe907;',
		'icon-tg': '&#xe908;',
		'icon-vk': '&#xe909;',
		'icon-max': '&#xe90a;',
		'icon-menu-telephone': '&#xe90b;',
		'icon-menu-platform': '&#xe90c;',
		'icon-call': '&#xe90d;',
		'icon-chef': '&#xe90e;',
		'icon-vega': '&#xe90f;',
		'icon-hot': '&#xe910;',
		'icon-top': '&#xe911;',
		'icon-napitki': '&#xe912;',
		'icon-deserty': '&#xe913;',
		'icon-zakuski': '&#xe914;',
		'icon-rolls': '&#xe915;',
		'icon-salads': '&#xe916;',
		'icon-business-lunch': '&#xe917;',
		'icon-null': '&#xe918;',
		'icon-reviews': '&#xe919;',
		'icon-notification': '&#xe91a;',
		'icon-agreement': '&#xe91b;',
		'icon-privacy': '&#xe91c;',
		'icon-client-services': '&#xe91d;',
		'icon-history': '&#xe91e;',
		'icon-time': '&#xe91f;',
		'icon-sale': '&#xe920;',
		'icon-kuvshin': '&#xe921;',
		'icon-cup': '&#xe922;',
		'icon-stars': '&#xe923;',
		'icon-search': '&#xe924;',
		'icon-zavtrak': '&#xe925;',
		'icon-bar': '&#xe926;',
		'icon-grill': '&#xe927;',
		'icon-goryachee': '&#xe928;',
		'icon-menu-catering': '&#xe929;',
		'icon-add': '&#xe92a;',
		'icon-share-2': '&#xe92b;',
		'icon-butylka': '&#xe92c;',
		'icon-bokal': '&#xe92d;',
		'icon-language': '&#xe92e;',
		'icon-home': '&#xe92f;',
		'icon-menu-slang': '&#xe930;',
		'icon-menu-reviews': '&#xe931;',
		'icon-trash': '&#xe932;',
		'icon-menu-rassadka': '&#xe933;',
		'icon-qr': '&#xe934;',
		'icon-points': '&#xe935;',
		'icon-menu-meatballs': '&#xe936;',
		'icon-clock': '&#xe937;',
		'icon-menu-personal-offers': '&#xe938;',
		'icon-star': '&#xe939;',
		'icon-menu-user': '&#xe93a;',
		'icon-menu-like': '&#xe93b;',
		'icon-menu-geo': '&#xe93c;',
		'icon-menu-card': '&#xe93d;',
		'icon-close': '&#xe93e;',
		'icon-user': '&#xe93f;',
		'icon-question-mark': '&#xe940;',
		'icon-menu-contacts': '&#xe941;',
		'icon-menu-loyalty-system': '&#xe942;',
		'icon-menu-list': '&#xe943;',
		'icon-menu-microphone': '&#xe944;',
		'icon-meatballs': '&#xe945;',
		'icon-login': '&#xe946;',
		'icon-filter': '&#xe947;',
		'icon-up': '&#xe948;',
		'icon-carbohydrates': '&#xe949;',
		'icon-protein': '&#xe94a;',
		'icon-calories': '&#xe94b;',
		'icon-fat': '&#xe94c;',
		'icon-share': '&#xe94d;',
		'icon-star-fill': '&#xe94e;',
		'icon-like': '&#xe94f;',
		'icon-chevron-right': '&#xe950;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
