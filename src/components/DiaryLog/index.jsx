import moment from "moment";
import Styles from "./styles.module.scss";

function DiaryLog({ log }) {
  console.log(log.astro.html);
  return (
    <div className={Styles.card}>
      <div className={Styles.cardTitle}>
        <h2 className="mt1 mb1">{log.title}</h2>
        <small>{moment(log.publishDate).fromNow()}</small>
      </div>
      <div dangerouslySetInnerHTML={{ __html: log.astro.html}} />
    </div>
  );
}

export default DiaryLog;
