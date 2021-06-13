import { capitalize } from '../../utils/stringUtils';

const emptyObject = {};
//@ts-ignore
describe.each([[''], [' '], [11], [[]], [['']], [emptyObject], { '': '' }[null]])(
	'1. capitalize(%s): returns false " ',
	(input) => {
		test(`on input: "${input}"`, () => {
			//@ts-ignore
			expect(capitalize(input)).toBe(false);
		});
	},
);

describe.each`
	word           | expected
	${'word'}      | ${'Word'}
	${'Word'}      | ${'Word'}
	${'word word'} | ${'Word word'}
	${' word '}    | ${'Word'}
`('2. Capitalize("$word")', ({ word, expected }) => {
	test(`returns "${expected}"`, () => {
		expect(capitalize(word)).toBe(expected);
	});
});

describe.each`
	word       | expected
	${'1word'} | ${'1word'}
	${'_ord'}  | ${'_ord'}
`('3. Capitalize("$word")', ({ word, expected }) => {
	test(`returns "${expected}"`, () => {
		expect(capitalize(word)).toBe(expected);
	});
});
