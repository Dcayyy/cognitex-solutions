import React from 'react';
import { Layout, Menu } from 'antd';
import logo from './path-to-logo'; // update the path accordingly

const { Header } = Layout;

const NavigationHeader = () => {
    return (
        <>
            {/* Inject global styles to override focus and active states */}
            <style>
                {`
          .ant-menu-item a:focus,
          .ant-menu-item a:active {
            background-color: transparent !important;
            box-shadow: none !important;
            outline: none !important;
          }
        `}
            </style>
            <Header
                style={{
                    background: 'transparent',
                    position: 'absolute',
                    zIndex: 1000,
                    width: '100%',
                    padding: '0 2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* Centered Logo */}
                <img
                    src={logo}
                    alt="Cognitex Solutions Logo"
                    style={{ height: '215px', marginTop: '85px' }}
                />
                {/* Navigation positioned a bit to the left */}
                <div
                    style={{
                        position: 'absolute',
                        left: '2rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1001,
                        pointerEvents: 'auto',
                        backgroundColor: 'transparent'
                    }}
                >
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        overflowedIndicator={<span></span>}
                        style={{ background: 'transparent', borderBottom: 'none' }}
                    >
                        {['home', 'features', 'about'].map((key) => (
                            <Menu.Item key={key}>
                                <a
                                    href={`#${key}`}
                                    style={{
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        outline: 'none',
                                        textDecoration: 'none',
                                        background: 'transparent',
                                        whiteSpace: key === 'about' ? 'normal' : 'initial'
                                    }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const target = document.querySelector(`#${key}`);
                                        if (target) {
                                            target.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.transform = 'translateX(5px)')
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.transform = 'translateX(0)')
                                    }
                                    onMouseDown={(e) => {
                                        e.currentTarget.style.boxShadow =
                                            '0 0 10px rgba(255,255,255,0.8)';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                    onMouseUp={(e) => {
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                    onFocus={(e) => e.currentTarget.blur()}
                                >
                                    {key === 'home'
                                        ? 'Home'
                                        : key === 'features'
                                            ? 'Features'
                                            : 'About Us'}
                                </a>
                            </Menu.Item>
                        ))}
                    </Menu>
                </div>
            </Header>
        </>
    );
};

export default NavigationHeader;
