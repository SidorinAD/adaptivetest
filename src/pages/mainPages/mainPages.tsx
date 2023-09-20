// import svg
import VolumeSvg from "../../assets/volume"

// components imports
import { Button } from "../../shared/ui/button/button"
import { CompareTable } from "../../shared/ui/compareTable/compareTable"
import { TextCard } from "../../shared/ui/textCard/textCard"
import { CompareTableContent, TextsCardsContent } from "../../shared/utils/consts/consts"

// img imports
import cookesJpg from '../../assets/cookes.jpg'
import flowersJpg from '../../assets/flowers.jpg'
import img_resize from '../../assets/img_resize.jpg'
import parkJpg from '../../assets/park.jpg'

// carousel imports
import Carousel from "nuka-carousel";

import './mainPages.css'

export const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <div className="upBlock">
        <div className="upBlockLeftSide">
          <Carousel>
            <img alt="макарунсы" src={cookesJpg} />
            
            <img alt="цветочки" src={flowersJpg} />
            
            <img alt="растения" src={img_resize} />
            
            <img alt="парк" src={parkJpg} />
          </Carousel>
        </div>

        <div className="upBlockRightSide">
          <div className="upBlockRightSideContainer">
            <p>text text text text</p>

            <div className="rightSideButtonsAndTextCardContainer">
              <div>
                <VolumeSvg />

                <div>
                  <VolumeSvg /> 
                  
                  <VolumeSvg />
                </div>

                <div className="rightSideButtonsContainer">
                  <Button buttonText="texttexttexttext"/>

                  <Button buttonText="text"/>
                </div>
              </div>

              <TextCard 
                titleText={'text text text text text text text texttext text text text text text text text text text text texttext text text text'}
              />
            </div>

            <CompareTable 
              leftSide={CompareTableContent.leftSide} 
              rightSide={CompareTableContent.rightSide} 
            />
          </div>
        </div>
      </div>

      <div className="downBlock">
        <div className="downBlockTitleContainer">
          <p className="downBlockTitle">text | texttext</p>
        </div>

        <div className="downBlockTextCardsContainer">
          {TextsCardsContent.map(({text, titleText}) => {
            return (
              <TextCard 
                titleText={titleText}
                text={text}
                transparent={false}
                key={titleText}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}