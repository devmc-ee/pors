import { BemStructure } from '../../types/BemStructure';
import { getBemClasses } from '../../utils/classesUtils';

describe('getBemClasses', () => {
	test.each([[null], [false], [undefined], [[]], [{ '': '' }], [1]])('1.%# returns null on input: "%s"', (input) => {
		const bemStructure: BemStructure = {
			//@ts-ignore invalid type of block
			block: input,
		};
		expect(getBemClasses(bemStructure)).toBeNull();
	});

	test('2: return null if no "block" key in the bem structure', () => {
		//@ts-ignore missing block key
		expect(getBemClasses({ '': '' })).toBeNull();
	});

	it('3. Returns block class eq.  test-class', () => {
		const bemStructure: BemStructure = {
			block: 'test-class',
		};
		const expected = {
			block: 'test-class',
		};
		expect(getBemClasses(bemStructure)).toStrictEqual(expected);
	});

	it('4. Returns block class eq.  "test-class custom-class"', () => {
		const bemStructure: BemStructure = {
			block: 'test-class',
		};
		const customClass = 'custom-class';
		const expected = {
			block: 'test-class custom-class',
		};
		expect(getBemClasses(bemStructure, customClass)).toStrictEqual(expected);
	});

	it('5. Returns object with property "withElement" = "test-class__with-element"', () => {
		const bemStructure: BemStructure = {
			block: 'test-class',
			withElement: 'with-element',
		};

		const expected = {
			block: 'test-class',
			withElement: 'test-class__with-element',
		};
		expect(getBemClasses(bemStructure)).toStrictEqual(expected);
	});

	it('6. Returns default and custom class"withElement": "test-block__with-element custom-block__with-element "', () => {
		const bemStructure: BemStructure = {
			block: 'test-block',
			withElement: 'with-element',
		};
		const customClass = 'custom-block';
		const expected = {
			block: 'test-block custom-block',
			withElement: 'test-block__with-element custom-block__with-element',
		};
		expect(getBemClasses(bemStructure, customClass)).toStrictEqual(expected);
	});
});
