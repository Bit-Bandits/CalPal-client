import React from 'react';
// import './index.css';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

function Contributors() {
    const myAvatar = [
        {
            avatarUrl: "https://media.licdn.com/dms/image/D5635AQHdcuXuyL_CCg/profile-framedphoto-shrink_400_400/0/1685838029962?e=1688857200&v=beta&t=XT5hfGfZyGahVa-sEuUyoH7H1PVPLuME1GhFFUkK0jQ ",
            text: " lorum ipsoum ",
            linkedin: " LinkedIn"
        },
        {
            avatarUrl: "https://media.licdn.com/dms/image/D5635AQHdcuXuyL_CCg/profile-framedphoto-shrink_400_400/0/1685838029962?e=1688857200&v=beta&t=XT5hfGfZyGahVa-sEuUyoH7H1PVPLuME1GhFFUkK0jQ ",
            text: " lorum ipsoum ",
            linkedin: " LinkedIn"
        }
    ]
    return (
        <>
            {myAvatar.map((avatars) => {
                return (
                    <Space direction="vertical" size={16}>
                        <Space wrap size={16}>
                            <Avatar size={75} icon={avatars.avatarUrl} />



                        </Space>
                        <span>{avatars.text}</span>

                        <button>{avatars.linkedin}</button>



                    </Space>
                )
            })}

        </>
    );
};

export default Contributors;