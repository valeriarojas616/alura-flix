import FichasVideo from '../FichasVideo/FichasVideo';

function SectionVideos({ title, classNamePrefix }) {
  return (
    <div className={`${classNamePrefix}-videos`}>
      <div className={`${classNamePrefix}-seccion`}>
        <h2 className={`title-${classNamePrefix}`}>{title}</h2>
        <section className={`fichas-video-${classNamePrefix}`}>
          <FichasVideo classNamePrefix={classNamePrefix} />
          <FichasVideo classNamePrefix={classNamePrefix} />
          <FichasVideo classNamePrefix={classNamePrefix} />
        </section>
      </div>
    </div>
  );
}

export default SectionVideos;