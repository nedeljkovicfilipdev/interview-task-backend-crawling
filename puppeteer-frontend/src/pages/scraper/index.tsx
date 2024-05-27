import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { ScraperComponent } from 'src/components/scraper-component'

export default function Scraper() {
  const { t } = useTranslation('translation')
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <ScraperComponent />
    </>
  )
}
