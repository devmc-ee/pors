import MENU from '../__mock_data__/MENU';
const useMenuData = () => {
    const priceList = MENU.map(({ code, price }) => {
        return { [code]: price };
    });
    return { priceList };
};
export default useMenuData;
