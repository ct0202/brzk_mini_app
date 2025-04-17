import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";
import axios from 'axios';
import { API_BASE_URL } from '../../config/api';

function Profile() {
    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData);
    const [fullUserData, setFullUserData] = useState(null);
    console.log(userData);
    console.log(fullUserData);


    useEffect(() => {
        const fetchUserData = async () => {
            if (!userData) {
                navigate('/signin');
            } else {
                try {
                    const response = await axios.get(`${API_BASE_URL}/api/profile?userId=${userData._id}`);
                    console.log(response.data);
                    setFullUserData(response.data);
                    

                    // Запрашиваем геолокацию
      if (navigator.geolocation) {
        console.log('asking position')
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              // Отправляем координаты на сервер
              await axios.post(`${API_BASE_URL}/api/profile/location`, {
                userId: response.data._id,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              });
            } catch (error) {
              console.error('Ошибка при сохранении геолокации:', error);
            }
          },
          (error) => {
            console.error('Ошибка при получении геолокации:', error);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          }
        );
      }
                } catch (error) {
                    console.error('Ошибка при получении данных пользователя:', error);
                }
            }
        };

        fetchUserData();
    }, [userData, navigate]);

    return (
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${'/backgrounds/register.png'})` }}>
            <div className="w-[373px] h-[343px] flex flex-col justify-center items-center">
                {userData && (
                    <>
                        <div className="w-full flex flex-row justify-between pl-[16px] pr-[16px] pt-[80px]">
                            <div className="w-[64px] h-[40px] bg-[#FFFFFF1A] rounded-[48px] flex flex-row items-center justify-center">
                                <img src="/icons/profile/coin.svg" alt="coin" className="w-[22px] h-[16px]" />
                                <span className="text-white text-[15px] font-medium pl-[4px]">{fullUserData ? fullUserData.balance : 0}</span>
                            </div>
                            <div className="relative flex-col flex items-center justify-center">
                                <div className="w-[160px] h-[160px] rounded-[50%] bg-[#FFFFFF1A]">
                                    {userData.photo ? <img src={userData.photo} className="w-full h-full rounded-[50%]"/> : <></>}
                                </div>
                                <button onClick={() => {userData.verified ? navigate('/profile/edit') : navigate('/profile/verify')}} className="bg-[#3D1226] w-[40px] h-[40px] rounded-[50%] absolute top-[10px] right-[10px] flex items-center justify-center">
                                    <img src="/icons/profile/settings.svg" alt="settings" className="w-[20px] h-[20px]" />
                                </button>
                                <div className="flex flex-row items-center justify-center mt-[9px] gap-[7px]">
                                    <div className="w-[68px] h-[26px] rounded-[40px] bg-gradient-to-r from-[#9C4DFF] to-[#FF40AC]">
                                    </div>
                                    <img src="/icons/profile/edit.svg" alt="edit" className="w-[15px] h-[15px]" />
                                </div>
                                <div className="flex flex-row items-center justify-center gap-[10px] mt-[15px]">
                                    <span className="text-white text-[20px] font-medium">{userData.name}, {userData.age}</span>
                                    <img src="/icons/profile/question-mark.svg" alt="question-mark" className="w-[25px] h-[25px]" />
                                </div>
                            </div>
                            <div className="w-[40px] h-[40px] rounded-[50%] bg-[#FFFFFF1A] flex flex-row items-center justify-center">
                                <img src="/icons/profile/notifications.svg" alt="notifications" className="w-[20px] h-[20px]" />
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between pl-[16px] pr-[16px] mt-[25px]">
                            <div className="w-full h-[118px] bg-[#675B78] rounded-[32px] relative">
                                <p className="text-left w-full text-[#FFFFFFB2] text-[14px]">{userData.description}</p>
                                <img src="/icons/profile/edit.svg" alt="edit" className="w-[15px] h-[15px] absolute bottom-[16px] right-[16px]"/>
                            </div>
                        </div>
                    </>
                )}
                <Navigation/>
            </div>
        </div>
    );
}

export default Profile;
