import { getCurrencySymbol } from '../../utils/money';

describe('getCurrencySymbol: ', () => {
	it.each([[''], [' '], [1], [['1']], [{ test: 'test' }], [null], [undefined]])(
		'1.%# returns null on "%s" input',
		(input) => {
			//@ts-ignore wrong input type
			expect(getCurrencySymbol(input)).toBeNull();
		},
	);

	it.each([['EUR'], ['eur'], ['Eur'], [' eur ']])('2.%# Returns "€" for "%s" input', (input) => {
		const expected = '€';
		expect(getCurrencySymbol(input)).toBe(expected);
	});

	it('3. Returns "TEST" for "test" ', () => {
		const input = 'test';
		const expected = 'TEST';
		expect(getCurrencySymbol(input)).toBe(expected);
	});
});
