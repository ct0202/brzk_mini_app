import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import {useState, useEffect} from "react";

function ChangeProfilePicture() {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen pt-[16px] bg-cover bg-center text-white relative overflow-hidden flex flex-col justify-start items-center" 
        style={{
            backgroundImage: 'url("/backgrounds/register.png")'
        }}>
            <button onClick={() => navigate("/dashboard")} className="text-[#00BBFF] text-[20px] pr-[40px] text-right w-full">Done</button>
            <div className="w-[343px]">
                <div className="flex items-start justify-center gap-[2px]">
                    <button className="border-b-[2px] w-[113px] h-[42px] py-[12px]">Изменить</button>
                    <button className="border-b-[2px] w-[113px] h-[42px] py-[12px]">Просмотр</button>
                </div>
            </div>
            <div>
                
            </div>
            <NavigationBar />
        </div>
    );
}

export default ChangeProfilePicture;
