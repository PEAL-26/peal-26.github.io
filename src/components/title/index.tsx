interface Props {
  value :string;
}

export default function Title({ value }: Props) {
  return <h1 className="font-bold text-xl">{value}</h1>
}
