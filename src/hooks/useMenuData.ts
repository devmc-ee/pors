import MENU from '../__mock_data__/MENU';
const useMenuData = () => {
    const priceList = MENU.map(({ code, price }) => {
        return { [code]: price };
    });
    const getPriceBy = (itemCode: string) => {
        const item = MENU.filter(({ code }) => code === itemCode);
        return item && item.length > 0 ? item[0].price : 0;
    };
    return { priceList, getPriceBy };
};
export default useMenuData;
