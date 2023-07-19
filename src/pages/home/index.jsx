import Layout from "../../components/layout/Layout";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <main className="home">
                <section className="home--hero">
                    <div className="home--hero__txt">
                        <h1>{t('home.hero.title')}</h1>
                    </div>
                    <div className="home--hero__img">
                        
                    </div>
                </section>
                
                <section className="home-intro">

                </section>
            </main>
        </Layout>
    )
}

export default Home;