// src/components/AuthModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './AuthModal.css'; // Optional for custom styles

Modal.setAppElement('#root'); // Ensure accessibility by binding modal to your app element

const AuthModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModal = (isLoginMode) => {
    setIsLogin(isLoginMode);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const switchToSignUp = (e) => {
    e.preventDefault();
    setIsLogin(false);
  };

  return (
    <div>
      <button onClick={() => openModal(true)}>Login</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Auth Modal"
        className="auth-modal"
        overlayClassName="auth-modal-overlay"
      >
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
          {!isLogin && (
            <div className="input-box">
              <input type="text" name="username" placeholder='Username' />
            </div>
          )}
          <div className="input-box">
            <input type="email" name="email" placeholder='Email' />
          </div>
          <div className='input-box'>
            <input type="password" name="password" placeholder='Password' />
          </div>
          {isLogin && (
            <div className='register-link'>
              <p>Don't have an Account? <a href='#' onClick={switchToSignUp}>Register</a></p>
            </div>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
      </Modal>
    </div>
  );
};

export default AuthModal;
