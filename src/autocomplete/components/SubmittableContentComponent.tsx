interface SubmittableContentComponentProps {
  name: string;
  value: string;
}
export const SubmittableContentComponent = (props: SubmittableContentComponentProps) => {
  return (
    <>
      <input className="hidden" type="text" id={props.name} name={props.name} value={props.value} />
    </>
  );
};
