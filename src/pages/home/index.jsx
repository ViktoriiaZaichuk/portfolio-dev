import Layout from "../../components/layout/Layout";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <h1>{t('home.title')}</h1>
            <p>{t('home.description')}</p>
        </Layout>
    )
}

export default Home;