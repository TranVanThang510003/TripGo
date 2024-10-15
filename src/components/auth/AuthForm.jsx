import  { useState } from 'react';
import { Icon } from '@iconify/react';
import './style.scss';
import PropTypes from 'prop-types';

function AuthForm({ type, onSubmit, onClose }) {
  const [emailOrPhone, setEmailOrPhone] = useState(''); // Lưu email hoặc số điện thoại
  const [password, setPassword] = useState(''); // Lưu mật khẩu
  const [confirmPassword, setConfirmPassword] = useState(''); // Lưu mật khẩu xác nhận
  const [fullName, setFullName] = useState(''); // Lưu họ và tên
  const [errors, setErrors] = useState({}); // Lưu các lỗi của form
  const [showCompletionForm, setShowCompletionForm] = useState(false); // Hiển thị form hoàn tất đăng ký

  // Hàm kiểm tra email
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Biểu thức kiểm tra định dạng email
    return emailRegex.test(value);
  };

  // Hàm kiểm tra số điện thoại
  const validatePhone = (value) => {
    const phoneRegex = /^\d{10,12}$/; // Biểu thức kiểm tra số điện thoại (10-12 số)
    return phoneRegex.test(value);
  };

  // Hàm kiểm tra mật khẩu theo tiêu chuẩn hiện nay
  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(value);
  };

  // Xử lý khi form được gửi
  const handleContinue = (e) => {
    e.preventDefault();
    let emailOrPhoneError = '';

    // Kiểm tra email hoặc số điện thoại
    if (!validateEmail(emailOrPhone) && !validatePhone(emailOrPhone)) {
      emailOrPhoneError = 'Email hoặc số điện thoại không hợp lệ!';
    }

    if (emailOrPhoneError) {
      setErrors((prevErrors) => ({ ...prevErrors, emailOrPhone: emailOrPhoneError }));
    } else {
      // Chuyển sang bước hoàn tất đăng ký nếu không có lỗi
      setShowCompletionForm(true);
      setErrors({});
    }
  };

  // Xử lý khi form hoàn tất được gửi
  const handleSubmit = (e) => {
    e.preventDefault();
    let passwordError = '';
    let confirmPasswordError = '';

    // Kiểm tra mật khẩu theo tiêu chuẩn hiện nay
    if (!validatePassword(password)) {
      passwordError = 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm ít nhất một chữ hoa, một chữ thường, một chữ số và một ký tự đặc biệt.';
    }

    // Kiểm tra mật khẩu xác nhận khớp với mật khẩu
    if (password !== confirmPassword) {
      confirmPasswordError = 'Mật khẩu xác nhận không khớp!';
    }

    if (passwordError || confirmPasswordError) {
      setErrors({ password: passwordError, confirmPassword: confirmPasswordError });
    } else {
      // Gọi hàm onSubmit và truyền dữ liệu khi không có lỗi
      onSubmit({ emailOrPhone, fullName, password });
    }
  };

  // Khi người dùng bắt đầu nhập, xóa lỗi tương ứng
  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  return (
    <div className="modal-overlay"> {/* Modal overlay */}
      <div className="login-container">
        <div className="login-box">
          {/* Nút đóng */}
          <div className="close-btn-container">
            <button onClick={onClose} className="close-btn">
              <Icon icon="material-symbols:close" />
            </button>
          </div>

          {/* Tiêu đề của form */}
          <h2>{type === 'login' ? 'Đăng Nhập' : showCompletionForm ? 'Hoàn Tất Đăng Ký' : 'Đăng Ký'}</h2>

          {/* Form nhập thông tin */}
          <form onSubmit={showCompletionForm ? handleSubmit : handleContinue}>
            {/* Bước đầu: chỉ nhập email hoặc số điện thoại */}
            {!showCompletionForm && (
              <>
                <div className="input-group">
                  <label>
                    Email hoặc Số điện thoại <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập email hoặc số điện thoại"
                    value={emailOrPhone}
                    onChange={handleInputChange(setEmailOrPhone, 'emailOrPhone')} // Xóa lỗi khi người dùng bắt đầu nhập lại
                    required
                  />
                  {errors.emailOrPhone && <span className="error-text">{errors.emailOrPhone}</span>}
                </div>

                {/* Nút tiếp tục */}
                <button type="submit" className="continue-btn">
                  Tiếp tục
                </button>
              </>
            )}

            {/* Bước hoàn tất đăng ký: nhập họ tên, mật khẩu và xác nhận mật khẩu */}
            {showCompletionForm && (
              <>
                <div className="input-group">
                  <label>
                    Họ và Tên <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    value={fullName}
                    onChange={handleInputChange(setFullName, 'fullName')}
                    required
                  />
                </div>

                {/* Hiển thị email nếu người dùng nhập email */}
                {validateEmail(emailOrPhone) && (
                  <div className="input-group">
                    <label>Email</label>
                    <input type="email" value={emailOrPhone} readOnly className="rOnly" />
                  </div>
                )}

                {/* Hiển thị số điện thoại nếu người dùng nhập số điện thoại */}
                {validatePhone(emailOrPhone) && (
                  <div className="input-group">
                    <label>Số điện thoại</label>
                    <input type="text" value={emailOrPhone} readOnly className="rOnly" />
                  </div>
                )}

                {/* Hiển thị trường nhập mật khẩu */}
                <div className="input-group">
                  <label>
                    Mật khẩu <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={handleInputChange(setPassword, 'password')} // Xóa lỗi khi người dùng bắt đầu nhập lại
                    required
                  />
                  {errors.password && <span className="error-text">{errors.password}</span>}
                </div>

                <div className="input-group">
                  <label>
                    Nhập lại mật khẩu <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPassword}
                    onChange={handleInputChange(setConfirmPassword, 'confirmPassword')} // Xóa lỗi khi người dùng bắt đầu nhập lại
                    required
                  />
                  {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                </div>

                {/* Nút hoàn tất */}
                <button type="submit" className="continue-btn">
                  Hoàn tất
                </button>
              </>
            )}
          </form>

          {/* Hiển thị đăng ký với Google hoặc Facebook chỉ trong bước đầu */}
          {!showCompletionForm && (
            <>
              <div className="divider">Hoặc đăng ký với</div>

              <button className="social-btn google-btn">
                <Icon icon="logos:google-icon" style={{ fontSize: '24px' }} /> Tiếp tục với Google
              </button>

              <button className="social-btn facebook-btn">
                <Icon icon="logos:facebook" style={{ fontSize: '24px' }} /> Tiếp tục với Facebook
              </button>
            </>
          )}

          {/* Điều khoản & Chính sách */}
          <div className="terms">
            Bằng cách {type === 'login' ? 'đăng nhập' : 'đăng ký'}, bạn đồng ý với{' '}
            <a href="#">Điều khoản & Điều kiện</a> và xác nhận rằng bạn đã đọc{' '}
            <a href="#">Chính sách Bảo mật</a> của chúng tôi.
          </div>
        </div>
      </div>
    </div>
  );
}
AuthForm.propTypes = {
  type: PropTypes.string.isRequired, // Kiểm tra kiểu của `type` là string
  onSubmit: PropTypes.func.isRequired, // Kiểm tra kiểu của `onSubmit` là function
  initialEmailOrPhone: PropTypes.string, // Kiểm tra kiểu của `initialEmailOrPhone` là string (không bắt buộc)
  onClose: PropTypes.func // Kiểm tra kiểu của `onClose` là function (không bắt buộc)
};

export default AuthForm;
