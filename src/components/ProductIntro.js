import { useNavigate } from "react-router-dom";

const ProductIntro = () => {

    const navigate = useNavigate();

    return(
        <div className="intro flex bg-white h-[43vh] mt-10 mb-10">
            <div className="img-box w-2/4 flex justify-center items-center">
                <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="intro image"
                    width={600}
                    className="rounded-[30px]"
                />
            </div>
            <div className="intro-box w-2/4 flex flex-col justify-center items-center gap-10">
                <h5 className="text-3xl">Medically - Your Trusted Medical Services Website🩺</h5>
                <p className="text-lg w-3/5">Welcome to Medically, your one-stop destination for comprehensive 
                medical and doctor services. We understand the importance of your 
                health, and that's why we are committed to providing you with top-notch
                 healthcare solutions and expert consultations.</p>
                 <button className="rounded-full bg-[#312E81] text-white p-5 pr-7 pl-7" onClick={() => navigate('/admin')}>Get Started</button>
            </div>
        </div>      
    )
}

export default ProductIntro;