import { Typography } from 'antd';
import { CSSProperties } from 'react';

const headerStyle: CSSProperties = {
    color: 'black',
};

export const Header = () => {
    const { Title } = Typography;
    return (
        <>
            <Title style={headerStyle}>Ant Design</Title>
        </>
    );
};
