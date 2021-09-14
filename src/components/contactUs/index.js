import React, { useRef } from 'react'
import { ContactUsContainer, FormContainer, Title} from './styles'
import CustomersForm from "../customers/customerForm/customerForm";
import useOnScreen from '../../hooks/useOnScreen';

const ContactUs = (props) => {
    const ref = useRef()
  const isVisible = useOnScreen(ref);
    return (
        <ContactUsContainer image={"./images/backgroundContact.jpg"}>
            <FormContainer ref={ref} isVisible={isVisible}>
                <Title>Dejanos tus datos y un asesor se contactara con vos al instante!</Title>
                <CustomersForm />
            </FormContainer>
        </ContactUsContainer>
    );
}

export default ContactUs
