export const capitalize = (word: string): string | boolean => {
	if (!word || typeof word !== 'string' || word.trim().length === 0) return false;

	return word.trim().charAt(0).toUpperCase() + word.trim().slice(1).toLowerCase();
};
