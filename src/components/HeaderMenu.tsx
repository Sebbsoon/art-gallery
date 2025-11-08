import { Flex, Tabs, Typography, Image, type TabsProps } from "antd"
import { Header } from "antd/es/layout/layout"
import headerImage from '../assets/header_image.jpg';

  const items: TabsProps['items'] = [
    {
      label: 'Home',
      key: 'home',
    }, {
      label: 'Traditional Art',
      key: 'traditional',
    },
    {
      label: 'Digital Art',
      key: 'digital',
    },
]
interface HeaderMenuProps {
    onChange: (activeKey: string) => void;
}
const HeaderMenu: React.FC<HeaderMenuProps> = ({ onChange }) => {
    return (
        <Header style={{ minHeight: 400, height: '60vh', padding: 0, overflow: 'hidden' }}>
            <Flex align='center' justify="center">
                <Image src={headerImage} preview={false} style={{
                    position: 'absolute',
                    width: '100vw',
                    minWidth:1200,
                    transform: 'translateX(-50%) translateY(-30%)'
                    
                }} />
            </Flex>
            <Flex vertical justify='center' align='center' style={{
                height: '100%'
            }}>
                <Typography.Title level={1} style={{ zIndex: 1, color: '#ffff', fontSize: 46 }}>SEBBSOONSART</Typography.Title>
                <Tabs type='line' size='large' onChange={onChange} items={items} defaultActiveKey="home" />
            </Flex>
        </Header>
    );
};

export default HeaderMenu;