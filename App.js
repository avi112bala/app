import React, { Component, lazy, Suspense} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Loadable from 'react-loadable';
import { Router, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { history } from './store/helpers/history';
import { RouteWithLayout } from './layout/RouteWithLayout';
import AuthVerify from "./common/AuthVerify";
import axios from 'axios';
import HttpsRedirect from 'react-https-redirect';
import parseJwt from './store/helpers/common';
import My404Component from './components/My404Component';
// import LuckyOrange from './components/LuckyOrange';

//Admin-components
import AdminInnerLayout from './layout/AdminInnerLayout';
import CompleteEmptyLayout from './layout/xrgames/CompleteEmptyLayout';

// xrgames 
import XRInnerLayout from './layout/xrgames/XRInnerLayout';
import XRInnerLayoutWIthoutFooter from './layout/xrgames/XRInnerLayoutWIthoutFooter';
import XRProfileInnerLayout from './layout/xrgames/XRProfileInnerLayout';

import XRHomeLayout from './layout/xrgames/XRHomeLayout';


// import AdminHome from './admincomponents/AdminHome';
// import XRCommunication from './admincomponents/XRCommunication';
// import DomainSetting from './admincomponents/DomainSetting';
// import Fanhubhomepage from './admincomponents/Fanhubhomepage';
// import ActiveCenter from './admincomponents/ActiveCenter';
// import AdminUploadFile from './admincomponents/AdminUploadFile';
 
// import MintAnNft from './admincomponents/MintAnNft';
// // import WalletAddress from './admincomponents/WalletAddress';
// // import MintAnNft from './admincomponents/MintAnNft';
// // import WalletPasswordReEnter from './admincomponents/WalletPasswordReEnter';
// import AllNft from './admincomponents/AllNft';
// import AllChallenges from './admincomponents/AllChallenges';
// import HubCreateChallenge from './admincomponents/HubCreateChallenge';
// import ActvCreateChallenge from './admincomponents/ActvCreateChallenge';

// import ChallengeCreation from './admincomponents/ChallengeCreation';  // only html

// // import ChallengePreview from './admincomponents/ChallengePreview';
// // import ChallengePreview_back from './admincomponents/ChallengePreview_back';

// import PublishNft from './admincomponents/PublishNft';
// import AdminNFTDetail from './admincomponents/AdminNFTDetail';
// import Analyticsdemo from './analyticsComponents/Home';  
// // import AuthContextProvider from "./context/AuthContext";


// import JoinChallenge from './components/xrgames/JoinChallenge12';
// // import XRRegister from './components/xrgames/XRRegister';
// import XRRoleselection from './components/xrgames/XRRoleselection';
// import XRPersonalHub from './components/xrgames/XRPersonalHub';
// import XRWalletLogin from './components/xrgames/XRWalletLogin';
// import XRAuthentication from './components/xrgames/XRAuthentication';
// import Privacypolicy from './components/xrgames/Privacypolicy';
// import AdminWalletAccess from './components/xrgames/AdminWalletAccess';


// import XRInfluenecerRegister from './components/xrgames/XRInfluenecerRegister';
// import XRSignupForm from './components/xrgames/XRSignupForm';
// import Banneduser from './components/xrgames/Banneduser';
// import DeletedUser from './components/xrgames/DeletedUser';

// import RegisterChallenge from './components/xrgames/RegisterChallenge';
// import XRRegistering from './components/xrgames/XRRegistering';
// import XRRegisteringPay from './components/xrgames/XRRegisteringPay';
// import XRFreeParticipant from './components/xrgames/XRFreeParticipant';
// // import XRComments from './components/xrgames/XRComments';
// import XRPaidEntryParticipant from './components/xrgames/XRPaidEntryParticipant';
// import XRSubmitVideo from './components/xrgames/XRSubmitVideo';
// import CreateChallenge from './components/xrgames/CreateChallenge';
// import EditChallenge from './components/xrgames/EditChallenge';
// import CloneChallenge from './components/xrgames/CloneChallenge';

// import XRInfluencerPreview from './components/xrgames/XRInfluencerPreview';
// import XRBracketHostPreview from './components/xrgames/XRBracketHostPreview';
// import XRPayPal from './components/xrgames/XRPayPal';
// // import XRCoinPayment from './components/xrgames/XRCoinPayment';
// import XRDashboard from './components/xrgames/XRDashboard';
// import XRCreateChallenge from './components/xrgames/XRCreateChallenge';

// import XRChallengesHome1 from './components/xrgames/XRChallengesHome1';
// import XRAbout_Us from './components/xrgames/XRAbout_Us';
// import XRSinglepost from './components/xrgames/XRSinglepost';
// import XRProfile from './components/xrgames/XRProfile';
// import XREditProfile from './components/xrgames/XREditProfile';
// import XRInfEditProfile from './components/xrgames/XRInfEditProfile';
// import XRPlans from './components/xrgames/XRPlans';
// import XRPaymentConfirmation from './components/xrgames/XRPaymentConfirmation';

// import XRCheckout from './components/xrgames/XRCheckout';
// import XRcheckoutbackup from './components/xrgames/XRcheckoutbackup';
// import XRCheckout_test from './components/xrgames/XRCheckout_test';
// // import XRLogin from './components/xrgames/XRLogin';
// import XRChallenges from './components/xrgames/XRChallenges';
// import XRPreviousChallenges from './components/xrgames/XRPreviousChallenges';
// import XRDraftChallenges from './components/xrgames/XRDraftChallenges';

// // import XRCongratulations from './components/xrgames/XRCongratulations';
// import XRUpgradePlan from './components/xrgames/XRUpgradePlan';
// import XRCreateRewards from './components/xrgames/XRCreateRewards';
// import XRRedeemReward from './components/xrgames/XRRedeemReward';
// import ShareChallenge from './components/xrgames/ShareChallenge';
// import XRMyRewards from './components/xrgames/XRMyRewards';
// import XRMyblockedusers from './components/xrgames/XRMyblockedusers';
// import XREditReward from './components/xrgames/XREditReward';
// import XRWinnerRewards from './components/xrgames/XRWinnerRewards';
// import XRFaqs from './components/xrgames/XRFaqs';
// import XRHelpDesk from './components/xrgames/XRHelpDesk';
// import XRSupport from './components/xrgames/XRSupport';
// import XRPrivacyPolicy from './components/xrgames/XRPrivacyPolicy';
// // import XRCreateinfluenecer from './components/xrgames/XRCreateinfluenecer';
// // import XRCookiePolicy from './components/xrgames/XRCookiePolicy';
// import XRTermsAndConditions from './components/xrgames/XRTermsAndConditions';
// // import XRContact from './components/xrgames/XRContact';
// // import XRContactus from './components/xrgames/XRContactus';
// import XRForums from './components/xrgames/XRForums';
// // import XRAboutUs from './components/xrgames/XRAboutUs';
// import XRStartChallengenew from './components/xrgames/XRStartChallengenew';
// import XRStartChallengenew2 from './components/xrgames/XRStartChallengenew2';
// import XRChallengeSettings from './components/xrgames/XRChallengeSettings';
// import XRChallengeRewards from './components/xrgames/XRChallengeRewards';
// import XRChallengePreview from './components/xrgames/XRChallengePreview';
// import XRChallengeBegin from './components/xrgames/XRChallengeBegin';
// import XRJoinChallengeStart from './components/xrgames/XRJoinChallengeStart';
// import XRJoinChallengelistStart from './components/xrgames/XRJoinChallengelistStart';
// import XRJoinChallengeForm from './components/xrgames/XRJoinChallengeForm';
// import XRJoinChallengeShare from './components/xrgames/XRJoinChallengeShare';
// import XRUserProfile from './components/xrgames/XRUserProfile';
// import XRUserEditProfile from './components/xrgames/XRUserEditProfile';
// import XRChallengeMatch from './components/xrgames/XRChallengeMatch';
// import XRParticipant from './components/xrgames/XRParticipant';
// // import XRChallengesHome from './components/xrgames/XRChallengesHome';
// import ForgotPassword from './components/xrgames/XRForgotPassword';
// import ChangePassword from './components/xrgames/XRChangePassword';
// import XRWallet from './components/xrgames/XRWallet';
// import XRInfluencerCommunity from './components/xrgames/XRInfluencerCommunity';
// import XRCreatorQuestion from './components/xrgames/XRCreatorQuestion';
// // import UpdatePreferences from './components/xrgames/UpdatePreferences';
// import XRGoPro from './components/xrgames/XRGoPro';
// // import XRCommunityTerms from './components/xrgames/XRCommunityTerms';
// import XRHowTo from './components/xrgames/XRHowTo';
// import XRStartcropper from './components/xrgames/XRStartcropper';

// import WalletPage from './components/WalletPage';
// import XRPlusCollectibles from './components/XRPlusCollectibles';
// import XRPlusWalletActivities from './components/XRPlusWalletActivities';
// import XRPlusWalletActivitiesSetting from './components/XRPlusWalletActivitiesSetting';
// import XRPlusCreateWalletPassword from './components/XRPlusCreateWalletPassword';
// import XRPlusResetWalletPassword from './components/XRPlusResetWalletPassword';
// import XRPlusWalletMfaSetting from './components/XRPlusWalletMfaSetting';
// import Invitebulkusers from './components/xrgames/Invitebulkusers';


// import AddTournamentNew from './components/xrgames/AddTournamentNew';
// import AdminTournaments from './components/xrgames/AdminTournaments';
// import AllDraftTour from './components/xrgames/AllDraftTour';
// import ArchivedTournaments from './components/xrgames/ArchivedTournaments';
// import AdninLiveStream from './components/xrgames/AdninLiveStream';
// import AddEvent from './components/xrgames/AddEvent';
// import AdminAllEvents from './components/xrgames/AdminAllEvents';
// import AdminSupport from './components/xrgames/AdminSupport';
// import AdminSupportDetails from './components/xrgames/AdminSupportDetails';
// import AdminCustomerSupportHelp from './components/xrgames/AdminCustomerSupportHelp';


// import TourDynamicDataInfotips from './components/xrgames/TourDynamicDataInfotips';
// import AdminTournamentSeries from './components/xrgames/AdminTournamentSeries';
// import AdminAllTournamentSeries from './components/xrgames/AdminAllTournamentSeries';
// import AddPlatformVariant from './components/xrgames/AddPlatformVariant';
// import AdminDynamicGameMapsMods from './components/xrgames/AdminDynamicGameMapsMods';
// import AdminClientDetails from './components/xrgames/AdminClientDetails';
// import GamePlatformRelation from './components/xrgames/GamePlatformRelation';
// import AdminAllPages from './components/xrgames/AdminAllPages';
// import AdminPagesdata from './components/xrgames/AdminPagesdata';
// import AdminDynamicFooter from './components/xrgames/AdminDynamicFooter';
// import AdminDynamicCss from './components/xrgames/AdminDynamicCss';
// import AdminDynamicPlatformInfotips from './components/xrgames/AdminDynamicPlatformInfotips';
// import CustomMenus from './components/xrgames/CustomMenus';

// import AdminUserVideos from './components/xrgames/AdminUserVideos';
// import AdminVideos from './components/xrgames/AdminVideos';

// import AdminCustomMenus from './components/xrgames/AdminCustomMenus';
// import dcw_customSidebar from './components/xrgames/dcw_customSidebar';
// import AddExclusiveVideo from './components/xrgames/AddExclusiveVideo';
// import AddDynamicSubschools from './components/xrgames/AddDynamicSubschools';
// import CustomFeed from './components/xrgames/CustomFeed';
// // import AllFeeds from './components/xrgames/AllFeeds';
// import ChangeBanners from './components/xrgames/ChangeBanners';
// import ShopBanners from './components/xrgames/ShopBanners';
// import AddNews from './components/xrgames/AddNews';
// import AdminDynamiMetas from './components/xrgames/AdminDynamiMetas';
// import AdminSponsors from './components/xrgames/AdminSponsors';
// import NftShopBanner from './components/xrgames/NftShopBanner';
// import AdminProfile from './components/xrgames/AdminProfile';
// import AdminSocialEmbed from './components/xrgames/AdminSocialEmbed';

// import AdminPageSetting from './components/xrgames/AdminPageSetting';
// import AddSubAdmin from './components/xrgames/AddSubAdmin';
// import AllSubAdmin from './components/xrgames/AllSubAdmin';
// import AddTeam from './components/xrgames/AddTeam';
// import AdminAddUser from './components/xrgames/AdminAddUser';
// import LeaderSetting from './components/xrgames/LeaderSetting';
// import AddCommunities from './components/xrgames/AddCommunities';
// import AddCommunityLeader from './components/xrgames/AddCommunityLeader';
// import AllCommunities from './components/xrgames/AllCommunities';
// import AllCommunitiesLeaders from './components/xrgames/AllCommunitiesLeaders';
// import AdminCustomPermissions from './components/xrgames/AdminCustomPermissions';
// import AddPreferences from './components/xrgames/AddPreferences';
// import AdminTourBracket from './components/xrgames/AdminTourBracket';
// import AdminProductListing from './components/xrgames/AdminProductListing';
// import AddProduct from './components/xrgames/AddProduct';
// import AdminEditProduct from './components/xrgames/AdminEditProduct';
// import AddnewCategory from './components/xrgames/AddnewCategory';
// import AdminproductCategory from './components/xrgames/AdminproductCategory';
// import AddNewPlaylist from './components/xrgames/AddNewPlaylist';
// import AllPlaylistVideo from './components/xrgames/AllPlaylistVideo';
// import AdminCoupon from './components/xrgames/AdminCoupon';
// import AdminVariationGroupList from './components/xrgames/AdminVariationGroupList';
// import AdminVariationList from './components/xrgames/AdminVariationList';
// // import AdminVariationAdd from './components/xrgames/AdminVariationAdd';
// import ConnectExistingDomain from './admincomponents/ConnectExistingDomain';
// import AdminUpdateTournament from './components/xrgames/AdminUpdateTournament';
// import AdminCommunicationCredentials from './components/xrgames/AdminCommunicationCredentials';
// import AdminCloneTournament from './components/xrgames/AdminCloneTournament';
// import AdminSingleEvent from './components/xrgames/AdminSingleEvent';
// import AdminCloneEvent from './components/xrgames/AdminCloneEvent';
// import SingleUpdateTour from './components/xrgames/SingleUpdateTour';

// import AdminAllUsersTransactions from './components/xrgames/AdminAllUsersTransactions';
// import ArchivedOrders from './components/xrgames/ArchivedOrders';
// import ArchiveTransactions from './components/xrgames/ArchiveTransactions';
// import ArchiveTourTickets from './components/xrgames/ArchiveTourTickets';
// import ArchiveSupportTickets from './components/xrgames/ArchiveSupportTickets';
// import AdminBannedUsers from './components/xrgames/AdminBannedUsers';
// import AdminDeletedUsers from './components/xrgames/AdminDeletedUsers';
// import AllOrders from './components/xrgames/AllOrders';
// // import AllProducts from './components/xrgames/AllProducts';
// import AllTeams from './components/xrgames/AllTeams';
// import AllDeletedTeams from './components/xrgames/AllDeletedTeams';
// import AllUsers from './components/xrgames/AllUsers';
// import ActivityLog from './components/xrgames/ActivityLog';
// import MediaAnalytics from './components/xrgames/MediaAnalytics';

// import Transactions from './components/xrgames/Transactions';
// import AdminSinglegame from './components/xrgames/AdminSinglegame';
// import AdminAddTrending from './components/xrgames/AdminAddTrending';
// import AdminaddMedia from './admincomponents/AdminaddMedia';
// import AdminAddNewBlog from './admincomponents/AdminAddNewBlog';
// import AdminEditBlog from './admincomponents/AdminEditBlog';
// import AdminSponsorsBanner from './admincomponents/AdminSponsorsBanner';
// import FanHubProfile from './admincomponents/FanHubProfile';
// import AllClientDetails from './admincomponents/AllClientDetails';
// import AdminUpdateMedia from './admincomponents/AdminUpdateMedia';
// import freqAskedQuestions from './admincomponents/freqAskedQuestions';
// import CardCheckout from './components/CardCheckout';
// import AdminTourRoundRobinBrac from './admincomponents/AdminTourRoundRobinBrac';
// import AdminAllCommunities from './admincomponents/AdminAllCommunities';
// import AdminViewUser from './admincomponents/AdminViewUser';
// import AdminAddDynamicGame from './admincomponents/AdminAddDynamicGame';
// import AllInvitedFans from './components/xrgames/AllInvitedFans';
// import ImportedFansList from './admincomponents/ImportedFansList';


const XRRegister = Loadable({
  loader: () => import('./components/xrgames/XRRegister'),
  loading: Loading
});

// const AdminInnerLayout = Loadable({
//   loader: () => import('./layout/AdminInnerLayout'),
//   loading: Loading
// });
const AdminHome = Loadable({
  loader: () => import('./admincomponents/AdminHome'),
  loading: Loading
});

const FacebookPostComponent = Loadable({
  loader: () => import('./admincomponents/FacebookPostComponent'),
  loading: Loading
});

const XRCommunication = Loadable({
  loader: () => import('./admincomponents/XRCommunication'),
  loading: Loading
});
const DomainSetting = Loadable({
  loader: () => import('./admincomponents/DomainSetting'),
  loading: Loading
});
const Fanhubhomepage = Loadable({
  loader: () => import('./admincomponents/Fanhubhomepage'),
  loading: Loading
});
const AddHighlights = Loadable({
  loader: () => import('./admincomponents/AddHighlights'),
  loading: Loading
});
const ActiveCenter = Loadable({
  loader: () => import('./admincomponents/ActiveCenter'),
  loading: Loading
});
const AdminUploadFile = Loadable({
  loader: () => import('./admincomponents/AdminUploadFile'),
  loading: Loading
});
 
const MintAnNft = Loadable({
  loader: () => import('./admincomponents/MintAnNft'),
  loading: Loading
});
// const WalletAddress = Loadable({
//   loader: () => import('./admincomponents/WalletAddress'),
//   loading: Loading
// });
// const MintAnNft = Loadable({
//   loader: () => import('./admincomponents/MintAnNft'),
//   loading: Loading
// });
// const WalletPasswordReEnter = Loadable({
//   loader: () => import('./admincomponents/WalletPasswordReEnter'),
//   loading: Loading
// });
const AllNft = Loadable({
  loader: () => import('./admincomponents/AllNft'),
  loading: Loading
});
const AllChallenges = Loadable({
  loader: () => import('./admincomponents/AllChallenges'),
  loading: Loading
});
const HubCreateChallenge = Loadable({
  loader: () => import('./admincomponents/HubCreateChallenge'),
  loading: Loading
});
const ActvCreateChallenge = Loadable({
  loader: () => import('./admincomponents/ActvCreateChallenge'),
  loading: Loading
});

const ChallengeCreation = Loadable({
  loader: () => import('./admincomponents/ChallengeCreation'),
  loading: Loading
});  // only html

// const ChallengePreview = Loadable({
//   loader: () => import('./admincomponents/ChallengePreview'),
//   loading: Loading
// });
// const ChallengePreview_back = Loadable({
//   loader: () => import('./admincomponents/ChallengePreview_back'),
//   loading: Loading
// });


const PublishNft = Loadable({
  loader: () => import('./admincomponents/PublishNft'),
  loading: Loading
});
const AdminNFTDetail = Loadable({
  loader: () => import('./admincomponents/AdminNFTDetail'),
  loading: Loading
});
const Analyticsdemo = Loadable({
  loader: () => import('./analyticsComponents/Home'),
  loading: Loading
});  

const AnalyticsdemoGA4 = Loadable({
  loader: () => import('./analyticsComponents/HomeGA4'),
  loading: Loading
});  

// xrgames 
const JoinChallenge = Loadable({
  loader: () => import('./components/xrgames/JoinChallenge12'),
  loading: Loading
});
// const XRInnerLayout = Loadable({
//   loader: () => import('./layout/xrgames/XRInnerLayout'),
//   loading: Loading
// });
// const XRInnerLayoutWIthoutFooter = Loadable({
//   loader: () => import('./layout/xrgames/XRInnerLayoutWIthoutFooter'),
//   loading: Loading
// });
// const XRProfileInnerLayout = Loadable({
//   loader: () => import('./layout/xrgames/XRProfileInnerLayout'),
//   loading: Loading
// });

// const XRHomeLayout = Loadable({
//   loader: () => import('./layout/xrgames/XRHomeLayout'),
//   loading: Loading
// });
// const XRRegister = Loadable({
//   loader: () => import('./components/xrgames/XRRegister'),
//   loading: Loading
// });
const XRRoleselection = Loadable({
  loader: () => import('./components/xrgames/XRRoleselection'),
  loading: Loading
});
const XRPersonalHub = Loadable({
  loader: () => import('./components/xrgames/XRPersonalHub'),
  loading: Loading
});
const XRWalletLogin = Loadable({
  loader: () => import('./components/xrgames/XRWalletLogin'),
  loading: Loading
});
const XRAuthentication = Loadable({
  loader: () => import('./components/xrgames/XRAuthentication'),
  loading: Loading
});
const Privacypolicy = Loadable({
  loader: () => import('./components/xrgames/Privacypolicy'),
  loading: Loading
});
const AdminWalletAccess = Loadable({
  loader: () => import('./components/xrgames/AdminWalletAccess'),
  loading: Loading
});


const XRInfluenecerRegister = Loadable({
  loader: () => import('./components/xrgames/XRInfluenecerRegister'),
  loading: Loading
});
const XRSignupForm = Loadable({
  loader: () => import('./components/xrgames/XRSignupForm'),
  loading: Loading
});
const Banneduser = Loadable({
  loader: () => import('./components/xrgames/Banneduser'),
  loading: Loading
});
const DeletedUser = Loadable({
  loader: () => import('./components/xrgames/DeletedUser'),
  loading: Loading
});
// const CompleteEmptyLayout = Loadable({
//   loader: () => import('./layout/xrgames/CompleteEmptyLayout'),
//   loading: Loading
// });

const RegisterChallenge = Loadable({
  loader: () => import('./components/xrgames/RegisterChallenge'),
  loading: Loading
});
const XRRegistering = Loadable({
  loader: () => import('./components/xrgames/XRRegistering'),
  loading: Loading
});
const XRRegisteringPay = Loadable({
  loader: () => import('./components/xrgames/XRRegisteringPay'),
  loading: Loading
});
const XRFreeParticipant = Loadable({
  loader: () => import('./components/xrgames/XRFreeParticipant'),
  loading: Loading
});
// const XRComments = Loadable({
//   loader: () => import('./components/xrgames/XRComments'),
//   loading: Loading
// });
const XRPaidEntryParticipant = Loadable({
  loader: () => import('./components/xrgames/XRPaidEntryParticipant'),
  loading: Loading
});
const XRSubmitVideo = Loadable({
  loader: () => import('./components/xrgames/XRSubmitVideo'),
  loading: Loading
});

const CreateChallenge = Loadable({
  loader: () => import('./components/xrgames/CreateChallenge'),
  loading: Loading
});
const EditChallenge = Loadable({
  loader: () => import('./components/xrgames/EditChallenge'),
  loading: Loading
});
const CloneChallenge = Loadable({
  loader: () => import('./components/xrgames/CloneChallenge'),
  loading: Loading
});

const XRInfluencerPreview = Loadable({
  loader: () => import('./components/xrgames/XRInfluencerPreview'),
  loading: Loading
});
const XRBracketHostPreview = Loadable({
  loader: () => import('./components/xrgames/XRBracketHostPreview'),
  loading: Loading
});
const XRPayPal = Loadable({
  loader: () => import('./components/xrgames/XRPayPal'),
  loading: Loading
});
// const XRCoinPayment = Loadable({
//   loader: () => import('./components/xrgames/XRCoinPayment'),
//   loading: Loading
// });
const XRDashboard = Loadable({
  loader: () => import('./components/xrgames/XRDashboard'),
  loading: Loading
});
const XRCreateChallenge = Loadable({
  loader: () => import('./components/xrgames/XRCreateChallenge'),
  loading: Loading
});
// const HttpsRedirect = Loadable({
//   loader: () => import('react-https-redirect'),
//   loading: Loading
// });
// const parseJwt = Loadable({
//   loader: () => import('./store/helpers/common'),
//   loading: Loading
// });
// const My404Component = Loadable({
//   loader: () => import('./components/My404Component'),
//   loading: Loading
// });
// const LuckyOrange = Loadable({
//   loader: () => import('./components/LuckyOrange'),
//   loading: Loading
// });

// const axios = Loadable({
//   loader: () => import('axios'),
//   loading: Loading
// });

const XRChallengesHome1 = Loadable({
  loader: () => import('./components/xrgames/XRChallengesHome1'),
  loading: Loading
});
const XRAbout_Us = Loadable({
  loader: () => import('./components/xrgames/XRAbout_Us'),
  loading: Loading
});
const XRSinglepost = Loadable({
  loader: () => import('./components/xrgames/XRSinglepost'),
  loading: Loading
});
const XRProfile = Loadable({
  loader: () => import('./components/xrgames/XRProfile'),
  loading: Loading
});
const XREditProfile = Loadable({
  loader: () => import('./components/xrgames/XREditProfile'),
  loading: Loading
});
const XRInfEditProfile = Loadable({
  loader: () => import('./components/xrgames/XRInfEditProfile'),
  loading: Loading
});
const XRPlans = Loadable({
  loader: () => import('./components/xrgames/XRPlans'),
  loading: Loading
});



const XRMYPlans = Loadable({
  loader: () => import('./components/xrgames/XRMYPlans'),
  loading: Loading
});

const XRPaymentConfirmation = Loadable({
  loader: () => import('./components/xrgames/XRPaymentConfirmation'),
  loading: Loading
});

const XRCheckout = Loadable({
  loader: () => import('./components/xrgames/XRCheckout'),
  loading: Loading
});
const XRcheckoutbackup = Loadable({
  loader: () => import('./components/xrgames/XRcheckoutbackup'),
  loading: Loading
});
const XRCheckout_test = Loadable({
  loader: () => import('./components/xrgames/XRCheckout_test'),
  loading: Loading
});
const XRLogin = Loadable({
  loader: () => import('./components/xrgames/XRLogin'),
  loading: Loading
});
const XRChallenges = Loadable({
  loader: () => import('./components/xrgames/XRChallenges'),
  loading: Loading
});
const XRPreviousChallenges = Loadable({
  loader: () => import('./components/xrgames/XRPreviousChallenges'),
  loading: Loading
});
const XRDraftChallenges = Loadable({
  loader: () => import('./components/xrgames/XRDraftChallenges'),
  loading: Loading
});

// const XRCongratulations = Loadable({
//   loader: () => import('./components/xrgames/XRCongratulations'),
//   loading: Loading
// });
const XRUpgradePlan = Loadable({
  loader: () => import('./components/xrgames/XRUpgradePlan'),
  loading: Loading
});
const XRCreateRewards = Loadable({
  loader: () => import('./components/xrgames/XRCreateRewards'),
  loading: Loading
});
const XRRedeemReward = Loadable({
  loader: () => import('./components/xrgames/XRRedeemReward'),
  loading: Loading
});
const ShareChallenge = Loadable({
  loader: () => import('./components/xrgames/ShareChallenge'),
  loading: Loading
});
const XRMyRewards = Loadable({
  loader: () => import('./components/xrgames/XRMyRewards'),
  loading: Loading
});
const XRMyblockedusers = Loadable({
  loader: () => import('./components/xrgames/XRMyblockedusers'),
  loading: Loading
});
const XREditReward = Loadable({
  loader: () => import('./components/xrgames/XREditReward'),
  loading: Loading
});
const XRWinnerRewards = Loadable({
  loader: () => import('./components/xrgames/XRWinnerRewards'),
  loading: Loading
});
const XRFaqs = Loadable({
  loader: () => import('./components/xrgames/XRFaqs'),
  loading: Loading
});
const XRHelpDesk = Loadable({
  loader: () => import('./components/xrgames/XRHelpDesk'),
  loading: Loading
});
const XRSupport = Loadable({
  loader: () => import('./components/xrgames/XRSupport'),
  loading: Loading
});
const XRPrivacyPolicy = Loadable({
  loader: () => import('./components/xrgames/XRPrivacyPolicy'),
  loading: Loading
});
// const XRCreateinfluenecer = Loadable({
//   loader: () => import('./components/xrgames/XRCreateinfluenecer'),
//   loading: Loading
// });
// const XRCookiePolicy = Loadable({
//   loader: () => import('./components/xrgames/XRCookiePolicy'),
//   loading: Loading
// });
const XRTermsAndConditions = Loadable({
  loader: () => import('./components/xrgames/XRTermsAndConditions'),
  loading: Loading
});
const XRContact = Loadable({
  loader: () => import('./components/xrgames/XRContact'),
  loading: Loading
});
const XRContactus = Loadable({
  loader: () => import('./components/xrgames/XRContactus'),
  loading: Loading
});
const XRForums = Loadable({
  loader: () => import('./components/xrgames/XRForums'),
  loading: Loading
});
// const XRAboutUs = Loadable({
//   loader: () => import('./components/xrgames/XRAboutUs'),
//   loading: Loading
// });
const XRStartChallengenew = Loadable({
  loader: () => import('./components/xrgames/XRStartChallengenew'),
  loading: Loading
});
const XRStartChallengenew2 = Loadable({
  loader: () => import('./components/xrgames/XRStartChallengenew2'),
  loading: Loading
});
const XRChallengeSettings = Loadable({
  loader: () => import('./components/xrgames/XRChallengeSettings'),
  loading: Loading
});
const XRChallengeRewards = Loadable({
  loader: () => import('./components/xrgames/XRChallengeRewards'),
  loading: Loading
});
const XRChallengePreview = Loadable({
  loader: () => import('./components/xrgames/XRChallengePreview'),
  loading: Loading
});
const XRChallengeBegin = Loadable({
  loader: () => import('./components/xrgames/XRChallengeBegin'),
  loading: Loading
});
const XRJoinChallengeStart = Loadable({
  loader: () => import('./components/xrgames/XRJoinChallengeStart'),
  loading: Loading
});
const XRJoinChallengelistStart = Loadable({
  loader: () => import('./components/xrgames/XRJoinChallengelistStart'),
  loading: Loading
});
const XRJoinChallengeForm = Loadable({
  loader: () => import('./components/xrgames/XRJoinChallengeForm'),
  loading: Loading
});
const XRJoinChallengeShare = Loadable({
  loader: () => import('./components/xrgames/XRJoinChallengeShare'),
  loading: Loading
});
const XRUserProfile = Loadable({
  loader: () => import('./components/xrgames/XRUserProfile'),
  loading: Loading
});
const XRUserEditProfile = Loadable({
  loader: () => import('./components/xrgames/XRUserEditProfile'),
  loading: Loading
});
const XRChallengeMatch = Loadable({
  loader: () => import('./components/xrgames/XRChallengeMatch'),
  loading: Loading
});
const XRParticipant = Loadable({
  loader: () => import('./components/xrgames/XRParticipant'),
  loading: Loading
});
// const XRChallengesHome = Loadable({
//   loader: () => import('./components/xrgames/XRChallengesHome'),
//   loading: Loading
// });
const ForgotPassword = Loadable({
  loader: () => import('./components/xrgames/XRForgotPassword'),
  loading: Loading
});
const ChangePassword = Loadable({
  loader: () => import('./components/xrgames/XRChangePassword'),
  loading: Loading
});
const XRWallet = Loadable({
  loader: () => import('./components/xrgames/XRWallet'),
  loading: Loading
});
const XRInfluencerCommunity = Loadable({
  loader: () => import('./components/xrgames/XRInfluencerCommunity'),
  loading: Loading
});
const XRCreatorQuestion = Loadable({
  loader: () => import('./components/xrgames/XRCreatorQuestion'),
  loading: Loading
});
// const UpdatePreferences = Loadable({
//   loader: () => import('./components/xrgames/UpdatePreferences'),
//   loading: Loading
// });
const XRGoPro = Loadable({
  loader: () => import('./components/xrgames/XRGoPro'),
  loading: Loading
});
// const XRCommunityTerms = Loadable({
//   loader: () => import('./components/xrgames/XRCommunityTerms'),
//   loading: Loading
// });
const XRHowTo = Loadable({
  loader: () => import('./components/xrgames/XRHowTo'),
  loading: Loading
});
const XRStartcropper = Loadable({
  loader: () => import('./components/xrgames/XRStartcropper'),
  loading: Loading
});

const WalletPage = Loadable({
  loader: () => import('./components/WalletPage'),
  loading: Loading
});
const XRPlusCollectibles = Loadable({
  loader: () => import('./components/XRPlusCollectibles'),
  loading: Loading
});
const XRPlusWalletActivities = Loadable({
  loader: () => import('./components/XRPlusWalletActivities'),
  loading: Loading
});
const XRPlusWalletActivitiesSetting = Loadable({
  loader: () => import('./components/XRPlusWalletActivitiesSetting'),
  loading: Loading
});
const XRPlusCreateWalletPassword = Loadable({
  loader: () => import('./components/XRPlusCreateWalletPassword'),
  loading: Loading
});
const XRPlusResetWalletPassword = Loadable({
  loader: () => import('./components/XRPlusResetWalletPassword'),
  loading: Loading
});
const XRPlusWalletMfaSetting = Loadable({
  loader: () => import('./components/XRPlusWalletMfaSetting'),
  loading: Loading
});
const Invitebulkusers = Loadable({
  loader: () => import('./components/xrgames/Invitebulkusers'),
  loading: Loading
});



const AddTournamentNew = Loadable({
  loader: () => import('./components/xrgames/AddTournamentNew'),
  loading: Loading
});
const AdminTournaments = Loadable({
  loader: () => import('./components/xrgames/AdminTournaments'),
  loading: Loading
});
const AllDraftTour = Loadable({
  loader: () => import('./components/xrgames/AllDraftTour'),
  loading: Loading
});
const ArchivedTournaments = Loadable({
  loader: () => import('./components/xrgames/ArchivedTournaments'),
  loading: Loading
});
const AdninLiveStream = Loadable({
  loader: () => import('./components/xrgames/AdninLiveStream'),
  loading: Loading
});
const AddEvent = Loadable({
  loader: () => import('./components/xrgames/AddEvent'),
  loading: Loading
});
const AdminAllEvents = Loadable({
  loader: () => import('./components/xrgames/AdminAllEvents'),
  loading: Loading
});
const AdminSupport = Loadable({
  loader: () => import('./components/xrgames/AdminSupport'),
  loading: Loading
});
const AdminSupportDetails = Loadable({
  loader: () => import('./components/xrgames/AdminSupportDetails'),
  loading: Loading
});
const AdminCustomerSupportHelp = Loadable({
  loader: () => import('./components/xrgames/AdminCustomerSupportHelp'),
  loading: Loading
});



const TourDynamicDataInfotips = Loadable({
  loader: () => import('./components/xrgames/TourDynamicDataInfotips'),
  loading: Loading
});
const AdminTournamentSeries = Loadable({
  loader: () => import('./components/xrgames/AdminTournamentSeries'),
  loading: Loading
});
const AdminAllTournamentSeries = Loadable({
  loader: () => import('./components/xrgames/AdminAllTournamentSeries'),
  loading: Loading
});
const AddPlatformVariant = Loadable({
  loader: () => import('./components/xrgames/AddPlatformVariant'),
  loading: Loading
});
const AdminDynamicGameMapsMods = Loadable({
  loader: () => import('./components/xrgames/AdminDynamicGameMapsMods'),
  loading: Loading
});
const AdminClientDetails = Loadable({
  loader: () => import('./components/xrgames/AdminClientDetails'),
  loading: Loading
});
const GamePlatformRelation = Loadable({
  loader: () => import('./components/xrgames/GamePlatformRelation'),
  loading: Loading
});
const AdminAllPages = Loadable({
  loader: () => import('./components/xrgames/AdminAllPages'),
  loading: Loading
});

const AdminAllDeletedPages = Loadable({
  loader: () => import('./admincomponents/AdminAllDeletedPages'),
  loading: Loading
});

const AdminPagesdata = Loadable({
  loader: () => import('./components/xrgames/AdminPagesdata'),
  loading: Loading
});
const AdminDynamicFooter = Loadable({
  loader: () => import('./components/xrgames/AdminDynamicFooter'),
  loading: Loading
});
const AdminDynamicCss = Loadable({
  loader: () => import('./components/xrgames/AdminDynamicCss'),
  loading: Loading
});
const AdminDynamicPlatformInfotips = Loadable({
  loader: () => import('./components/xrgames/AdminDynamicPlatformInfotips'),
  loading: Loading
});
const CustomMenus = Loadable({
  loader: () => import('./components/xrgames/CustomMenus'),
  loading: Loading
});

const AdminUserVideos = Loadable({
  loader: () => import('./components/xrgames/AdminUserVideos'),
  loading: Loading
});
const AdminVideos = Loadable({
  loader: () => import('./components/xrgames/AdminVideos'),
  loading: Loading
});

const AdminCustomMenus = Loadable({
  loader: () => import('./components/xrgames/AdminCustomMenus'),
  loading: Loading
});
const dcw_customSidebar = Loadable({
  loader: () => import('./components/xrgames/dcw_customSidebar'),
  loading: Loading
});
const AddExclusiveVideo = Loadable({
  loader: () => import('./components/xrgames/AddExclusiveVideo'),
  loading: Loading
});
const AddDynamicSubschools = Loadable({
  loader: () => import('./components/xrgames/AddDynamicSubschools'),
  loading: Loading
});
const CustomFeed = Loadable({
  loader: () => import('./components/xrgames/CustomFeed'),
  loading: Loading
});
const SingleFeed = Loadable({
  loader: () => import('./components/xrgames/SingleFeed'),
  loading: Loading
});

// const AllFeeds = Loadable({
//   loader: () => import('./components/xrgames/AllFeeds'),
//   loading: Loading
// });
const ChangeBanners = Loadable({
  loader: () => import('./components/xrgames/ChangeBanners'),
  loading: Loading
});
const ShopBanners = Loadable({
  loader: () => import('./components/xrgames/ShopBanners'),
  loading: Loading
});
const AddNews = Loadable({
  loader: () => import('./components/xrgames/AddNews'),
  loading: Loading
});
const AdminDynamiMetas = Loadable({
  loader: () => import('./components/xrgames/AdminDynamiMetas'),
  loading: Loading
});
const AdminSponsors = Loadable({
  loader: () => import('./components/xrgames/AdminSponsors'),
  loading: Loading
});
const NftShopBanner = Loadable({
  loader: () => import('./components/xrgames/NftShopBanner'),
  loading: Loading
});
const AdminProfile = Loadable({
  loader: () => import('./components/xrgames/AdminProfile'),
  loading: Loading
});
const AdminSocialEmbed = Loadable({
  loader: () => import('./components/xrgames/AdminSocialEmbed'),
  loading: Loading
});

const AdminPageSetting = Loadable({
  loader: () => import('./components/xrgames/AdminPageSetting'),
  loading: Loading
});
const AddSubAdmin = Loadable({
  loader: () => import('./components/xrgames/AddSubAdmin'),
  loading: Loading
});
const AllSubAdmin = Loadable({
  loader: () => import('./components/xrgames/AllSubAdmin'),
  loading: Loading
});
const AddTeam = Loadable({
  loader: () => import('./components/xrgames/AddTeam'),
  loading: Loading
});
const AdminAddUser = Loadable({
  loader: () => import('./components/xrgames/AdminAddUser'),
  loading: Loading
});
const LeaderSetting = Loadable({
  loader: () => import('./components/xrgames/LeaderSetting'),
  loading: Loading
});
const AddCommunities = Loadable({
  loader: () => import('./components/xrgames/AddCommunities'),
  loading: Loading
});
const AddCommunityLeader = Loadable({
  loader: () => import('./components/xrgames/AddCommunityLeader'),
  loading: Loading
});
const AllCommunities = Loadable({
  loader: () => import('./components/xrgames/AllCommunities'),
  loading: Loading
});
const AllCommunitiesLeaders = Loadable({
  loader: () => import('./components/xrgames/AllCommunitiesLeaders'),
  loading: Loading
});
const AdminCustomPermissions = Loadable({
  loader: () => import('./components/xrgames/AdminCustomPermissions'),
  loading: Loading
});
const AddPreferences = Loadable({
  loader: () => import('./components/xrgames/AddPreferences'),
  loading: Loading
});
const AdminTourBracket = Loadable({
  loader: () => import('./components/xrgames/AdminTourBracket'),
  loading: Loading
});
const AdminProductListing = Loadable({
  loader: () => import('./components/xrgames/AdminProductListing'),
  loading: Loading
});
const AddProduct = Loadable({
  loader: () => import('./components/xrgames/AddProduct'),
  loading: Loading
});
const AdminEditProduct = Loadable({
  loader: () => import('./components/xrgames/AdminEditProduct'),
  loading: Loading
});
const AddnewCategory = Loadable({
  loader: () => import('./components/xrgames/AddnewCategory'),
  loading: Loading
});
const AdminproductCategory = Loadable({
  loader: () => import('./components/xrgames/AdminproductCategory'),
  loading: Loading
});
const AddNewPlaylist = Loadable({
  loader: () => import('./components/xrgames/AddNewPlaylist'),
  loading: Loading
});
const AllPlaylistVideo = Loadable({
  loader: () => import('./components/xrgames/AllPlaylistVideo'),
  loading: Loading
});
const AdminCoupon = Loadable({
  loader: () => import('./components/xrgames/AdminCoupon'),
  loading: Loading
});
const AdminVariationGroupList = Loadable({
  loader: () => import('./components/xrgames/AdminVariationGroupList'),
  loading: Loading
});
const AdminVariationList = Loadable({
  loader: () => import('./components/xrgames/AdminVariationList'),
  loading: Loading
});
// const AdminVariationAdd = Loadable({
//   loader: () => import('./components/xrgames/AdminVariationAdd'),
//   loading: Loading
// });
const ConnectExistingDomain = Loadable({
  loader: () => import('./admincomponents/ConnectExistingDomain'),
  loading: Loading
});
const AdminUpdateTournament = Loadable({
  loader: () => import('./components/xrgames/AdminUpdateTournament'),
  loading: Loading
});
const AdminCommunicationCredentials = Loadable({
  loader: () => import('./components/xrgames/AdminCommunicationCredentials'),
  loading: Loading
});
const AdminCloneTournament = Loadable({
  loader: () => import('./components/xrgames/AdminCloneTournament'),
  loading: Loading
});
const AdminSingleEvent = Loadable({
  loader: () => import('./components/xrgames/AdminSingleEvent'),
  loading: Loading
});
const AdminCloneEvent = Loadable({
  loader: () => import('./components/xrgames/AdminCloneEvent'),
  loading: Loading
});
const SingleUpdateTour = Loadable({
  loader: () => import('./components/xrgames/SingleUpdateTour'),
  loading: Loading
});

const AdminAllUsersTransactions = Loadable({
  loader: () => import('./components/xrgames/AdminAllUsersTransactions'),
  loading: Loading
});
const ArchivedOrders = Loadable({
  loader: () => import('./components/xrgames/ArchivedOrders'),
  loading: Loading
});
const ArchiveTransactions = Loadable({
  loader: () => import('./components/xrgames/ArchiveTransactions'),
  loading: Loading
});
const ArchiveTourTickets = Loadable({
  loader: () => import('./components/xrgames/ArchiveTourTickets'),
  loading: Loading
});
const ArchiveSupportTickets = Loadable({
  loader: () => import('./components/xrgames/ArchiveSupportTickets'),
  loading: Loading
});
const AdminBannedUsers = Loadable({
  loader: () => import('./components/xrgames/AdminBannedUsers'),
  loading: Loading
});
const AdminDeletedUsers = Loadable({
  loader: () => import('./components/xrgames/AdminDeletedUsers'),
  loading: Loading
});
const AllOrders = Loadable({
  loader: () => import('./components/xrgames/AllOrders'),
  loading: Loading
});
//  const AllProducts = Loadable({
//   loader: () => import('./components/xrgames/AllProducts'),
//   loading: Loading
// });
const AllTeams = Loadable({
  loader: () => import('./components/xrgames/AllTeams'),
  loading: Loading
});
const AllDeletedTeams = Loadable({
  loader: () => import('./components/xrgames/AllDeletedTeams'),
  loading: Loading
});
const AllUsers = Loadable({
  loader: () => import('./components/xrgames/AllUsers'),
  loading: Loading
});
const ActivityLog = Loadable({
  loader: () => import('./components/xrgames/ActivityLog'),
  loading: Loading
});
const SupportTickets = Loadable({
  loader: () => import('./components/xrgames/SupportTicket'),
  loading: Loading
});

const MediaAnalytics = Loadable({
  loader: () => import('./components/xrgames/MediaAnalytics'),
  loading: Loading
});

const Transactions = Loadable({
  loader: () => import('./components/xrgames/Transactions'),
  loading: Loading
});
const AdminSinglegame = Loadable({
  loader: () => import('./components/xrgames/AdminSinglegame'),
  loading: Loading
});
const AdminAddTrending = Loadable({
  loader: () => import('./components/xrgames/AdminAddTrending'),
  loading: Loading
});
const AdminaddMedia = Loadable({
  loader: () => import('./admincomponents/AdminaddMedia'),
  loading: Loading
});
const AdminAddNewBlog = Loadable({
  loader: () => import('./admincomponents/AdminAddNewBlog'),
  loading: Loading
});
const AdminEditBlog = Loadable({
  loader: () => import('./admincomponents/AdminEditBlog'),
  loading: Loading
});
const AdminShowBlog = Loadable({
  loader: () => import('./admincomponents/AdminShowBlog'),
  loading: Loading
});

const AdminSponsorsBanner = Loadable({
  loader: () => import('./admincomponents/AdminSponsorsBanner'),
  loading: Loading
});
const FanHubProfile = Loadable({
  loader: () => import('./admincomponents/FanHubProfile'),
  loading: Loading
});
const AllClientDetails = Loadable({
  loader: () => import('./admincomponents/AllClientDetails'),
  loading: Loading
});
const AdminUpdateMedia = Loadable({
  loader: () => import('./admincomponents/AdminUpdateMedia'),
  loading: Loading
});
const freqAskedQuestions = Loadable({
  loader: () => import('./admincomponents/freqAskedQuestions'),
  loading: Loading
});
const CardCheckout = Loadable({
  loader: () => import('./components/CardCheckout'),
  loading: Loading
});
const AdminTourRoundRobinBrac = Loadable({
  loader: () => import('./admincomponents/AdminTourRoundRobinBrac'),
  loading: Loading
});
const AdminAllCommunities = Loadable({
  loader: () => import('./admincomponents/AdminAllCommunities'),
  loading: Loading
});
const AdminViewUser = Loadable({
  loader: () => import('./admincomponents/AdminViewUser'),
  loading: Loading
});
const AdminAddDynamicGame = Loadable({
  loader: () => import('./admincomponents/AdminAddDynamicGame'),
  loading: Loading
});
const AllInvitedFans = Loadable({
  loader: () => import('./components/xrgames/AllInvitedFans'),
  loading: Loading
});
const ImportedFansList = Loadable({
  loader: () => import('./admincomponents/ImportedFansList'),
  loading: Loading
});

const AddHelpCenter = Loadable({
  loader: () => import('./admincomponents/AddHelpCenter'),
  loading: Loading
});
const AllHelpCenter = Loadable({
  loader: () => import('./admincomponents/AllHelpCenter'),
  loading: Loading
});

const PetitionCreation = Loadable({
  loader: () => import('./admincomponents/PetitionCreation'),
  loading: Loading
});
const SinglePetition = Loadable({
  loader: () => import('./admincomponents/SinglePetition'),
  loading: Loading
});
const ChallengesReports = Loadable({
  loader: () => import('./admincomponents/ChallengesReports'),
  loading: Loading
});
const AdminPlansDetail = Loadable({
  loader: () => import('./admincomponents/AdminPlansDetail'),
  loading: Loading
});
const AdminChoosePlan = Loadable({
  loader: () => import('./admincomponents/AdminChoosePlan'),
  loading: Loading
});

function Loading({ error }) {
  if (error) {
    return '';
  } else {
    return <div className="col-md-12 loaderdiv">
             <img className="spinnerloader" src={`${process.env.REACT_APP_GCPURL}/xr-header/ActiveLinkLoader.gif`}/>
           </div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
      userstatus: '',
      colorsss: '',
      submitlayoutrefresh: "no"
    }
  }
  componentDidMount() {
    // if(localStorage.getItem('token')){

    //   if (localStorage.getItem('token') === 'undefined') {
    //     localStorage.clear('token');
    //     localStorage.clear('session_expired');
    //     this.setState({ role: 'loggedout' });
    //   } else {
    //     const currdetails = parseJwt(localStorage.getItem('token'));
    //     const redirectpage = currdetails.rdrt

    //     if(redirectpage === 'fan'){
    //       this.props.history.push('/role-selection');
    //       window.location.reload();
    //     }

    //     if(redirectpage === 'wal'){
    //         this.props.history.push('/my-wallet'); 
    //         window.location.reload();
    //     }

    //   }

    // }

    this.fetchData();
  }

  async setcommonenvdata() {

  }


  async fetchData() {


    if (localStorage.getItem('token')) {
      if (localStorage.getItem('token') === 'undefined') {
        localStorage.clear('token');
        localStorage.clear('session_expired');
        this.setState({ role: 'loggedout' });
      } else {
        const currdetails = parseJwt(localStorage.getItem('token'));
        // console.log(currdetails);
        const role = currdetails.urxrs;
        const userstatus = currdetails.sat;
        const uid = currdetails.sub;
       
        this.setState({ role: role, userstatus: userstatus });
        let request1;
        request1 = {
          method: 'GET',
          url: `${process.env.REACT_APP_APIURL}/getUserstatus/${uid}`,
          headers: { 'Content-Type': 'application/json' },
        };
        axios(request1).then((response1) => {
          // console.log("AAAAAAAAAAAAA")
          //  console.log(response1.data.data)
          if (response1.data.data.user_status === 'active') {
          } else {
            localStorage.clear('token');
            localStorage.clear('session_expired');
            this.setState({ role: 'loggedout' });
          }
        })
          .catch((error) => {
          });
                    // let request78;
          // request78 = {
          //   method: 'GET',
          //   url: `${process.env.REACT_APP_APIURL}/user/get-analytics-viewid/${uid}`,
          //   headers: { 'Content-Type': 'application/json','X-Auth-Token': `${localStorage.getItem('token')}` },
          // };
          // axios(request78).then((response78) => {
          //   console.log(response78.data.data)
          //   console.log('------------------')
          //   if (response78.data.data) {
          //     if(response78.data.data.analytics_viewid){
          //       var analyticsviewid = response78.data.data.analytics_viewid;
          //     }else{
          //       var analyticsviewid = '258720599';
          //     }
             
          //   } else {
          //     var analyticsviewid = '258720599';
          //   }
          // })
          //   .catch((error) => {
          //   });


        // let app = document.getElementById("root");
        // var r = document.querySelector(':root');
        // let request;
        // request = {
        //   method: 'GET',
        //   url: `https://xrsports.games/public/get-dynamic-colors`,
        //   headers: { 'Content-Type': 'application/json' },
        // };
        // axios(request).then((response) => {
        //   this.setState({
        //     colorsss: response.data.data,
        //   });
        //   r.style.setProperty('--bodycolor', response.data.data.bodycolor);
        //   r.style.setProperty('--footercolor', response.data.data.footercolor);
        //   r.style.setProperty('--headercolor', response.data.data.headercolor);
        //   r.style.setProperty('--pcolor', response.data.data.pcolor);
        //   r.style.setProperty('--h1color', response.data.data.h1color);
        //   r.style.setProperty('--h2color', response.data.data.h2color);
        //   r.style.setProperty('--h3color', response.data.data.h3color);
        //   r.style.setProperty('--h4color', response.data.data.h4color);
        //   r.style.setProperty('--h5color', response.data.data.h5color);
        //   r.style.setProperty('--h6color', response.data.data.h6color);
        //   r.style.setProperty('--featuredcolor', response.data.data.featuredcolor);
        //   r.style.setProperty('--primarycolor', response.data.data.primarycolor);
        //   r.style.setProperty('--secondarycolor', response.data.data.secondarycolor);
        //   r.style.setProperty('--menulinks', response.data.data.menulinks);
        // })
        //   .catch((error) => {
        //   });


         // to get specific client details as firebase details
      let request_firebase;
      request_firebase = {
        method: 'GET',
        url: `${process.env.REACT_APP_APIURL}/user/get-secure-client-data/firebase`,
        headers: { 'Content-Type': 'application/json','X-Auth-Token': `${localStorage.getItem('token')}` },
      };
      await axios(request_firebase).then((response) => {
        
        if (response) {
          if (response.data) {
              if(response.data.ResponseCode === '0'){
                this.setState({loading: false })
                // window.$FIREBASE_APIKEY = "";
                // window.$FIREBASE_AUTHDOMAIN = "";
                // window.$FIREBASE_DBURL = "";
                // window.$FIREBASE_PROJECTID = "";
                // window.$FIREBASE_STORAGEBUCKET = "";
                // window.$FIREBASE_MSGSENDERID = "";
                // window.$FIREBASE_APPID = "";
                // window.$FIREBASE_MEASUREMENTID = "";
                // window.$FIREBASE_CREDENTIALS_EXIST = 'false';

                localStorage.setItem('firebase_credentials_apiKey', "");
                localStorage.setItem('firebase_credentials_authDomain', "");
                localStorage.setItem('firebase_credentials_databaseURL', "");
                localStorage.setItem('firebase_credentials_projectId', "");
                localStorage.setItem('firebase_credentials_storageBucket', "");
                localStorage.setItem('firebase_credentials_messagingSenderId', "");
                localStorage.setItem('firebase_credentials_appId', "");
                localStorage.setItem('firebase_credentials_measurementId', "");



                localStorage.setItem('firebase_credentials', false);
              }else{
                  const platformdata_client = parseJwt(response.data.data);	
                  // window.$FIREBASE_APIKEY = platformdata_client.client.apiKey;
                  // window.$FIREBASE_AUTHDOMAIN = platformdata_client.client.authDomain;
                  // window.$FIREBASE_DBURL = platformdata_client.client.databaseURL;
                  // window.$FIREBASE_PROJECTID = platformdata_client.client.projectId;
                  // window.$FIREBASE_STORAGEBUCKET = platformdata_client.client.storageBucket;
                  // window.$FIREBASE_MSGSENDERID = platformdata_client.client.messagingSenderId;
                  // window.$FIREBASE_APPID = platformdata_client.client.appId;
                  // window.$FIREBASE_MEASUREMENTID = platformdata_client.client.measurementId;
                  // window.$FIREBASE_CREDENTIALS_EXIST = 'true';

                  localStorage.setItem('firebase_credentials', true);

                  localStorage.setItem('firebase_credentials_apiKey', platformdata_client.client.apiKey);
                  localStorage.setItem('firebase_credentials_authDomain', platformdata_client.client.authDomain);
                  localStorage.setItem('firebase_credentials_databaseURL', platformdata_client.client.databaseURL);
                  localStorage.setItem('firebase_credentials_projectId', platformdata_client.client.projectId);
                  localStorage.setItem('firebase_credentials_storageBucket', platformdata_client.client.storageBucket);
                  localStorage.setItem('firebase_credentials_messagingSenderId', platformdata_client.client.messagingSenderId);
                  localStorage.setItem('firebase_credentials_appId', platformdata_client.client.appId);
                  localStorage.setItem('firebase_credentials_measurementId', platformdata_client.client.measurementId);
      
                  this.setState({loading: false })
                  // var aa = setcommonenvdata();
              }            
          }

        }
  
      })
        .catch((error) => {
        });



      let request_clientACTV;
      request_clientACTV = {
        method: 'GET',
        url: `${process.env.REACT_APP_APIURL}/get-ACTV-secure-client-data/${uid}`,
        headers: { 'Content-Type': 'application/json','X-Auth-Token': `${localStorage.getItem('token')}` },
      };
      await axios(request_clientACTV).then((response) => {
        // console.log(response)
        if (response) {
          if (response.data) {
              if(response.data.ResponseCode === '0'){
                window.$FIREBASE_APIKEY = "";

              }else{
                  const ACTVplatformdata_client = parseJwt(response.data.data);	
                  // console.log(response.data)
                  // console.log('llllllllllll')
                  // window.$ANALYTICS_CLIENTID = ACTVplatformdata_client.client.aws_secret_access_key;
                  if (response.data.clientdata){
                      var clientId = response.data.clientdata.analytics_clientid;
                      var secret = response.data.clientdata.analytics_clientsecret;
                      var rToken = response.data.clientdata.analytics_refreshtoken;
                      // console.log(clientId)
                      // console.log(rToken)
                      // console.log(secret)
                  }
                  if(response.data.analytics_viewid){
                    var analyticsviewid = response.data.analytics_viewid;
                  }else{
                    var analyticsviewid = '';
                  }
                  // console.log(analyticsviewid)
                  // window.$ANALYTICS_CLIENTID = "123852977662-447fkbttbge0l4re4cbbn0ncjcp8mktu.apps.googleusercontent.com";
                  // window.$ANALYTICS_CLIENTSERET = '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';
                  // window.$ANALYTICS_REFRESHTOKEN = '1//0gQ7E9BG8zXe5CgYIARAAGBASNgF-L9IrzDBSGaCt7eE2MazgJImU56aceXW_UDGlbxRiSUPANR9rGwrWKfCIox3PFhLC_bpNkg';
                  window.$ANALYTICS_CLIENTID = clientId;
                  window.$ANALYTICS_CLIENTSERET = secret;
                  window.$ANALYTICS_REFRESHTOKEN = rToken;
                  window.$VIEWID = analyticsviewid;
                  if((analyticsviewid !== '' && analyticsviewid !== '0' && analyticsviewid.toLowerCase() !== 'null')){
                      
                      // const clientId = '123852977662-447fkbttbge0l4re4cbbn0ncjcp8mktu.apps.googleusercontent.com';
                      // const secret = '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';
                      // const rToken = '1//0gQ7E9BG8zXe5CgYIARAAGBASNgF-L9IrzDBSGaCt7eE2MazgJImU56aceXW_UDGlbxRiSUPANR9rGwrWKfCIox3PFhLC_bpNkg';
                      const  client_id =  clientId;
                      const  client_secret =  secret;
                      const  refresh_token =  rToken;
                      const  grant_type =  'refresh_token';
                      let tt= "";
                      try {
                        const request = new Request(`https://www.googleapis.com/oauth2/v3/token`, {
                          method: 'POST',
                          body: JSON.stringify({client_id, client_secret, refresh_token, grant_type }),
                          headers: new Headers({
                              "Content-Type": "application/json",
                          })
                      })
                      return fetch(request).then(res => res.json())
                          .then((data) => {
                  
                              tt = data.access_token;
                              // onSetToken(tt);
                              this.setState({ token: tt });
                              window.$TOKEN = tt;
                              //return tt;
                  
                          }).catch((err) => {
                            console.log("error")
                        })
                  
                      } catch(err) {
                        console.log("error = ", err);
                      }
                    }
              }
            // console.log(response.data.data)
          }
        }
      })


      }

    } else {
      this.setState({ role: 'loggedout' });
    }
  }
  submitlayoutrefresh = () => {
    this.setState({
      submitlayoutrefresh: "yes"
    })
    // console.log(window.location.host)
    //     console.log(window.location)
    if(this.state.submitlayoutrefresh !== "yes"){
      this.fetchData();
    }
  }
  addDefaultSrcLoader = (e)=>{
    // e.target.src = `${process.env.REACT_APP_S3BUCKET_COMMON}/placeholder/loader_placeholder.gif`;
    e.target.src = `${process.env.REACT_APP_GCPURL}/xr-header/ActiveLinkLoader.gif`;        
  }
  render() {
    const { role, userstatus } = this.state;
    // const logOut = () => {
    //   dispatch(logout());
    // };
    //console.log(role)
    // console.log(userstatus)
    return (
      <HttpsRedirect>
        <Router history={history} >
        {/* <AuthContextProvider> */}
        <Suspense fallback={
            <div className="col-md-12 loaderdiv">
              {/* <img className="spinnerloader" src={`${process.env.REACT_APP_S3BUCKET_COMMON}/placeholder/loader_placeholder.gif`} onError={this.addDefaultSrcLoader} /> */}
              <img className="spinnerloader" src={`${process.env.REACT_APP_GCPURL}/xr-header/ActiveLinkLoader.gif`} onError={this.addDefaultSrcLoader}/>
            </div>
          // <>
          //   
          //   </>
          }>
            
          <ScrollToTop>
            <AuthVerify submitlayoutrefresh={this.submitlayoutrefresh} />

            {
              // loggedin User
              userstatus === 'B@$$56fhhab45NN' ?
                <Switch>
                  <RouteWithLayout layout={CompleteEmptyLayout} path="/Banned" component={Banneduser} />
                  <RouteWithLayout exact={true} layout={CompleteEmptyLayout} path="/:slug?" component={Banneduser} />
                  <RouteWithLayout layout={CompleteEmptyLayout} path='*' component={My404Component} />
                </Switch>

                :
                userstatus === 'De$%Let90dTe@' ?  // deleted user
                  <Switch>
                    <RouteWithLayout layout={CompleteEmptyLayout} path="/Deleted" component={DeletedUser} />
                    <RouteWithLayout layout={CompleteEmptyLayout} path="/dashboard" component={DeletedUser} />
                    <RouteWithLayout exact={true} layout={CompleteEmptyLayout} path="/" component={DeletedUser} />
                    <RouteWithLayout layout={CompleteEmptyLayout} path='*' component={My404Component} />
                  </Switch>

                  :
                  role === '#u$43*70&78h7' ? // user
                    <Switch>
                      <RouteWithLayout layout={XRInnerLayout} path="/user-wallet" component={XRWallet} />
                      <RouteWithLayout exact={true} layout={XRHomeLayout} path="/" component={XRChallengesHome1} />
                      <RouteWithLayout exact={true} layout={XRInnerLayout} path="/for-creators" component={XRAbout_Us} />
                      <RouteWithLayout exact={true} layout={XRHomeLayout} path="/creators" component={XRChallengesHome1} />
                      <RouteWithLayout layout={XRInnerLayout} path="/influencer-creator" component={XRCreatorQuestion} />
                      {/* <RouteWithLayout layout={XRInnerLayout} path="/update-preferences" component={UpdatePreferences} /> */}
                      <RouteWithLayout layout={XRInnerLayout} path="/for-creators" component={XRGoPro} />
                      {/* <RouteWithLayout layout={XRInnerLayout} path="/creators-tips" component={XRCommunityTerms} /> */}
                      <RouteWithLayout layout={XRInnerLayout} path="/how-to-page" component={XRHowTo} />
                      {/* <RouteWithLayout exact={true} layout={XRInnerLayout} path="/" component={XRChallenges} />                       */}
                      <RouteWithLayout layout={XRInnerLayout} path="/challenge/:slug" component={JoinChallenge} />
                      {/* <RouteWithLayout layout={XRInnerLayout}  path="/join-Challenge-msg/:slug" component={XRJoinChallengeMsg} /> */}
                      <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge/:slug/:success?" component={XRJoinChallengeStart} />
                      <RouteWithLayout layout={XRInnerLayout} path="/:creator/join-Challenge/:slug/:success?" component={XRJoinChallengeStart} />
                      <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge-list/:slug/:success?" component={XRJoinChallengelistStart} />

                      <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge-create/:slug" component={XRJoinChallengeForm} />
                      <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge-share/:slug" component={XRJoinChallengeShare} />
                      <RouteWithLayout layout={XRInnerLayout} path="/match/:slug/:matchid" component={XRChallengeMatch} />
                      <RouteWithLayout layout={XRInnerLayout} path="/participant/:slug/:matchid" component={XRParticipant} />
                      <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/payment-confirmation/:id" component={XRPaymentConfirmation} />
                      <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/plans" component={XRPlans} />
                      <RouteWithLayout layout={XRInnerLayout} path="/redeem-reward/:challenge_id" component={XRRedeemReward} />
                      <RouteWithLayout layout={XRInnerLayout} path="/my-rewards" component={XRWinnerRewards} />
                      {/* <RouteWithLayout layout={XRInnerLayout} path="/create-challenge" component={XRCreateChallenge} /> */}
                      <RouteWithLayout layout={XRInnerLayout} path="/faq" component={XRFaqs} />
                      <RouteWithLayout layout={XRInnerLayout} path="/privacy-policy" component={Privacypolicy} />
                      <RouteWithLayout layout={XRInnerLayout} path="/terms-and-conditions" component={XRTermsAndConditions} />
                      {/* <RouteWithLayout layout={XRInnerLayout} path="/contact" component={XRContact} />  */}
                      {/* <RouteWithLayout layout={XRInnerLayout} path="/contact-us" component={XRContactus} />  */}
                      {/* <RouteWithLayout layout={XRInnerLayout} path="/privacyPolicy" component={XRPrivacyPolicy} /> */}
                      <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/checkout/:id" component={XRCheckout} />
                      <RouteWithLayout layout={XRInnerLayout} path="/checkoutback/:id" component={XRcheckoutbackup} />
                      <RouteWithLayout layout={XRInnerLayout} path="/checkout_test/:id" component={XRCheckout_test} />
                      <RouteWithLayout layout={XRInnerLayout} path="/register-challenge/:slug" component={RegisterChallenge} />
                      <RouteWithLayout layout={XRProfileInnerLayout} path="/influencer-profile/:slug" component={XRProfile} />

                      <RouteWithLayout layout={XRInnerLayout} path="/edit-profile" component={XRInfEditProfile} />
                      {/* <RouteWithLayout layout={XRInnerLayout} path="/influencer-edit-profile-self" component={XRInfEditProfile} />  */}
                      {/* <RouteWithLayout layout={XRInnerLayout} path="/user-profile/:slug" component={XRUserProfile} /> */}
                      <RouteWithLayout layout={XRInnerLayout} path="/user-profile" component={XRUserProfile} />
                      <RouteWithLayout layout={XRInnerLayout} path="/my-challenges" component={XRChallenges} />
                      <RouteWithLayout layout={XRInnerLayout} path="/previous-challenges" component={XRPreviousChallenges} />
                      <RouteWithLayout layout={XRInnerLayout} path="/user-wallet" component={XRWallet} />
                      <RouteWithLayout layout={XRInnerLayout} path="/creator-community" component={XRInfluencerCommunity} />
                      {/* challenge-slug/submission/ID */}
                      <RouteWithLayout layout={XRInnerLayout} path="/:slug/submission/:id" component={XRSinglepost} />
                      <RouteWithLayout layout={XRProfileInnerLayout} path="/:slug" component={XRProfile} />
                      {/* <RouteWithLayout layout={XRInnerLayout} path="/" component={XRChallengesHome} /> */}

                      {/* <RouteWithLayout layout={XRInnerLayout} path="/profile/:slug" component={XRProfile} /> */}
                      <RouteWithLayout layout={XRInnerLayout} path='*' component={My404Component} />
                    </Switch>
                    :
                    role === '$Us&er67l@vi%eRst76Heri7' ?   // user visiter 
                      <Switch>

                        <RouteWithLayout exact={true} layout={XRInnerLayoutWIthoutFooter} path="/" component={XRRoleselection} />
                        <RouteWithLayout exact={true} layout={XRInnerLayoutWIthoutFooter} path="/activity-center" component={XRRoleselection} />
                        <RouteWithLayout exact={true} layout={XRInnerLayoutWIthoutFooter} path="/role-selection" component={XRRoleselection} />
                        <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/wallet-login" component={XRWalletLogin} />
                        <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/my-wallet" component={WalletPage} />
                        <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/personal-hub/:id" component={XRPersonalHub} />
                        <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/wallet-authentication" component={XRAuthentication} />
                        <RouteWithLayout layout={XRInnerLayout} path="/my-challenges" component={XRChallenges} />
                        <RouteWithLayout layout={XRInnerLayout} path="/previous-challenges" component={XRPreviousChallenges} />
                        <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/plans" component={XRPlans} />
                        <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/payment-confirmation/:id" component={XRPaymentConfirmation} />
                        <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge/:slug/:success?" component={XRJoinChallengeStart} />
                        <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/checkout/:id" component={XRCheckout} />
                        <RouteWithLayout layout={XRInnerLayout} path="/checkoutback/:id" component={XRcheckoutbackup} />

                        <RouteWithLayout layout={XRInnerLayout} path="/:creator/join-Challenge/:slug/:success?" component={XRJoinChallengeStart} />
                        <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge-list/:slug/:success?" component={XRJoinChallengelistStart} />
                        <RouteWithLayout layout={XRInnerLayout} path="/for-creators" component={XRGoPro} />
                        {/* <RouteWithLayout layout={XRInnerLayout} path="/creators-tips" component={XRCommunityTerms} /> */}
                        <RouteWithLayout layout={XRInnerLayout} path="/how-to-page" component={XRHowTo} />
                        <RouteWithLayout layout={XRInnerLayout} path="/influencer-creator" component={XRCreatorQuestion} />
                        <RouteWithLayout layout={XRHomeLayout} path="/" component={XRChallengesHome1} />
                        <RouteWithLayout exact={true} layout={XRInnerLayout} path="/for-creators" component={XRAbout_Us} />
                        <RouteWithLayout layout={XRInnerLayout} path="/:slug/submission/:id" component={XRSinglepost} />
                        <RouteWithLayout layout={XRProfileInnerLayout} path="/:slug" component={XRProfile} />
                        {/* <RouteWithLayout layout={CompleteEmptyLayout} path='*' component={My404Component} /> */}
                      </Switch>
                      :
                      // influenecer
                      role === '$In&f67l@n%eR76Hi7' || role === '$Sa#79+57hD%4My5' ? // influencer
                        <Switch>
                          <RouteWithLayout exact={true} layout={XRHomeLayout} path="/" component={XRChallengesHome1} />
                          <RouteWithLayout exact={true} layout={XRInnerLayout} path="/for-creators" component={XRAbout_Us} />
                          <RouteWithLayout exact={true} layout={XRHomeLayout} path="/creators" component={XRChallengesHome1} />
                          
                          <RouteWithLayout layout={AdminInnerLayout} path="/FacebookPostComponent" component={FacebookPostComponent} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/analytics" component={Analyticsdemo} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/analyticsga4" component={AnalyticsdemoGA4} />
                           
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-help-center" component={AddHelpCenter} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/update-help-center/:id" component={AddHelpCenter} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/all-help-center" component={AllHelpCenter} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/create-petition" component={PetitionCreation} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/petition/:id" component={SinglePetition} />
                         
                          <RouteWithLayout layout={AdminInnerLayout} path="/challenges-report" component={ChallengesReports} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/communication" component={XRCommunication} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/activity-center" component={AdminHome} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/plans-detail" component={AdminPlansDetail} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/choose-plan" component={AdminChoosePlan} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/domain-setting" component={DomainSetting} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/all-client-details-onlyfordevelopers" component={AllClientDetails} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/customize-homepage" component={Fanhubhomepage} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/navigation-boxes" component={AddHighlights} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/customize-fanhublogo" component={AdminClientDetails} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/home-sponsors" component={AdminSponsorsBanner} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/active-center" component={ActiveCenter} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/invite-fans" component={AdminUploadFile} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/imported-fans" component={ImportedFansList} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-all-communities" component={AdminAllCommunities} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-view-user/:id" component={AdminViewUser} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-update-user/:id" component={AdminViewUser} />


                          <RouteWithLayout layout={AdminInnerLayout} path="/all-nft" component={AllNft} /> {/* inuse */}
                          <RouteWithLayout layout={AdminInnerLayout} path="/publish-nft/:slug" component={PublishNft} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/single-nft-detail/:slug" component={AdminNFTDetail} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/wallet-info" component={WalletPage} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-wallet-collectibles" component={XRPlusCollectibles} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-wallet-activities" component={XRPlusWalletActivities} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-wallet-settings" component={XRPlusWalletActivitiesSetting} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-wallet-mfasettings" component={XRPlusWalletMfaSetting} />
                          <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/create-wallet-password" component={XRPlusCreateWalletPassword} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/reset-wallet-password" component={XRPlusResetWalletPassword} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-trending" component={AdminAddTrending} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/update-tournament/:id" component={AdminUpdateTournament} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-communication-credentials" component={AdminCommunicationCredentials} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-media" component={AdminaddMedia} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/update-media/:id" component={AdminUpdateMedia} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/create-blog" component={AdminAddNewBlog} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/edit-blog/:id" component={AdminEditBlog} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/show-blog/:id" component={AdminShowBlog} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-transactions" component={Transactions} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/users-transactions" component={AdminAllUsersTransactions} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/archived-orders" component={ArchivedOrders} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/archived-transactions" component={ArchiveTransactions} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/archived-tourtickets" component={ArchiveTourTickets} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/archived-support-tickets" component={ArchiveSupportTickets} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/banned-users" component={AdminBannedUsers} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/deleted-users" component={AdminDeletedUsers} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-new-user" component={AdminAddUser} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-orders" component={AllOrders} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-teams" component={AllTeams} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-deleted-teams" component={AllDeletedTeams} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-deleted-teams" component={AllDeletedTeams} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-fans" component={AllUsers} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/activity-log" component={ActivityLog} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/support-tickets" component={SupportTickets} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/media-analytics" component={MediaAnalytics} />

                          <RouteWithLayout layout={AdminInnerLayout} path="/invited-users-history" component={AllInvitedFans} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/all-challenges" component={AllChallenges} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-challenges" component={AllChallenges} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/previous-challenges" component={XRPreviousChallenges} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/draft-challenge" component={XRDraftChallenges} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/connect-existing-domain" component={ConnectExistingDomain} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/update-existing-domain" component={ConnectExistingDomain} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/create-preferences" component={AddPreferences} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-product" component={AddProduct} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/edit-product/:slug" component={AdminEditProduct} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-new-category" component={AddnewCategory} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/all-collections" component={AdminproductCategory} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-new-playlist" component={AddNewPlaylist} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/all-playlist-video/:id" component={AllPlaylistVideo} />
                          
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-coupons" component={AdminCoupon} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/single-Tour-roundrobin-bracket/:id" component={AdminTourRoundRobinBrac} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/single-Tour/:id" component={SingleUpdateTour} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/single-Tour-bracket/:id" component={AdminTourBracket} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/start-challenge" component={HubCreateChallenge} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/create-challenge" component={ActvCreateChallenge} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/edit-challenge/:id" component={EditChallenge} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/clone-challenge/:id" component={CloneChallenge} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/mint-nft" component={MintAnNft} /> {/* inuse */}
                          <RouteWithLayout layout={AdminInnerLayout} path="/CardCheckout/:type/:id?" component={CardCheckout} />
                          {/* <RouteWithLayout layout={AdminInnerLayout} path="/invite-fans" component={Invitebulkusers} /> inuse */}
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-tournaments" component={AdminTournaments} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-dynamic-subschools" component={AddDynamicSubschools} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/platform-banners" component={ChangeBanners} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/shop-banners" component={ShopBanners} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/create-reward" component={XRCreateRewards} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-sponsors" component={AdminSponsors} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/seo-tags" component={AdminDynamiMetas} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-blogs" component={AddNews} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-feed" component={CustomFeed} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/single-feed/:id" component={SingleFeed} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-dynamic-platform-infotips" component={AdminDynamicPlatformInfotips} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/all-drafttour" component={AllDraftTour} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/how-to-videos-admin" component={AdminVideos} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/how-to-videos-user" component={AdminUserVideos} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/customize-css" component={AdminDynamicCss} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/client-details" component={AdminClientDetails} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/update-custom-menu" component={AdminCustomMenus} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/customise-sidebar" component={dcw_customSidebar} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-media" component={AddExclusiveVideo} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/nft-banners" component={NftShopBanner} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-new-user" component={AdminAddUser} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-team" component={AddTeam} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-products" component={AdminProductListing} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/single-game/:id" component={AdminSinglegame} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-sub-admin" component={AddSubAdmin} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/all-sub-admin" component={AllSubAdmin} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-profile" component={AdminProfile} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/social-embed" component={AdminSocialEmbed} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/page-setting" component={AdminPageSetting} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-update-user/:id" component={AdminProfile} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/fanhub-profile" component={FanHubProfile} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-client-footer" component={AdminDynamicFooter} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/game-platform-relations" component={GamePlatformRelation} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-page-details/:id" component={AdminPagesdata} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/leader-settings" component={LeaderSetting} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-communities" component={AddCommunities} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-community-leader" component={AddCommunityLeader} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/all-communities" component={AllCommunities} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/all-communities-leaders" component={AllCommunitiesLeaders} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-admin-default-permissions" component={AdminCustomPermissions} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-Add-Dynamic-Games" component={AdminAddDynamicGame} />
                           
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-variation-group-list" component={AdminVariationGroupList} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-variation-list/:id" component={AdminVariationList} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-Dynamic-Games" component={AdminDynamicGameMapsMods} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-live-stream-handles" component={AdninLiveStream} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-archived-tournaments" component={ArchivedTournaments} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/challenge-creation" component={ChallengeCreation} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-tournament" component={AddTournamentNew} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-clone-tournament/:id" component={AdminCloneTournament} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-block-users" component={XRMyblockedusers} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-alltournaments-series" component={AdminAllTournamentSeries} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-tournaments-series" component={AdminTournamentSeries} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-dynamic-tour" component={TourDynamicDataInfotips} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-add-event" component={AddEvent} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-update-event/:id" component={AdminSingleEvent} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-clone-event/:id" component={AdminCloneEvent} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/add-custom-menu" component={CustomMenus} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-events" component={AdminAllEvents} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-support" component={AdminSupport} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-support-details" component={AdminSupportDetails} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-wallet-access" component={AdminWalletAccess} />
                          
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-customer-support-help" component={AdminCustomerSupportHelp} />

                          <RouteWithLayout layout={AdminInnerLayout} path="/add-platform-variant" component={AddPlatformVariant} />
                          <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/role-selection" component={XRRoleselection} />
                          <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/wallet-login" component={XRWalletLogin} />
                          <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/my-wallet" component={WalletPage} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-personal-wallet" component={WalletPage} />
                          <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/personal-hub/:id" component={XRPersonalHub} />
                          <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/wallet-authentication" component={XRAuthentication} />
                          <RouteWithLayout layout={XRInnerLayout} path="/for-creators" component={XRGoPro} />
                          <RouteWithLayout layout={XRInnerLayout} path="/how-to-page" component={XRHowTo} />
                          <RouteWithLayout layout={XRInnerLayout} path="/XRStartcropper" component={XRStartcropper} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-all-page-details" component={AdminAllPages} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/admin-all-deleted-page-details" component={AdminAllDeletedPages} />

                          <RouteWithLayout layout={XRInnerLayout} path="/wallet" component={XRWallet} />
                          <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge/:slug/:success?" component={XRJoinChallengeStart} />
                          <RouteWithLayout layout={XRInnerLayout} path="/:creator/join-Challenge/:slug/:success?" component={XRJoinChallengeStart} />
                          <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge-list/:slug/:success?" component={XRJoinChallengelistStart} />
                          <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge-create/:slug" component={XRJoinChallengeForm} />
                          <RouteWithLayout layout={XRInnerLayout} path="/creator-community" component={XRInfluencerCommunity} />
                          <RouteWithLayout layout={XRInnerLayout} path="/influencer-creator" component={XRCreatorQuestion} />
                          <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge-share/:slug" component={XRJoinChallengeShare} />
                          <RouteWithLayout layout={XRInnerLayout} path="/upgrade-plan" component={XRUpgradePlan} />
                          <RouteWithLayout layout={XRInnerLayout} path="/match/:slug/:matchid" component={XRChallengeMatch} />
                          <RouteWithLayout layout={XRInnerLayout} path="/participant/:slug/:matchid" component={XRParticipant} />

                          <RouteWithLayout layout={XRInnerLayout} path="/challenge/:slug/" component={JoinChallenge} />
                          <RouteWithLayout layout={XRInnerLayout} path="/challenge-created/:slug/" component={ShareChallenge} />
                          <RouteWithLayout layout={XRProfileInnerLayout} path="/influencer-profile/:slug" component={XRProfile} />
                          <RouteWithLayout layout={XRInnerLayout} path="/edit-profile" component={XRInfEditProfile} />
                          <RouteWithLayout layout={XRInnerLayout} path="/user-profile/:slug" component={XRUserProfile} />
                          <RouteWithLayout layout={XRInnerLayout} path="/user-edit-profile" component={XRUserEditProfile} />
                          <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/plans" component={XRPlans} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/my-plans" component={XRMYPlans} />
                          
                          <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/payment-confirmation/:id" component={XRPaymentConfirmation} />
                          <RouteWithLayout layout={XRInnerLayout} path="/paypal" component={XRPayPal} />
                          <RouteWithLayout layout={XRInnerLayout} path="/dashboard" component={XRDashboard} />
                          <RouteWithLayout layout={XRInnerLayout} path="/faq" component={XRFaqs} />
                          <RouteWithLayout layout={XRInnerLayout} path="/privacy-policy" component={Privacypolicy} />
                          <RouteWithLayout layout={XRInnerLayout} path="/terms-and-conditions" component={XRTermsAndConditions} />
                          <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/checkout/:id" component={XRCheckout} />
                          <RouteWithLayout layout={XRInnerLayout} path="/checkoutback/:id" component={XRcheckoutbackup} />
                          <RouteWithLayout layout={XRInnerLayout} path="/checkout_test/:id" component={XRCheckout_test} />
                          <RouteWithLayout layout={XRInnerLayout} path="/XRSignupForm" component={XRSignupForm} />
                          <RouteWithLayout layout={XRInnerLayout} path="/signup" component={XRRegister} />
                          <RouteWithLayout layout={XRInnerLayout} path="/register-challenge/:slug" component={RegisterChallenge} />
                          <RouteWithLayout layout={XRInnerLayout} path="/XRRegistering" component={XRRegistering} />
                          <RouteWithLayout layout={XRInnerLayout} path="/XRRegisteringPay" component={XRRegisteringPay} />
                          <RouteWithLayout layout={XRInnerLayout} path="/XRFreeParticipant" component={XRFreeParticipant} />
                          <RouteWithLayout layout={XRInnerLayout} path="/XRPaidEntryParticipant" component={XRPaidEntryParticipant} />
                          <RouteWithLayout layout={XRInnerLayout} path="/XRSubmitVideo" component={XRSubmitVideo} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/challenge-settings/:id/:edit?" component={XRChallengeSettings} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/challenge-rewards/:id/:edit?" component={XRChallengeRewards} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/challenge-preview/:id" component={XRChallengePreview} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/challenge-begin/:id" component={XRChallengeBegin} />
                          <RouteWithLayout layout={XRInnerLayout} path="/create-reward" component={XRCreateRewards} />
                          <RouteWithLayout layout={AdminInnerLayout} path="/XRInfluencerPreview" component={XRInfluencerPreview} />
                          <RouteWithLayout layout={XRInnerLayout} path="/my-rewards" component={XRMyRewards} />
                          <RouteWithLayout layout={XRInnerLayout} path="/edit-reward/:id" component={XREditReward} />
                          <RouteWithLayout layout={XRInnerLayout} path="/XRBracketHostPreview" component={XRBracketHostPreview} />
                          <RouteWithLayout layout={XRInnerLayout} path="/:slug/submission/:id" component={XRSinglepost} />
                          <RouteWithLayout layout={XRProfileInnerLayout} path="/:slug" component={XRProfile} />
                          <RouteWithLayout layout={XRInnerLayout} path='*' component={My404Component} />
                        </Switch>
                        :
                        // admin user
                        role === '$a#79+57h%45' ?
                          <Switch>
                            {/* <RouteWithLayout exact={true} layout={XRInnerLayout} path="/" component={XRChallengesHome} /> */}
                            <RouteWithLayout exact={true} layout={XRHomeLayout} path="/" component={XRChallengesHome1} />
                            <RouteWithLayout exact={true} layout={XRHomeLayout} path="/creators" component={XRChallengesHome1} />
                            <RouteWithLayout exact={true} layout={XRInnerLayout} path="/for-creators" component={XRAbout_Us} />

                          </Switch>

                          :
                          // loggedout user
                          role === 'loggedout' ?
                            <Switch>
                              {/* //admin components start */}

                              {/* <RouteWithLayout layout={AdminInnerLayout} path="/challenge-preview" component={ChallengePreview} /> */}
                              {/* <RouteWithLayout layout={AdminInnerLayout} path="/publish-nft" component={PublishNft} /> */}

                              {/* //admin components end */}

                              <RouteWithLayout layout={XRInnerLayout} path="/user-wallet" component={XRWallet} />
                              <RouteWithLayout layout={XRInnerLayout} path="/creator-community" component={XRInfluencerCommunity} />
                              <RouteWithLayout layout={XRInnerLayout} path="/influencer-creator" component={XRCreatorQuestion} />
                              <RouteWithLayout exact={true} layout={XRHomeLayout} path="/" component={XRLogin} />
                              <RouteWithLayout exact={true} layout={XRInnerLayout} path="/for-creators" component={XRAbout_Us} />
                              <RouteWithLayout exact={true} layout={XRHomeLayout} path="/creators" component={XRChallengesHome1} />
                              {/* <RouteWithLayout layout={XRInnerLayout} path="/influencer-community" component={XRInfluencerCommunity} />  */}

                              <RouteWithLayout layout={XRHomeLayout} path="/frequently-asked-questions" component={freqAskedQuestions} />
                              {/* <RouteWithLayout exact={true} layout={XRInnerLayout} path="/" component={XRChallenges} /> */}
                              <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge/:slug/:success?" component={XRJoinChallengeStart} />
                              <RouteWithLayout layout={XRInnerLayout} path="/:creator/join-Challenge/:slug/:success?" component={XRJoinChallengeStart} />
                              <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge-list/:slug/:success?" component={XRJoinChallengelistStart} />
                              {/* <RouteWithLayout layout={XRInnerLayout}  path="/join-Challenge-msg/:slug" component={XRJoinChallengeMsg} /> */}
                              <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge-create/:slug" component={XRJoinChallengeForm} />
                              <RouteWithLayout layout={XRInnerLayout} path="/join-Challenge-share/:slug" component={XRJoinChallengeShare} />
                              <RouteWithLayout layout={XRInnerLayout} path="/upgrade-plan" component={XRUpgradePlan} />
                              <RouteWithLayout layout={XRInnerLayout} path="/challenge/:slug" component={JoinChallenge} />
                              <RouteWithLayout layout={XRInnerLayout} path="/match/:slug/:matchid" component={XRChallengeMatch} />
                              <RouteWithLayout layout={XRInnerLayout} path="/participant/:slug/:matchid" component={XRParticipant} />

                              {/* <RouteWithLayout layout={XRInnerLayout} path="/congratulations" component={XRCongratulations} /> */}
                              <RouteWithLayout layout={XRProfileInnerLayout} path="/influencer-profile/:slug" component={XRProfile} />
                              <RouteWithLayout layout={XRInnerLayout} path="/user-profile/:slug" component={XRUserProfile} />
                              <RouteWithLayout layout={XRInnerLayout} path="/my-challenges" component={XRChallenges} />
                              <RouteWithLayout layout={XRInnerLayout} path="/previous-challenges" component={XRPreviousChallenges} />
                              <RouteWithLayout layout={XRInnerLayout} path="/influencer-edit-profile" component={XREditProfile} />
                              <RouteWithLayout layout={XRInnerLayout} path="/user-edit-profile" component={XRUserEditProfile} />
                              <RouteWithLayout layout={XRInnerLayout} path="/plans" component={XRPlans} />
                              <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/payment-confirmation/:id" component={XRPaymentConfirmation} />

                              <RouteWithLayout layout={XRInnerLayout} path="/faq" component={XRFaqs} />
                              <RouteWithLayout layout={XRInnerLayout} path="/privacy-policy" component={Privacypolicy} />
                              <RouteWithLayout layout={XRInnerLayout} path="/terms-and-conditions" component={XRTermsAndConditions} />
                              <RouteWithLayout layout={XRInnerLayout} path="/helpDesk" component={XRHelpDesk} />
                              <RouteWithLayout layout={XRInnerLayout} path="/support" component={XRSupport} />
                              {/* <RouteWithLayout layout={XRInnerLayout} path="/get-started" component={XRCreateinfluenecer} /> */}

                              {/* <RouteWithLayout layout={XRInnerLayout}  path="/create-Influencers" component={XRCreateinfluenecer} /> */}
                              {/* <RouteWithLayout layout={XRInnerLayout} path="/cookiePolicy" component={XRCookiePolicy} /> */}
                              <RouteWithLayout layout={XRInnerLayout} path="/contact" component={XRContact} /> 
                              <RouteWithLayout layout={XRInnerLayout} path="/contact-us" component={XRContactus} />
                              {/* <RouteWithLayout layout={XRInnerLayout} path="/privacyPolicy" component={XRPrivacyPolicy} /> */}
                              <RouteWithLayout layout={XRInnerLayout} path="/for-creators" component={XRAbout_Us} />
                              <RouteWithLayout layout={XRInnerLayout} path="/forums" component={XRForums} />
                              <RouteWithLayout layout={XRInnerLayout} path="/paypal" component={XRPayPal} />
                              {/* <RouteWithLayout layout={XRInnerLayout} path="/create-challenge" component={XRCreateChallenge} /> */}
                              {/* <RouteWithLayout layout={XRInnerLayout} path="/coinpayment" component={XRCoinPayment} /> */}
                              <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/checkout/:id" component={XRCheckout} />
                              <RouteWithLayout layout={XRInnerLayout} path="/checkoutback/:id" component={XRcheckoutbackup} />
                              <RouteWithLayout layout={XRInnerLayout} path="/checkout_test/:id" component={XRCheckout_test} />
                              <RouteWithLayout layout={XRInnerLayout} path="/signup" component={XRRegister} />
                              <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/role-selection" component={XRRoleselection} />
                              <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/wallet-login" component={XRWalletLogin} />
                              <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/my-wallet" component={WalletPage} />
                              <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/personal-hub/:id" component={XRPersonalHub} />
                              <RouteWithLayout layout={XRInnerLayoutWIthoutFooter} path="/wallet-authentication" component={XRAuthentication} />
                              <RouteWithLayout layout={XRInnerLayout} path="/login/:id?/:slug?/:slug2?" component={XRLogin} />
                              <RouteWithLayout layout={XRInnerLayout} path="/XR-In-Register/:email?" component={XRInfluenecerRegister} />
                              <RouteWithLayout layout={XRInnerLayout} path="/XRSignupForm" component={XRSignupForm} />
                              <RouteWithLayout layout={XRInnerLayout} path="/register-challenge/:slug" component={RegisterChallenge} />
                              <RouteWithLayout layout={XRInnerLayout} path="/XRRegistering" component={XRRegistering} />
                              <RouteWithLayout layout={XRInnerLayout} path="/XRRegisteringPay" component={XRRegisteringPay} />
                              <RouteWithLayout layout={XRInnerLayout} path="/XRFreeParticipant" component={XRFreeParticipant} />
                              {/* <RouteWithLayout layout={XRInnerLayout} path="/XRComments" component={XRComments} /> */}
                              <RouteWithLayout layout={XRInnerLayout} path="/XRPaidEntryParticipant" component={XRPaidEntryParticipant} />
                              <RouteWithLayout layout={XRInnerLayout} path="/XRSubmitVideo" component={XRSubmitVideo} />
                              <RouteWithLayout layout={XRInnerLayout} path="/edit-challenge" component={EditChallenge} />
                              <RouteWithLayout layout={XRInnerLayout} path="/XRInfluencerPreview" component={XRInfluencerPreview} />
                              <RouteWithLayout layout={XRInnerLayout} path="/XRBracketHostPreview" component={XRBracketHostPreview} />
                              <RouteWithLayout layout={XRInnerLayout} path="/start-challenge" component={XRStartChallengenew2} />
                              <RouteWithLayout layout={XRInnerLayout} path="/start-challenge2" component={XRStartChallengenew2} />
                              <RouteWithLayout layout={XRInnerLayout} path="/change-password/:id" component={ChangePassword} />
                              <RouteWithLayout layout={XRInnerLayout} path="/forgot-password" component={ForgotPassword} />
                              <RouteWithLayout layout={XRInnerLayout} path="/for-creators" component={XRGoPro} />
                              {/* <RouteWithLayout layout={XRInnerLayout} path="/creators-tips" component={XRCommunityTerms} /> */}
                              <RouteWithLayout layout={XRInnerLayout} path="/how-to-page" component={XRHowTo} />
                              <RouteWithLayout layout={AdminInnerLayout} path="/admin-support" component={AdminSupport} />
                              <RouteWithLayout layout={AdminInnerLayout} path="/admin-support-details" component={AdminSupportDetails} />
                              <RouteWithLayout layout={AdminInnerLayout} path="/admin-wallet-access" component={AdminWalletAccess} />
                              <RouteWithLayout layout={AdminInnerLayout} path="/admin-customer-support-help" component={AdminCustomerSupportHelp} />

                              <RouteWithLayout layout={XRInnerLayout} path="/:slug/submission/:id" component={XRSinglepost} />
                              <RouteWithLayout layout={XRProfileInnerLayout} path="/:slug" component={XRProfile} />
                              <RouteWithLayout layout={XRInnerLayout} path='*' component={My404Component} />

                            </Switch>
                            :
                            ''
            }
          </ScrollToTop>
        </Suspense>
          {/* </AuthContextProvider> */}
        </Router>
      </HttpsRedirect>
    );
  }
}

export default App;
