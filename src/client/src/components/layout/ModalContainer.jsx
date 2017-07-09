
// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-modal';
import * as _ from 'lodash';

type ModalContainerProps = {
  type: string | null;
  modalProps: any;
}

const ModalContainer = (props: ModalContainerProps) => {

  if (props.type) {
    return (
      <Modal
        isOpen
        contentLabel="Modal"
      >
        <span {...props.modalProps} />
      </Modal>
    );
  }

  return null;
};

const mapStateToProps = state => ({
  ...state.modal.toJS()
});

export default connect(mapStateToProps)(ModalContainer);
