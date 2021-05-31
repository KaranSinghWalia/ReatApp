import * as s from './App.styles'
import Sidebar from './components/SideBar/SideBar'
import MainView from './components/MainView/MainView'
import * as Palette from './color'

const App = () => {

  const backgroundImage = 'images/nagada.png'
  const sidebarHeader = 'Nagada'
  const menuItems = [
    { name: 'Home', to: '/', icon: 'icons/home.svg' },
    { name: 'Movies', to: '/movies', icon: 'icons/movies.svg' },
    { name: 'Web Series', to: '/webSeries', icon: 'icons/webseries.svg' },
    { name: 'Music', to: '/music', icon: 'icons/music.svg' },
    { name: 'Contacts', to: '/contact', icon: 'icons/contacts.svg' }
  ]
  const fonts = {
    headerFont: 'New Tegomin',
    menuFont: 'Poppins'
  }


  return (
    <s.App >
      <Sidebar backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.pinkAndBlue}>
      </Sidebar>
      <MainView></MainView>
    </s.App>
  );
}

export default App;
