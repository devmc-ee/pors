import Portal from '../Portal';
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';
import styles from './ModalWindow.module.css';
interface ModalWindowProps {
    id: string;
    isOpen: boolean;
    handleOpen: () => void;
    children: JSX.Element;
    headerText?: string;
}

const ModalWindow = ({ isOpen, children, id, handleOpen, headerText = '' }: ModalWindowProps): JSX.Element | null => {
    const portalId = id + '__portal-modal-window';
    return isOpen ? (
        <Portal id={portalId}>
            <div className={styles.container}>
                <div className={styles.overlay} onClick={handleOpen} />
                <div className={styles.content}>
                    {!!headerText && (
                        <div className={styles.header}>
                            <span>{headerText}</span>{' '}
                            <button className={styles.closeButton} onClick={handleOpen}>
                                <CloseIcon />
                            </button>
                        </div>
                    )}
                    <div className={styles.body}>{children}</div>
                </div>
            </div>
        </Portal>
    ) : null;
};
export default ModalWindow;
