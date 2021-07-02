import { BemClasses } from '../../types/BemClasses';
import { BemStructure } from '../../types/BemStructure';
/**
 * Creates BEM classes from described structure
 * - block - root class
 * - elements - block elements
 * @param bem
 * @param customBlockName
 * @returns
 */
export const getBemClasses = (bem: BemStructure, customBlockName = ''): null | BemClasses => {
	if (!bem || !('block' in bem) || typeof bem.block !== 'string') return null;
	if (bem.block.trim().length === 0) return null;

	let customBlock = '';
	if (typeof customBlockName === 'string' && customBlockName.trim().length > 0) customBlock = customBlockName;

	let result: BemStructure = {
		block: !customBlock ? bem.block : [bem.block, customBlock].join(' '),
	};

	for (const element in bem) {
		if ('block' === element) continue;

		const defaultElement = [bem.block, bem[element]].join('__');

		let customElement = '';
		if (!!customBlock) customElement = [customBlock, bem[element]].join('__');

		result[element] = !customElement ? defaultElement : [defaultElement, customElement].join(' ');
	}
	return result;
};
export default getBemClasses;
