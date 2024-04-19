import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";


import { useSelector, useDispatch } from "react-redux";
import { toggleViewerState } from "../../reducers/userReducer";

export const ViewerCarousel = ({images,idx, state}) => {
  const [open, setOpen] = React.useState(false);



  const dispatch =  useDispatch()
  const viewerState = useSelector((state)=>{return state.user.viewerVisible})
  React.useEffect(()=>{
    
    console.log(viewerState,idx)
    setOpen(viewerState)
  },[viewerState])

  return (
    <>
      <Lightbox
      index={idx}
        open={open}
        plugins={[Zoom]}
        close={() => {setOpen(false); dispatch(toggleViewerState())}}
        slides={images.map((image)=>{
          return {src:image}
        })}
      
        animation={{ zoom: 100 }}
        zoom={{
          scrollToZoom:true,
          maxZoomPixelRatio: 2,
          zoomInMultiplier: 1,
          doubleTapDelay: 300,
          doubleClickDelay: 500,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 50, 
          pinchZoomDistanceFactor: 50,
        }}
      />

    </>
  );
}