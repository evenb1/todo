// src/components/AuthModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './AuthModal.css'; // Optional for custom styles
import { FaUser } from "react-icons/fa";

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

  return (
    <div>
      <button onClick={() => openModal(true)}>Login</button>
      <button onClick={() => openModal(false)}>Sign Up</button>
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
                <input type="text" name="username" />
            </div>
          )}
          <div className="input-box">
            
              <input type="email" name="email" placeholder='Email'/>
          </div>
          <div>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
          </div>
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          <button type="button" onClick={closeModal}>
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AuthModal;