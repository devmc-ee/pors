import * as Icons from '../components/shared/icons/icons';

const useIcons = (): UseIconsReturnType => {
    const getIcon = (name: string) => {
        if (!(name in Icons)) return null;
        return Icons[name as keyof typeof Icons];
    };

    const hasIcon = (name: string) => name in Icons;

    return { getIcon, hasIcon };
};
export default useIcons;

type UseIconsReturnType = {
    getIcon: (name: string) => null | React.FC;
    hasIcon: (name: string) => boolean;
};
