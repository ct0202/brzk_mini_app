import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Edit() {
  const navigate = useNavigate();
  const userData = useSelector(state => state.user.userData);
  const [user, setUser] = useState({
    username: userData?.name || "",
    email: userData?.email || "",
    birthday: "1990/01/01",
    whoSeesMyProfile: "GIRL",
    language: "PL",
    gender: userData?.gender || "MALE",
    lookingFor: "GIRL",
    onlyUsersWithPhotos: true,
    age: 22
  });

  useEffect(() => {
    if (userData) {
      setUser(prev => ({
        ...prev,
        username: userData.name,
        email: userData.email,
        gender: userData.gender
      }));
    }
  }, [userData]);

  const handleAgeChange = (e) => {
    setUser({...user, age: parseInt(e.target.value)});
  };

  return (
    <div className="w-full h-screen pt-[16px] bg-cover bg-center text-white relative overflow-hidden flex flex-col justify-start items-center" 
    style={{
      backgroundImage: 'url("/backgrounds/register.png")'
    }}>
        <div className="w-[343px]">
          <div className="flex items-start justify-between">
              <button onClick={() => navigate(-1)} className="rounded-[50%] flex items-center justify-center w-[52px] h-[52px] bg-[#FF63BBB8]">
                <img src="/icons/back-arrow-black.svg" alt="arrow-left" className="w-[24px] h-[24px]" />
              </button>
              <div className="flex items-center justify-center flex-col">
                <div className="w-[96px] h-[96px] rounded-[50%] border-[2px] border-white">
                  {userData?.profilePicture && (
                    <img src={userData.profilePicture} alt="Profile" className="w-full h-full rounded-full object-cover" />
                  )}
                </div>
                <button onClick={() => navigate("/profile/change-profile-picture")} className="bg-[#675B78] rounded-[15px] h-[30px] w-[193px] font-[14px] mt-[8px]">Change Profile Picture</button>
              </div>
              <button>
                <img src="/icons/Glyph.svg"/>
              </button>
          </div>
          <div className="flex items-center flex-col w-full font-[14px] mt-[43px]">
            <div className="border-b border-white w-full py-[25px] flex items-center justify-between"> 
              <span className="text-[#77838F]">Username</span>
              <span>{user.username}</span>
            </div>
            <div className="border-b border-white w-full py-[25px] flex items-center justify-between"> 
              <span className="text-[#77838F]">Email</span>
              <span>{user.email}</span>
            </div>
            <div className="border-b border-white w-full py-[25px] flex items-center justify-between"> 
              <span className="text-[#77838F]">Birthday</span>
              <span>{user.birthday}</span>
            </div>
            <div className="border-b border-white w-full py-[25px] flex items-center justify-between"> 
              <span className="text-[#77838F]">Bla bla bla bla</span>
              <div className="w-[120px] h-[32px] rounded-[100px] bg-[#FFFFFF66] flex flex-row items-center justify-between px-[1px]">
                <button onClick={() => setUser({...user, whoSeesMyProfile: "ALL"})} 
                        className={`text-[12px] w-[30px] h-[30px] rounded-[50%] 
                        ${user.whoSeesMyProfile === "ALL" ? "bg-[#FFFFFF] text-black" : "bg-[#FFFFFF80] text-[#1B1B1BA6]"}`}>
                  ALL
                </button>
                <span>:</span>
                <button onClick={() => setUser({...user, whoSeesMyProfile: "MAN"})} 
                        className={`text-[12px] w-[30px] h-[30px] rounded-[50%]
                        ${user.whoSeesMyProfile === "MAN" ? "bg-[#3C8AFF] text-black" : " bg-[#FFFFFF80] text-[#1B1B1BA6] "}`}>
                  MAN
                </button>
                <span>:</span>
                <button onClick={() => setUser({...user, whoSeesMyProfile: "GIRL"})} 
                        className={`text-[12px] w-[30px] h-[30px] rounded-[50%] 
                        ${user.whoSeesMyProfile === "GIRL" ? "bg-[#FF94D1] text-black" : "bg-[#FFFFFF80] text-[#1B1B1BA6] "}`}>
                  GIRL
                </button>
              </div>
            </div>
            <div className="border-b border-white w-full py-[25px] flex items-center justify-between"> 
              <span className="text-[#77838F]">Language</span>
              <div className="w-[81px] h-[32px] rounded-[100px] bg-[#FFFFFF66] flex flex-row items-center justify-between px-[1px]">
                <button onClick={() => setUser({...user, language: "EN"})} 
                        className={`text-[12px] w-[30px] h-[30px] rounded-[50%] 
                        ${user.language === "EN" ? "bg-[#FFFFFF] text-black" : "bg-[#FFFFFF80] text-[#1B1B1BA6]"}`}>
                  EN
                </button>
                <span>:</span>
                <button onClick={() => setUser({...user, language: "PL"})} 
                        className={`text-[12px] w-[30px] h-[30px] rounded-[50%]
                        ${user.language === "PL" ? "bg-[#FFFFFF] text-black" : " bg-[#FFFFFF80] text-[#1B1B1BA6] "}`}>
                  PL
                </button>
              </div>
            </div>
            <div className="border-b border-white w-full py-[25px] flex items-center justify-between"> 
              <span className="text-[#77838F]">Only users with photos</span>
              <button onClick={() => setUser({...user, onlyUsersWithPhotos: !user.onlyUsersWithPhotos})}>
                {user.onlyUsersWithPhotos ? <img src="/icons/Checkbox.svg"/> : <div className="w-[24px] h-[24px] rounded-[5px] border border-white"/>}
              </button>
            </div>
          </div>
          <div className="w-full py-[25px] flex flex-col gap-2">
              <div className="flex justify-center items-center">
                <span className="text-white">{user.age} years</span>
              </div>
              <div className="relative w-full h-[6px] bg-[#EAEDF0]">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[13px] h-[13px] rounded-full bg-[#FF63BB] -ml-[6px]" />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[13px] h-[13px] rounded-full bg-[#EAEDF0] -mr-[6px]" />
                <input
                  type="range"
                  min="18"
                  max="99"
                  value={user.age}
                  onChange={handleAgeChange}
                  className="absolute w-full h-[6px] appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FF63BB] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#FF63BB] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:cursor-pointer"
                />
                <div 
                  className="absolute h-full bg-[#FF63BB]" 
                  style={{width: `${((user.age - 18) / (99 - 18)) * 100}%`}}
                />
              </div>
              <div className="flex justify-between text-xs text-white/50">
                <span>18</span>
                <span>99</span>
              </div>
            </div>
        </div>
        <Navigation />
    </div>
  );
}

export default Edit;
