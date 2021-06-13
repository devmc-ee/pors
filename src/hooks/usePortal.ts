import { useEffect, useRef } from 'react';

// eslint-disable-next-line  @typescript-eslint/explicit-module-boundary-types
const usePortal = (id: string) => {
	const rootElementRef = useRef(null);

	useEffect(() => {
		// Look for existing target dom element to append to
		const existingParent: HTMLElement | null = document.getElementById(`#${id}`);
		// Parent is either a new root or the existing dom element
		const parentElement = existingParent || createRootElement(id);

		if (!existingParent) {
			addRootElement(parentElement);
		}
		// Add the detached element to the parent
		//@ts-ignore
		parentElement.appendChild(rootElementRef.current);

		return () => {
			//@ts-ignore
			rootElementRef.current.remove();
			if (!parentElement.childElementCount) {
				parentElement.remove();
			}
		};
	}, [id]);

	/**
	 * It's important we evaluate this lazily:
	 * - We need first render to contain the DOM element, so it shouldn't happen
	 *   in useEffect. We would normally put this in the constructor().
	 * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
	 *   since this will run every single render (that's a lot).
	 * - We want the ref to consistently point to the same DOM element and only
	 *   ever run once.
	 * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
	 */
	function getRootElem() {
		if (!rootElementRef.current) {
			//@ts-ignore
			rootElementRef.current = document.createElement('div');
		}
		return rootElementRef.current;
	}
	return getRootElem();
};
export default usePortal;

//Creates DOM element to be used as React root.
function createRootElement(id: string): HTMLElement {
	const rootContainer = document.createElement('div');
	rootContainer.setAttribute('id', id);
	return rootContainer;
}
//Appends element as last child of body
function addRootElement(rootElement: HTMLElement) {
	const lastElement = document.body.lastElementChild;
	document.body.insertBefore(rootElement, lastElement);
}
