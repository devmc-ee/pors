import useIcons from '../../../../hooks/useIcons';

interface IconProps {
    name: string;
}
const Icon = ({ name }: IconProps): JSX.Element | null => {
    const { getIcon } = useIcons();
    const ImportedIcon: React.FC = getIcon(name) as React.FC;
    return ImportedIcon ? (
        <div className={'payment-method-button__icon'}>
            <ImportedIcon />
        </div>
    ) : null;
};
export default Icon;
