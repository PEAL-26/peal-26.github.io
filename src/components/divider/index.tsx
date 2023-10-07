interface Props {
  color?: string
}

export function Divider({ color }: Props = { color: 'gray-300' }) {
  return <div className={`border-l border-${color} py-3`} />
}
