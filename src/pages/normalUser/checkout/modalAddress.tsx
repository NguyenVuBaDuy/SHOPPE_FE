import { Modal } from "antd"

interface IProps {
    isOpenModalAddress: boolean,
    setIsOpenModalAddress: (v: boolean) => void
}

const ModalAddress = (props: IProps) => {

    const { setIsOpenModalAddress, isOpenModalAddress } = props

    return (
        <Modal centered title="Hãy chọn địa chỉ" open={isOpenModalAddress} onCancel={() => setIsOpenModalAddress(false)}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default ModalAddress