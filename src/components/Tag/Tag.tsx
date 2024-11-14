import './Tag.scss';

export default function Tag({tag}: {tag: string}) {
  return (
    <div className="tag__item">
      <p className="tag__item-text">{tag}</p>
    </div>
  )
}
