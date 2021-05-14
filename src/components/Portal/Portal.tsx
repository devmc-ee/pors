import { createPortal } from 'react-dom';
import usePortal from '../../hooks/usePortal';

interface PortalProps {
    id: string;
    children: JSX.Element | JSX.Element[];
}
const Portal = ({ id, children }: PortalProps): JSX.Element => {
    const target = usePortal(id);
    //@ts-ignore
    return createPortal(children, target);
};
export default Portal;
