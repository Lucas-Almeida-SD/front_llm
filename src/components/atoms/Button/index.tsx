type ButtonProps = {
  title: string,
}

export default function Button(props: ButtonProps) {
  const { title } = props;
  return(
    <div>
      <button type="button" className="btn btn-primary">{title}</button>
    </div>
  );
}