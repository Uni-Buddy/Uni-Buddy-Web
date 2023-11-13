import { Grid, Button, Container, styled } from '@mui/material';
import { useHeader } from './data';
import { HeaderIcon, HeaderTitle } from '.';

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isMainPage, handlePageRefresh } = useHeader();

  const HeaderIconWrapper = styled('div')`
    width: 100px;
    height: 100px;
    position: relative;

    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;
    background-color: white;
    border-radius: 50%;
    box-shadow: -3px 3px 3px 0px rgba(0, 0, 0, 0.5);
  `;

  const LittleCircle = styled('div')`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    position: relative;
    top: -20px;
    left: 80px;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, 0.5);
  `;

  return (
    <Grid container justifyContent={'center'} id="header">
      {isMainPage ? (
        <Grid item xs="auto" mt={'50px'}>
          <Button
            onClick={() => handlePageRefresh()}
            color={'inherit'}
            disableRipple
            disableElevation
            disableFocusRipple
            sx={{
              ':hover': {
                background: 'none',
              },
            }}
          >
            <img src="/images/uni-buddy-logo.png" width={120} />
          </Button>
        </Grid>
      ) : (
        <>
          <Grid
            item
            xs={12}
            sx={{
              minWidth: 'auto',
              height: '140px',
              backgroundImage: 'url("/images/header-bg.png")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></Grid>
          <Container maxWidth={'lg'} sx={{ position: 'relative', top: '-70px', marginBottom: '-60px' }}>
            <HeaderIconWrapper>
              <HeaderIcon />
            </HeaderIconWrapper>
            <LittleCircle />
            <HeaderTitle />
          </Container>
        </>
      )}
    </Grid>
  );
};

export default header;
