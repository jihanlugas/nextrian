import Modal from "../Modal";
import { useEffect, useState } from "react";
import { Form, Formik, Field } from "formik";
import FieldInput from "../../components/formik/FieldInput";
import ButtonSubmit from "../../components/formik/ButtonSubmit";


const ModalCreateAnggota = ({ show, onClickOverlay, }) => {
    const initFormikValue = {
        name: '',
        mandor: '',
    }

    return (
        <Modal show={show} onClickOverlay={onClickOverlay}>
            <Formik
                initialValues={initFormikValue}
                enableReinitialize={true}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(false);
                    alert(JSON.stringify(values, null, 4))
                }}
            >
                {({ setFieldValue, values, errors, handleReset, handleSubmit }) => (
                    <Form className={"flex flex-col w-full"}>
                        <div className={"flex mb-4 text-xl"}>
                            Create Anggota
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <FieldInput
                                    type="text"
                                    label={"Name"}
                                    placeholder="Name"
                                    name="name"
                                />
                            </div>
                            <div>
                                <FieldInput
                                    type="text"
                                    label={"Mandor"}
                                    placeholder="Mandor"
                                    name="mandor"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <ButtonSubmit
                                label="Save"
                                className="px-8"
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </Modal>
    )
}

export default ModalCreateAnggota;