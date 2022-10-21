import AdminDashboard from 'components/AdminDashboard/AdminDashboard';
import Container from 'components/Container/Container';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import { Context } from 'index';
import { useContext } from 'react';

const Dashboard = () => {
  const {user} = useContext(Context);
  return (
    <Container className='default centered'>
      {
        (user.user.role === 1)
        ? <PageTitle>Dashboard</PageTitle>
        : <>
            <PageTitle>Admin Dashboard</PageTitle>
            <AdminDashboard userInfo={user}/>
          </>
      }
    </Container>
  );
};

export default Dashboard;