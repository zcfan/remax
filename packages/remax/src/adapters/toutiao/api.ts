// TODO promise 化补充完整
import promisify, { optionalPromisify } from '../../utils/promisify';

export const getAppStub = getApp;

export const getSystemInfoSync = tt.getSystemInfoSync;
export const getSystemInfo = optionalPromisify(tt.getSystemInfo);
export const getUpdateManager = tt.getUpdateManager;
export const getLaunchOptionsSync = tt.getLaunchOptionsSync;
export const exitMiniProgram = tt.exitMiniProgram;
export const switchTab = promisify(tt.switchTab);
export const reLaunch = promisify(tt.reLaunch);
export const redirectTo = promisify(tt.redirectTo);
export const navigateTo = promisify(tt.navigateTo);
export const navigateBack = promisify(tt.navigateBack);
export const showToast = promisify(tt.showToast);
export const showModal = promisify(tt.showModal);
export const showLoading = promisify(tt.showLoading);
export const showActionSheet = promisify(tt.showActionSheet);
export const hideToast = promisify(tt.hideToast);
export const hideLoading = promisify(tt.hideLoading);
export const setNavigationBarTitle = tt.setNavigationBarTitle;
export const stopPullDownRefresh = tt.stopPullDownRefresh;
export const startPullDownRefresh = tt.startPullDownRefresh;
export const pageScrollTo = promisify(tt.pageScrollTo);
export const createAnimation = tt.createAnimation;
export const request = promisify(tt.request);
export const downloadFile = promisify(tt.downloadFile);
export const uploadFile = promisify(tt.uploadFile);
export const connectSocket = tt.connectSocket;
export const setStorageSync = tt.setStorageSync;
export const setStorage = promisify(tt.setStorage);
export const removeStorageSync = tt.removeStorageSync;
export const removeStorage = promisify(tt.removeStorage);
export const getStorageSync = tt.getStorageSync;
export const getStorageInfoSync = tt.getStorageInfoSync;
export const getStorageInfo = optionalPromisify(tt.getStorageInfo);
export const getStorage = promisify(tt.getStorage);
export const clearStorageSync = tt.clearStorageSync;
export const clearStorage = optionalPromisify(tt.clearStorage);
export const saveImageToPhotosAlbum = promisify(tt.saveImageToPhotosAlbum);
export const previewImage = promisify(tt.previewImage);
export const getImageInfo = promisify(tt.getImageInfo);
export const chooseImage = promisify(tt.chooseImage);
export const saveVideoToPhotosAlbum = promisify(tt.saveVideoToPhotosAlbum);
export const createVideoContext = tt.createVideoContext;
export const chooseVideo = promisify(tt.chooseVideo);
export const openLocation = optionalPromisify(tt.openLocation);
export const getLocation = promisify(tt.getLocation);
export const showShareMenu = optionalPromisify(tt.showShareMenu);
export const hideShareMenu = optionalPromisify(tt.hideShareMenu);
export const createCanvasContext = tt.createCanvasContext;
export const saveFile = promisify(tt.saveFile);
export const removeSavedFile = promisify(tt.removeSavedFile);
export const openDocument = promisify(tt.openDocument);
export const getSavedFileList = tt.getSavedFileList;
export const getFileSystemManager = tt.getFileSystemManager;
export const getFileInfo = tt.getFileInfo;
export const login = promisify(tt.login);
export const checkSession = tt.checkSession;
export const navigateToMiniProgram = tt.navigateToMiniProgram;
export const navigateBackMiniProgram = promisify(tt.navigateBackMiniProgram);
export const getUserInfo = promisify(tt.getUserInfo);
export const reportAnalytics = tt.reportAnalytics;
export const requestPayment = promisify(tt.requestPayment);
export const authorize = tt.authorize;
export const openSetting = tt.openSetting;
export const getSetting = tt.getSetting;
export const chooseAddress = optionalPromisify(tt.chooseAddress);
export const setClipboardData = promisify(tt.setClipboardData);
export const getClipboardData = tt.getClipboardData;
export const onNetworkStatusChange = tt.onNetworkStatusChange;
export const getNetworkType = optionalPromisify(tt.getNetworkType);
export const makePhoneCall = promisify(tt.makePhoneCall);
export const stopAccelerometer = optionalPromisify(tt.stopAccelerometer);
export const startAccelerometer = optionalPromisify(tt.startAccelerometer);
export const onAccelerometerChange = tt.onAccelerometerChange;
export const stopCompass = optionalPromisify(tt.stopCompass);
export const startCompass = optionalPromisify(tt.startCompass);
export const onCompassChange = tt.onCompassChange;
export const scanCode = optionalPromisify(tt.scanCode);
export const vibrateShort = optionalPromisify(tt.vibrateShort);
export const vibrateLong = optionalPromisify(tt.vibrateLong);
export const getExtConfigSync = tt.getExtConfigSync;
export const getExtConfig = optionalPromisify(tt.getExtConfig);
export const createSelectorQuery = tt.createSelectorQuery;
export const createIntersectionObserver = tt.createIntersectionObserver;
export const createRewardedVideoAd = tt.createRewardedVideoAd;
export const getConnectedWifi = optionalPromisify(tt.getConnectedWifi);
export const setKeepScreenOn = optionalPromisify(tt.setKeepScreenOn);
export const getMenuButtonLayout = tt.getMenuButtonLayout;