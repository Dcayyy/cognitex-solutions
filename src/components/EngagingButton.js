import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';

const MotionButton = motion(Button); // Make sure this line exists!

const buttonVariants = {
    initial: {
        scale: 1,
        background: 'linear-gradient(45deg, #ff7f50, #ff6347)',
    },
    hover: {
        scale: 1.05,
        boxShadow: '0px 0px 30px rgba(255,105,135,0.8)',
        background: [
            'linear-gradient(45deg, #ff7f50, #ff6347)',
            'linear-gradient(45deg, #ff6347, #ff7f50)',
            'linear-gradient(45deg, #ff7f50, #ff6347)'
        ],
        transition: {
            scale: { type: 'tween', duration: 0.2, ease: 'easeInOut' },
            boxShadow: { duration: 0.1 },
            background: { duration: 1, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
        }
    }
};

const EngagingButton = ({ onClick, children }) => (
    <MotionButton
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        type="primary"
        size="large"
        shape="round"
        style={{
            background: 'linear-gradient(45deg, #ff7f50, #ff6347)',
            border: 'none',
            color: '#fff',
            fontSize: '1.2rem',
            padding: '1rem 2rem',
            overflow: 'hidden'
        }}
        onClick={onClick}
    >
        {children}
    </MotionButton>
)

export default EngagingButton;
