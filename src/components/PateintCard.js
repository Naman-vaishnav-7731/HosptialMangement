const PatientCard = ({name, image, age, gender, billNo, pateintData, handelViewPrescription}) => {

    return(
        <div className="card w-[355px] h-[140px] rounded-[10px] flex bg-[#CBE3FF] p-5" id="card">
            <div className="patient-img flex justify-center items-center w-[40%]">
                <img  
                    src={image}
                    alt="patient image"
                    className="w-[101px] h-[101px] rounded-[9px]" 
                />
            </div>
            <div className="patient-info w-[60%] flex flex-col justify-center">
                <span className="name font-Helvetica font-normal text-lg text-[#000000]">{name}</span>
                <span className="age-gender font-Helvetica font-normal text-lg text-[#000000]">{age}, {gender}</span>
                <div className="bill flex gap-6">
                    <span className="text-base font-Helvetica ">Bill No</span>
                    <span className="text-[#000000] font-normal text-lg font-Helvetica">{billNo}</span>
                </div>
                <button className="w-[190px] h-[32px] rounded-[38px] p-[5px] text-[#312E81] bg-white border-[1px] border-[#312E81] font-Helvetica font-normal" onClick={() => handelViewPrescription(pateintData)}>View Prescription</button>
            </div>
        </div>
    )
}

export default PatientCard;