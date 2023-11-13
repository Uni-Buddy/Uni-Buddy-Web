import { Grid, Link, Box, Button, styled } from '@mui/material';
import { useNav } from './data';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MainPageDocument from '@components/main/export-pdf/MainPageDocument';

const ExportPdfButtonStyle = styled(Button)({
  minWidth: 'auto',
  width: '20px',
  height: '20px',
  backgroundImage: 'url("/images/icons/export-pdf.png");',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  ':hover': {
    backgroundImage: 'url("/images/icons/export-pdf-hover.png");',
  },
});

const MainButtonStyle = styled(Button)({
  minWidth: 'auto',
  width: '60px',
  height: '30px',
  backgroundImage: 'url("/images/uni-buddy-logo.png");',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
});

const Nav = () => {
  const { menus, handleGotoTopScroll, selectedMenu, isMainPage, handleGotoMainPage, isTopScroll, careersList } =
    useNav();
  return (
    // (100vh - 네비 높이) / 2
    <Box top={'calc( (100vh - 512px) / 2)'} position={'fixed'}>
      <Grid container direction={'column'} position={'fixed'} width={'auto'}>
        <Grid item textAlign={'center'} width={60} height={30}>
          {isMainPage ? (
            /* pdf 내보내기 버튼. 메인 페이지만 표시 */
            <PDFDownloadLink document={<MainPageDocument careersList={careersList} />} fileName="uin-buddy.pdf">
              {({ loading }) => (loading ? '' : <ExportPdfButtonStyle />)}
            </PDFDownloadLink>
          ) : (
            /* 메인페이지 이동버튼 */
            <MainButtonStyle
              onClick={() => {
                handleGotoMainPage();
              }}
            />
          )}
        </Grid>

        {menus.map((menu) => (
          <Grid
            key={menu.id}
            item
            mx={'auto'}
            sx={{
              writingMode: 'vertical-lr',
              borderBottom: `${menu.text === '로그아웃' ? '' : '1px solid'}`,
              color: `${menu.text === '로그아웃' ? 'rgb(218, 55, 55)' : 'rgb(71,71,71)'}`,
              fontWeight: `${selectedMenu === menu.text ? 900 : 400}`,
              ':hover': {
                fontWeight: 900,
              },
            }}
          >
            <Link
              py={2}
              sx={{
                cursor: 'pointer',
              }}
              underline="none"
              color="inherit"
              onClick={menu.onClick}
            >
              {menu.text}
            </Link>
          </Grid>
        ))}

        {/* 상단으로 스크롤 이동 버튼 */}
        {!isTopScroll && (
          <Grid item mx={2}>
            <Button
              size="small"
              sx={{
                p: 0,
                minWidth: 'auto',
                position: 'fixed',
                bottom: '5%',
              }}
              onClick={() => {
                handleGotoTopScroll();
              }}
            >
              <VerticalAlignTopIcon />
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Nav;
