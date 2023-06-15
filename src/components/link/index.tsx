import LinkNext, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
}

export default function Link(props: Props) {
  const { children, href, ...rest } = props
  
  return (
    <LinkNext href={href} {...rest}>
      {children}{' '}
    </LinkNext>
  )
}
