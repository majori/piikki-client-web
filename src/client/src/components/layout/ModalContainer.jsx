
// @flow
import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import * as _ from 'lodash';

import { hideModal } from '../../actions/modal';
import LinkCard from '../common/modals/LinkCardContainer';

type ModalContainerProps = {
  type: string | null;
  options: any;
  modalProps: any;
  hideModal: () => void;
}

const MODALS = {
  'LINK_CARD': LinkCard,
};

const ModalContainer = (props: ModalContainerProps) => {
  const handleHideModal = () => {
    props.hideModal();
  };

  if (props.type) {
    const SelectedModal = MODALS[props.type];
    return (
      <Modal
        isOpen
        className="modal-content"
        contentLabel="Modal"
        onRequestClose={handleHideModal}
      >
        <SelectedModal hideModal={handleHideModal} {...props.modalProps} />
      </Modal>
    );
  }

  return null;
};

const mapStateToProps = state => ({
  ...state.modal.toJS()
});

const mapDispatchToProps = {
  hideModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
