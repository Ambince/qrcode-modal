import * as React from "react";
import { QRCodeModalOptions } from "../types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Header from "./Header";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MobileLinkDisplay from "./MobileLinkDisplay";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import QRCodeDisplay from "./QRCodeDisplay";

import { WALLETCONNECT_MODAL_ID } from "../constants";
import { TextMap } from "../types";
import { isMobile } from "../utils";

interface ModalProps {
  text: TextMap;
  uri: string;
  onClose: any;
  qrcodeModalOptions?: QRCodeModalOptions;
  host?: string;
  params?: string;
}

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function Modal(props: ModalProps) {
  const mobile = isMobile();
  const [displayQRCode, setDisplayQRCode] = React.useState(!mobile && !inIframe());
  const displayProps = {
    text: props.text,
    uri: props.uri,
    qrcodeModalOptions: props.qrcodeModalOptions,
    host: props.host,
    params: props.params,
  };

  return (
    <div
      id={WALLETCONNECT_MODAL_ID}
      className="walletconnect-qrcode__base animated fadeIn"
    >
      <div className="walletconnect-modal__base">
        <Header onClose={props.onClose} />
        {mobile ? (
          <div
            className={`walletconnect-modal__mobile__toggle${
              displayQRCode ? " right__selected" : ""
            }`}
          >
            <div className="walletconnect-modal__mobile__toggle_selector" />
            <a onClick={() => setDisplayQRCode(false)}>{props.text.mobile}</a>
            <a onClick={() => setDisplayQRCode(true)}>{props.text.qrcode}</a>
          </div>
        ) : (
          <div
            className={`walletconnect-modal__mobile__toggle${
              !displayQRCode ? " right__selected" : ""
            }`}
          >
            <div className="walletconnect-modal__mobile__toggle_selector" />
            <a onClick={() => setDisplayQRCode(true)}>{props.text.qrcode}</a>
            <a onClick={() => setDisplayQRCode(false)}>{props.text.desktop}</a>
          </div>
        )}

        <div>
          {displayQRCode ? (
            <QRCodeDisplay {...displayProps} />
          ) : (
            <MobileLinkDisplay {...displayProps} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
