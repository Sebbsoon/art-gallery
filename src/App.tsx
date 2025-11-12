
import { useEffect, useState } from 'react';
import useImportGallery from "./hooks/useImportGallery";
import HomeScreen from './screens/HomeScreen';
import ImagesDisplayScreen from './screens/ImagesDisplayScreen';
import { ConfigProvider, Layout, type MenuProps, Flex, Menu } from 'antd';
import useFetchFilter from './hooks/useFetchFilter';
import Sider from 'antd/es/layout/Sider';
import { orange } from '@ant-design/colors';
import HeaderMenu from './components/HeaderMenu';
import { LinkedinFilled, InstagramFilled, GithubFilled } from '@ant-design/icons';
import type { MenuItemType } from 'antd/es/menu/interface';

const { Header, Content, Footer } = Layout;

function App() {

  const { data, loading, error: importError } = useImportGallery();
  const { filter, error: filterError } = useFetchFilter();
  const [screen, setScreen] = useState("home");

  const onChange: MenuProps['onClick'] = (e) => {
    setScreen(e.key);
  }

  useEffect(() => { console.log("loading: " + loading) }, [loading])
  useEffect(() => { console.log(data) }, [data])
  useEffect(() => { console.log("error: " + importError) }, [importError])
  useEffect(() => { console.log(filter) }, [filter])

  const items = [
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
  ];
  const socMed: MenuItemType[] = [
    {
      label: '',
      key: 'linkedin',
      icon: <a href='https://www.linkedin.com/in/sebastian-thunberg-9a0318aa/' target='_blank'><LinkedinFilled /></a>
    }, {
      label: '',
      key: 'instagram',
      icon: <a href='https://www.instagram.com/sebbsoonart/' target='_blank'><InstagramFilled /></a>

    },
    {
      label: '',
      key: 'github',
      icon: <a href='https://www.github.com/sebbsoon/' target='_blank'><GithubFilled /></a>
    },]
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: orange[1]!,
            bodyBg: orange[2]!
          },
          Menu: {
            itemBg: orange[3]!,
            itemSelectedColor: orange[5]!,
            fontSize: 18,
          }
        },
        token: {
          colorPrimary: orange.primary!,
          colorText: orange[7]!,

        }
      }}>
      <HeaderMenu />
      <Layout style={{
        minHeight: '100vh',
        width: '100vw',
      }}>

        <Layout>
          <Sider width={"25vw"} collapsedWidth={20} breakpoint='lg' />
          <Content style={{ display: "flex", justifyContent: 'center', }}>
            <Flex vertical style={{ width: '100vw' }}>
              <Flex justify='space-between' style={{ backgroundColor: orange[3], padding: '5px 5px 15px 80px' }}>
                <Menu mode="horizontal" defaultSelectedKeys={['home']} onClick={onChange} items={items} />
                <Menu mode="horizontal" defaultSelectedKeys={['home']} selectable={false} items={socMed} />
              </Flex>
              <Layout style={{ paddingLeft: 50, paddingRight: 50 }}>
                {screen === "home" && <HomeScreen />}
                {screen === "traditional" && <ImagesDisplayScreen images={data} loading={loading} filter={filter} tags={["trad"]} />}
                {screen === "digital" && <ImagesDisplayScreen images={data} loading={loading} filter={filter} tags={["digi"]} />}
              </Layout>
            </Flex>
          </Content>
          <Sider width={"25vw"} collapsedWidth={20} breakpoint='lg' />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App
