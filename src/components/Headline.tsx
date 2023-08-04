export default function Headline(props: { title: string }) {
  return (
    <div className="font-gerbera capitalize mb-6 sm:block hidden">
      {props.title}
    </div>
  );
}
