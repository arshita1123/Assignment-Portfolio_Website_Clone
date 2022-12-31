import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useOuterMostFlex2Cb, useInnerFlex2Cb, useAboutContentFlexCb, useAboutContentCb, useAbout6Cb, useFlex14Cb, useAbout1Cb, useMyImageFlexCb, useOuterMostFlex3Cb, useInnerFlex3Cb, useFlex18Cb, useOuterMostFlex1Cb, useInnerFlex1Cb, useMainLogoFlexCb, useNavigationFlexCb, useSubNavigationCb, useOuterMostFlex4Cb, useInnerFlex4Cb, useServiceFlex1Cb, useServiceFlex2Cb, useService2Cb, useService3Cb, useServiceCb, useOuterMostFlex5Cb, useInnerFlex5Cb, useProjectFlexCb, useProjectFlex2Cb, useProject1Cb, useProjectImage1Cb, useProjectInfo1Cb, useProject3Cb, useProjectInfo3Cb, useProjectImage3Cb, useProject4Cb, useProjectImage4Cb, useProjectInfo4Cb, useProject2Cb, useProjectImage2Cb, useProjectInfo2Cb, useProjectFlex1Cb, useFlex85Cb, useFlex86Cb, useOuterMostFlex7Cb, useInnerFlex7Cb, useContentFlexCb, useLeftFlexCb, useRightFlexCb, useImageFlexCb, useImage3Cb, useImage1Cb, useImage2Cb, useOuterMostFlex6Cb, useInnerFlex6Cb, useBlogFlex1Cb, useBlogFlex2Cb, useRightBlogsCb, useBlog5Cb, useFlex129Cb, useFlex124Cb, useBlog4Cb, useFlex130Cb, useFlex125Cb, useBlog3Cb, useFlex131Cb, useFlex126Cb, useBlog2Cb, useFlex132Cb, useFlex127Cb, useBlog1Cb, useFlex133Cb, useFlex128Cb, useLeftBlogsCb, useOuterMostFlex8Cb, useInnerFlex8Cb, useEducationFlexCb, useInstituteCb, useInstitute3Cb, useFlex169Cb, useFlex170Cb, useInstitute2Cb, useFlex171Cb, useFlex172Cb, useInstitute1Cb, useFlex173Cb, useFlex174Cb, useEducationCb, useFlex178Cb, useWorkExperianceFlexCb, useWorkExperienceCb, useFlex159Cb, useDomainCb, useDomain1Cb, useFlex160Cb, useFlex162Cb, useDomain2Cb, useFlex163Cb, useFlex164Cb, useDomain3Cb, useFlex166Cb, useFlex167Cb, useOuterMostFlex9Cb, useInnerFlex9Cb, useLeftContentCb, usecontent3Cb, useContent1Cb, usecontent2Cb, useRightContentCb, useInvertedCommaCb, useInfoCb, usePersonCb, useOuterMostFlex10Cb, useInnerFlex10Cb, useFAQFlexCb, useQuestionFlexCb, useLeftQuestionsCb, useQuestion1Cb, useQuestion2Cb, useQuestion4Cb, useQuestion3Cb, useRightQuestionsCb, useQuestion8Cb, useQuestion7Cb, useQuestion6Cb, useQuestion5Cb, useAddressFlexCb, useContentFlex2Cb, useAddressCb, useAddress1Cb, useFlex244Cb, useAddress2Cb, useColumn1Cb, useColumn2Cb, useColumn3Cb, useFooterFlexCb, useAbout3Cb, useAbout2Cb, useAbout4Cb, useAbout5Cb, useButton1Cb, useDownloadCVCb, useTextBox7Cb, useTextBox13Cb, useTextBox14Cb, useProfileImageCb, useTrustedByCb, uselogo3Cb, uselogo1Cb, uselogo2Cb, uselogo4Cb, useMainLogoCb, useBlogNavCb, useAboutNavCb, useServiceNavCb, useProjectNavCb, useBookCallNavCb, useServicesCb, useTextBox17Cb, useTextBox18Cb, useImage7Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useTextBox22Cb, useTextBox23Cb, useTextBox24Cb, useTextBox25Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useTextBox29Cb, useTextBox30Cb, useTextBox31Cb, useTextBox32Cb, useImage10Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, useImage11Cb, useImage17Cb, useTextBox113Cb, useTextBox114Cb, useTextBox11Cb, useTextBox136Cb, useTextBox137Cb, useTextBox138Cb, useTextBox139Cb, useTextBox140Cb, useTextBox141Cb, useImageCb, useImage26Cb, useTextBox147Cb, useTextBox148Cb, useTextBox149Cb, useTextBox150Cb, useImage49Cb, useTextBox248Cb, useTextBox249Cb, useTextBox250Cb, useTextBox251Cb, useTextBox252Cb, useTextBox110Cb, useTextBox111Cb, useTextBox112Cb, useButton3Cb, useTextBox183Cb, useTextBox184Cb, useTextBox185Cb, useTextBox186Cb, useTextBox187Cb, useImage30Cb, useImage31Cb, useImage27Cb, useImage29Cb, useTextBox182Cb, useTextBox168Cb, useTextBox169Cb, useTextBox163Cb, useTextBox153Cb, useTextBox154Cb, useTextBox170Cb, useTextBox171Cb, useTextBox164Cb, useTextBox155Cb, useTextBox156Cb, useTextBox172Cb, useTextBox173Cb, useTextBox165Cb, useTextBox157Cb, useTextBox158Cb, useTextBox174Cb, useTextBox175Cb, useTextBox176Cb, useTextBox166Cb, useTextBox159Cb, useTextBox160Cb, useTextBox177Cb, useTextBox178Cb, useTextBox179Cb, useTextBox167Cb, useTextBox161Cb, useTextBox162Cb, useTextBox180Cb, useTextBox181Cb, useTextBox199Cb, useTextBox200Cb, useTextBox201Cb, useTextBox202Cb, useTextBox203Cb, useTextBox204Cb, useTextBox205Cb, useTextBox206Cb, useTextBox207Cb, useImage33Cb, useTextBox208Cb, useImage32Cb, useTextBox188Cb, useTextBox189Cb, useTextBox191Cb, useTextBox192Cb, useTextBox193Cb, useTextBox194Cb, useTextBox195Cb, useTextBox196Cb, useTextBox197Cb, useTextBox198Cb, useImage34Cb, useTextBox210Cb, useTextBox209Cb, useImage35Cb, useTextBox211Cb, useTextBox212Cb, useTextBox213Cb, useTextBox214Cb, useTextBox215Cb, useTextBox216Cb, useTextBox217Cb, useTextBox218Cb, useImage40Cb, useTextBox240Cb, useImage41Cb, useTextBox241Cb, useImage42Cb, useTextBox242Cb, useTextBox247Cb, useImage48Cb, useTextBox243Cb, useImage43Cb, useTextBox244Cb, useImage44Cb, useTextBox245Cb, useImage45Cb, useImage46Cb, useTextBox246Cb, useTextBox253Cb, useTextBox254Cb, useTextBox255Cb, useTextBox256Cb, useImage50Cb, useTextBox257Cb, useTextBox258Cb, useTextBox259Cb, useTextBox261Cb, useTextBox262Cb, useTextBox263Cb, useTextBox264Cb, useTextBox265Cb, useTextBox266Cb, useTextBox267Cb, useImage52Cb, useTextBox268Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const OuterMostFlex2Props = useStore((state)=>state["Home"]["OuterMostFlex2"]);
const OuterMostFlex2IoProps = useIoStore((state)=>state["Home"]["OuterMostFlex2"]);
const OuterMostFlex2Cb = useOuterMostFlex2Cb()
const InnerFlex2Props = useStore((state)=>state["Home"]["InnerFlex2"]);
const InnerFlex2IoProps = useIoStore((state)=>state["Home"]["InnerFlex2"]);
const InnerFlex2Cb = useInnerFlex2Cb()
const AboutContentFlexProps = useStore((state)=>state["Home"]["AboutContentFlex"]);
const AboutContentFlexIoProps = useIoStore((state)=>state["Home"]["AboutContentFlex"]);
const AboutContentFlexCb = useAboutContentFlexCb()
const AboutContentProps = useStore((state)=>state["Home"]["AboutContent"]);
const AboutContentIoProps = useIoStore((state)=>state["Home"]["AboutContent"]);
const AboutContentCb = useAboutContentCb()
const About6Props = useStore((state)=>state["Home"]["About6"]);
const About6IoProps = useIoStore((state)=>state["Home"]["About6"]);
const About6Cb = useAbout6Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const About1Props = useStore((state)=>state["Home"]["About1"]);
const About1IoProps = useIoStore((state)=>state["Home"]["About1"]);
const About1Cb = useAbout1Cb()
const MyImageFlexProps = useStore((state)=>state["Home"]["MyImageFlex"]);
const MyImageFlexIoProps = useIoStore((state)=>state["Home"]["MyImageFlex"]);
const MyImageFlexCb = useMyImageFlexCb()
const OuterMostFlex3Props = useStore((state)=>state["Home"]["OuterMostFlex3"]);
const OuterMostFlex3IoProps = useIoStore((state)=>state["Home"]["OuterMostFlex3"]);
const OuterMostFlex3Cb = useOuterMostFlex3Cb()
const InnerFlex3Props = useStore((state)=>state["Home"]["InnerFlex3"]);
const InnerFlex3IoProps = useIoStore((state)=>state["Home"]["InnerFlex3"]);
const InnerFlex3Cb = useInnerFlex3Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const OuterMostFlex1Props = useStore((state)=>state["Home"]["OuterMostFlex1"]);
const OuterMostFlex1IoProps = useIoStore((state)=>state["Home"]["OuterMostFlex1"]);
const OuterMostFlex1Cb = useOuterMostFlex1Cb()
const InnerFlex1Props = useStore((state)=>state["Home"]["InnerFlex1"]);
const InnerFlex1IoProps = useIoStore((state)=>state["Home"]["InnerFlex1"]);
const InnerFlex1Cb = useInnerFlex1Cb()
const MainLogoFlexProps = useStore((state)=>state["Home"]["MainLogoFlex"]);
const MainLogoFlexIoProps = useIoStore((state)=>state["Home"]["MainLogoFlex"]);
const MainLogoFlexCb = useMainLogoFlexCb()
const NavigationFlexProps = useStore((state)=>state["Home"]["NavigationFlex"]);
const NavigationFlexIoProps = useIoStore((state)=>state["Home"]["NavigationFlex"]);
const NavigationFlexCb = useNavigationFlexCb()
const SubNavigationProps = useStore((state)=>state["Home"]["SubNavigation"]);
const SubNavigationIoProps = useIoStore((state)=>state["Home"]["SubNavigation"]);
const SubNavigationCb = useSubNavigationCb()
const OuterMostFlex4Props = useStore((state)=>state["Home"]["OuterMostFlex4"]);
const OuterMostFlex4IoProps = useIoStore((state)=>state["Home"]["OuterMostFlex4"]);
const OuterMostFlex4Cb = useOuterMostFlex4Cb()
const InnerFlex4Props = useStore((state)=>state["Home"]["InnerFlex4"]);
const InnerFlex4IoProps = useIoStore((state)=>state["Home"]["InnerFlex4"]);
const InnerFlex4Cb = useInnerFlex4Cb()
const ServiceFlex1Props = useStore((state)=>state["Home"]["ServiceFlex1"]);
const ServiceFlex1IoProps = useIoStore((state)=>state["Home"]["ServiceFlex1"]);
const ServiceFlex1Cb = useServiceFlex1Cb()
const ServiceFlex2Props = useStore((state)=>state["Home"]["ServiceFlex2"]);
const ServiceFlex2IoProps = useIoStore((state)=>state["Home"]["ServiceFlex2"]);
const ServiceFlex2Cb = useServiceFlex2Cb()
const Service2Props = useStore((state)=>state["Home"]["Service2"]);
const Service2IoProps = useIoStore((state)=>state["Home"]["Service2"]);
const Service2Cb = useService2Cb()
const Service3Props = useStore((state)=>state["Home"]["Service3"]);
const Service3IoProps = useIoStore((state)=>state["Home"]["Service3"]);
const Service3Cb = useService3Cb()
const ServiceProps = useStore((state)=>state["Home"]["Service"]);
const ServiceIoProps = useIoStore((state)=>state["Home"]["Service"]);
const ServiceCb = useServiceCb()
const OuterMostFlex5Props = useStore((state)=>state["Home"]["OuterMostFlex5"]);
const OuterMostFlex5IoProps = useIoStore((state)=>state["Home"]["OuterMostFlex5"]);
const OuterMostFlex5Cb = useOuterMostFlex5Cb()
const InnerFlex5Props = useStore((state)=>state["Home"]["InnerFlex5"]);
const InnerFlex5IoProps = useIoStore((state)=>state["Home"]["InnerFlex5"]);
const InnerFlex5Cb = useInnerFlex5Cb()
const ProjectFlexProps = useStore((state)=>state["Home"]["ProjectFlex"]);
const ProjectFlexIoProps = useIoStore((state)=>state["Home"]["ProjectFlex"]);
const ProjectFlexCb = useProjectFlexCb()
const ProjectFlex2Props = useStore((state)=>state["Home"]["ProjectFlex2"]);
const ProjectFlex2IoProps = useIoStore((state)=>state["Home"]["ProjectFlex2"]);
const ProjectFlex2Cb = useProjectFlex2Cb()
const Project1Props = useStore((state)=>state["Home"]["Project1"]);
const Project1IoProps = useIoStore((state)=>state["Home"]["Project1"]);
const Project1Cb = useProject1Cb()
const ProjectImage1Props = useStore((state)=>state["Home"]["ProjectImage1"]);
const ProjectImage1IoProps = useIoStore((state)=>state["Home"]["ProjectImage1"]);
const ProjectImage1Cb = useProjectImage1Cb()
const ProjectInfo1Props = useStore((state)=>state["Home"]["ProjectInfo1"]);
const ProjectInfo1IoProps = useIoStore((state)=>state["Home"]["ProjectInfo1"]);
const ProjectInfo1Cb = useProjectInfo1Cb()
const Project3Props = useStore((state)=>state["Home"]["Project3"]);
const Project3IoProps = useIoStore((state)=>state["Home"]["Project3"]);
const Project3Cb = useProject3Cb()
const ProjectInfo3Props = useStore((state)=>state["Home"]["ProjectInfo3"]);
const ProjectInfo3IoProps = useIoStore((state)=>state["Home"]["ProjectInfo3"]);
const ProjectInfo3Cb = useProjectInfo3Cb()
const ProjectImage3Props = useStore((state)=>state["Home"]["ProjectImage3"]);
const ProjectImage3IoProps = useIoStore((state)=>state["Home"]["ProjectImage3"]);
const ProjectImage3Cb = useProjectImage3Cb()
const Project4Props = useStore((state)=>state["Home"]["Project4"]);
const Project4IoProps = useIoStore((state)=>state["Home"]["Project4"]);
const Project4Cb = useProject4Cb()
const ProjectImage4Props = useStore((state)=>state["Home"]["ProjectImage4"]);
const ProjectImage4IoProps = useIoStore((state)=>state["Home"]["ProjectImage4"]);
const ProjectImage4Cb = useProjectImage4Cb()
const ProjectInfo4Props = useStore((state)=>state["Home"]["ProjectInfo4"]);
const ProjectInfo4IoProps = useIoStore((state)=>state["Home"]["ProjectInfo4"]);
const ProjectInfo4Cb = useProjectInfo4Cb()
const Project2Props = useStore((state)=>state["Home"]["Project2"]);
const Project2IoProps = useIoStore((state)=>state["Home"]["Project2"]);
const Project2Cb = useProject2Cb()
const ProjectImage2Props = useStore((state)=>state["Home"]["ProjectImage2"]);
const ProjectImage2IoProps = useIoStore((state)=>state["Home"]["ProjectImage2"]);
const ProjectImage2Cb = useProjectImage2Cb()
const ProjectInfo2Props = useStore((state)=>state["Home"]["ProjectInfo2"]);
const ProjectInfo2IoProps = useIoStore((state)=>state["Home"]["ProjectInfo2"]);
const ProjectInfo2Cb = useProjectInfo2Cb()
const ProjectFlex1Props = useStore((state)=>state["Home"]["ProjectFlex1"]);
const ProjectFlex1IoProps = useIoStore((state)=>state["Home"]["ProjectFlex1"]);
const ProjectFlex1Cb = useProjectFlex1Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const OuterMostFlex7Props = useStore((state)=>state["Home"]["OuterMostFlex7"]);
const OuterMostFlex7IoProps = useIoStore((state)=>state["Home"]["OuterMostFlex7"]);
const OuterMostFlex7Cb = useOuterMostFlex7Cb()
const InnerFlex7Props = useStore((state)=>state["Home"]["InnerFlex7"]);
const InnerFlex7IoProps = useIoStore((state)=>state["Home"]["InnerFlex7"]);
const InnerFlex7Cb = useInnerFlex7Cb()
const ContentFlexProps = useStore((state)=>state["Home"]["ContentFlex"]);
const ContentFlexIoProps = useIoStore((state)=>state["Home"]["ContentFlex"]);
const ContentFlexCb = useContentFlexCb()
const LeftFlexProps = useStore((state)=>state["Home"]["LeftFlex"]);
const LeftFlexIoProps = useIoStore((state)=>state["Home"]["LeftFlex"]);
const LeftFlexCb = useLeftFlexCb()
const RightFlexProps = useStore((state)=>state["Home"]["RightFlex"]);
const RightFlexIoProps = useIoStore((state)=>state["Home"]["RightFlex"]);
const RightFlexCb = useRightFlexCb()
const ImageFlexProps = useStore((state)=>state["Home"]["ImageFlex"]);
const ImageFlexIoProps = useIoStore((state)=>state["Home"]["ImageFlex"]);
const ImageFlexCb = useImageFlexCb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const OuterMostFlex6Props = useStore((state)=>state["Home"]["OuterMostFlex6"]);
const OuterMostFlex6IoProps = useIoStore((state)=>state["Home"]["OuterMostFlex6"]);
const OuterMostFlex6Cb = useOuterMostFlex6Cb()
const InnerFlex6Props = useStore((state)=>state["Home"]["InnerFlex6"]);
const InnerFlex6IoProps = useIoStore((state)=>state["Home"]["InnerFlex6"]);
const InnerFlex6Cb = useInnerFlex6Cb()
const BlogFlex1Props = useStore((state)=>state["Home"]["BlogFlex1"]);
const BlogFlex1IoProps = useIoStore((state)=>state["Home"]["BlogFlex1"]);
const BlogFlex1Cb = useBlogFlex1Cb()
const BlogFlex2Props = useStore((state)=>state["Home"]["BlogFlex2"]);
const BlogFlex2IoProps = useIoStore((state)=>state["Home"]["BlogFlex2"]);
const BlogFlex2Cb = useBlogFlex2Cb()
const RightBlogsProps = useStore((state)=>state["Home"]["RightBlogs"]);
const RightBlogsIoProps = useIoStore((state)=>state["Home"]["RightBlogs"]);
const RightBlogsCb = useRightBlogsCb()
const Blog5Props = useStore((state)=>state["Home"]["Blog5"]);
const Blog5IoProps = useIoStore((state)=>state["Home"]["Blog5"]);
const Blog5Cb = useBlog5Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Blog4Props = useStore((state)=>state["Home"]["Blog4"]);
const Blog4IoProps = useIoStore((state)=>state["Home"]["Blog4"]);
const Blog4Cb = useBlog4Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Blog3Props = useStore((state)=>state["Home"]["Blog3"]);
const Blog3IoProps = useIoStore((state)=>state["Home"]["Blog3"]);
const Blog3Cb = useBlog3Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Blog2Props = useStore((state)=>state["Home"]["Blog2"]);
const Blog2IoProps = useIoStore((state)=>state["Home"]["Blog2"]);
const Blog2Cb = useBlog2Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Blog1Props = useStore((state)=>state["Home"]["Blog1"]);
const Blog1IoProps = useIoStore((state)=>state["Home"]["Blog1"]);
const Blog1Cb = useBlog1Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const LeftBlogsProps = useStore((state)=>state["Home"]["LeftBlogs"]);
const LeftBlogsIoProps = useIoStore((state)=>state["Home"]["LeftBlogs"]);
const LeftBlogsCb = useLeftBlogsCb()
const OuterMostFlex8Props = useStore((state)=>state["Home"]["OuterMostFlex8"]);
const OuterMostFlex8IoProps = useIoStore((state)=>state["Home"]["OuterMostFlex8"]);
const OuterMostFlex8Cb = useOuterMostFlex8Cb()
const InnerFlex8Props = useStore((state)=>state["Home"]["InnerFlex8"]);
const InnerFlex8IoProps = useIoStore((state)=>state["Home"]["InnerFlex8"]);
const InnerFlex8Cb = useInnerFlex8Cb()
const EducationFlexProps = useStore((state)=>state["Home"]["EducationFlex"]);
const EducationFlexIoProps = useIoStore((state)=>state["Home"]["EducationFlex"]);
const EducationFlexCb = useEducationFlexCb()
const InstituteProps = useStore((state)=>state["Home"]["Institute"]);
const InstituteIoProps = useIoStore((state)=>state["Home"]["Institute"]);
const InstituteCb = useInstituteCb()
const Institute3Props = useStore((state)=>state["Home"]["Institute3"]);
const Institute3IoProps = useIoStore((state)=>state["Home"]["Institute3"]);
const Institute3Cb = useInstitute3Cb()
const Flex169Props = useStore((state)=>state["Home"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["Home"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex170Props = useStore((state)=>state["Home"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["Home"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const Institute2Props = useStore((state)=>state["Home"]["Institute2"]);
const Institute2IoProps = useIoStore((state)=>state["Home"]["Institute2"]);
const Institute2Cb = useInstitute2Cb()
const Flex171Props = useStore((state)=>state["Home"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["Home"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex172Props = useStore((state)=>state["Home"]["Flex172"]);
const Flex172IoProps = useIoStore((state)=>state["Home"]["Flex172"]);
const Flex172Cb = useFlex172Cb()
const Institute1Props = useStore((state)=>state["Home"]["Institute1"]);
const Institute1IoProps = useIoStore((state)=>state["Home"]["Institute1"]);
const Institute1Cb = useInstitute1Cb()
const Flex173Props = useStore((state)=>state["Home"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["Home"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Flex174Props = useStore((state)=>state["Home"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["Home"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const EducationProps = useStore((state)=>state["Home"]["Education"]);
const EducationIoProps = useIoStore((state)=>state["Home"]["Education"]);
const EducationCb = useEducationCb()
const Flex178Props = useStore((state)=>state["Home"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["Home"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const WorkExperianceFlexProps = useStore((state)=>state["Home"]["WorkExperianceFlex"]);
const WorkExperianceFlexIoProps = useIoStore((state)=>state["Home"]["WorkExperianceFlex"]);
const WorkExperianceFlexCb = useWorkExperianceFlexCb()
const WorkExperienceProps = useStore((state)=>state["Home"]["WorkExperience"]);
const WorkExperienceIoProps = useIoStore((state)=>state["Home"]["WorkExperience"]);
const WorkExperienceCb = useWorkExperienceCb()
const Flex159Props = useStore((state)=>state["Home"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["Home"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const DomainProps = useStore((state)=>state["Home"]["Domain"]);
const DomainIoProps = useIoStore((state)=>state["Home"]["Domain"]);
const DomainCb = useDomainCb()
const Domain1Props = useStore((state)=>state["Home"]["Domain1"]);
const Domain1IoProps = useIoStore((state)=>state["Home"]["Domain1"]);
const Domain1Cb = useDomain1Cb()
const Flex160Props = useStore((state)=>state["Home"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["Home"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex162Props = useStore((state)=>state["Home"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["Home"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Domain2Props = useStore((state)=>state["Home"]["Domain2"]);
const Domain2IoProps = useIoStore((state)=>state["Home"]["Domain2"]);
const Domain2Cb = useDomain2Cb()
const Flex163Props = useStore((state)=>state["Home"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["Home"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex164Props = useStore((state)=>state["Home"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["Home"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const Domain3Props = useStore((state)=>state["Home"]["Domain3"]);
const Domain3IoProps = useIoStore((state)=>state["Home"]["Domain3"]);
const Domain3Cb = useDomain3Cb()
const Flex166Props = useStore((state)=>state["Home"]["Flex166"]);
const Flex166IoProps = useIoStore((state)=>state["Home"]["Flex166"]);
const Flex166Cb = useFlex166Cb()
const Flex167Props = useStore((state)=>state["Home"]["Flex167"]);
const Flex167IoProps = useIoStore((state)=>state["Home"]["Flex167"]);
const Flex167Cb = useFlex167Cb()
const OuterMostFlex9Props = useStore((state)=>state["Home"]["OuterMostFlex9"]);
const OuterMostFlex9IoProps = useIoStore((state)=>state["Home"]["OuterMostFlex9"]);
const OuterMostFlex9Cb = useOuterMostFlex9Cb()
const InnerFlex9Props = useStore((state)=>state["Home"]["InnerFlex9"]);
const InnerFlex9IoProps = useIoStore((state)=>state["Home"]["InnerFlex9"]);
const InnerFlex9Cb = useInnerFlex9Cb()
const LeftContentProps = useStore((state)=>state["Home"]["LeftContent"]);
const LeftContentIoProps = useIoStore((state)=>state["Home"]["LeftContent"]);
const LeftContentCb = useLeftContentCb()
const content3Props = useStore((state)=>state["Home"]["content3"]);
const content3IoProps = useIoStore((state)=>state["Home"]["content3"]);
const content3Cb = usecontent3Cb()
const Content1Props = useStore((state)=>state["Home"]["Content1"]);
const Content1IoProps = useIoStore((state)=>state["Home"]["Content1"]);
const Content1Cb = useContent1Cb()
const content2Props = useStore((state)=>state["Home"]["content2"]);
const content2IoProps = useIoStore((state)=>state["Home"]["content2"]);
const content2Cb = usecontent2Cb()
const RightContentProps = useStore((state)=>state["Home"]["RightContent"]);
const RightContentIoProps = useIoStore((state)=>state["Home"]["RightContent"]);
const RightContentCb = useRightContentCb()
const InvertedCommaProps = useStore((state)=>state["Home"]["InvertedComma"]);
const InvertedCommaIoProps = useIoStore((state)=>state["Home"]["InvertedComma"]);
const InvertedCommaCb = useInvertedCommaCb()
const InfoProps = useStore((state)=>state["Home"]["Info"]);
const InfoIoProps = useIoStore((state)=>state["Home"]["Info"]);
const InfoCb = useInfoCb()
const PersonProps = useStore((state)=>state["Home"]["Person"]);
const PersonIoProps = useIoStore((state)=>state["Home"]["Person"]);
const PersonCb = usePersonCb()
const OuterMostFlex10Props = useStore((state)=>state["Home"]["OuterMostFlex10"]);
const OuterMostFlex10IoProps = useIoStore((state)=>state["Home"]["OuterMostFlex10"]);
const OuterMostFlex10Cb = useOuterMostFlex10Cb()
const InnerFlex10Props = useStore((state)=>state["Home"]["InnerFlex10"]);
const InnerFlex10IoProps = useIoStore((state)=>state["Home"]["InnerFlex10"]);
const InnerFlex10Cb = useInnerFlex10Cb()
const FAQFlexProps = useStore((state)=>state["Home"]["FAQFlex"]);
const FAQFlexIoProps = useIoStore((state)=>state["Home"]["FAQFlex"]);
const FAQFlexCb = useFAQFlexCb()
const QuestionFlexProps = useStore((state)=>state["Home"]["QuestionFlex"]);
const QuestionFlexIoProps = useIoStore((state)=>state["Home"]["QuestionFlex"]);
const QuestionFlexCb = useQuestionFlexCb()
const LeftQuestionsProps = useStore((state)=>state["Home"]["LeftQuestions"]);
const LeftQuestionsIoProps = useIoStore((state)=>state["Home"]["LeftQuestions"]);
const LeftQuestionsCb = useLeftQuestionsCb()
const Question1Props = useStore((state)=>state["Home"]["Question1"]);
const Question1IoProps = useIoStore((state)=>state["Home"]["Question1"]);
const Question1Cb = useQuestion1Cb()
const Question2Props = useStore((state)=>state["Home"]["Question2"]);
const Question2IoProps = useIoStore((state)=>state["Home"]["Question2"]);
const Question2Cb = useQuestion2Cb()
const Question4Props = useStore((state)=>state["Home"]["Question4"]);
const Question4IoProps = useIoStore((state)=>state["Home"]["Question4"]);
const Question4Cb = useQuestion4Cb()
const Question3Props = useStore((state)=>state["Home"]["Question3"]);
const Question3IoProps = useIoStore((state)=>state["Home"]["Question3"]);
const Question3Cb = useQuestion3Cb()
const RightQuestionsProps = useStore((state)=>state["Home"]["RightQuestions"]);
const RightQuestionsIoProps = useIoStore((state)=>state["Home"]["RightQuestions"]);
const RightQuestionsCb = useRightQuestionsCb()
const Question8Props = useStore((state)=>state["Home"]["Question8"]);
const Question8IoProps = useIoStore((state)=>state["Home"]["Question8"]);
const Question8Cb = useQuestion8Cb()
const Question7Props = useStore((state)=>state["Home"]["Question7"]);
const Question7IoProps = useIoStore((state)=>state["Home"]["Question7"]);
const Question7Cb = useQuestion7Cb()
const Question6Props = useStore((state)=>state["Home"]["Question6"]);
const Question6IoProps = useIoStore((state)=>state["Home"]["Question6"]);
const Question6Cb = useQuestion6Cb()
const Question5Props = useStore((state)=>state["Home"]["Question5"]);
const Question5IoProps = useIoStore((state)=>state["Home"]["Question5"]);
const Question5Cb = useQuestion5Cb()
const AddressFlexProps = useStore((state)=>state["Home"]["AddressFlex"]);
const AddressFlexIoProps = useIoStore((state)=>state["Home"]["AddressFlex"]);
const AddressFlexCb = useAddressFlexCb()
const ContentFlex2Props = useStore((state)=>state["Home"]["ContentFlex2"]);
const ContentFlex2IoProps = useIoStore((state)=>state["Home"]["ContentFlex2"]);
const ContentFlex2Cb = useContentFlex2Cb()
const AddressProps = useStore((state)=>state["Home"]["Address"]);
const AddressIoProps = useIoStore((state)=>state["Home"]["Address"]);
const AddressCb = useAddressCb()
const Address1Props = useStore((state)=>state["Home"]["Address1"]);
const Address1IoProps = useIoStore((state)=>state["Home"]["Address1"]);
const Address1Cb = useAddress1Cb()
const Flex244Props = useStore((state)=>state["Home"]["Flex244"]);
const Flex244IoProps = useIoStore((state)=>state["Home"]["Flex244"]);
const Flex244Cb = useFlex244Cb()
const Address2Props = useStore((state)=>state["Home"]["Address2"]);
const Address2IoProps = useIoStore((state)=>state["Home"]["Address2"]);
const Address2Cb = useAddress2Cb()
const Column1Props = useStore((state)=>state["Home"]["Column1"]);
const Column1IoProps = useIoStore((state)=>state["Home"]["Column1"]);
const Column1Cb = useColumn1Cb()
const Column2Props = useStore((state)=>state["Home"]["Column2"]);
const Column2IoProps = useIoStore((state)=>state["Home"]["Column2"]);
const Column2Cb = useColumn2Cb()
const Column3Props = useStore((state)=>state["Home"]["Column3"]);
const Column3IoProps = useIoStore((state)=>state["Home"]["Column3"]);
const Column3Cb = useColumn3Cb()
const FooterFlexProps = useStore((state)=>state["Home"]["FooterFlex"]);
const FooterFlexIoProps = useIoStore((state)=>state["Home"]["FooterFlex"]);
const FooterFlexCb = useFooterFlexCb()
const About3Props = useStore((state)=>state["Home"]["About3"]);
const About3IoProps = useIoStore((state)=>state["Home"]["About3"]);
const About3Cb = useAbout3Cb()
const About2Props = useStore((state)=>state["Home"]["About2"]);
const About2IoProps = useIoStore((state)=>state["Home"]["About2"]);
const About2Cb = useAbout2Cb()
const About4Props = useStore((state)=>state["Home"]["About4"]);
const About4IoProps = useIoStore((state)=>state["Home"]["About4"]);
const About4Cb = useAbout4Cb()
const About5Props = useStore((state)=>state["Home"]["About5"]);
const About5IoProps = useIoStore((state)=>state["Home"]["About5"]);
const About5Cb = useAbout5Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const DownloadCVProps = useStore((state)=>state["Home"]["DownloadCV"]);
const DownloadCVIoProps = useIoStore((state)=>state["Home"]["DownloadCV"]);
const DownloadCVCb = useDownloadCVCb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const ProfileImageProps = useStore((state)=>state["Home"]["ProfileImage"]);
const ProfileImageIoProps = useIoStore((state)=>state["Home"]["ProfileImage"]);
const ProfileImageCb = useProfileImageCb()
const TrustedByProps = useStore((state)=>state["Home"]["TrustedBy"]);
const TrustedByIoProps = useIoStore((state)=>state["Home"]["TrustedBy"]);
const TrustedByCb = useTrustedByCb()
const logo3Props = useStore((state)=>state["Home"]["logo3"]);
const logo3IoProps = useIoStore((state)=>state["Home"]["logo3"]);
const logo3Cb = uselogo3Cb()
const logo1Props = useStore((state)=>state["Home"]["logo1"]);
const logo1IoProps = useIoStore((state)=>state["Home"]["logo1"]);
const logo1Cb = uselogo1Cb()
const logo2Props = useStore((state)=>state["Home"]["logo2"]);
const logo2IoProps = useIoStore((state)=>state["Home"]["logo2"]);
const logo2Cb = uselogo2Cb()
const logo4Props = useStore((state)=>state["Home"]["logo4"]);
const logo4IoProps = useIoStore((state)=>state["Home"]["logo4"]);
const logo4Cb = uselogo4Cb()
const MainLogoProps = useStore((state)=>state["Home"]["MainLogo"]);
const MainLogoIoProps = useIoStore((state)=>state["Home"]["MainLogo"]);
const MainLogoCb = useMainLogoCb()
const BlogNavProps = useStore((state)=>state["Home"]["BlogNav"]);
const BlogNavIoProps = useIoStore((state)=>state["Home"]["BlogNav"]);
const BlogNavCb = useBlogNavCb()
const AboutNavProps = useStore((state)=>state["Home"]["AboutNav"]);
const AboutNavIoProps = useIoStore((state)=>state["Home"]["AboutNav"]);
const AboutNavCb = useAboutNavCb()
const ServiceNavProps = useStore((state)=>state["Home"]["ServiceNav"]);
const ServiceNavIoProps = useIoStore((state)=>state["Home"]["ServiceNav"]);
const ServiceNavCb = useServiceNavCb()
const ProjectNavProps = useStore((state)=>state["Home"]["ProjectNav"]);
const ProjectNavIoProps = useIoStore((state)=>state["Home"]["ProjectNav"]);
const ProjectNavCb = useProjectNavCb()
const BookCallNavProps = useStore((state)=>state["Home"]["BookCallNav"]);
const BookCallNavIoProps = useIoStore((state)=>state["Home"]["BookCallNav"]);
const BookCallNavCb = useBookCallNavCb()
const ServicesProps = useStore((state)=>state["Home"]["Services"]);
const ServicesIoProps = useIoStore((state)=>state["Home"]["Services"]);
const ServicesCb = useServicesCb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox137Props = useStore((state)=>state["Home"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["Home"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const ImageProps = useStore((state)=>state["Home"]["Image"]);
const ImageIoProps = useIoStore((state)=>state["Home"]["Image"]);
const ImageCb = useImageCb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox147Props = useStore((state)=>state["Home"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Home"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox148Props = useStore((state)=>state["Home"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Home"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const TextBox149Props = useStore((state)=>state["Home"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Home"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["Home"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["Home"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox248Props = useStore((state)=>state["Home"]["TextBox248"]);
const TextBox248IoProps = useIoStore((state)=>state["Home"]["TextBox248"]);
const TextBox248Cb = useTextBox248Cb()
const TextBox249Props = useStore((state)=>state["Home"]["TextBox249"]);
const TextBox249IoProps = useIoStore((state)=>state["Home"]["TextBox249"]);
const TextBox249Cb = useTextBox249Cb()
const TextBox250Props = useStore((state)=>state["Home"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["Home"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()
const TextBox251Props = useStore((state)=>state["Home"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["Home"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const TextBox252Props = useStore((state)=>state["Home"]["TextBox252"]);
const TextBox252IoProps = useIoStore((state)=>state["Home"]["TextBox252"]);
const TextBox252Cb = useTextBox252Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const TextBox183Props = useStore((state)=>state["Home"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["Home"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox184Props = useStore((state)=>state["Home"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["Home"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const TextBox185Props = useStore((state)=>state["Home"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["Home"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const TextBox186Props = useStore((state)=>state["Home"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["Home"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const TextBox187Props = useStore((state)=>state["Home"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["Home"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox182Props = useStore((state)=>state["Home"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["Home"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox163Props = useStore((state)=>state["Home"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Home"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const TextBox153Props = useStore((state)=>state["Home"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["Home"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const TextBox154Props = useStore((state)=>state["Home"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["Home"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox164Props = useStore((state)=>state["Home"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["Home"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox155Props = useStore((state)=>state["Home"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Home"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox156Props = useStore((state)=>state["Home"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Home"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox165Props = useStore((state)=>state["Home"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["Home"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox157Props = useStore((state)=>state["Home"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Home"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["Home"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Home"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox166Props = useStore((state)=>state["Home"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Home"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox159Props = useStore((state)=>state["Home"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Home"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox160Props = useStore((state)=>state["Home"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Home"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox177Props = useStore((state)=>state["Home"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Home"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const TextBox178Props = useStore((state)=>state["Home"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["Home"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox181Props = useStore((state)=>state["Home"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Home"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox199Props = useStore((state)=>state["Home"]["TextBox199"]);
const TextBox199IoProps = useIoStore((state)=>state["Home"]["TextBox199"]);
const TextBox199Cb = useTextBox199Cb()
const TextBox200Props = useStore((state)=>state["Home"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["Home"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["Home"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Home"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox202Props = useStore((state)=>state["Home"]["TextBox202"]);
const TextBox202IoProps = useIoStore((state)=>state["Home"]["TextBox202"]);
const TextBox202Cb = useTextBox202Cb()
const TextBox203Props = useStore((state)=>state["Home"]["TextBox203"]);
const TextBox203IoProps = useIoStore((state)=>state["Home"]["TextBox203"]);
const TextBox203Cb = useTextBox203Cb()
const TextBox204Props = useStore((state)=>state["Home"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["Home"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const TextBox205Props = useStore((state)=>state["Home"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["Home"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const TextBox206Props = useStore((state)=>state["Home"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["Home"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const TextBox207Props = useStore((state)=>state["Home"]["TextBox207"]);
const TextBox207IoProps = useIoStore((state)=>state["Home"]["TextBox207"]);
const TextBox207Cb = useTextBox207Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox208Props = useStore((state)=>state["Home"]["TextBox208"]);
const TextBox208IoProps = useIoStore((state)=>state["Home"]["TextBox208"]);
const TextBox208Cb = useTextBox208Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox188Props = useStore((state)=>state["Home"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["Home"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["Home"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["Home"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const TextBox191Props = useStore((state)=>state["Home"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Home"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox192Props = useStore((state)=>state["Home"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["Home"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox193Props = useStore((state)=>state["Home"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["Home"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const TextBox194Props = useStore((state)=>state["Home"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["Home"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const TextBox195Props = useStore((state)=>state["Home"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["Home"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const TextBox196Props = useStore((state)=>state["Home"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["Home"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const TextBox197Props = useStore((state)=>state["Home"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["Home"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const TextBox198Props = useStore((state)=>state["Home"]["TextBox198"]);
const TextBox198IoProps = useIoStore((state)=>state["Home"]["TextBox198"]);
const TextBox198Cb = useTextBox198Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox210Props = useStore((state)=>state["Home"]["TextBox210"]);
const TextBox210IoProps = useIoStore((state)=>state["Home"]["TextBox210"]);
const TextBox210Cb = useTextBox210Cb()
const TextBox209Props = useStore((state)=>state["Home"]["TextBox209"]);
const TextBox209IoProps = useIoStore((state)=>state["Home"]["TextBox209"]);
const TextBox209Cb = useTextBox209Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox211Props = useStore((state)=>state["Home"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["Home"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const TextBox212Props = useStore((state)=>state["Home"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["Home"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const TextBox213Props = useStore((state)=>state["Home"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Home"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const TextBox214Props = useStore((state)=>state["Home"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Home"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const TextBox215Props = useStore((state)=>state["Home"]["TextBox215"]);
const TextBox215IoProps = useIoStore((state)=>state["Home"]["TextBox215"]);
const TextBox215Cb = useTextBox215Cb()
const TextBox216Props = useStore((state)=>state["Home"]["TextBox216"]);
const TextBox216IoProps = useIoStore((state)=>state["Home"]["TextBox216"]);
const TextBox216Cb = useTextBox216Cb()
const TextBox217Props = useStore((state)=>state["Home"]["TextBox217"]);
const TextBox217IoProps = useIoStore((state)=>state["Home"]["TextBox217"]);
const TextBox217Cb = useTextBox217Cb()
const TextBox218Props = useStore((state)=>state["Home"]["TextBox218"]);
const TextBox218IoProps = useIoStore((state)=>state["Home"]["TextBox218"]);
const TextBox218Cb = useTextBox218Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox240Props = useStore((state)=>state["Home"]["TextBox240"]);
const TextBox240IoProps = useIoStore((state)=>state["Home"]["TextBox240"]);
const TextBox240Cb = useTextBox240Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox241Props = useStore((state)=>state["Home"]["TextBox241"]);
const TextBox241IoProps = useIoStore((state)=>state["Home"]["TextBox241"]);
const TextBox241Cb = useTextBox241Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox242Props = useStore((state)=>state["Home"]["TextBox242"]);
const TextBox242IoProps = useIoStore((state)=>state["Home"]["TextBox242"]);
const TextBox242Cb = useTextBox242Cb()
const TextBox247Props = useStore((state)=>state["Home"]["TextBox247"]);
const TextBox247IoProps = useIoStore((state)=>state["Home"]["TextBox247"]);
const TextBox247Cb = useTextBox247Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox243Props = useStore((state)=>state["Home"]["TextBox243"]);
const TextBox243IoProps = useIoStore((state)=>state["Home"]["TextBox243"]);
const TextBox243Cb = useTextBox243Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox244Props = useStore((state)=>state["Home"]["TextBox244"]);
const TextBox244IoProps = useIoStore((state)=>state["Home"]["TextBox244"]);
const TextBox244Cb = useTextBox244Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const TextBox245Props = useStore((state)=>state["Home"]["TextBox245"]);
const TextBox245IoProps = useIoStore((state)=>state["Home"]["TextBox245"]);
const TextBox245Cb = useTextBox245Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox246Props = useStore((state)=>state["Home"]["TextBox246"]);
const TextBox246IoProps = useIoStore((state)=>state["Home"]["TextBox246"]);
const TextBox246Cb = useTextBox246Cb()
const TextBox253Props = useStore((state)=>state["Home"]["TextBox253"]);
const TextBox253IoProps = useIoStore((state)=>state["Home"]["TextBox253"]);
const TextBox253Cb = useTextBox253Cb()
const TextBox254Props = useStore((state)=>state["Home"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["Home"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const TextBox255Props = useStore((state)=>state["Home"]["TextBox255"]);
const TextBox255IoProps = useIoStore((state)=>state["Home"]["TextBox255"]);
const TextBox255Cb = useTextBox255Cb()
const TextBox256Props = useStore((state)=>state["Home"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["Home"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const TextBox257Props = useStore((state)=>state["Home"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["Home"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const TextBox258Props = useStore((state)=>state["Home"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["Home"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const TextBox259Props = useStore((state)=>state["Home"]["TextBox259"]);
const TextBox259IoProps = useIoStore((state)=>state["Home"]["TextBox259"]);
const TextBox259Cb = useTextBox259Cb()
const TextBox261Props = useStore((state)=>state["Home"]["TextBox261"]);
const TextBox261IoProps = useIoStore((state)=>state["Home"]["TextBox261"]);
const TextBox261Cb = useTextBox261Cb()
const TextBox262Props = useStore((state)=>state["Home"]["TextBox262"]);
const TextBox262IoProps = useIoStore((state)=>state["Home"]["TextBox262"]);
const TextBox262Cb = useTextBox262Cb()
const TextBox263Props = useStore((state)=>state["Home"]["TextBox263"]);
const TextBox263IoProps = useIoStore((state)=>state["Home"]["TextBox263"]);
const TextBox263Cb = useTextBox263Cb()
const TextBox264Props = useStore((state)=>state["Home"]["TextBox264"]);
const TextBox264IoProps = useIoStore((state)=>state["Home"]["TextBox264"]);
const TextBox264Cb = useTextBox264Cb()
const TextBox265Props = useStore((state)=>state["Home"]["TextBox265"]);
const TextBox265IoProps = useIoStore((state)=>state["Home"]["TextBox265"]);
const TextBox265Cb = useTextBox265Cb()
const TextBox266Props = useStore((state)=>state["Home"]["TextBox266"]);
const TextBox266IoProps = useIoStore((state)=>state["Home"]["TextBox266"]);
const TextBox266Cb = useTextBox266Cb()
const TextBox267Props = useStore((state)=>state["Home"]["TextBox267"]);
const TextBox267IoProps = useIoStore((state)=>state["Home"]["TextBox267"]);
const TextBox267Cb = useTextBox267Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const TextBox268Props = useStore((state)=>state["Home"]["TextBox268"]);
const TextBox268IoProps = useIoStore((state)=>state["Home"]["TextBox268"]);
const TextBox268Cb = useTextBox268Cb()

  return (<>
  <Flex className="p-Home OuterMostFlex1 bpt" {...OuterMostFlex1Props} {...OuterMostFlex1Cb} {...OuterMostFlex1IoProps}>
<Flex className="p-Home InnerFlex1 bpt" {...InnerFlex1Props} {...InnerFlex1Cb} {...InnerFlex1IoProps}>
<Flex className="p-Home MainLogoFlex bpt" {...MainLogoFlexProps} {...MainLogoFlexCb} {...MainLogoFlexIoProps}>
<TextBox className="p-Home MainLogo bpt" {...MainLogoProps} {...MainLogoCb} {...MainLogoIoProps}/>
</Flex>
<Flex className="p-Home NavigationFlex bpt" {...NavigationFlexProps} {...NavigationFlexCb} {...NavigationFlexIoProps}>
<TextBox className="p-Home AboutNav bpt" {...AboutNavProps} {...AboutNavCb} {...AboutNavIoProps}/>
<TextBox className="p-Home ServiceNav bpt" {...ServiceNavProps} {...ServiceNavCb} {...ServiceNavIoProps}/>
<TextBox className="p-Home ProjectNav bpt" {...ProjectNavProps} {...ProjectNavCb} {...ProjectNavIoProps}/>
<TextBox className="p-Home BlogNav bpt" {...BlogNavProps} {...BlogNavCb} {...BlogNavIoProps}/>
<Flex className="p-Home SubNavigation bpt" {...SubNavigationProps} {...SubNavigationCb} {...SubNavigationIoProps}>
<TextBox className="p-Home BookCallNav bpt" {...BookCallNavProps} {...BookCallNavCb} {...BookCallNavIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home OuterMostFlex2 bpt" {...OuterMostFlex2Props} {...OuterMostFlex2Cb} {...OuterMostFlex2IoProps}>
<Flex className="p-Home InnerFlex2 bpt" {...InnerFlex2Props} {...InnerFlex2Cb} {...InnerFlex2IoProps}>
<Flex className="p-Home AboutContentFlex bpt" {...AboutContentFlexProps} {...AboutContentFlexCb} {...AboutContentFlexIoProps}>
<Flex className="p-Home AboutContent bpt" {...AboutContentProps} {...AboutContentCb} {...AboutContentIoProps}>
<Flex className="p-Home About1 bpt" {...About1Props} {...About1Cb} {...About1IoProps}>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
</Flex>
<TextBox className="p-Home About2 bpt" {...About2Props} {...About2Cb} {...About2IoProps}/>
<TextBox className="p-Home About3 bpt" {...About3Props} {...About3Cb} {...About3IoProps}/>
<TextBox className="p-Home About4 bpt" {...About4Props} {...About4Cb} {...About4IoProps}/>
<TextBox className="p-Home About5 bpt" {...About5Props} {...About5Cb} {...About5IoProps}/>
<Flex className="p-Home About6 bpt" {...About6Props} {...About6Cb} {...About6IoProps}>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<TextBox className="p-Home DownloadCV bpt" {...DownloadCVProps} {...DownloadCVCb} {...DownloadCVIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home MyImageFlex bpt" {...MyImageFlexProps} {...MyImageFlexCb} {...MyImageFlexIoProps}>
<Image className="p-Home ProfileImage bpt" {...ProfileImageProps} {...ProfileImageCb} {...ProfileImageIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home OuterMostFlex3 bpt" {...OuterMostFlex3Props} {...OuterMostFlex3Cb} {...OuterMostFlex3IoProps}>
<Flex className="p-Home InnerFlex3 bpt" {...InnerFlex3Props} {...InnerFlex3Cb} {...InnerFlex3IoProps}>
<TextBox className="p-Home TrustedBy bpt" {...TrustedByProps} {...TrustedByCb} {...TrustedByIoProps}/>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Image className="p-Home logo1 bpt" {...logo1Props} {...logo1Cb} {...logo1IoProps}/>
<Image className="p-Home logo2 bpt" {...logo2Props} {...logo2Cb} {...logo2IoProps}/>
<Image className="p-Home logo3 bpt" {...logo3Props} {...logo3Cb} {...logo3IoProps}/>
<Image className="p-Home logo4 bpt" {...logo4Props} {...logo4Cb} {...logo4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home OuterMostFlex4 bpt" {...OuterMostFlex4Props} {...OuterMostFlex4Cb} {...OuterMostFlex4IoProps}>
<Flex className="p-Home InnerFlex4 bpt" {...InnerFlex4Props} {...InnerFlex4Cb} {...InnerFlex4IoProps}>
<TextBox className="p-Home Services bpt" {...ServicesProps} {...ServicesCb} {...ServicesIoProps}/>
<Flex className="p-Home ServiceFlex1 bpt" {...ServiceFlex1Props} {...ServiceFlex1Cb} {...ServiceFlex1IoProps}>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex>
<Flex className="p-Home ServiceFlex2 bpt" {...ServiceFlex2Props} {...ServiceFlex2Cb} {...ServiceFlex2IoProps}>
<Flex className="p-Home Service bpt" {...ServiceProps} {...ServiceCb} {...ServiceIoProps}>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Flex>
<Flex className="p-Home Service2 bpt" {...Service2Props} {...Service2Cb} {...Service2IoProps}>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
</Flex>
<Flex className="p-Home Service3 bpt" {...Service3Props} {...Service3Cb} {...Service3IoProps}>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home OuterMostFlex5 bpt" {...OuterMostFlex5Props} {...OuterMostFlex5Cb} {...OuterMostFlex5IoProps}>
<Flex className="p-Home InnerFlex5 bpt" {...InnerFlex5Props} {...InnerFlex5Cb} {...InnerFlex5IoProps}>
<Flex className="p-Home ProjectFlex bpt" {...ProjectFlexProps} {...ProjectFlexCb} {...ProjectFlexIoProps}>
<Flex className="p-Home ProjectFlex1 bpt" {...ProjectFlex1Props} {...ProjectFlex1Cb} {...ProjectFlex1IoProps}>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
</Flex>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home ProjectFlex2 bpt" {...ProjectFlex2Props} {...ProjectFlex2Cb} {...ProjectFlex2IoProps}>
<Flex className="p-Home Project2 bpt" {...Project2Props} {...Project2Cb} {...Project2IoProps}>
<Flex className="p-Home ProjectImage2 bpt" {...ProjectImage2Props} {...ProjectImage2Cb} {...ProjectImage2IoProps}>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Flex>
<Flex className="p-Home ProjectInfo2 bpt" {...ProjectInfo2Props} {...ProjectInfo2Cb} {...ProjectInfo2IoProps}>
<TextBox className="p-Home TextBox250 bpt" {...TextBox250Props} {...TextBox250Cb} {...TextBox250IoProps}/>
<TextBox className="p-Home TextBox251 bpt" {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
<TextBox className="p-Home TextBox248 bpt" {...TextBox248Props} {...TextBox248Cb} {...TextBox248IoProps}/>
<TextBox className="p-Home TextBox252 bpt" {...TextBox252Props} {...TextBox252Cb} {...TextBox252IoProps}/>
<TextBox className="p-Home TextBox249 bpt" {...TextBox249Props} {...TextBox249Cb} {...TextBox249IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Project4 bpt" {...Project4Props} {...Project4Cb} {...Project4IoProps}>
<Flex className="p-Home ProjectImage4 bpt" {...ProjectImage4Props} {...ProjectImage4Cb} {...ProjectImage4IoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
</Flex>
<Flex className="p-Home ProjectInfo4 bpt" {...ProjectInfo4Props} {...ProjectInfo4Cb} {...ProjectInfo4IoProps}>
<TextBox className="p-Home TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox className="p-Home TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
<TextBox className="p-Home TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
<TextBox className="p-Home TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Project1 bpt" {...Project1Props} {...Project1Cb} {...Project1IoProps}>
<Flex className="p-Home ProjectImage1 bpt" {...ProjectImage1Props} {...ProjectImage1Cb} {...ProjectImage1IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
</Flex>
<Flex className="p-Home ProjectInfo1 bpt" {...ProjectInfo1Props} {...ProjectInfo1Cb} {...ProjectInfo1IoProps}>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Project3 bpt" {...Project3Props} {...Project3Cb} {...Project3IoProps}>
<Flex className="p-Home ProjectImage3 bpt" {...ProjectImage3Props} {...ProjectImage3Cb} {...ProjectImage3IoProps}>
<Image className="p-Home Image bpt" {...ImageProps} {...ImageCb} {...ImageIoProps}/>
</Flex>
<Flex className="p-Home ProjectInfo3 bpt" {...ProjectInfo3Props} {...ProjectInfo3Cb} {...ProjectInfo3IoProps}>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<TextBox className="p-Home TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
<TextBox className="p-Home TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home OuterMostFlex6 bpt" {...OuterMostFlex6Props} {...OuterMostFlex6Cb} {...OuterMostFlex6IoProps}>
<Flex className="p-Home InnerFlex6 bpt" {...InnerFlex6Props} {...InnerFlex6Cb} {...InnerFlex6IoProps}>
<Flex className="p-Home BlogFlex1 bpt" {...BlogFlex1Props} {...BlogFlex1Cb} {...BlogFlex1IoProps}>
<TextBox className="p-Home TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
</Flex>
<Flex className="p-Home BlogFlex2 bpt" {...BlogFlex2Props} {...BlogFlex2Cb} {...BlogFlex2IoProps}>
<Flex className="p-Home LeftBlogs bpt" {...LeftBlogsProps} {...LeftBlogsCb} {...LeftBlogsIoProps}>
<TextBox className="p-Home TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<TextBox className="p-Home TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
</Flex>
<Flex className="p-Home RightBlogs bpt" {...RightBlogsProps} {...RightBlogsCb} {...RightBlogsIoProps}>
<Flex className="p-Home Blog1 bpt" {...Blog1Props} {...Blog1Cb} {...Blog1IoProps}>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<TextBox className="p-Home TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<TextBox className="p-Home TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox className="p-Home TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<TextBox className="p-Home TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
</Flex>
<Flex className="p-Home Blog2 bpt" {...Blog2Props} {...Blog2Cb} {...Blog2IoProps}>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<TextBox className="p-Home TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<TextBox className="p-Home TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<TextBox className="p-Home TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox className="p-Home TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
</Flex>
<Flex className="p-Home Blog3 bpt" {...Blog3Props} {...Blog3Cb} {...Blog3IoProps}>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox className="p-Home TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<TextBox className="p-Home TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<TextBox className="p-Home TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Flex>
<Flex className="p-Home Blog4 bpt" {...Blog4Props} {...Blog4Cb} {...Blog4IoProps}>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<TextBox className="p-Home TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<TextBox className="p-Home TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<TextBox className="p-Home TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex>
<Flex className="p-Home Blog5 bpt" {...Blog5Props} {...Blog5Cb} {...Blog5IoProps}>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<TextBox className="p-Home TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<TextBox className="p-Home TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<TextBox className="p-Home TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<TextBox className="p-Home TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home OuterMostFlex7 bpt" {...OuterMostFlex7Props} {...OuterMostFlex7Cb} {...OuterMostFlex7IoProps}>
<Flex className="p-Home InnerFlex7 bpt" {...InnerFlex7Props} {...InnerFlex7Cb} {...InnerFlex7IoProps}>
<Flex className="p-Home ContentFlex bpt" {...ContentFlexProps} {...ContentFlexCb} {...ContentFlexIoProps}>
<Flex className="p-Home LeftFlex bpt" {...LeftFlexProps} {...LeftFlexCb} {...LeftFlexIoProps}>
<TextBox className="p-Home TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<TextBox className="p-Home TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
</Flex>
<Flex className="p-Home RightFlex bpt" {...RightFlexProps} {...RightFlexCb} {...RightFlexIoProps}>
<TextBox className="p-Home TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<TextBox className="p-Home TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
<TextBox className="p-Home TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home ImageFlex bpt" {...ImageFlexProps} {...ImageFlexCb} {...ImageFlexIoProps}>
<Flex className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex>
<Flex className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex>
<Flex className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home OuterMostFlex8 bpt" {...OuterMostFlex8Props} {...OuterMostFlex8Cb} {...OuterMostFlex8IoProps}>
<Flex className="p-Home InnerFlex8 bpt" {...InnerFlex8Props} {...InnerFlex8Cb} {...InnerFlex8IoProps}>
<Flex className="p-Home EducationFlex bpt" {...EducationFlexProps} {...EducationFlexCb} {...EducationFlexIoProps}>
<Flex className="p-Home Education bpt" {...EducationProps} {...EducationCb} {...EducationIoProps}>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<Flex className="p-Home Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<TextBox className="p-Home TextBox208 bpt" {...TextBox208Props} {...TextBox208Cb} {...TextBox208IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Institute bpt" {...InstituteProps} {...InstituteCb} {...InstituteIoProps}>
<Flex className="p-Home Institute1 bpt" {...Institute1Props} {...Institute1Cb} {...Institute1IoProps}>
<Flex className="p-Home Flex173 bpt" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<TextBox className="p-Home TextBox205 bpt" {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
<TextBox className="p-Home TextBox206 bpt" {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
</Flex>
<Flex className="p-Home Flex174 bpt" {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<TextBox className="p-Home TextBox207 bpt" {...TextBox207Props} {...TextBox207Cb} {...TextBox207IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Institute2 bpt" {...Institute2Props} {...Institute2Cb} {...Institute2IoProps}>
<Flex className="p-Home Flex172 bpt" {...Flex172Props} {...Flex172Cb} {...Flex172IoProps}>
<TextBox className="p-Home TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
<TextBox className="p-Home TextBox203 bpt" {...TextBox203Props} {...TextBox203Cb} {...TextBox203IoProps}/>
</Flex>
<Flex className="p-Home Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<TextBox className="p-Home TextBox202 bpt" {...TextBox202Props} {...TextBox202Cb} {...TextBox202IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Institute3 bpt" {...Institute3Props} {...Institute3Cb} {...Institute3IoProps}>
<Flex className="p-Home Flex170 bpt" {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<TextBox className="p-Home TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
<TextBox className="p-Home TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
</Flex>
<Flex className="p-Home Flex169 bpt" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<TextBox className="p-Home TextBox199 bpt" {...TextBox199Props} {...TextBox199Cb} {...TextBox199IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home WorkExperianceFlex bpt" {...WorkExperianceFlexProps} {...WorkExperianceFlexCb} {...WorkExperianceFlexIoProps}>
<Flex className="p-Home WorkExperience bpt" {...WorkExperienceProps} {...WorkExperienceCb} {...WorkExperienceIoProps}>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<Flex className="p-Home Flex159 bpt" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<TextBox className="p-Home TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Domain bpt" {...DomainProps} {...DomainCb} {...DomainIoProps}>
<Flex className="p-Home Domain1 bpt" {...Domain1Props} {...Domain1Cb} {...Domain1IoProps}>
<Flex className="p-Home Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<TextBox className="p-Home TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<TextBox className="p-Home TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
</Flex>
<Flex className="p-Home Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<TextBox className="p-Home TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Domain2 bpt" {...Domain2Props} {...Domain2Cb} {...Domain2IoProps}>
<Flex className="p-Home Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<TextBox className="p-Home TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
<TextBox className="p-Home TextBox194 bpt" {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
</Flex>
<Flex className="p-Home Flex164 bpt" {...Flex164Props} {...Flex164Cb} {...Flex164IoProps}>
<TextBox className="p-Home TextBox195 bpt" {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Domain3 bpt" {...Domain3Props} {...Domain3Cb} {...Domain3IoProps}>
<Flex className="p-Home Flex166 bpt" {...Flex166Props} {...Flex166Cb} {...Flex166IoProps}>
<TextBox className="p-Home TextBox196 bpt" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
<TextBox className="p-Home TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
</Flex>
<Flex className="p-Home Flex167 bpt" {...Flex167Props} {...Flex167Cb} {...Flex167IoProps}>
<TextBox className="p-Home TextBox198 bpt" {...TextBox198Props} {...TextBox198Cb} {...TextBox198IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home OuterMostFlex9 bpt" {...OuterMostFlex9Props} {...OuterMostFlex9Cb} {...OuterMostFlex9IoProps}>
<Flex className="p-Home InnerFlex9 bpt" {...InnerFlex9Props} {...InnerFlex9Cb} {...InnerFlex9IoProps}>
<Flex className="p-Home LeftContent bpt" {...LeftContentProps} {...LeftContentCb} {...LeftContentIoProps}>
<Flex className="p-Home Content1 bpt" {...Content1Props} {...Content1Cb} {...Content1IoProps}>
<TextBox className="p-Home TextBox210 bpt" {...TextBox210Props} {...TextBox210Cb} {...TextBox210IoProps}/>
</Flex>
<Flex className="p-Home content2 bpt" {...content2Props} {...content2Cb} {...content2IoProps}>
<TextBox className="p-Home TextBox209 bpt" {...TextBox209Props} {...TextBox209Cb} {...TextBox209IoProps}/>
</Flex>
<Flex className="p-Home content3 bpt" {...content3Props} {...content3Cb} {...content3IoProps}>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home RightContent bpt" {...RightContentProps} {...RightContentCb} {...RightContentIoProps}>
<Flex className="p-Home InvertedComma bpt" {...InvertedCommaProps} {...InvertedCommaCb} {...InvertedCommaIoProps}>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
</Flex>
<Flex className="p-Home Info bpt" {...InfoProps} {...InfoCb} {...InfoIoProps}>
<TextBox className="p-Home TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
<TextBox className="p-Home TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
<TextBox className="p-Home TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
<TextBox className="p-Home TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
</Flex>
<Flex className="p-Home Person bpt" {...PersonProps} {...PersonCb} {...PersonIoProps}>
<TextBox className="p-Home TextBox215 bpt" {...TextBox215Props} {...TextBox215Cb} {...TextBox215IoProps}/>
<TextBox className="p-Home TextBox216 bpt" {...TextBox216Props} {...TextBox216Cb} {...TextBox216IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home OuterMostFlex10 bpt" {...OuterMostFlex10Props} {...OuterMostFlex10Cb} {...OuterMostFlex10IoProps}>
<Flex className="p-Home InnerFlex10 bpt" {...InnerFlex10Props} {...InnerFlex10Cb} {...InnerFlex10IoProps}>
<Flex className="p-Home FAQFlex bpt" {...FAQFlexProps} {...FAQFlexCb} {...FAQFlexIoProps}>
<TextBox className="p-Home TextBox218 bpt" {...TextBox218Props} {...TextBox218Cb} {...TextBox218IoProps}/>
<TextBox className="p-Home TextBox217 bpt" {...TextBox217Props} {...TextBox217Cb} {...TextBox217IoProps}/>
</Flex>
<Flex className="p-Home QuestionFlex bpt" {...QuestionFlexProps} {...QuestionFlexCb} {...QuestionFlexIoProps}>
<Flex className="p-Home LeftQuestions bpt" {...LeftQuestionsProps} {...LeftQuestionsCb} {...LeftQuestionsIoProps}>
<Flex className="p-Home Question1 bpt" {...Question1Props} {...Question1Cb} {...Question1IoProps}>
<TextBox className="p-Home TextBox240 bpt" {...TextBox240Props} {...TextBox240Cb} {...TextBox240IoProps}/>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex>
<Flex className="p-Home Question2 bpt" {...Question2Props} {...Question2Cb} {...Question2IoProps}>
<TextBox className="p-Home TextBox241 bpt" {...TextBox241Props} {...TextBox241Cb} {...TextBox241IoProps}/>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
</Flex>
<Flex className="p-Home Question3 bpt" {...Question3Props} {...Question3Cb} {...Question3IoProps}>
<TextBox className="p-Home TextBox247 bpt" {...TextBox247Props} {...TextBox247Cb} {...TextBox247IoProps}/>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
</Flex>
<Flex className="p-Home Question4 bpt" {...Question4Props} {...Question4Cb} {...Question4IoProps}>
<TextBox className="p-Home TextBox242 bpt" {...TextBox242Props} {...TextBox242Cb} {...TextBox242IoProps}/>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home RightQuestions bpt" {...RightQuestionsProps} {...RightQuestionsCb} {...RightQuestionsIoProps}>
<Flex className="p-Home Question5 bpt" {...Question5Props} {...Question5Cb} {...Question5IoProps}>
<TextBox className="p-Home TextBox246 bpt" {...TextBox246Props} {...TextBox246Cb} {...TextBox246IoProps}/>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
</Flex>
<Flex className="p-Home Question6 bpt" {...Question6Props} {...Question6Cb} {...Question6IoProps}>
<TextBox className="p-Home TextBox245 bpt" {...TextBox245Props} {...TextBox245Cb} {...TextBox245IoProps}/>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
</Flex>
<Flex className="p-Home Question7 bpt" {...Question7Props} {...Question7Cb} {...Question7IoProps}>
<TextBox className="p-Home TextBox244 bpt" {...TextBox244Props} {...TextBox244Cb} {...TextBox244IoProps}/>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
</Flex>
<Flex className="p-Home Question8 bpt" {...Question8Props} {...Question8Cb} {...Question8IoProps}>
<TextBox className="p-Home TextBox243 bpt" {...TextBox243Props} {...TextBox243Cb} {...TextBox243IoProps}/>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home AddressFlex bpt" {...AddressFlexProps} {...AddressFlexCb} {...AddressFlexIoProps}>
<Flex className="p-Home ContentFlex2 bpt" {...ContentFlex2Props} {...ContentFlex2Cb} {...ContentFlex2IoProps}>
<TextBox className="p-Home TextBox253 bpt" {...TextBox253Props} {...TextBox253Cb} {...TextBox253IoProps}/>
<TextBox className="p-Home TextBox254 bpt" {...TextBox254Props} {...TextBox254Cb} {...TextBox254IoProps}/>
</Flex>
<Flex className="p-Home Address bpt" {...AddressProps} {...AddressCb} {...AddressIoProps}>
<Flex className="p-Home Address1 bpt" {...Address1Props} {...Address1Cb} {...Address1IoProps}>
<TextBox className="p-Home TextBox255 bpt" {...TextBox255Props} {...TextBox255Cb} {...TextBox255IoProps}/>
<TextBox className="p-Home TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
<Flex className="p-Home Flex244 bpt" {...Flex244Props} {...Flex244Cb} {...Flex244IoProps}>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
<TextBox className="p-Home TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Address2 bpt" {...Address2Props} {...Address2Cb} {...Address2IoProps}>
<Flex className="p-Home Column1 bpt" {...Column1Props} {...Column1Cb} {...Column1IoProps}>
<TextBox className="p-Home TextBox258 bpt" {...TextBox258Props} {...TextBox258Cb} {...TextBox258IoProps}/>
<TextBox className="p-Home TextBox261 bpt" {...TextBox261Props} {...TextBox261Cb} {...TextBox261IoProps}/>
<TextBox className="p-Home TextBox259 bpt" {...TextBox259Props} {...TextBox259Cb} {...TextBox259IoProps}/>
</Flex>
<Flex className="p-Home Column2 bpt" {...Column2Props} {...Column2Cb} {...Column2IoProps}>
<TextBox className="p-Home TextBox264 bpt" {...TextBox264Props} {...TextBox264Cb} {...TextBox264IoProps}/>
<TextBox className="p-Home TextBox262 bpt" {...TextBox262Props} {...TextBox262Cb} {...TextBox262IoProps}/>
<TextBox className="p-Home TextBox263 bpt" {...TextBox263Props} {...TextBox263Cb} {...TextBox263IoProps}/>
</Flex>
<Flex className="p-Home Column3 bpt" {...Column3Props} {...Column3Cb} {...Column3IoProps}>
<TextBox className="p-Home TextBox267 bpt" {...TextBox267Props} {...TextBox267Cb} {...TextBox267IoProps}/>
<TextBox className="p-Home TextBox265 bpt" {...TextBox265Props} {...TextBox265Cb} {...TextBox265IoProps}/>
<TextBox className="p-Home TextBox266 bpt" {...TextBox266Props} {...TextBox266Cb} {...TextBox266IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FooterFlex bpt" {...FooterFlexProps} {...FooterFlexCb} {...FooterFlexIoProps}>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
<TextBox className="p-Home TextBox268 bpt" {...TextBox268Props} {...TextBox268Cb} {...TextBox268IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
