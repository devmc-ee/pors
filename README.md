Simple Restoran Cash Register System:

/DRAFT IDEA/ Components organisation logic ( kind of BEM structure):

-   Element is an atomic independent unit, that contains only html (no imported elements) , and should exist only inside of a block.
-   Block is an independent unit, that might contain other blocks and elements. But should not contain global dependencies from redux or other side effects, data and etc.
-   Element that belongs only to a specific block, should be located in its block folder.
-   Elements, that are shared between a number of blocks, should stay in the shared/elements folder.
-   Blocks that have a single usage should stay in the components/blocks
-   Blocks that are used by a number of blocks, should stay in the shared folder
-   Blocks and elements can be tested and simulated independently in the storybook without providing dependencies from libreries, side effects and etc.
-   Container is a kind of controlling block that contains another block and provides required data management. It might have dependencies from redux or other components, it works with side effects.
