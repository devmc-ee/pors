import { capitalize } from './capitalize';

/**
 *
 * @param text
 * @param splitter -
 * @returns
 */
export const camelCase = (text: string, splitter: string): null | string => {
	if (typeof text !== 'string' || text.trim().length === 0) return null;

	if (typeof splitter !== 'string' || splitter.trim().length === 0) return text;

	const splittedText = text.split(splitter);

	if (splittedText.length === 1) return splittedText[0];

	return splittedText.map((part, i) => (i > 0 ? capitalize(part) : part)).join('');
};
export default camelCase;
