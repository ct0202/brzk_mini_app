function FemaleVerify() {
    return (
        <div className="w-full h-screen flex justify-center items-start bg-cover bg-center" style={{ backgroundImage: `url(${'/backgrounds/register.png'})` }}  >
            <div className="w-[373px] flex flex-col justify-center items-center pt-[128px] text-white">
                <div className="w-[327px] bg-[#675B78] h-[427px] rounded-[32px] flex flex-col justify-start items-center">
                    <img src="/icons/profile/verify.svg" alt="verify" className="w-[100px] h-[100px] mt-[37px]"/>
                    <span className="text-[24px] mt-[34px]">Verify profile</span>
                    <p className="w-[279px] text-[14px] text-center mt-[40px]">Докажи,что ты являешься человеком со своего профиля, отправив фото. Если все совпадет - ты получишь верификацию</p>
                    <img src="/icons/profile/im-ready-button.svg" alt="im-ready" className="w-[279px] h-[39px] mt-[12px]"/>
                    <img src="/icons/profile/later-button.svg" alt="im-ready" className="w-[279px] h-[39px] mt-[7px]"/>
                </div>
            </div>
        </div>
    );
}

export default FemaleVerify;