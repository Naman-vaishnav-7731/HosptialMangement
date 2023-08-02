import Heading from "../../components/heading";
import TopBar from "../../components/top-bar/TopBar";
import PatientCard from "../../components/PateintCard";
import BillFrame from "../../components/BillFrame";
import { useEffect, useState } from "react";
import { patientData } from "../../helper/PatientData"; 

const Billing = () => {

    const [patientsInfo, setPatientInfo] = useState(patientData);
    const [viewBill, setViewBill] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        handleSearch(searchQuery);
        if(searchQuery == "") setPatientInfo(patientData);
    },[searchQuery]);

    const handelViewPrescription = (pateintData) => {
        setViewBill(pateintData);
    };

    const handleSearch = (searchQuery) => {
        const filterPatient = patientsInfo.filter((patient) =>
        patient.patientName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setPatientInfo(filterPatient || patientData);
      };

    return(
        <>
            <TopBar handleSearch={setSearchQuery} />
            <Heading headingTitle={"Billing Overview"}/>  
            <div className="container flex w-full mt-4">
                <div className=" list-of-patient h-[718px] flex flex-col gap-8 w-[30%] items-center overflow-y-auto">
                    {
                        patientsInfo.map((patient) => {
                            return(
                                <PatientCard 
                                    name={patient.patientName}
                                    image={patient.image}
                                    billNo={patient.bill.billNo}
                                    age={patient.age}
                                    gender={patient.gender}
                                    handelViewPrescription={handelViewPrescription}
                                    pateintData={patient}
                                 />
                            )
                        })
                    }
                </div>
                <div className="patient-bill w-[70%]">
                    <BillFrame billData={viewBill} />
                </div>
            </div>      
        </>
    )
}

export default Billing;