import { useTranslation } from 'react-i18next'

const TransSpan = ({
  children,
  ...rest
}) => {
    const {t} = useTranslation()
  return (
    <span {...rest}>
        {t(children)}
    </span>
  )
}

export default TransSpan