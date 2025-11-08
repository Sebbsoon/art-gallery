
import { useEffect, useState } from 'react';
import useImportGallery from "./hooks/useImportGallery";
import HomeScreen from './screens/HomeScreen';
import ImagesDisplayScreen from './screens/ImagesDisplayScreen';
import { ConfigProvider, Layout, Tabs, theme, Typography, type TabsProps, Flex, Image } from 'antd';
import useFetchFilter from './hooks/useFetchFilter';
import Sider from 'antd/es/layout/Sider';
import { orange } from '@ant-design/colors';
import HeaderMenu from './components/HeaderMenu';

const { Header, Content, Footer } = Layout;

function App() {

  const { data, loading, error: importError } = useImportGallery();
  const { filter, error: filterError } = useFetchFilter();
  const [screen, setScreen] = useState("home");

  const onChange = (key: string) => {
    setScreen(key);
  }

  useEffect(() => { console.log("loading: " + loading) }, [loading])
  useEffect(() => { console.log(data) }, [data])
  useEffect(() => { console.log("error: " + importError) }, [importError])
  useEffect(() => { console.log(filter) }, [filter])
  useEffect(() => { console.log("screen: " + screen) }, [screen])
  useEffect(() => { console.log(orange) }, [orange])

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: orange[1]!,
            bodyBg: orange[2]!
          },
          Tabs: {
            itemColor: '#ffffff',
            titleFontSizeLG: 17,
          }
        },
        token: {
          colorPrimary: orange.primary!,
          colorText: orange[7]!,

        }
      }}>
      <HeaderMenu onChange={onChange} />
      <Layout style={{
        minHeight: '100vh',
        width: '100vw',
      }}>
        <Layout>
          <Sider width={"25vw"} collapsedWidth={20} breakpoint='lg'/>
          <Content style={{ display: "flex", justifyContent: 'center', padding: 30 }}>
            {screen === "home" && <HomeScreen />}
            {screen === "traditional" && <ImagesDisplayScreen images={data} loading={loading} filter={filter} tags={["trad"]} />}
            {screen === "digital" && <ImagesDisplayScreen images={data} loading={loading} filter={filter} tags={["digi"]} />}

          </Content>
          <Sider width={"25vw"} collapsedWidth={20} breakpoint='lg'/>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App
