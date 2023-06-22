interface Props {
  value :string;
}

export default function Title({ value }: Props) {
  return <h1 className="">{value}</h1>
}
