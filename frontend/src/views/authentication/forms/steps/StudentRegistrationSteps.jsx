import { lazy } from "react";
import Loadable from "../../../../layouts/full/shared/loadable/Loadable";
const BasicInformation = Loadable(lazy(() => import('../student-form-steps/BasicInformation')))
const AdditionalInformation = Loadable(lazy(() => import('../student-form-steps/AdditionalInformation')))
const AddressInformation = Loadable(lazy(() => import('../student-form-steps/AddressInformation')))
const GuardianInformation = Loadable(lazy(() => import('../student-form-steps/GuardianInformation')))
const IdentificationInformation = Loadable(lazy(() => import('../student-form-steps/IdentificationInformation')))
const StudentInformation = Loadable(lazy(() => import('../student-form-steps/StudentInformation')))

export const steps = [
    { component: <BasicInformation /> },
    { component: <StudentInformation /> },
    { component: <IdentificationInformation /> },
    { component: <AddressInformation /> },
    { component: <GuardianInformation /> },
    { component: <AdditionalInformation /> },
];


export const optionals = new Set([]) // index of optional steps