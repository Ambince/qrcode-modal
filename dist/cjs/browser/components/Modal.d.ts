/// <reference types="react" />
import { QRCodeModalOptions } from "../types";
import { TextMap } from "../types";
interface ModalProps {
    text: TextMap;
    uri: string;
    onClose: any;
    qrcodeModalOptions?: QRCodeModalOptions;
    host?: string;
    params?: string;
}
declare function Modal(props: ModalProps): JSX.Element;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map