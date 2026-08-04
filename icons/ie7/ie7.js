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
		'icon-docs': '&#xe900;',
		'icon-bron': '&#xe901;',
		'icon-theme': '&#xe902;',
		'icon-null': '&#xe903;',
		'icon-callback': '&#xe904;',
		'icon-callback-min': '&#xe905;',
		'icon-max': '&#xe906;',
		'icon-max-min': '&#xe907;',
		'icon-menu-platform': '&#xe908;',
		'icon-notification': '&#xe909;',
		'icon-orientation': '&#xe90a;',
		'icon-reviews': '&#xe90b;',
		'icon-sale': '&#xe90c;',
		'icon-tg': '&#xe90d;',
		'icon-tg-min': '&#xe90e;',
		'icon-vk-min': '&#xe90f;',
		'icon-vk': '&#xe910;',
		'icon-wa': '&#xe911;',
		'icon-wa-min': '&#xe912;',
		'icon-foodbook': '&#xe913;',
		'icon-menu-telephone': '&#xe914;',
		'icon-menu-call': '&#xe915;',
		'icon-call': '&#xe916;',
		'icon-chef': '&#xe917;',
		'icon-vega': '&#xe918;',
		'icon-hot': '&#xe919;',
		'icon-top': '&#xe91a;',
		'icon-napitki': '&#xe91b;',
		'icon-deserty': '&#xe91c;',
		'icon-zakuski': '&#xe91d;',
		'icon-rolls': '&#xe91e;',
		'icon-salads': '&#xe91f;',
		'icon-business-lunch': '&#xe920;',
		'icon-agreement': '&#xe921;',
		'icon-privacy': '&#xe922;',
		'icon-client-services': '&#xe923;',
		'icon-history': '&#xe924;',
		'icon-time': '&#xe925;',
		'icon-kuvshin': '&#xe926;',
		'icon-cup': '&#xe927;',
		'icon-stars': '&#xe928;',
		'icon-search': '&#xe929;',
		'icon-zavtrak': '&#xe92a;',
		'icon-bar': '&#xe92b;',
		'icon-grill': '&#xe92c;',
		'icon-goryachee': '&#xe92d;',
		'icon-menu-catering': '&#xe92e;',
		'icon-add': '&#xe92f;',
		'icon-share-2': '&#xe930;',
		'icon-butylka': '&#xe931;',
		'icon-bokal': '&#xe932;',
		'icon-language': '&#xe933;',
		'icon-home': '&#xe934;',
		'icon-menu-slang': '&#xe935;',
		'icon-menu-reviews': '&#xe936;',
		'icon-trash': '&#xe937;',
		'icon-menu-rassadka': '&#xe938;',
		'icon-qr': '&#xe939;',
		'icon-points': '&#xe93a;',
		'icon-menu-meatballs': '&#xe93b;',
		'icon-clock': '&#xe93c;',
		'icon-menu-personal-offers': '&#xe93d;',
		'icon-star': '&#xe93e;',
		'icon-menu-user': '&#xe93f;',
		'icon-menu-like': '&#xe940;',
		'icon-menu-geo': '&#xe941;',
		'icon-menu-card': '&#xe942;',
		'icon-close': '&#xe943;',
		'icon-user': '&#xe944;',
		'icon-question-mark': '&#xe945;',
		'icon-menu-contacts': '&#xe946;',
		'icon-menu-loyalty-system': '&#xe947;',
		'icon-menu-list': '&#xe948;',
		'icon-menu-microphone': '&#xe949;',
		'icon-meatballs': '&#xe94a;',
		'icon-login': '&#xe94b;',
		'icon-filter': '&#xe94c;',
		'icon-up': '&#xe94d;',
		'icon-carbohydrates': '&#xe94e;',
		'icon-protein': '&#xe94f;',
		'icon-calories': '&#xe950;',
		'icon-fat': '&#xe951;',
		'icon-share': '&#xe952;',
		'icon-star-fill': '&#xe953;',
		'icon-like': '&#xe954;',
		'icon-chevron-right': '&#xe955;',
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
