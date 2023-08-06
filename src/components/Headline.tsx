export default function Headline(props: { title: string }) {
  return (
    <div className='mb-6 hidden font-gerbera capitalize sm:block'>
      {props.title}
    </div>
  )
}
