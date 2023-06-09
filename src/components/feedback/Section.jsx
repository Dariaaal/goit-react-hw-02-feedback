import css from './Feedback.module.css';

const Section = ({title, children}) => {
    return <div>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
    </div>
}

export default Section;