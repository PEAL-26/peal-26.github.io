// import IconComponent from "../icon-component";

interface Props {
  name: string;
  className?: string;
  onClick?: () => void;
}

export default function Icon(props: Props) {
  const { name, className, onClick } = props;

  return (
    <div
      className={`rounded-md h-6 w-6 flex justify-center items-center hover:cursor-pointer hover:text-gray ${className}`}
      onClick={() => onClick && onClick()}
    >
      {/* <IconComponent name={name} /> */}
    </div>
  );
}
