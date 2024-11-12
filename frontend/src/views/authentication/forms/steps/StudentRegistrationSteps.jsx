import { lazy } from "react";
import Loadable from "../../../../layouts/full/shared/loadable/Loadable";
const PersonalInformation = Loadable(lazy(() => import('../registration-step-forms/PersonalInformation')))
const AdditionalInformation = Loadable(lazy(() => import('../registration-step-forms/AdditionalInformation')))
const AddressInformation = Loadable(lazy(() => import('../registration-step-forms/AddressInformation')))
const GuardianInformation = Loadable(lazy(() => import('../registration-step-forms/GuardianInformation')))
const IdentificationInformation = Loadable(lazy(() => import('../registration-step-forms/IdentificationInformation')))
const StudentInformation = Loadable(lazy(() => import('../registration-step-forms/StudentInformation')))

export const steps = [
    { component: <PersonalInformation /> },
    { component: <StudentInformation /> },
    { component: <IdentificationInformation /> },
    { component: <AddressInformation /> },
    { component: <GuardianInformation /> },
    { component: <AdditionalInformation /> },
];


export const optionals = new Set([]) // index of optional steps