import _ from 'lodash';
// import "./sass/styles.sass";
// import "./includes/produtos";
// import currencyFormatter from "currency-formatter";

Vue.filter('currency', formatNumberAsUSD);
function formatNumberAsUSD(value) {
	if (!value) return '';
	value = Number(value);
	return currencyFormatter.format(value, { code: 'BRL' });
}
