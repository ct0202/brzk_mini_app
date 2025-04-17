import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function MaleVerify() {
    const { t, i18n } = useTranslation();
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({ 
                    video: { 
                        facingMode: 'user',
                        width: { exact: 152 },
                        height: { exact: 223 }
                    } 
                });
                setStream(mediaStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                }
            } catch (err) {
                console.error('Ошибка при доступе к камере:', err);
            }
        };

        startCamera();

        // Очистка при размонтировании
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className="w-full h-screen flex justify-center items-start bg-cover bg-center" style={{ backgroundImage: `url(${'/backgrounds/register.png'})` }}  >
            <div className="w-[373px] flex flex-col justify-center items-center pt-[128px] text-white">
                <div className="w-[327px] bg-[#675B78] h-[427px] rounded-[32px] flex flex-col justify-start items-center">
                    <div className="w-[152px] h-[500px] mt-[37px] overflow-hidden rounded-[50%] border-2 border-white">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-[24px] mt-[34px]">Verify profile</span>
                    <p className="w-[279px] text-[14px] text-center mt-[40px]">Докажи,что ты являешься человеком со своего профиля, отправив фото. Если все совпадет - ты получишь верификацию</p>
                    <img src="/icons/profile/im-ready-button.svg" alt="im-ready" className="w-[279px] h-[39px] mt-[12px]"/>
                    <img src="/icons/profile/later-button.svg" alt="im-ready" className="w-[279px] h-[39px] mt-[7px]"/>
                </div>
            </div>
        </div>
    );
}

export default MaleVerify;