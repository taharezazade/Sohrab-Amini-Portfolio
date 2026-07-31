/** @format */

import Modal from "./Modal";
import Button from "./Button";

/* Confirm Dialog */

const ConfirmDialog = ({
  open,
  title = "تأیید عملیات",
  message = "آیا از انجام این عملیات اطمینان دارید؟",
  confirmText = "تأیید",
  cancelText = "انصراف",
  confirmVariant = "error",
  loading = false,
  onConfirm,
  onClose,
}) => {
  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
      footer={
        <>
          <Button variant='ghost' onClick={onClose} disabled={loading}>
            {cancelText}
          </Button>

          <Button
            variant={confirmVariant}
            loading={loading}
            onClick={onConfirm}>
            {confirmText}
          </Button>
        </>
      }>
      <p className='leading-7 text-base-content/70'>{message}</p>
    </Modal>
  );
};

export default ConfirmDialog;
