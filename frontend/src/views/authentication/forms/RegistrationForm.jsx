import { lazy, useState } from 'react'
import RegSelection from './registration-type/RegSelection';
import Loadable from '../../../layouts/full/shared/loadable/Loadable';

const RegStudent = Loadable(lazy(() => import('./registration-type/RegStudent')))
const RegAlumni = Loadable(lazy(() => import('./registration-type/RegAlumni')))

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