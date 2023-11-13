import { Container, Grid, styled } from '@mui/material';
import { NonAuthLayoutProps } from './data';

const NonAuthLayoutContainer = styled(Container)({
  paddingRight: '0 !important',
  paddingLeft: '0 !important',
});

const NonAuthLayout = ({ children }: NonAuthLayoutProps) => {
  return (
    <NonAuthLayoutContainer maxWidth={'lg'}>
      <Grid container direction="column">
        <Grid item id="content">
          {children}
        </Grid>
      </Grid>
    </NonAuthLayoutContainer>
  );
};

export default NonAuthLayout;
