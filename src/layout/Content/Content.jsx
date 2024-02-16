import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import Card from "../../components/Cards/Card";


const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
      <Card></Card>
    </div>
  )
}

export default Content
