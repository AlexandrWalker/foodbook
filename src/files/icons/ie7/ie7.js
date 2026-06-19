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
		'icon-theme': '&#xe900;',
		'icon-null': '&#xe901;',
		'icon-callback': '&#xe902;',
		'icon-callback-min': '&#xe903;',
		'icon-max': '&#xe904;',
		'icon-max-min': '&#xe905;',
		'icon-menu-platform': '&#xe906;',
		'icon-notification': '&#xe907;',
		'icon-orientation': '&#xe908;',
		'icon-reviews': '&#xe909;',
		'icon-sale': '&#xe90a;',
		'icon-tg': '&#xe90b;',
		'icon-tg-min': '&#xe90c;',
		'icon-vk-min': '&#xe90d;',
		'icon-vk': '&#xe90e;',
		'icon-wa': '&#xe90f;',
		'icon-wa-min': '&#xe910;',
		'icon-foodbook': '&#xe911;',
		'icon-menu-telephone': '&#xe912;',
		'icon-menu-call': '&#xe913;',
		'icon-call': '&#xe914;',
		'icon-chef': '&#xe915;',
		'icon-vega': '&#xe916;',
		'icon-hot': '&#xe917;',
		'icon-top': '&#xe918;',
		'icon-napitki': '&#xe919;',
		'icon-deserty': '&#xe91a;',
		'icon-zakuski': '&#xe91b;',
		'icon-rolls': '&#xe91c;',
		'icon-salads': '&#xe91d;',
		'icon-business-lunch': '&#xe91e;',
		'icon-agreement': '&#xe91f;',
		'icon-privacy': '&#xe920;',
		'icon-client-services': '&#xe921;',
		'icon-history': '&#xe922;',
		'icon-time': '&#xe923;',
		'icon-kuvshin': '&#xe924;',
		'icon-cup': '&#xe925;',
		'icon-stars': '&#xe926;',
		'icon-search': '&#xe927;',
		'icon-zavtrak': '&#xe928;',
		'icon-bar': '&#xe929;',
		'icon-grill': '&#xe92a;',
		'icon-goryachee': '&#xe92b;',
		'icon-menu-catering': '&#xe92c;',
		'icon-add': '&#xe92d;',
		'icon-share-2': '&#xe92e;',
		'icon-butylka': '&#xe92f;',
		'icon-bokal': '&#xe930;',
		'icon-language': '&#xe931;',
		'icon-home': '&#xe932;',
		'icon-menu-slang': '&#xe933;',
		'icon-menu-reviews': '&#xe934;',
		'icon-trash': '&#xe935;',
		'icon-menu-rassadka': '&#xe936;',
		'icon-qr': '&#xe937;',
		'icon-points': '&#xe938;',
		'icon-menu-meatballs': '&#xe939;',
		'icon-clock': '&#xe93a;',
		'icon-menu-personal-offers': '&#xe93b;',
		'icon-star': '&#xe93c;',
		'icon-menu-user': '&#xe93d;',
		'icon-menu-like': '&#xe93e;',
		'icon-menu-geo': '&#xe93f;',
		'icon-menu-card': '&#xe940;',
		'icon-close': '&#xe941;',
		'icon-user': '&#xe942;',
		'icon-question-mark': '&#xe943;',
		'icon-menu-contacts': '&#xe944;',
		'icon-menu-loyalty-system': '&#xe945;',
		'icon-menu-list': '&#xe946;',
		'icon-menu-microphone': '&#xe947;',
		'icon-meatballs': '&#xe948;',
		'icon-login': '&#xe949;',
		'icon-filter': '&#xe94a;',
		'icon-up': '&#xe94b;',
		'icon-carbohydrates': '&#xe94c;',
		'icon-protein': '&#xe94d;',
		'icon-calories': '&#xe94e;',
		'icon-fat': '&#xe94f;',
		'icon-share': '&#xe950;',
		'icon-star-fill': '&#xe951;',
		'icon-like': '&#xe952;',
		'icon-chevron-right': '&#xe953;',
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
