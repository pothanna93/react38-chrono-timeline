import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <fragment>
      <div className="course-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-icon-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="course-lists">
        {tagsList.map(eachTag => (
          <li key={eachTag.id}>
            <p className="name-tag">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </fragment>
  )
}
export default CourseTimelineCard
