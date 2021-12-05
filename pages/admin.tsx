import dynamic from 'next/dynamic';
import config from 'cms/config';

const CMS = dynamic(() => import("netlify-cms-app").then((cms: any) =>  cms.init({ config }) ),
  {
    ssr: false,
    loading: () => <h1>Loading</h1>,
  }
);
const AdminPage: React.FC = () => {
  return <CMS />;
};
export default AdminPage;
