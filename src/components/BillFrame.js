
const BillFrame = ({billData}) => {

    return(
        <div className="bill-outlet w-[766px] h-[718px] rounded-[24px] bg-[#FFFFFF] m-auto flex justify-center">
            <div className="bill w-[697px] h-[654px] rounded-[24px] border-[1px] border-black m-auto">
                 <div className="header w-[90%] flex justify-between m-auto mt-8 mb-5" >
                    <span className="font-Helvetica font-bold text-[22px]">Billing Details</span>
                    <button className="font-Helvetica font-normal w-[107px] h-[40px] bg-[#312E81] text-white rounded-[38px]">Print Bill</button>
                 </div>
                 <div className="patient-info w-full h-[89px] bg-[#F3F3F3] flex justify-around items-center">
                    <div className="name flex flex-col gap-2">
                        <span className="font-[#000000] font-Helvetica font-normal text-[16px]" >Patient Name</span>
                        <span className="font-[#000000] font-Helvetica font-normal text-[16px]">{billData?.patientName}</span>
                    </div>
                    <div className="age flex flex-col gap-2">
                        <span className="font-[#000000] font-Helvetica font-normal text-[16px]">Age/Gender</span>
                        <span className="font-[#000000] font-Helvetica font-normal text-[16px]">{billData?.age} , {billData?.gender}</span>
                    </div>
                    <div className="billNo flex flex-col gap-2">
                        <span className="font-[#000000] font-Helvetica font-normal text-[16px]">Bill No</span>
                        <span className="font-[#000000] font-Helvetica font-normal text-[16px]">{billData?.bill?.billNo}</span>
                    </div>
                    <div className="date flex flex-col gap-2">
                        <span className="font-[#000000] font-Helvetica font-normal text-[16px]">Date/Time</span>
                        <span className="font-[#000000] font-Helvetica font-normal text-[16px]">{billData?.date}, {billData?.time}</span>
                    </div>
                    <div className="recipt flex flex-col gap-2">
                        <span className="font-[#000000] font-Helvetica font-normal text-[16px]">Receipt No</span>
                        <span className="font-[#000000] font-Helvetica font-normal text-[16px]">{billData?.receiptNo}</span>
                    </div>
                </div>
                <table className="patient-bill-items mt-3 w-[90%] m-auto text-center h-[13vh] overflow-auto">
                    <thead className="border-b border-black">
                        <tr>
                            <th>Sr.no</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            billData?.services?.map((service , index) => {
                                return(
                                    <tr>
                                        <td>{index++}</td>
                                        <td>{service.serviceName}</td>
                                        <td>{service.price}</td>
                                        <td>{service.Quantity}</td>
                                        <td>{service.amount}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="final-bill-price w-full h-[163px] bg-[#F3F3F3] rounded-b-[25px] flex-col p-2 mt-[170px]">
                    <div className="box-1 w-[90%] flex flex-col m-auto gap-2">
                        <div className="mobile flex justify-between">
                            <span className="font-Helvetica text-[18px] font-normal text-black">Mobile Number</span>
                            <span className="font-Helvetica text-[18px] font-normal text-black">{billData?.mobileNumber}</span>
                        </div>
                        <div className="tax flex justify-between">
                        <span className="font-Helvetica text-[18px] font-normal text-black">Tax</span>
                            <span className="font-Helvetica text-[18px] font-normal text-black">{billData?.bill?.tax}</span>
                        </div>
                        <div className="discount flex justify-between">
                        <span className="font-Helvetica text-[18px] font-normal text-black">Discount</span>
                            <span className="font-Helvetica text-[18px] font-normal text-black">{billData?.bill?.discount}</span>
                        </div>
                    </div> 
                    <hr color="black" className="h-[2px] mt-2" />
                    <div className="box-2 w-[90%] m-auto mt-3">
                        <div className="total  flex justify-between">
                            <span className="font-Helvetica text-[18px] font-bold text-black">Total</span>
                            <span className="font-Helvetica text-[18px] font-normal text-black">{billData?.bill?.total}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BillFrame;