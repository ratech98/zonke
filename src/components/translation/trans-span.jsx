import { useTranslation } from 'react-i18next'

const TransSpan = ({
  children,
  className
}) => {
    const {t} = useTranslation()
  return (
    <span className={className}>
        {t(children)}
    </span>
  )
}

export default TransSpan