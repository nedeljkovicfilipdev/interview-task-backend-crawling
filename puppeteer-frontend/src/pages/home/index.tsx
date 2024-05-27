import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { MainPage } from 'src/components/main'

export default function Home() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <MainPage />
    </>
  )
}
