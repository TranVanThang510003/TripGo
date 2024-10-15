import { useState } from 'react';
import AuthForm from './AuthForm';

function Register() {
  const [showCompletionForm, setShowCompletionForm] = useState(false); // Trạng thái để hiển thị form hoàn tất
  const [email, setEmail] = useState(''); // Lưu email từ bước đầu

  // Xử lý khi người dùng nhấn "Tiếp tục" trong trang đăng ký
  const handleContinue = (data) => {
    setEmail(data.email);  // Lưu email người dùng đã nhập
    setShowCompletionForm(true);  // Hiển thị form hoàn tất đăng ký
  };

  // Xử lý khi người dùng nhấn "Hoàn tất" trong trang hoàn tất đăng ký
  const handleFinalSubmit = (data) => {
    console.log('Dữ liệu cuối cùng:', data);  // Thực hiện logic đăng ký hoàn tất tại đây

  };

  return (
    <AuthForm
      type="Register"  
      showCompletionForm={showCompletionForm}  
      initialEmail={email}  // Điền email đã nhập vào
      onSubmit={showCompletionForm ? handleFinalSubmit : handleContinue}  // Xử lý khi nhấn "Tiếp tục" hoặc "Hoàn tất"
      showPasswordFields={showCompletionForm}  // Hiển thị trường mật khẩu chỉ ở bước hoàn tất đăng ký
    />
  );
}

export default Register;
