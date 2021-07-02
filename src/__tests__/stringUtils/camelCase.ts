import { camelCase } from '../../utils/stringUtils';

describe('camelCase: ', () => {
	test.each([[null], [false], [undefined], [[]], [{ '': '' }], [1], [[',,,']]])(
		'1.%# returns null on input: "%s"',
		(input) => {
			//@ts-ignore wrong input type
			expect(camelCase(input, '')).toBeNull();
		},
	);
	test.each([[null], [false], [undefined], [[]], [{ '': '' }], [1], [[',,,']]])(
		'2.%# returns null on input: "%s"',
		(splitter) => {
			const text = 'test-string';
			//@ts-ignore wrong input type
			expect(camelCase(text, splitter)).toStrictEqual(text);
		},
	);

	it('3. Returns not changed "test-string" when splitter is wrong', () => {
		const input = 'test-string';
		const expected = 'test-string';
		expect(camelCase(input, '')).toBe(expected);
	});

	test.each([
		['testString', 'test-string', '-'],
		['test-string', 'test-string', '/'],
		['testStringValue', 'test-string-value', '-'],
		['testString value', 'test-string value', '-'],
	])('4.%# returns "%s" on input text: "%s" splitted with "%s"', (expected, text, splitter) => {
		expect(camelCase(text, splitter)).toBe(expected);
	});
});
