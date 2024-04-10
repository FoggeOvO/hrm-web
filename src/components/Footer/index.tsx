import { UsergroupDeleteOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Author',
          title: <UsergroupDeleteOutlined />,
          href: 'https://t.me/Ro15888',
          blankTarget: true,
        },
        {
          key: 'telegram',
          title: 'Ro.',
          href: 'https://t.me/Ro15888',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
