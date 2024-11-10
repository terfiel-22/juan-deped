
import { useState } from 'react'
import RegStudent from './registration-type/RegStudent'
import RegSelection from './registration-type/RegSelection';
import RegAlumni from './registration-type/RegAlumni';


const RegistrationForm = () => {
    // For Registration Type Selection
    const [regType, setRegType] = useState(null)

    switch (regType) {
        case "student":
            return <RegStudent />;
        case "alumni":
            return <RegAlumni />;

        default:
            return <RegSelection setRegType={setRegType} />;
    }
}

export default RegistrationForm