import { useNavigate } from "react-router-dom";

const useEnterInSystem = (userName: string, password: string, setError: React.Dispatch<React.SetStateAction<boolean>>) => {
    const navigate = useNavigate()
    return () => {
        if (userName !== '' && password !== '') {
            setError(false);
            navigate('/main')
            console.log(`Зашел! ${userName} ${password}`);
            localStorage.setItem('isLogin', 'true')
        } else {
            setError(true);
        }
    };
};  
export default useEnterInSystem;