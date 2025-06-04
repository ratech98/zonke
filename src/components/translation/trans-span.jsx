import { useTranslation } from 'react-i18next'

const TransSpan = ({children}) => {
    const {t} = useTranslation()
  return (
    <span>
        {t(children)}
    </span>
  )
}

export default TransSpan