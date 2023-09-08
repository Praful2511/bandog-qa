import CollectionSection from "../components/homeComponents/collectionSection"
import CoverPage from "../components/homeComponents/coverPage"
import FeatureSection from "../components/homeComponents/featureSection"
import InfoNFT from "../components/homeComponents/infoNFT"
import SecondCoverPage from "../components/homeComponents/secondCoverPage"

export const Home = () => {
  return <>
  {/* <CoverPage /> */}
  <SecondCoverPage />
  <FeatureSection/>
  <InfoNFT/>
  <CollectionSection/>
  </>  
}