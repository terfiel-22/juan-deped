import { lazy } from "react";
import Loadable from "../../../../layouts/full/shared/loadable/Loadable";
const PersonalInformation = Loadable(lazy(() => import('../registration-step-forms/PersonalInformation')))
const AdditionalInformation = Loadable(lazy(() => import('../registration-step-forms/AdditionalInformation')))
const AddressInformation = Loadable(lazy(() => import('../registration-step-forms/AddressInformation')))
const GuardianInformation = Loadable(lazy(() => import('../registration-step-forms/GuardianInformation')))
const IdentificationInformation = Loadable(lazy(() => import('../registration-step-forms/IdentificationInformation')))
const StudentInformation = Loadable(lazy(() => import('../registration-step-forms/StudentInformation')))

export const studentRegSteps = [
    { name: "Personal", component: <PersonalInformation /> },
    { name: "Student", component: <StudentInformation /> },
    { name: "Identification", component: <IdentificationInformation /> },
    { name: "Address", component: <AddressInformation /> },
    { name: "Guardian", component: <GuardianInformation /> },
    { name: "Additional", component: <AdditionalInformation /> },
];