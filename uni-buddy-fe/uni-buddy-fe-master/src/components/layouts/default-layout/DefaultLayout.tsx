import { Container, Grid, styled } from '@mui/material';
import { DefaultLayoutProps } from './data';
import { Header } from './header';
import { Nav } from './nav';

const DefaultLayoutStyle = styled(Container)({
  paddingRight: '0 !important',
  paddingLeft: '0 !important',
});

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <DefaultLayoutStyle maxWidth={false}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item id="content" maxWidth={'lg'}>
          <Container>
            <Grid container wrap="nowrap">
              <Grid item flexGrow={1}>
                {children}
              </Grid>
              <Grid item width={60} mx={2}>
                <Nav />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </DefaultLayoutStyle>
  );
};

export default DefaultLayout;
