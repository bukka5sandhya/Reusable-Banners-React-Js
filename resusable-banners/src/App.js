import BannerCardItem from'./components/BannerCardItem';
import './App.css'

const bannerCardList = [
  {
    id:1,
    headerText:'The Seasons Latest',
    description:"Get the seasons all latest designs in a flick of your hand",
    className:'card1'
  },
  {
    id:2,
    headerText:'Our New Designs',
    description:'Get the designs by our in-house team all for yourself',
    className:'card2',
  },
  {
    id:3,
    headerText:'Insiders',
    description:'Get the top products for yourself with an extra off',
  }
]
const App =()=>(
  <div className="cards-container">
    <ul className="card-container-list">
      {bannerCardList.map(eachCard =>(
        <BannerCardItem cardDetails ={eachCard} key={eachCard.id}/>
      ))}
    </ul>
  </div>

)

export default App;
